import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layout/article";

const Work = () => {
  return (
    <Layout title={"United Messengers"}>
      <Container>
        <Title>
          United Messengers <Badge>2022</Badge>
        </Title>
        <P>
          A messenger that combines several others, designed for Android.
          Currently supports two messengers: Telegram and VK.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Git</Meta>
            <Link href={"https://github.com/ProgNeo/United-Messengers"}>
              https://github.com/ProgNeo/United-Messengers <ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Kotlin, Retrofit</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from "../../components/chakra";