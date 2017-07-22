import {CSSProperties} from 'glamorous'

export const flex = (
  flex: number | boolean | {grow?: number; shrink?: number},
): CSSProperties => ({
  flexGrow: flex === true
    ? 1
    : flex === false
      ? undefined
      : flex === undefined
        ? undefined
        : typeof flex === 'number' ? flex : flex.grow,
  flexShrink: flex === true
    ? undefined
    : flex === false
      ? undefined
      : flex === undefined
        ? undefined
        : typeof flex === 'number' ? flex : flex.grow,
})

export const column = ({
  horizontal,
  vertical,
  self,
  reverse,
  flex: flex_,
}: {
  horizontal?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  vertical?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  self?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  reverse?: boolean
  flex?: number | boolean | {grow?: number; shrink?: number}
} = {}): CSSProperties => ({
  display: 'flex',
  flexDirection: reverse ? 'column' : 'column-reverse',
  alignItems: horizontal,
  justifyContent: vertical,
  self,
  ...(flex_ === undefined ? undefined : flex(flex_)) as CSSProperties,
})

export const row = ({
  horizontal,
  vertical,
  self,
  reverse,
  flex: flex_,
}: {
  horizontal?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  vertical?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  self?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  reverse?: boolean
  flex?: number | boolean | {grow?: number; shrink?: number}
} = {}): CSSProperties => ({
  display: 'flex',
  flexDirection: reverse ? 'row' : 'row-reverse',
  alignItems: vertical,
  justifyContent: horizontal,
  self,
  ...(flex_ === undefined ? undefined : flex(flex_)) as CSSProperties,
})
