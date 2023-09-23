import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbUC from '../public/images/works/unifychat.jpg'
import thumbProjfair from '../public/images/works/schedule-istu.jpg'
import thumbCyberBot from '../public/images/works/cyberbot.jpg'
import thumbSmartSchedule from '../public/images/works/smart-schedule.jpg'

const Works = () => (
  <Layout title={'Works'}>
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4} mt={4}>
        Mobile applications
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id={'projfair'}
            title={'Projfair'}
            thumbnail={thumbProjfair}
          >
            An app for IrNITU that allows you to find out your class schedule
            and sign up for project activities.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id={'unifychat'}
            title={'UnifyChat'}
            thumbnail={thumbUC}
          >
            A messenger that combines several others, designed for Android.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as={'h3'} fontSize={20} mb={4}>
          Bots
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id={'cyberbot'}
            title={'CyberBot'}
            thumbnail={thumbCyberBot}
          >
            Discord bot with gambling, moderation and other interesting things.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id={'smart-schedule'}
            title={'Smart schedule'}
            thumbnail={thumbSmartSchedule}
          >
            Telegram bot for getting a schedule at the Irkutsk Scientific
            Technological University.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
