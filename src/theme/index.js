import theme from 'mdx-deck/themes'

export default {
  ...theme,
  font: 'Poppins, Roboto, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  h2: {
    color: '#32C3FF'
  },
  monospace: '"Dank Mono", Josefin Sans, Sans Serif',
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Ranga","Verdana"'
  },
  ul: {
    listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block'
  },
  colors: {
    text: 'white',
    background: '#011627',
    link: '#7FDACA',
  }
}