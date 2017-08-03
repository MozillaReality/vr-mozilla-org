import Layout from '../components/layout/Layout';
import { prodUrl as baseUrl } from '../variables';


// components
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import DemoCard from '../components/DemoCard';
import ResourceCard from '../components/ResourceCard';
import Experiment from '../components/Experiment';
import Experience from '../components/Experience';
import AdditionalResources from '../components/AdditionalResources';
import About from '../components/About';

const desc = `
  Virtual Reality for the free and open Web.
`;

export default () => (
  <Layout title="Mozilla VR | Home" desc={desc}>
    <Hero />
    <VideoCard
      bg={`${baseUrl}/static/img/demo/inspirit.png`}
      lead="WebVR + A-Frame"
      title="View our WebVR Showcase"
      linkText="Learn More"
      link="http://www.unboring.net/cases/inspirit.html"
      videoID="B3qIw26PTI8"
    />

    {/* <div className="span span-1-3"> */}
    <div className="col-md-5 col-lg-5">
      <ResourceCard
        lead="Experience VR"
        title="Firefox Nightly"
        desc="Experience WebVR with Firefox; Mozilla's Fast, private and ethical web browser."
        link="https://www.mozilla.org/firefox/channel/desktop/#nightly"
        linkText="Get it Now"
      />
      <ResourceCard
        lead="Build VR"
        title="A-Frame"
        desc="A-Frame allows developers to easily create VR experiences for the browser."
        link="https://aframe.io/docs/0.6.0/introduction/"
        linkText="Get Started"
      />
      <ResourceCard
        lead="Explore VR"
        title="VR List"
        desc="Explore an independently curated list of VR experiences."
        link="http://vrlist.io/"
        linkText="View Gallery"
      />
    </div>
    {/* <div className="span--last span-2-3"> */}
    <div className="col-md-7 col-lg-8 col-last">
      <DemoCard
        bg={`${baseUrl}/static/img/demo/apainter.png`}
        lead="Build with A-Frame"
        title="A-Painter"
        linkText="Learn More"
        link="https://blog.mozvr.com/a-painter/"
      />
      <DemoCard
        bg={`${baseUrl}/static/img/demo/pingpong.png`}
        lead="A Virtual Reality Game"
        title="Konterball"
        linkText="Play Now"
        link="https://www.webvrexperiments.com/experiment/konterball"
      />
    </div>
    <Experiment />
    <Experience />
    <AdditionalResources />
    <About />
  </Layout>
);
