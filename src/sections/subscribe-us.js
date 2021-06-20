/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Link, Image } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/subscribe-bg.png';
import discord from 'assets/images/icons/discord.png';
import twitter from 'assets/images/icons/twitter.png';

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  const handleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const data = [
    {
      path: '#!',
      icon: twitter,
      label: 'Twitter',
      height: 24
    },
    {
      path: '#!',
      icon: discord,
      label: 'Discord',
      height: 18
    }
  ]

  return (
    <Box as="section" id="subscribe-us" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Connect with us"
            description=""
          />
          <ul>
          {data.map(({ path, label, icon, height }, i) => (
          <li key={i}>
            {icon && <Image src={icon} style={{height: height}} alt={label} />}
            <Link path={path} key={i} label={label} variant="footer"/>
          </li>
        ))}
        </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  ul: {
    listStyle: 'none',
    margin: '28px 0 0',
    padding: 0,
    li: {
      display: 'flex',
      alignItems: 'center',
      img: {
        mr: '15px',
      },
    },
    a: {
      color: rgba('#02073E', 0.8),
    },
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
