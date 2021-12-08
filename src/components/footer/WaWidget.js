/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import waLogo from 'assets/images/icons/whatsapp-icon.png';

const WaWidget = ({ title, items }) => {
  return (
    <div sx={styles.floatingWidget}>
      <WhatsAppWidget textReplyTime='Typically replies within minutes' phoneNumber='+917073888354' />
    </div>
  );
};

export default WaWidget;

const styles = {
floatingWidget: {
    position: "fixed",
    right: "15px",
    bottom: "15px"
  },
};
