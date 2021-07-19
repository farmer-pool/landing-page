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
import Chia from '../sections/chia';
import WaWidget from 'components/footer/WaWidget';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Farmer Pool"
          description="A cryptocurrency pool of the Farmers, by the Farmers, for the farmers"
        />
        <Banner />
        <Chia />
        <RoadMap />
        {/* <Testimonials /> */}
        {/* <OurTeam /> */}
        {/* <OtherServices /> */}
        <WhyUs />
        {/* <Blog /> */}
        {/* <SubscribeUs /> */}
        <Connect />
      </Layout>
      <WaWidget />
    </ThemeProvider>
  );
}
