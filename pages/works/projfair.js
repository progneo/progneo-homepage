import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title={'Projfair'}>
      <Container>
        <Title>
          Projfair <Badge>2023</Badge>
        </Title>
        <P>
          An app for IrNITU that allows you to find out your class schedule and
          sign up for project activities.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Git</Meta>
            <Link href={'https://github.com/imysko/Schedule-ISTU'}>
              https://github.com/imysko/Schedule-ISTU{' '}
              <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>Kotlin, Retrofit, Jetpack Compose, Hilt</span>
          </ListItem>
          <ListItem>
            <Meta>Release</Meta>
            <Link
              href={
                'https://play.google.com/store/apps/details?id=com.istu.schedule'
              }
            >
              Google Play <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
