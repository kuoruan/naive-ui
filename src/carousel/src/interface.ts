import type { CarouselContextValue } from './CarouselContext'

export interface CarouselInst {
  getCurrentIndex: () => number
  to: (index: number) => void
  prev: () => void
  next: () => void
}

export interface ArrowScopedSlotProps
  extends Pick<
    CarouselContextValue,
    'to' | 'prev' | 'next' | 'isPrevDisabled' | 'isNextDisabled'
  > {
  total: number
  currentIndex: number
}

export interface DotScopedSlotProps extends Pick<CarouselContextValue, 'to'> {
  total: number
  currentIndex: number
}

export interface Size {
  width: number
  height: number
}

export interface CarouselArrowSlotProps {
  total: number
  currentIndex: number
  to: (index: number) => void
  prev: () => void
  next: () => void
}

export interface CarouselDotSlotProps {
  total: number
  currentIndex: number
  to: (index: number) => void
}

export type CarouselDotType = 'dot' | 'line' | 'never'

export type CarouselSlidesPerView = number | 'auto'

export type CarouselDirection = 'horizontal' | 'vertical'

export type CarouselDotPlacement = 'top' | 'bottom' | 'left' | 'right'

export type CarouselEffect = 'slide' | 'fade' | 'card' | 'custom'

export type CarouselTrigger = 'click' | 'hover'
