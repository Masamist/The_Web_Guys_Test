import { Fragment } from 'react'

import HeaderNav from './header_nav'
import Footer from '../layout/footer'
import MyComponent from '@/pages/home/myComponent';

function Layout(props) {
  return (
    <Fragment>
      <HeaderNav />
      <main>{props.children}</main>
      <Footer />
      <MyComponent />
    </Fragment>
  );
}

export default Layout;