import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layout/article";

const Work = () => {
  return (
    <Layout title={"Schedule ISTU"}>
      <Container>
        <Title>
          Schedule ISTU <Badge>2023</Badge>
        </Title>
        <P>
          The application is being developed to easily find the schedule at ISTU University.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Git</Meta>
            <Link href={"https://github.com/imysko/Schedule-ISTU"}>
              https://github.com/imysko/Schedule-ISTU <ExternalLinkIcon mx={"2px"} />
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