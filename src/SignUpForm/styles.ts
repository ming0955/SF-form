import styled, { css } from 'styled-components'
import { SF_FormColor } from './constants.enum'
import { IStep, IinputStyleProps, ErrorTextStyleProps, IinputWrapperStyleProps } from './types'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  padding: 1em 0;
  font-family: sans-serif;
`

export const StepContainer = styled.div`
  display: flex;
`

export const SteperLine = styled.div<IStep>`
  position: relative;
  width: 50%;
  height: 2px;
  background: ${(props) =>
    props.active ? props.firstColor || SF_FormColor.PRIMARY : props.secondColor || SF_FormColor.SECONDARY};
  &:after {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: ${(props) =>
      props.active ? props.firstColor || SF_FormColor.PRIMARY : props.secondColor || SF_FormColor.SECONDARY};
    right: ${(props) => (props.stepNum === 1 ? '67%' : 'unset')};
    left: ${(props) => (props.stepNum === 2 ? '67%' : 'unset')};
    position: absolute;
    top: -8px;
  }
  &:before {
    ${(props) =>
      props.stepNum === 1
        ? css`
            content: 'Step1';
          `
        : css`
            content: 'Step2';
          `}
    position: absolute;
    top: 16px;
    right: ${(props) => (props.stepNum === 1 ? '65%' : 'unset')};
    left: ${(props) => (props.stepNum === 2 ? '65%' : 'unset')};
    font-size: 9px;
    color: ${(props) => (props.active ? SF_FormColor.TEXTACTIVE : SF_FormColor.TEXTCOLOR)};
  }
`

export const FormContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  margin-top: 30px;
`

export const HeadingTitle = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: ${SF_FormColor.PRIMARY};
  margin: 10px 0;
`

export const SubCaption = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #747474;
`

export const Form = styled.form``

export const Fields = styled.div`
  display: flex;
`

export const FieldBox = styled.div`
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: column;
`

export const InputWrapper = styled.div<IinputWrapperStyleProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 0.5em;
  margin-top: 1em;
  height: 37px;
  border: 1px solid ${SF_FormColor.BORDER};

  ${({ isValid }) =>
    isValid &&
    css`
      background-color: #f4ffed;
      border-color: ${SF_FormColor.PRIMARY};
    `};

  ${({ borderRemove }) =>
    borderRemove && borderRemove === 'left'
      ? css`
          border-left: none;
        `
      : borderRemove === 'right'
      ? css`
          border-right: none;
        `
      : css``};

  ${({ borderRemove }) =>
    borderRemove && borderRemove === 'left'
      ? css`
          input {
            width: calc(100% - 17px);
          }
        `
      : css`
          input {
            width: calc(100% - 25px);
          }
        `};

  &:focus-within {
    border-color: ${SF_FormColor.PRIMARY};
  }

  & input {
    color: ${SF_FormColor.TEXTACTIVE} !important;
    &::placeholder {
      color: ${SF_FormColor.PLACEHOLDER} !important;
    }
  }
`

export const PreIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 12px;
  background-color: ${SF_FormColor.PLACEHOLDER};

  svg {
    font-size: 12px;
    line-height: 13px;
    color: #fff;
  }
`

export const MiddleBorder = styled.div`
  width: 5px;
  height: 25px;
  border-left: 1px solid ${SF_FormColor.BORDER};
  transform: translateX(-5px);
`

export const Input = styled.input<IinputStyleProps>`
  position: relative;
  border: none;
  outline: none !important;
  background-color: transparent;
  border-right: ${(props) => props.borderRight && `1px solid ${SF_FormColor.BORDER}`};

  &[name='cardNumber'] {
    width: calc(100% - 100px);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${SF_FormColor.TEXTACTIVE} !important;
  }
`

export const ErrorText = styled.p<ErrorTextStyleProps>`
  position: relative;
  display: flex;
  width: 100%;
  white-space: nowrap;
  margin: 4px 0 8px;
  font-size: 11px;
  line-height: 18px;
  color: ${SF_FormColor.RED};

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 0px;
    height: 1px;
    width: 100%;
    display: block;
    background-color: ${SF_FormColor.RED};
    transition: all 0.5s ease-in-out;
  }

  svg {
    font-size: 14px;
  }
`

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 15px;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const CardIcon = styled.div`
  display: flex;
  width: 61px;
  height: 25px;

  img {
    width: 100%;
  }
`

export const AgreeBox = styled.div`
  display: flex;
  margin-top: 1em;
  align-items: center;

  input {
    cursor: pointer;
    width: fit-content;
  }

  .MuiFormControlLabel-label {
    color: rgba(116, 116, 116, 0.5);
    font-size: 14px;
  }
`

export const Label = styled.label`
  color: ${SF_FormColor.TEXTCOLOR};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
`

export const StepButton = styled.button`
  position: relative;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  color: #e3e3e3;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14);
  padding: 10px 60px 8px 35px;
  background: linear-gradient(180deg, #8bb832 0%, #749c27 100%);
  box-shadow: inset 0px -0.5px 0px 0.5px #4c6c0c;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(0.99);
  }
  &:active {
    transform: scale(1);
  }
  @media (min-width: 340px) {
    font-size: 20px;
  }
`

export const Badge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.span`
  font-size: inherit;
`

export const ButtonIconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 27px;
  top: 7px;
  right: 3px;
  border-left: 2px solid #e3e3e3;

  svg {
    fill: #e3e3e3;
  }

  img {
    width: 19px;
  }
`

export const BackButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-right: 15px;
  height: 17px;
  color: #343434;

  &:hover {
    border-bottom: 1px solid #6e6e53;
    transform: scale(0.99);
  }
  &:active {
    transform: scale(1);
  }
`

export const UserName = styled.div`
  position: absolute;
  bottom: 13%;
  left: 7%;
  display: flex;
`

export const LastName = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #fffefe;
  @media (min-width: 481px) {
    font-size: 18px;
  }
`

export const FirstName = styled(LastName)`
  margin-right: 10px;
`

export const CardNumber = styled.div`
  position: absolute;
  bottom: 26%;
  left: 7%;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  @media (min-width: 481px) {
    font-size: 17px;
  }
`

export const TermsCondition = styled.div`
  margin-top: 33px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    color: #343434;
  }
`
