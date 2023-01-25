import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import CancelIcon from '@mui/icons-material/Cancel'
import ForwardIcon from '@mui/icons-material/Forward'
import { IstepOneProps, IFormProps } from './types'
import { FormContainer, HeadingTitle, SubCaption, Form, Fields, Input, ErrorText, PreIcon } from './styles'

export const StepOne = ({ headingTitle, subCaption = '', onSubmit }: IstepOneProps) => {
  const [subCaptionTexts, setSubCaptionTexts] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormProps>()

  useEffect(() => {
    const arr = formartSubcaption(subCaption)
    setSubCaptionTexts(arr)
  }, [subCaption])

  const formartSubcaption = (subCaption: string): string[] => {
    if (!subCaption) return []
    return subCaption.split(':')
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
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Fields invalid={!!errors.firstName}>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input
            placeholder='First Name'
            autoComplete='off'
            {...register('firstName', { required: true })}
            borderRight
          />
          <Input placeholder='Last Name' autoComplete='off' {...register('lastName')} />
        </Fields>
        {errors.firstName && (
          <>
            <ErrorText>
              <CancelIcon />
              &nbsp;Please enter your Firstname.
            </ErrorText>
          </>
        )}

        <Fields invalid={!!errors.addresses} fullWidth>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input placeholder='Addresses' autoComplete='off' {...register('addresses', { required: true })} fullWidth />
        </Fields>
        {errors.addresses && (
          <>
            <ErrorText>
              <CancelIcon />
              &nbsp; Please enter your Addresses.
            </ErrorText>
          </>
        )}

        <Fields invalid={!!errors.zipCode}>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Input placeholder='Zipcode' autoComplete='off' {...register('zipCode', { required: true })} borderRight />
          <Input placeholder='City' autoComplete='off' {...register('city')} />
        </Fields>
        {errors.zipCode && (
          <>
            <ErrorText>
              <CancelIcon />
              &nbsp;Please enter valid ZipCode.
            </ErrorText>
          </>
        )}

        <Fields fullWidth>
          <PreIcon>
            <ForwardIcon />
          </PreIcon>
          <Controller
            name='phoneNumber'
            control={control}
            rules={{
              required: 'Enter your phone number.',
              validate: (value) => isValidPhoneNumber(value) || 'Incorrect phone number.',
            }}
            render={({ field: { value, onChange } }) => (
              <PhoneInput defaultCountry='US' placeholder='Phone Number' value={value} onChange={onChange} />
            )}
          />
        </Fields>
        {errors.phoneNumber && (
          <>
            <ErrorText>
              <CancelIcon />
              &nbsp;{errors.phoneNumber?.message}
            </ErrorText>
          </>
        )}

        <Fields invalid={!!errors.email} fullWidth>
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
          <>
            <ErrorText>
              <CancelIcon />
              &nbsp; {errors.email?.message}
            </ErrorText>
          </>
        )}

        <button type='submit' style={{ marginTop: '15px' }}>
          {' '}
          submit test
        </button>
      </Form>
    </FormContainer>
  )
}
