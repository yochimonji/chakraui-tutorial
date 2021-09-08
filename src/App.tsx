/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Text,
  Input,
  theme,
  Link,
  Stack,
  HStack,
  Heading,
  Avatar,
  Spacer,
  chakra,
  LinkProps,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type QuotedProps = {
  children: string;
};

const Quoted = (props: QuotedProps) => (
  <Box _before={{ content: `"「"` }} _after={{ content: `"」"` }} {...props} />
);

type ShadowBoxProps = {
  p: number;
  children: string;
};
const ShadowBox = (props: ShadowBoxProps) => (
  <Box rounded="md" boxShadow="base" color="red.400" m="2" {...props} />
);

type NumberingHoverLinkProps = {
  num: number;
};

const NumberingHoverLink = (props: NumberingHoverLinkProps) => (
  <Box
    _hover={{ bg: "teal.200" }}
    bg={props.num % 2 ? "gray.100" : "white"}
    p={2}
  >
    {props.num}
  </Box>
);

const CommentItem = () => (
  <HStack maxWidth="lg">
    <Avatar />
    <Stack>
      <Heading size="sm">Some Member</Heading>
      <Text>
        〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
      </Text>
    </Stack>
  </HStack>
);

const Feature = ({ title, desc, ...rest }): JSX.Element => (
  <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" {...rest}>
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{desc}</Text>
  </Box>
);

function StackEx() {
  return (
    <HStack spacing={8}>
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
      />
    </HStack>
  );
}

const HoverLink = (props: LinkProps) => (
  <Link rounded="base" _hover={{ bg: "gray.200" }} p={2} {...props} />
);

const Navigation = () => (
  <Stack as="nav">
    <HoverLink href="/burger">Burger</HoverLink>
    <HoverLink href="/sidemenu">Sidemenu</HoverLink>
    <HoverLink href="/drink">Drink</HoverLink>
    <HoverLink href="/takeout">Takeout</HoverLink>
  </Stack>
);

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

type LayoutWithMenuProps = {
  text: string;
};

const LayoutWithMenu = (props: LayoutWithMenuProps) => {
  const { text } = props;
  return (
    <Stack>
      <HStack p={5}>
        <Box display={{ base: "block", md: "none" }}>
          <DrawerMenu />
        </Box>
        <Heading>Humberger Shop</Heading>
      </HStack>
      <HStack alignItems="start">
        <Box display={{ base: "none", md: "block" }} w={500} px={6}>
          <Navigation />
        </Box>
        <Box>{text}</Box>
      </HStack>
    </Stack>
  );
};

const App = (): JSX.Element => {
  const sampleText = ["dog", "cat", "rabbit", "mouse"];
  const Canvas = chakra("canvas");

  return (
    <ChakraProvider theme={theme}>
      <LayoutWithMenu text="あああああああああああああああああああああああああああ" />
      <Box px={10} my={10} backgroundColor="#f0f0f0">
        Hello
      </Box>
      <Box
        backgroundColor="blue.100"
        borderColor="teal.300"
        color="green.800"
        borderBottomWidth={4}
        p={2}
      >
        backgroundColor=blue.100 borderColor=teal.300 color=green.800
      </Box>
      <Button colorScheme="green" variant="link">
        Gureen button
      </Button>
      <Text fontSize="sm">Small Text</Text>
      <Text fontSize="96">xxxxl Text</Text>
      <Box p="4">p=4</Box>
      <Box top={0} position="sticky" zIndex="sticky">
        ヘッダ
      </Box>
      <Text _hover={{ fontWeight: "bold" }}>Hover Me</Text>
      <Text
        color="blue.500"
        fontSize="sm"
        _hover={{ color: "red.500", fontSize: "xl" }}
      >
        Hover Me Ver.2
      </Text>
      <Quoted>ここにセリフ</Quoted>
      <Input
        placeholder="プレースホルダー"
        _placeholder={{ color: "purple.500" }}
      />
      <Box bg={["red.200", "yellow.200", "green.200", "blue.200"]}>
        {["red.200", "yellow.200", "green.200", "blue.200"]}
      </Box>
      <Box
        bg={{
          base: "red.200",
          sm: "yellow.200",
          md: "green.200",
          lg: "blue.200",
        }}
      >
        Hellow
      </Box>
      <Link href="https://google.com">
        <Button>Bat Button</Button>
      </Link>
      <Button as="a" href="https://google.com">
        as=a Button
      </Button>
      <ShadowBox p={4}>hello</ShadowBox>
      <NumberingHoverLink num={1} />
      <NumberingHoverLink num={2} />
      <Box>
        <Button shadow="md" rounded="full" colorScheme="twitter">
          Button Shadow
        </Button>
      </Box>
      <Box>
        <Text fontSize="3xl">Box</Text>
        {sampleText.map((text, index) => (
          <Box bg="red.50" p={2} key={index.toString()}>
            {text}
          </Box>
        ))}
      </Box>
      <Stack>
        <Text fontSize="3xl">Box</Text>
        {sampleText.map((text, index) => (
          <Box bg="red.50" p={2} key={index.toString()}>
            {text}
          </Box>
        ))}
      </Stack>
      {/* <CommentItem /> */}
      <HStack>
        <Avatar />
        <Stack w="100%">
          <Heading size="sm">Some Member</Heading>
          <Text overflowWrap="break-word">
            〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
          </Text>
        </Stack>
      </HStack>
      <StackEx />
      <HStack spacing={1}>
        <Box color="gray.500">@taro:</Box>
        <Box fontWeight="bold">Hello!</Box>
        <Spacer />
        <Box color="gray.500">2021-05-01 12:00</Box>
      </HStack>
      <Canvas w={100} h={100} bg="red.100" />
      <CommentItem />
    </ChakraProvider>
  );
};

export default App;
