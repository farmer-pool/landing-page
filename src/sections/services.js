/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/chia_logo.svg';
import icon3 from 'assets/images/icons/service2.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Chia Testnet',
    description: `We are working day and night on chia testnet to develop chia pool based on official chia protocol.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Chia Pool',
    description: `Chia Pool to Go Live by 1st July 2021`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Support of other PoS Cryptocurrencies',
    description: `We are planning to provide support of other Proof of Space based cryto like Flax and others`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Roadmap"
          description="We have an extensive roadmap for the next 6 months to make indian pool one of the top cryptocurrency pool in the world."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
