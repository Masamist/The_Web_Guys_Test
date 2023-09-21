import { Html, Head, Main, NextScript } from 'next/document'
import TestAnimation from './home/myComponent'       
import MyComponent from './home/myComponent'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <MyComponent />
      </body>
    </Html>
  )
}
