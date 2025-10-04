import React from 'react'
import HeaderDemo from '../../Components/DemoFunctionComponent/HeaderDemo/HeaderDemo'
import FooterDemo from '../../Components/DemoFunctionComponent/FooterDemo/FooterDemo'
import { Outlet } from 'react-router-dom'

const TemplateDemo = () => {
    // set up a template for all pages
    // Above is header, middle would be content of component, footer
  return (
    <div>
        <HeaderDemo />
        <Outlet />
        <FooterDemo />
    </div>
  )
}

export default TemplateDemo