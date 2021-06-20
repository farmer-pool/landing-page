/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';
import illustration from 'assets/images/banner-illustration.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Marketing & advertising',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Ultimate development',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Business Enterprise',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
];

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.heading}>
            <Heading sx={styles.title}>Indian Pool</Heading>
            <Text as="p" sx={styles.description}>
              A cryptocurrency pool of the Indians, by the Indians and for the Indians
            </Text>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            {/* <Box sx={styles.buttonWrapper}>
              <Button>Get Started</Button>
            </Box> */}
            <Image src={illustration} alt="illustration" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  servicesContentWrapper: {
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
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
    textAlign: 'center',
    maxWidth: 660,
    margin: ['0 auto 60px'],
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 26, null, 30, 9],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
  },
  description: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2.2],
    maxWidth: ['none', 'none', 'none', 'none', 490],
    margin: '15px auto 0',
  },
};
