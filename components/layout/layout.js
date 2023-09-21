import { Fragment } from 'react'

import HeaderNav from './header_nav'
import Footer from '../layout/footer'

function Layout(props) {
  return (
    <Fragment>
      <HeaderNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;