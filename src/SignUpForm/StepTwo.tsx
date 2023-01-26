import React, { useEffect, ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IFormProps, IstepOneProps } from './types'
import ForwardIcon from '@mui/icons-material/Forward'
import CancelIcon from '@mui/icons-material/Cancel'

import {
  FormContainer,
  HeadingTitle,
  CardWrapper,
  SubCaption,
  Form,
  Fields,
  Input,
  ErrorText,
  PreIcon,
  CardIcon,
  Label,
  AgreeBox,
} from './styles'
import { CardImage, SPAIcon } from './Icons'

export const StepTwo = ({
  headingTitle,
  subCaption = '',
  steps,
  setCurrentStep,
  currentStep,
  setData,
  data,
  onSubmit,
}: IstepOneProps) => {
  const [subCaptionTexts, setSubCaptionTexts] = useState<string[]>([])
  const [cardNumber, setCardNumber] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>()

  useEffect(() => {
    const arr = formartSubcaption(subCaption)
    setSubCaptionTexts(arr)
  }, [subCaption])

  const formartSubcaption = (subCaption: string): string[] => {
    if (!subCaption) return []
    return subCaption.split(':')
  }

  const onChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, '')
    const newResult = result
      .replace(/[^0-9]/g, '')
      .split('')
      .reduce((str, l, i) => {
        return str + (!i || i % 4 ? '' : ' ') + l
      }, '')
    setCardNumber(newResult)
  }

  const formSubmit = (formData: IFormProps) => {
    const newData = {
      ...data,
      cardNumber: formData.cardNumber?.split(' ').join(''),
    }

    if (steps === currentStep) {
      if (onSubmit) onSubmit(newData)
    } else {
      if (setCurrentStep) setCurrentStep(currentStep + 1)
      if (setData) setData(newData)
    }
  }

  return (
    <FormContainer>
      <HeadingTitle>{headingTitle || 'Enter Your Payment Details'}</HeadingTitle>
      {subCaptionTexts.map((text, i) => {
        return (
          <SubCaption key={i}>
            {text}
            {i === 0 && ' : '}
          </SubCaption>
        )
      })}
      <CardWrapper>
        <CardImage />
      </CardWrapper>
      <Form onSubmit={handleSubmit((data) => formSubmit(data))} id='stepTwoForm'>
        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input borderRight value={data?.firstName} disabled />
          <Input value={data?.lastName} disabled />
        </Fields>

        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input
            placeholder='0000 0000 0000 0000 0000 00'
            value={cardNumber}
            autoComplete='off'
            {...register('cardNumber', {
              required: true,
              onChange: (e) => onChangeCardNumber(e),
            })}
            fullWidth
          />
          <CardIcon>
            <SPAIcon />
          </CardIcon>
        </Fields>
        {errors.cardNumber && (
          <>
            <ErrorText>
              <CancelIcon />
              &nbsp; Please enter valid card number.
            </ErrorText>
          </>
        )}
        <AgreeBox>
          <Input type='checkbox' id='agrre-check' name='vehicle2' value='Car' required />
          <Label htmlFor='vehicle2'> I accept the general terms and conditions </Label>
        </AgreeBox>
      </Form>
    </FormContainer>
  )
}
