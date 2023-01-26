import React from 'react'
import { StepContainer, SteperLine } from './styles'

interface IStepProps {
  currentStep: number
  firstColor: string
  secondColor: string
}

export const Steps = ({ currentStep, firstColor, secondColor }: IStepProps) => {
  return (
    <StepContainer>
      <SteperLine active={currentStep >= 1} stepNum={1} firstColor={firstColor} secondColor={secondColor} />
      <SteperLine active={currentStep >= 2} stepNum={2} firstColor={firstColor} secondColor={secondColor} />
    </StepContainer>
  )
}
