import { readdir, stat } from 'fs/promises'
import { join } from 'path'

interface SlideStats {
  totalSlides: number
  totalPages: number
  lastUpdate: string | null
}

export default defineEventHandler(async (event) => {
  try {
    const slideDir = join(process.cwd(), 'pages', 'slide')
    const directories = await readdir(slideDir, { withFileTypes: true })
    
    let totalSlides = 0
    let totalPages = 0
    let lastUpdate: Date | null = null
    
    for (const dirent of directories) {
      if (dirent.isDirectory()) {
        totalSlides++
        
        const slideCodeDir = join(slideDir, dirent.name)
        const files = await readdir(slideCodeDir, { withFileTypes: true })
        
        // .vueファイルをカウント
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
    
    const stats: SlideStats = {
      totalSlides,
      totalPages,
      lastUpdate: lastUpdate ? lastUpdate.toISOString() : null
    }
    
    return stats
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to read slide statistics'
    })
  }
})

