/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.png';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg /> */}
      <Image  style={{height: 32}} src={logo} alt="logo" />
      <Text>FARMER POOL</Text>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
