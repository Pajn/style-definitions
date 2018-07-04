export const flex = (
  flex: number | boolean | {grow?: number; shrink?: number},
) => ({
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
  alignSelf,
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
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  reverse?: boolean
  flex?: number | boolean | {grow?: number; shrink?: number}
} = {}) => ({
  display: 'flex' as 'flex',
  flexDirection: reverse ? 'column-reverse' as 'column-reverse' : 'column' as 'column',
  alignItems: horizontal,
  justifyContent: vertical,
  alignSelf,
  ...(flex_ === undefined ? undefined : flex(flex_)),
})

export const row = ({
  horizontal,
  vertical,
  alignSelf,
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
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  reverse?: boolean
  flex?: number | boolean | {grow?: number; shrink?: number}
} = {}) => ({
  display: 'flex' as 'flex',
  flexDirection: reverse ? 'row-reverse' as 'row-reverse' : 'row' as 'row',
  alignItems: vertical,
  justifyContent: horizontal,
  alignSelf,
  ...(flex_ === undefined ? undefined : flex(flex_)),
})

export const fill = ({padding = 0} = {}) => ({
  position: 'absolute' as 'absolute',

  top: padding,
  left: padding,
  right: padding,
  bottom: padding,
})

export const center = row({horizontal: 'center', vertical: 'center'})
export const circle = (radius: number) => ({width: radius, height: radius, borderRadius: '50%'})
