/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text} from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import ServiceData from 'components/cards/service-data';
import miner from 'assets/images/miner.png';
import chiaLogo from 'assets/images/icons/chia-logo.png';
import chiaCalc from 'assets/images/icons/chia-calc.png';
import chiaLeaf from 'assets/images/icons/chia-leaf.png';



const data = [
  {
    id: 1,
    title: 'Net Space',
    description: `Get latest Chia price chart`,
    clickLink: `https://coinmarketcap.com/currencies/chia-network/`,
  },
  {
    id: 2,
    data : 4,
    title: 'Pool Space',
    description: `How much can I earn farming Chia (XCH)?`,
    clickLink: `https://chiacalculator.com/`,
  },
  {
    id: 3,
    data : 4,
    title: 'forms online',
    description: `Get chia and start farming`,
    clickLink: `https://www.chia.net/`,
  },
  {
    id: 4,
    data : 4,
    title: 'Time to Win',
    description: `Get chia and start farming`,
    clickLink: `https://www.chia.net/`,
  },
];

const ChiaData = () => {
  return (
    <Box as="section" id="chia" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Chia"
          description="Chia is our first priority"
        />
        <Box as="figure" sx={styles.illustration}>
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <ServiceData key={item.id} item={item} />
          ))}
        </Box>
            {/* <Box sx={styles.buttonWrapper}>
              <Button>Get Started</Button>
            </Box> */}
            <Image src={miner} alt="miner" />
        </Box>
      </Container>
    </Box>
  );
};

export default ChiaData;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    left : '50%',
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    }
  },
  contentWrapper: {
    gap: 20,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplate: [
      'repeat(1, 285px) repeat(2, 285px)',
      'repeat(3, 285px) repeat(4, 285px)',
    ],
  },
};
