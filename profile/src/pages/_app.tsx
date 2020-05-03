import React from 'react'
import NextApp from 'next/app'
import {ThemeProvider, CSSReset, ColorModeProvider} from '@chakra-ui/core'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

import theme from '../theme'

library.add(fab, fas, far)
class App extends NextApp {
  render() {
    const {Component} = this.props
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Component />
        </ColorModeProvider>
      </ThemeProvider>
    )
  }
}

export default App
