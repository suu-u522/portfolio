import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Image,
  Card,
  CardBody,
  Text,
  Box,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';

function ProductsModal({ ...props }: Omit<ComponentPropsWithoutRef<typeof Modal>, 'children'>) {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Products</ModalHeader>
        <ModalBody paddingBottom="12px" paddingTop={0}>
          <Link href="https://github.com/shuuuu10-01/chat-chef" target="_blank">
            <Card variant="outline">
              <CardBody display="flex" alignItems="center" gap="20px">
                <Image width="50px" height="50px" src="/assets/cook.png"></Image>
                <Box>
                  <Text fontWeight="bold">Chat Chef</Text>
                  <Text mb="5px">ChatGPT APIを使ったご飯提案アプリ</Text>
                  <HStack spacing="5px" width="fit-content">
                    <Flex gap="4px" alignItems="center">
                      <Text color="primary" fontSize="12px">
                        #React
                      </Text>
                      <Text color="primary" fontSize="12px">
                        #ChatGPT
                      </Text>
                      <Text color="primary" fontSize="12px">
                        #ChakraUI
                      </Text>
                      <Text color="primary" fontSize="12px">
                        #Firebase
                      </Text>
                    </Flex>
                  </HStack>
                </Box>
              </CardBody>
            </Card>
          </Link>
          <Link href="https://github.com/shuuuu10-01/shopping-mate" target="_blank">
            <Card variant="outline">
              <CardBody display="flex" alignItems="center" gap="20px">
                <Image width="50px" src="/assets/shopping-mate.png"></Image>
                <Box>
                  <Text fontWeight="bold">Shopping Mate</Text>
                  <Text mb="5px">お買い物に便利なTodoアプリ</Text>
                  <HStack spacing="5px" width="fit-content">
                    <Flex columnGap="4px" rowGap="2px" alignItems="center" flexWrap="wrap">
                      <Text color="primary" fontSize="12px">
                        #React Native
                      </Text>
                      <Text color="primary" fontSize="12px">
                        #Expo
                      </Text>
                    </Flex>
                  </HStack>
                </Box>
              </CardBody>
            </Card>
          </Link>
          <Flex mt="2px" justifyContent="center">
            <Text>&copy;suu</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProductsModal;
