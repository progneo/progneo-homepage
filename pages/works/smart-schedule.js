import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layout/article";

const Work = () => {
  return (
    <Layout title={"Smart Schedule"}>
      <Container>
        <Title>
          Smart Schedule <Badge>2023</Badge>
        </Title>
        <P>
          Telegram bot for getting a schedule at the Irkutsk Scientific Technological University.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Git</Meta>
            <Link href={"https://github.com/ProgNeo/Smart-schedule-IRNITU"}>
              https://github.com/ProgNeo/Smart-schedule-IRNITU <ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Telegram</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Python, PostgreSQL</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from "../../components/chakra";