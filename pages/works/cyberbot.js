import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layout/article";

const Work = () => {
  return (
    <Layout title={"CyberBot"}>
      <Container>
        <Title>
          CyberBot <Badge>2022</Badge>
        </Title>
        <P>
          Discord bot with gambling, moderation and other interesting things.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Git</Meta>
            <Link href={"https://github.com/ProgNeo/CyberBot"}>
              https://github.com/ProgNeo/CyberBot <ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Discord</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Python, MySQL</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from "../../components/chakra";