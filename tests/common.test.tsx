/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { SignUpForm } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <SignUpForm
        headingTitle={[]}
        subCaption={[]}
        steps={1}
        loading={false}
        currentStep={0}
        onSubmit={function (): Promise<void> {
          throw new Error('Function not implemented.')
        }}
      />,
    )
  })
})
