import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { SignUpForm } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <SignUpForm
        onSubmit={function (): void {
          throw new Error('Function not implemented.')
        }}
        headingTitle={[]}
        subCaption={[]}
      />,
    )
  })
})
