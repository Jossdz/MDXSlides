import React, { Fragment } from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 10%;
`

const Footer = styled.footer`
  font-size: 14px;
  color: #232323;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  span, span > b {
    color: ${theme.colors.text};
  }
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span><b>Label</b></span>
      <span>@jossdz</span>
    </Footer>
  </Fragment>
)

export default Layout