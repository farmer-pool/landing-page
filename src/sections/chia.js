/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import waLogo from 'assets/images/icons/whatsapp-icon.png';
import chiaCalc from 'assets/images/icons/chia-calc.png';
import chiaLeaf from 'assets/images/icons/chia-leaf.png';

const data = [
  {
    id: 0,
    icon: chiaLeaf,
    title: 'Official Chia Pool',
    description: `Start farming with Farmerpool chia.farmerpool.org`,
    clickLink: `https://chia.farmerpool.org/`,
  },
  {
    id: 1,
    icon: waLogo,
    title: 'New to Crypto Mining?',
    description: `Feel free to reach out on whatsapp`,
    clickLink: `https://wa.me/message/KRBCBMF5XZPTI1?src=qr`,
  },
  {
    id: 2,
    icon: chiaCalc,
    title: 'Start farming',
    description: `See How to join pool and earn XCH`,
    clickLink: `https://chia.farmerpool.org/howtojoin`,
  }
];

const Chia = () => {
  return (
    <Box as="section" id="chia" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Chia"
          description="Chia is our first priority. Our official chia pool is now live."
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

export default Chia;

const styles = {
  section: {
    backgroundColor: '#FFF5ED',
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
