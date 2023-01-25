import React from 'react'
import { SignUpContainer } from './styles'
import { Steps } from './Steps'
import { StepOne } from './StepOne'
import { IFormProps } from './types'

interface Props {
  firstColor?: string
  secondColor?: string
  headingTitle?: string
  subCaption?: string
  step?: number
  onSubmit: (data: IFormProps) => void
}

const SignUpForm = ({ firstColor, secondColor, headingTitle, subCaption, step, onSubmit }: Props) => {
  return (
    <SignUpContainer>
      <Steps step={step || 1} firstColor={firstColor || '#88B431'} secondColor={secondColor || '#D9D9D9'} />
      {step !== 2 && <StepOne headingTitle={headingTitle || ''} subCaption={subCaption || ''} onSubmit={onSubmit} />}
    </SignUpContainer>
  )
}

export default SignUpForm
