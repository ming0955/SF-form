import React from 'react'
import { StepContainer, SteperLine } from './styles'
interface IStepProps {
  currentStep: number
  firstColor: string
  secondColor: string
  steps?: number
}

export const Steps = ({ currentStep, firstColor, secondColor, steps }: IStepProps) => {
  return (
    <StepContainer>
      {[...Array(steps).keys()].map((i) => (
        <SteperLine
          key={i}
          active={currentStep === i + 1}
          stepNum={i + 1}
          firstColor={firstColor}
          secondColor={secondColor}
        />
      ))}
    </StepContainer>
  )
}
