export interface IstepOneProps {
  headingTitle?: string
  subCaption?: string
  steps?: number
  setCurrentStep?: (step: number) => void
  currentStep: number
  setData?: (data: IFormProps) => void
  data?: IFormProps
  onSubmit?: (data: IFormProps) => void
}

export interface IStep {
  active?: boolean
  stepNum?: number
  firstColor?: string
  secondColor?: string
}

export interface IinputStyleProps {
  borderRight?: boolean
  fullWidth?: boolean
}

export interface ErrorTextStyleProps {
  isError?: boolean | undefined
  fullWidth?: boolean
}

export interface IFormProps {
  firstName?: string
  lastName?: string
  address?: string | undefined
  zipCode?: string
  city?: string
  phoneNumber?: string
  email?: string
  cardNumber?: string
}
