# signup-flow-package

[![NPM version][npm-image]][npm-url]
![npm-typescript]
[![License][github-license]][github-license-url]

It is SF form for signup-flow-app. This will be updated under the developing.

<!-- [**Live Demo**](https://ming0955.github.io/SF-form/) -->

## Installation:

```bash
npm install signup-flow-package
```

or

```bash
yarn add signup-flow-package
```

## Usage Example:

Add `SignUpForm` to your component:

```js
import Layout from '../layout/Layout';
import { SignUpForm } from 'signup-flow-package';

interface IFormProps {
  firstName?: string;
  lastName?: string;
  address?: string | undefined;
  zipCode?: string;
  city?: string;
  phoneNumber?: string;
  email?: string;
  cardNumber?: string;
}

export default function Home() {
  const onSubmit = (data: IFormProps) => {
    console.log(data);
  };

  return (
    <Layout>
      <h2> Get the new iPhone 13 </h2>

      <div>
        <SignUpForm
          firstColor='#88B431'
          secondColor='#D9D9D9'
          headingTitle={[
            'Enter Your Information',
            'Enter Your Payment Details',
          ]}
          subCaption={[
            'Please fill out the following fields to create an account: *Email and password are case sensitive',
            '',
          ]}
          steps={2}
          onSubmit={onSubmit}
        />
      </div>
      <>
    </Layout>
  );
}
```

## Props

| Name                  |      Type      |   Default   | Description                                                                                     |
| :-------------------- | :------------: | :---------: | :---------------------------------------------------------------------------------------------- |
| [**firstColor**]()    |    `string`    |  `#88B431`  | Primary color of form, e.g: `button`                                                            |
| [**secondColor**]()   |    `string`    |  `D9D9D9`   | Secondary color of form, e.g: `text`                                                            |
| [**headingTitle**]()  | `string array` |             | Title of each step, e.g:`['Enter Your Information', 'Enter Your Payment Details']`              |
| [**subCaption**]()    | `string array` |             | Subtitle of each step, e.g:`['Enter Your Information', 'Please fill out the following fields']` |
| [**steps**]()         |    `number`    |     `2`     | Form data will submit in this step                                                              |
| [**paymentMethod**]() |                |   `IBAN`    | Add payment method for step 2                                                                   |
| [**onSubmit**]()      |   `function`   | `undefined` | Callback when submit form data                                                                  |

[npm-url]: https://www.npmjs.com/package/signup-flow-package
[npm-image]: https://img.shields.io/npm/v/signup-flow-package
[github-license]: https://img.shields.io/github/license/ming0955/SF-form
[github-license-url]: https://github.com/ming0955/ming0955/SF-form/blob/main/LICENSE
[github-build]: https://github.com/ming0955/SF-form/actions/workflows/npm-publish.yml/badge.svg?branch=main&event=create
[npm-typescript]: https://img.shields.io/npm/types/signup-flow-package
