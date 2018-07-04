import React from 'react'
import {column, row} from './layout'

describe('layout', () => {
  describe('row', () => {
    it('should order normally by default', () => {
      expect(row().flexDirection).toBe('row')
    })

    it('should order reversed if specified', () => {
      expect(row({reverse: true}).flexDirection).toBe('row-reverse')
    })

    it('should be assigable to the style attribute', () => {
      expect(<div style={{...row()}} />)
    })
  })

  describe('column', () => {
    it('should order normally by default', () => {
      expect(column().flexDirection).toBe('column')
    })

    it('should order reversed if specified', () => {
      expect(column({reverse: true}).flexDirection).toBe('column-reverse')
    })

    it('should be assigable to the style attribute', () => {
      expect(<div style={{...column()}} />)
    })
  })
})
