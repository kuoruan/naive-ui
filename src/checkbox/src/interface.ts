export type OnUpdateChecked = (
  value: string & number & boolean,
  e: MouseEvent | KeyboardEvent
) => void

export type OnUpdateValue = (
  value: Array<string | number>,
  meta: {
    actionType: 'check' | 'uncheck'
    value: string | number
  }
) => void

export type OnUpdateCheckedImpl = (
  value: string | number | boolean,
  e: MouseEvent | KeyboardEvent
) => void

export interface CheckboxInst {
  focus: () => void
  blur: () => void
}

export type CheckboxSize = 'small' | 'medium' | 'large'
