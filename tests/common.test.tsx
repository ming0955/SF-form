import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { SF_Form } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<SF_Form />)
  })
})
