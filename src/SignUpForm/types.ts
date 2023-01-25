export interface IstepOneProps {
  headingTitle?: string
  subCaption?: string
  onSubmit: (data: IFormProps) => void
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

export interface IinFieldsStyleProps {
  invalid?: boolean
  fullWidth?: boolean
}

export interface IFormProps {
  firstName: string
  lastName: string
  addresses?: string | undefined
  zipCode: number
  city: string
  phoneNumber: string
  email: string
}
