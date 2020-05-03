import {Flex, Image} from '@chakra-ui/core'

export const Hero = () => (
  <Flex justifyContent="center" alignItems="center" height="70vh">
    <Image
      rounded="full"
      size="200px"
      src="/static/me.jpg"
      alt="author-image"
    />
  </Flex>
)
