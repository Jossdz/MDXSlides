import React from 'react'
import styled from 'styled-components'
import Flex from 'mdx-deck/dist/Flex'
import Box from 'mdx-deck/dist/Box'
import theme from '../theme'

const Footer = styled.footer`
  font-size: 14px;
  color: #232323;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: absolute;
  bottom: 0;
  span, span > b {
    color: ${theme.colors.text};
  }
`

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const Half = styled(Box)`
  > * {
    max-width: 100%;
  }
`

const Split = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  const times = kids.length

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%',
          padding: '0 5%'
        }}
      >
        {kids.map(k => (
          <Half key={k} width={1 / times}>
            {k}
          </Half>
        ))}
      </Flex>
      <Footer>
      <span><b>[Topic]</b></span>
      <span>@name</span>
    </Footer>
    </Root>
  )
}

export default Split