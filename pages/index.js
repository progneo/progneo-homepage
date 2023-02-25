import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layout/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import {
  IoLogoGithub,
  IoLogoSteam,
  IoLogoDiscord,
  IoLogoVk
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={"lg"}
          bg={useColorModeValue("purple.100", "purple.900")}
          p={3}
          mb={6}
          align={"center"}
        >
          Hello! Glad to see you.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as={"h2"} variant={"page-title"}>
              ProgNeo
            </Heading>
            <p>Multifunctional developer</p>
          </Box>
          <Box
            flexShirnk={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align={"center"}
          >
            <Image
              borderColor={"purple.500"}
              borderWidth={2}
              borderStyle={"solid"}
              maxWidth={"100px"}
              display={"inline-block"}
              borderRadius={"full"}
              src={"/images/avatar.jpg"}
              alt={"Profile image"}
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as={"h3"} variant={"section-title"}>
            Some info
          </Heading>
          <Paragraph>
            Just a third-year student with a great desire to develop something
            new and useful. All projects are created solely out of personal
            interest. By the way, music is an integral part of me. If there is
            no music, there will be no me.
          </Paragraph>
          <Box align={"center"} my={4}>
            <NextLink href={"/works"}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as={"h3"} variant={"section-title"}>
            Achievements
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Techgamedev hackathon - 1&apos;st place
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Baikal Unity VR & GameDev hackathon - 2&apos;nd place
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Graduated from the mobile development course from Samsung IT Academy
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Baikal Unity VR & GameDev hackathon - 1&apos;st place
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as={"h3"} variant={"section-title"}>
            I ♥
          </Heading>
          <Paragraph>
            Music, Mobile Development, Game Development, Playing Drums,{" "}
            <Link href={"https://steamcommunity.com/id/prograneo/"}>
              Computer Games
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as={"h3"} variant={"section-title"}>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href={"https://github.com/progneo/"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"purple"}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @progneo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://vk.com/progneo/"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"purple"}
                  leftIcon={<Icon as={IoLogoVk} />}
                >
                  @progneo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://steamcommunity.com/id/prograneo/"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"purple"}
                  leftIcon={<Icon as={IoLogoSteam} />}
                >
                  ProgNeo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://discord.com/invite/TpezxsmpkY/"} target={"_blank"}>
                <Button
                  variant={"ghost"}
                  colorScheme={"purple"}
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
export { getServerSideProps } from "../components/chakra";