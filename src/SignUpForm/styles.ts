import styled, { css } from 'styled-components'
import { SF_FormColor } from './color.enum'
import { IStep, IinputStyleProps, ErrorTextStyleProps } from './types'

export const SignUpContainer = styled.div`
  width: 360px;
  max-width: 360px;
  min-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1em 0;
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
    right: ${(props) => (props.stepNum === 1 ? '120px' : 'unset')};
    left: ${(props) => (props.stepNum === 2 ? '120px' : 'unset')};
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
    right: ${(props) => (props.stepNum === 1 ? '120px' : 'unset')};
    left: ${(props) => (props.stepNum === 2 ? '120px' : 'unset')};
    font-size: 9px;
    color: ${(props) => (props.active ? SF_FormColor.TEXTACTIVE : SF_FormColor.TEXTCOLOR)};
  }
`

export const FormContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

export const HeadingTitle = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: ${SF_FormColor.PRIMARY};
  margin: 40px 0 10px;
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 0.5em;
  margin-top: 1em;
  height: 37px;
  border: 1px solid ${SF_FormColor.BORDER};

  .PhoneInput {
    display: flex;
    align-items: center;
  }

  .PhoneInputInput {
    flex: 1;
    min-width: 0;
  }

  .PhoneInputCountryIcon {
    width: calc(1em * 1.5);
    height: 1em;
  }

  .PhoneInputCountryIcon--square {
    width: 1em;
  }

  .PhoneInputCountryIcon--border {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.5);
  }

  .PhoneInputCountryIconImg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .PhoneInputInternationalIconPhone {
    opacity: 0.8;
  }

  .PhoneInputInternationalIconGlobe {
    opacity: 0.65;
  }

  .PhoneInputCountry {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-right: 0.35em;
  }

  .PhoneInputCountrySelect {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border: 0;
    opacity: 0;
    cursor: pointer;
  }

  .PhoneInputCountrySelect[disabled],
  .PhoneInputCountrySelect[readonly] {
    cursor: default;
  }

  .PhoneInputCountrySelectArrow {
    display: block;
    content: '';
    width: 0.3em;
    height: 0.3em;
    margin-left: 0.35em;
    border-style: solid;
    border-top-width: 0;
    border-bottom-width: 1px;
    border-left-width: 0;
    border-right-width: 1px;
    transform: rotate(45deg);
    opacity: 0.45;
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
    opacity: 1;
    color: #03b2cb;
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
    box-shadow: 0 0 0 1px #03b2cb, inset 0 0 0 1px #03b2cb;
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {
    opacity: 1;
    color: #03b2cb;
  }

  .PhoneInput {
    width: 90%;

    .PhoneInputInput {
      border: none;
      outline: none !important;
      &::placeholder {
        color: ${SF_FormColor.PLACEHOLDER};
      }
    }
  }

  .PhoneInputCountry {
    width: 30px;
    .PhoneInputCountryIcon--border {
      background-color: transparent;
      box-shadow: none;
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

export const Input = styled.input<IinputStyleProps>`
  position: relative;
  border: none;
  outline: none !important;
  display: flex;
  width: ${(props) => (props.fullWidth ? '90%' : '42%')};
  color: ${SF_FormColor.TEXTACTIVE};
  border-right: ${(props) => props.borderRight && `1px solid ${SF_FormColor.BORDER}`};

  &::placeholder {
    color: ${SF_FormColor.PLACEHOLDER};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${SF_FormColor.TEXTACTIVE} !important;
  }
`

export const ErrorBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ErrorText = styled.p<ErrorTextStyleProps>`
  position: relative;
  display: flex;
  width: 47%;
  margin: 4px 0 8px;
  font-size: 11px;
  line-height: 18px;
  color: ${SF_FormColor.RED};

  span {
    display: inline-flex;
    flex: 1;
    align-items: center;
  }

  span::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -2px;
    height: 1px;
    width: ${(props) => (props.fullWidth ? '380px' : '195px')};
    display: block;
    background-color: ${SF_FormColor.RED};
    transition: all 0.5s ease-in-out;
  }

  svg {
    font-size: 14px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const CardIcon = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
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
`

export const Label = styled.label`
  color: ${SF_FormColor.TEXTCOLOR};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
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
  font-size: 20px;
  line-height: 23px;
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

export const TermsCondition = styled.p`
  margin-top: 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #343434;
`
