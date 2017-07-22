import Layout from '../components/layout/Layout';
import { prodUrl as baseUrl } from '../variables';


// components
import Hero from '../components/Hero';
import DemoCard from '../components/DemoCard';
import ResourceCard from '../components/ResourceCard';

export default () => (
  <Layout title="Old Fashioned | Home">
    <Hero />
    <DemoCard
      bg={`${baseUrl}/static/img/demo/inspirit.png`}
      lead="Built with HTML & WebGL"
      title="Inspirit: An Interactive Story"
      linkText="Explore A-Painter"
      link="http://www.mozilla.org"
    />

    <div className="span span-1-3">
      <ResourceCard
        lead="Build VR"
        title="Firefox Nightly"
        desc="Experience WebVR with the most advanced browser available"
        link="http://www.mozilla.org"
        linkText="Get it Now"
      />
      <ResourceCard
        lead="Build VR"
        title="Firefox Nightly"
        desc="Experience WebVR with the most advanced browser available"
        link="http://www.mozilla.org"
        linkText="Get it Now"
      />
      <ResourceCard
        lead="Build VR"
        title="Firefox Nightly"
        desc="Experience WebVR with the most advanced browser available"
        link="http://www.mozilla.org"
        linkText="Get it Now"
      />
    </div>
    <div className="span--last span-2-3">
      <DemoCard
        bg={`${baseUrl}/static/img/demo/apainter.png`}
        lead="Built with HTML & WebGL"
        title="Inspirit: An Interactive Story"
        linkText="Explore A-Painter"
        link="http://www.mozilla.org"
      />
      <DemoCard
        bg={`${baseUrl}/static/img/demo/pingpong.png`}
        lead="Built with HTML & WebGL"
        title="Inspirit: An Interactive Story"
        linkText="Explore A-Painter"
        link="http://www.mozilla.org"
      />
    </div>
  </Layout>
);
