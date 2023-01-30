/* eslint-disable react/prop-types */
import React, { useEffect, ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IFormProps, IstepOneProps } from './types'
import ForwardIcon from '@mui/icons-material/Forward'
import CancelIcon from '@mui/icons-material/Cancel'
import { errorMessages } from './constants.enum'
import { CardImage, SPAIcon } from './Icons'
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
  FieldBox,
  InputWrapper,
  MiddleBorder,
  UserName,
  FirstName,
  LastName,
} from './styles'

export const StepTwo = ({
  headingTitle,
  subCaption = '',
  steps,
  setCurrentStep,
  currentStep,
  setData,
  data,
  onSubmit,
  validedFields,
  setValidedFields,
}: IstepOneProps) => {
  const [subCaptionTexts, setSubCaptionTexts] = useState<string[]>([])
  const [cardNumber, setCardNumber] = useState('')

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, dirtyFields },
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

  const ErrorBoxs = ({ message }: { message: string }) => {
    return (
      <ErrorText>
        <CancelIcon />
        &nbsp;{message}
      </ErrorText>
    )
  }

  type keyType = 'cardNumber'

  const checkValid = (key: keyType) => {
    const val = getValues(key)
    setValidedFields({
      ...validedFields,
      [key]: val && val !== '' ? true : false,
    })
    if (!val) {
      setError(key, { message: errorMessages[key] })
    }
  }

  const UserNameBox = () => {
    return (
      <UserName>
        <FirstName>{data?.firstName}</FirstName>
        <LastName>{data?.lastName}</LastName>
      </UserName>
    )
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
        {data && data?.firstName && <UserNameBox />}
      </CardWrapper>
      <Form onSubmit={handleSubmit((data) => formSubmit(data))} id='stepTwoForm'>
        <Fields>
          <FieldBox>
            <InputWrapper borderRemove={'right'} isDirty isValid>
              <PreIcon>
                <ForwardIcon />
              </PreIcon>
              <Input value={data?.firstName} disabled placeholder='First Name' />
            </InputWrapper>
          </FieldBox>
          <FieldBox>
            <InputWrapper borderRemove={'left'} isDirty isValid>
              <MiddleBorder />
              <Input value={data?.lastName} disabled placeholder='Last Name' />
            </InputWrapper>
          </FieldBox>
        </Fields>

        <Fields>
          <FieldBox>
            <InputWrapper
              borderRemove='none'
              isDirty={dirtyFields.cardNumber && !errors.cardNumber}
              isValid={validedFields.cardNumber}
            >
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
                onBlur={(e) => checkValid(e.target.name as keyType)}
              />
              <CardIcon>
                <SPAIcon />
              </CardIcon>
            </InputWrapper>
            {errors.cardNumber && <ErrorBoxs message={errors.cardNumber.message || errorMessages.cardNumber} />}
          </FieldBox>
        </Fields>

        <AgreeBox>
          <Input type='checkbox' id='agrre-check' name='agrre-check' required />
          <Label htmlFor='agrre-check'> I accept the general terms and conditions </Label>
        </AgreeBox>
      </Form>
    </FormContainer>
  )
}
