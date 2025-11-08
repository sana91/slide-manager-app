/**
 * provide/injectを使用したスライド状態の提供
 * アプリケーション全体でスライドの状態を共有
 */

const SlideContextKey = Symbol('SlideContext')

export const provideSlideContext = () => {
  const slideContext = useSlides()
  provide(SlideContextKey, slideContext)
  return slideContext
}

export const injectSlideContext = () => {
  const slideContext = inject(SlideContextKey)
  
  if (!slideContext) {
    throw new Error('useSlideContext must be used within a component that has called provideSlideContext')
  }
  
  return slideContext
}
