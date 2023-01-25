import React from 'react'
import { StepContainer, SteperLine } from './styles'

interface IStepProps {
  step: number
  firstColor: string
  secondColor: string
}

export const Steps = ({ step, firstColor, secondColor }: IStepProps) => {
  return (
    <StepContainer>
      <SteperLine active={step === 1} stepNum={1} firstColor={firstColor} secondColor={secondColor} />
      <SteperLine active={step === 2} stepNum={2} firstColor={firstColor} secondColor={secondColor} />
    </StepContainer>
  )
}
