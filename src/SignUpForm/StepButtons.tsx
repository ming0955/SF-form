import React from 'react'
import ForwardIcon from '@mui/icons-material/Forward'
import { IstepOneProps } from './types'
import { BackButton, Badge, ButtonGroup, ButtonIconWrapper, StepButton, Text } from './styles'
import { BadgeIcon, LockIcon } from './Icons'

export const StepButtons = ({ setCurrentStep, currentStep }: IstepOneProps) => {
  const handdleBack = () => {
    if (setCurrentStep) setCurrentStep(currentStep - 1)
  }

  return (
    <ButtonGroup>
      {currentStep === 2 && <BackButton onClick={handdleBack}>Back</BackButton>}
      <StepButton type='submit' form={currentStep === 1 ? 'stepOneForm' : 'stepTwoForm'}>
        <Badge>
          <BadgeIcon />
        </Badge>
        <Text>{currentStep === 1 ? 'Continue' : 'Make a payment'}</Text>
        <ButtonIconWrapper>{currentStep === 1 ? <ForwardIcon /> : <LockIcon />}</ButtonIconWrapper>
      </StepButton>
    </ButtonGroup>
  )
}