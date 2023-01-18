import React, { ReactElement } from 'react'

type Props = {
  firstColor?: string
  secondColor?: string
  headingTitle?: string
  subCaption?: string
  steps?: number
  stepTabs?: ReactElement
}
const SF_Form = ({ firstColor, secondColor, headingTitle, subCaption, steps }: Props) => {
  return (
    <div>
      <p>firstColor: {firstColor}</p>
      <p>secondColor: {secondColor}</p>
      <p>headingTitle: {headingTitle}</p>
      <p>subCaption: {subCaption}</p>
      <p>steps: {steps}</p>
    </div>
  )
}

export default SF_Form
