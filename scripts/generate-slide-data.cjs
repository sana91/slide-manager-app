const { readdir, readFile, stat, mkdir, writeFile } = require('fs/promises')
const { join } = require('path')

async function generateSlideData() {
  try {
    const slideDir = join(process.cwd(), 'pages', 'slide')
    const publicApiDir = join(process.cwd(), 'public', 'api', 'slides')
    
    // public/api/slides ディレクトリを作成
    await mkdir(publicApiDir, { recursive: true })
    
    // スライド一覧を取得
    const directories = await readdir(slideDir, { withFileTypes: true })
    const slideInfos = []
    let totalSlides = 0
    let totalPages = 0
    let lastUpdate = null
    
    for (const dirent of directories) {
      if (dirent.isDirectory()) {
        totalSlides++
        const slideCode = dirent.name
        const firstPagePath = join(slideDir, slideCode, '1.vue')
        
        let title = slideCode
        try {
          const content = await readFile(firstPagePath, 'utf-8')
          const titleMatch = content.match(/page-title="([^"]*)"/)
          title = titleMatch ? titleMatch[1] : slideCode
        } catch (error) {
          // ファイルが読めない場合はスライドコードをタイトルとして使用
        }
        
        slideInfos.push({
          slideCode,
          title: title || slideCode
        })
        
        // ページ数をカウント
        const slideCodeDir = join(slideDir, slideCode)
        const files = await readdir(slideCodeDir, { withFileTypes: true })
        const vueFiles = files.filter(f => f.isFile() && f.name.endsWith('.vue'))
        totalPages += vueFiles.length
        
        // 各ファイルの更新日時をチェック
        for (const file of vueFiles) {
          const filePath = join(slideCodeDir, file.name)
          const stats = await stat(filePath)
          const mtime = stats.mtime
          
          if (!lastUpdate || mtime > lastUpdate) {
            lastUpdate = mtime
          }
        }
      }
    }
    
    // スライドコードでソート
    slideInfos.sort((a, b) => a.slideCode.localeCompare(b.slideCode))
    
    // スライド一覧JSONを生成
    const listData = slideInfos
    await writeFile(
      join(publicApiDir, 'list.json'),
      JSON.stringify(listData, null, 2),
      'utf-8'
    )
    console.log(`✅ Generated: public/api/slides/list.json (${listData.length} slides)`)
    
    // 統計情報JSONを生成
    const statsData = {
      totalSlides,
      totalPages,
      lastUpdate: lastUpdate ? lastUpdate.toISOString() : null
    }
    await writeFile(
      join(publicApiDir, 'stats.json'),
      JSON.stringify(statsData, null, 2),
      'utf-8'
    )
    console.log(`✅ Generated: public/api/slides/stats.json`)
    console.log(`   - Total slides: ${totalSlides}`)
    console.log(`   - Total pages: ${totalPages}`)
    console.log(`   - Last update: ${lastUpdate ? lastUpdate.toISOString() : 'N/A'}`)
    
  } catch (error) {
    console.error('❌ Error generating slide data:', error)
    process.exit(1)
  }
}

generateSlideData()

