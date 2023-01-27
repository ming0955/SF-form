import React, { useState } from 'react'
import { SignUpContainer, TermsCondition } from './styles'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Steps } from './Steps'
import { StepOne } from './StepOne'
import { IFormProps } from './types'
import { StepTwo } from './StepTwo'
import { StepButtons } from './StepButtons'
import { SF_FormColor } from './color.enum'

interface Props {
  firstColor?: string
  secondColor?: string
  headingTitle: string[]
  subCaption: string[]
  steps?: number
  onSubmit: (data: IFormProps) => void
}

const SignUpForm = ({ firstColor, secondColor, headingTitle, subCaption, steps, onSubmit }: Props) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<IFormProps>({
    firstName: '',
    lastName: '',
    zipCode: '',
    city: '',
    phoneNumber: '',
    email: '',
  })

  return (
    <>
      <SignUpContainer>
        <Steps
          currentStep={currentStep}
          firstColor={firstColor || SF_FormColor.PRIMARY}
          secondColor={secondColor || SF_FormColor.SECONDARY}
        />

        {currentStep === 1 && (
          <StepOne
            headingTitle={headingTitle[0]}
            subCaption={subCaption[0]}
            steps={steps || 1}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            data={data}
            setData={setData}
            onSubmit={onSubmit}
          />
        )}

        {currentStep === 2 && (
          <StepTwo
            headingTitle={headingTitle[1]}
            subCaption={subCaption[1]}
            steps={steps}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            setData={setData}
            data={data}
            onSubmit={onSubmit}
          />
        )}

        <StepButtons setCurrentStep={setCurrentStep} currentStep={currentStep} />
        {currentStep === 2 && (
          <TermsCondition>
            We value your privacy. We will not see or rent your email address or phone number to third parties. All
            Users are protected by our Service Guarantee. Your information will be safe as we employ the finest security
            measures to protect our members. We value your privacy and will not sell or rent your private information to
            third parties.
          </TermsCondition>
        )}
      </SignUpContainer>
      <PhoneInput country={'us'} />
    </>
  )
}

export default SignUpForm
