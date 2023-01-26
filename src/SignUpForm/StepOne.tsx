import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import CancelIcon from '@mui/icons-material/Cancel'
import ForwardIcon from '@mui/icons-material/Forward'
import { IstepOneProps, IFormProps } from './types'
import { FormContainer, HeadingTitle, SubCaption, Form, Fields, Input, ErrorText, PreIcon, ErrorBox } from './styles'

export const StepOne = ({
  headingTitle,
  subCaption = '',
  steps,
  setCurrentStep,
  currentStep,
  data,
  setData,
  onSubmit,
}: IstepOneProps) => {
  const [subCaptionTexts, setSubCaptionTexts] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormProps>({
    defaultValues: {
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      address: data?.address || '',
      zipCode: data?.zipCode || '',
      city: data?.city || '',
      phoneNumber: data?.phoneNumber || '',
      email: data?.email || '',
    },
  })

  useEffect(() => {
    const arr = formartSubcaption(subCaption)
    setSubCaptionTexts(arr)
  }, [subCaption])

  const formartSubcaption = (subCaption: string): string[] => {
    if (!subCaption) return []
    return subCaption.split(':')
  }

  const formSubmit = (formData: IFormProps) => {
    if (steps === currentStep) {
      if (onSubmit) onSubmit(formData)
    } else {
      if (setCurrentStep) setCurrentStep(currentStep + 1)
      if (setData) setData(formData)
    }
  }

  return (
    <FormContainer>
      <HeadingTitle>{headingTitle || 'Enter Your Information'}</HeadingTitle>
      {subCaptionTexts.map((text, i) => {
        return (
          <SubCaption key={i}>
            {text}
            {i === 0 && ' : '}
          </SubCaption>
        )
      })}
      <Form onSubmit={handleSubmit((data) => formSubmit(data))} id='stepOneForm'>
        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input
            placeholder='First Name'
            autoComplete='off'
            {...register('firstName', { required: true })}
            borderRight
          />
          <Input placeholder='Last Name' autoComplete='off' {...register('lastName', { required: true })} />
        </Fields>
        {(errors.firstName || errors.lastName) && (
          <ErrorBox>
            <ErrorText>
              {errors.firstName && (
                <span>
                  <CancelIcon />
                  &nbsp;Please enter your Firstname.
                </span>
              )}
            </ErrorText>
            <ErrorText>
              {errors.lastName && (
                <span>
                  <CancelIcon />
                  &nbsp;Please enter your Lastname.
                </span>
              )}
            </ErrorText>
          </ErrorBox>
        )}

        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input placeholder='Addresses' autoComplete='off' {...register('address', { required: true })} fullWidth />
        </Fields>
        {errors.address && (
          <ErrorBox>
            <ErrorText fullWidth>
              <span>
                <CancelIcon />
                &nbsp; Please enter your Addresses.
              </span>
            </ErrorText>
          </ErrorBox>
        )}

        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input placeholder='Zipcode' autoComplete='off' {...register('zipCode', { required: true })} borderRight />
          <Input placeholder='City' autoComplete='off' {...register('city', { required: true })} />
        </Fields>
        {(errors.zipCode || errors.city) && (
          <ErrorBox>
            <ErrorText>
              {errors.zipCode && (
                <span>
                  <CancelIcon />
                  &nbsp;Please enter valid zipcode.
                </span>
              )}
            </ErrorText>
            <ErrorText>
              {errors.city && (
                <span>
                  <CancelIcon />
                  &nbsp;Please enter your city .
                </span>
              )}
            </ErrorText>
          </ErrorBox>
        )}

        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Controller
            name='phoneNumber'
            control={control}
            rules={{
              required: 'Enter your phone number.',
              validate: (value) => isValidPhoneNumber(value ? value : '') || 'Incorrect phone number.',
            }}
            render={({ field: { value, onChange } }) => (
              <PhoneInput defaultCountry='US' placeholder='Phone Number' value={value} onChange={onChange} />
            )}
          />
        </Fields>
        {errors.phoneNumber && (
          <ErrorBox>
            <ErrorText fullWidth>
              <span>
                <CancelIcon />
                &nbsp;{errors.phoneNumber?.message}
              </span>
            </ErrorText>
          </ErrorBox>
        )}

        <Fields>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input
            placeholder='Email'
            autoComplete='off'
            {...register('email', {
              required: 'Please enter your Email address.',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Incorrect Email address.',
              },
            })}
            fullWidth
          />
        </Fields>
        {errors.email && (
          <ErrorBox>
            <ErrorText fullWidth>
              <span>
                <CancelIcon />
                &nbsp;{errors.email?.message}
              </span>
            </ErrorText>
          </ErrorBox>
        )}
      </Form>
    </FormContainer>
  )
}
