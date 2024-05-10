import {
  Box,
  Button,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { useState } from "react";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { TbStretching } from "react-icons/tb";

export const Logo = (props) => {
  return (
    <Box display="flex" alignItems="center" {...props}>
      <MdOutlineSportsGymnastics size={32} color="#ed8936" />
      <Text fontSize="xl" fontWeight="bold" color="#ed8936" ml={2}>dabonii</Text>
      <TbStretching size={32} color="#ed8936" ml={2} />
    </Box>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'orange.400',
      }}
      >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState();

  return (
    <Box
      id="contact"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              All rights reserved © {new Date().getFullYear()} Alex.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('orange.400', 'orange.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'orange.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />
              }
              onClick={() => {
                setOverlay(<Modal />);
                onOpen();
              }}
              />
                          <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Subscription Successful!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    Thank you for subscribing to our newsletter. Sit back and enjoy the ride!
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onClick={onClose}
                    backgroundColor={"orange.400"}
                    _hover={{
                      bgColor: "orange.500",
                      boxShadow: "xl",
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}