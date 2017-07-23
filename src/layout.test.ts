import {column, row} from './layout'

describe('layout', () => {
  describe('row', () => {
    it('should order normally by default', () => {
      expect(row().flexDirection).toBe('row')
    })

    it('should order reversed if specified', () => {
      expect(row({reverse: true}).flexDirection).toBe('row-reverse')
    })
  })

  describe('column', () => {
    it('should order normally by default', () => {
      expect(column().flexDirection).toBe('column')
    })

    it('should order reversed if specified', () => {
      expect(column({reverse: true}).flexDirection).toBe('column-reverse')
    })
  })
})
