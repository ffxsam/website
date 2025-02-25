import Apply from 'components/pages/partners/apply';
import Benefits from 'components/pages/partners/benefits';
import Hero from 'components/pages/partners/hero';
import Integration from 'components/pages/partners/integration';
import Logos from 'components/pages/partners/logos';
import Testimonial from 'components/pages/partners/testimonial';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.partners);

const PartnersPage = () => (
  <Layout
    className="bg-black-new text-white"
    headerClassName="lg:!absolute lg:!bg-transparent"
    headerTheme="black-new"
    footerTheme="black-new"
    footerWithTopBorder
  >
    <Hero />
    <Logos />
    <Benefits />
    <Testimonial />
    <Integration />
    <Apply />
  </Layout>
);

export default PartnersPage;
