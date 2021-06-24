/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container,Image } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import twitter from 'assets/images/icons/twitter.png';
import discord from 'assets/images/icons/discord.png';
import github from 'assets/images/icons/github.png';
import illustration from 'assets/images/subscribe-bg.png';

const data = [
  {
    id: 1,
    icon: twitter,
    path: 'https://twitter.com/PoolIndian',
  },
  {
    id: 2,
    icon: discord,
    path: 'https://discord.gg/xNMZhRMGZN',
  },
  {
    id: 3,
    icon: github,
    path: 'https://github.com/indian-pool',
  },
];

const Connect = () => {
  return (
    <Box as="section" id="connect" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapperHead}>
        <SectionHeading
          sx={styles.heading}
          title="Connect with us"
          description=""
        />
        <Box sx={styles.contentWrapper}>
        {data?.map((item) => (
            <a key={item.id} target="_blank" href={item.path} rel="noopener noreferrer">
              <Image src={item.icon} sx={styles.image} alt={item?.label} />
            </a>
          ))}
        </Box>
         
        </Box>
      </Container>
    </Box>
  );
};

export default Connect;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#f9fafc url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapperHead: {
    backgroundColor: '#fff',
      borderRadius: 15,
      p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
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
  image: {
    height: '64px', 
    padding: '0px 0px 0px 120px',
  }
};
