import type { VNodeChild } from 'vue'

export type OnUpdateValue = (value: string & null) => void
export type OnConfirm = OnUpdateValue
export type OnClear = () => void
export type OnUpdateValueImpl = (value: string | null) => void
export type OnConfirmImpl = OnUpdateValueImpl

export type RenderLabel = (value: string | null) => VNodeChild

export type ColorPickerSize = 'small' | 'medium' | 'large'

export type ColorPickerInternalAction = 'redo' | 'undo'
