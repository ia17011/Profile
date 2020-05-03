import React from 'react'
import {withTheme} from 'emotion-theming'
import {Link as ChakraLink, Text, Icon, List, ListItem} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {Main} from '../components/Main'
import {DarkModeSwitch} from '../components/DarkModeSwitch'
import {Footer} from '../components/Footer'
import {Header} from '../components/Header'

const Index = () => (
  <Container>
    <Header
      title={'ia17011/Profile'}
      description={'Profile'}
      keyword={'Profile'}
      image={'/eyecatch.png'}
      url={'https://kirohi.now.sh'}
    />
    <Hero />
    <Main>
      <Text>Hello. I'm kirohi who interest in Web dev.</Text>

      <List spacing={3} my={0}>
        <ListItem>
          <FontAwesomeIcon
            icon={['fas', 'pen-fancy']}
            style={{
              display: 'inline-block',
              width: '20px',
              textAlign: 'center',
            }}
          />
          <ChakraLink isExternal href="https://kirohi.com" flexGrow={1} ml={2}>
            Blog
          </ChakraLink>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            style={{
              display: 'inline-block',
              width: '20px',
              textAlign: 'center',
            }}
          />
          <ChakraLink
            isExternal
            href="https://twitter.com/huslc2es"
            flexGrow={1}
            ml={2}
          >
            Twitter
          </ChakraLink>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={['fab', 'github']}
            style={{
              display: 'inline-block',
              width: '20px',
              textAlign: 'center',
            }}
          />
          <ChakraLink
            isExternal
            href="https://github.com/ia17011"
            flexGrow={1}
            ml={2}
          >
            GitHub
          </ChakraLink>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            style={{
              display: 'inline-block',
              width: '20px',
              textAlign: 'center',
            }}
          />
          <ChakraLink
            isExternal
            href="https://instagram.com/irohkkkki"
            flexGrow={1}
            ml={2}
          >
            Instagram
          </ChakraLink>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={['fab', 'linkedin']}
            style={{
              display: 'inline-block',
              width: '20px',
              textAlign: 'center',
            }}
          />
          <ChakraLink
            isExternal
            href="https://www.linkedin.com/in/hiroki-ihoriya-2980a41a9/"
            flexGrow={1}
            ml={2}
          >
            Linked in
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Thank you for coming🖖</Text>
    </Footer>
  </Container>
)

export default withTheme(Index)
