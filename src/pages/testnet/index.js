import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import RoadMap from 'sections/roadmap';
import Connect from 'sections/connect-us';
import TestNetBanner from 'sections/testnet-banner';
import ShowData from 'sections/table'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Indian Pool"
          description="A cryptocurrency pool of the Indians, by the Indians and for the Indians"
        />
        <TestNetBanner />
        <br/>
        <ShowData/>
        {/* <RoadMap/> */}
        {/* <Testimonials /> */}
        {/* <OurTeam /> */}
        {/* <OtherServices /> */}
        {/* <WhyUs /> */}
        {/* <Blog /> */}
        {/* <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
