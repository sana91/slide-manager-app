import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

interface SlideInfo {
  slideCode: string
  title: string
}

export default defineEventHandler(async (event) => {
  try {
    const slideDir = join(process.cwd(), 'pages', 'slide')
    const directories = await readdir(slideDir, { withFileTypes: true })
    
    const slideInfos: SlideInfo[] = []
    
    for (const dirent of directories) {
      if (dirent.isDirectory()) {
        const slideCode = dirent.name
        const firstPagePath = join(slideDir, slideCode, '1.vue')
        
        try {
          const content = await readFile(firstPagePath, 'utf-8')
          // page-title="..." を抽出
          const titleMatch = content.match(/page-title="([^"]*)"/)
          const title = titleMatch ? titleMatch[1] : slideCode
          
          slideInfos.push({
            slideCode,
            title: title || slideCode
          })
        } catch (error) {
          // ファイルが読めない場合はスライドコードをタイトルとして使用
          slideInfos.push({
            slideCode,
            title: slideCode
          })
        }
      }
    }
    
    // スライドコードでソート
    slideInfos.sort((a, b) => a.slideCode.localeCompare(b.slideCode))
    
    return slideInfos
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to read slide directories'
    })
  }
})

