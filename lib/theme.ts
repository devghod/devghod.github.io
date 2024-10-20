import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F7FAFC', 'gray.800')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  // heading: 'Poppins, serif',
  body: 'Poppins',
  // body: "Open Sans",
  // heading: 'Montserrat, serif',
}

const colors = {
  grassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
  colorMode: 'all 2s ease-in-out',
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
