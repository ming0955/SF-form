import React, { ReactElement } from 'react'
import { SignUpContainer } from './styles'

type Props = {
  firstColor?: string
  secondColor?: string
  headingTitle?: string
  subCaption?: string
  steps?: number
  stepTabs?: ReactElement
}

const SignUpForm = ({ firstColor, secondColor, headingTitle, subCaption, steps, stepTabs }: Props) => {
  return (
    <SignUpContainer>
      <p>firstColor: {firstColor}</p>
      <p>secondColor: {secondColor}</p>
      <p>headingTitle: {headingTitle}</p>
      <p>subCaption: {subCaption}</p>
      <p>steps: {steps}</p>
      <span>component: {stepTabs}</span>
    </SignUpContainer>
  )
}

export default SignUpForm
