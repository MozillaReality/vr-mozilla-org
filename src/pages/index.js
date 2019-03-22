import React from 'react';
import Layout from '../layouts/layout';

// components
import Hero from '../components/Hero';
import FeaturedCard from '../components/FeaturedCard';
import DemoCard from '../components/DemoCard';
import ResourceCard from '../components/ResourceCard';
import Experiment from '../components/Experiment';
import Experience from '../components/Experience';
import AdditionalResources from '../components/AdditionalResources';
import About from '../components/About';
import Signup from '../components/Signup';

// images
import aPainter from '../components/img/demo/apainter.png';
import hubs from '../components/img/demo/hubs.png';

const desc = `
  Virtual Reality for the free and open Web.
`;

const Home = () => (
  <Layout title="Mozilla Mixed Reality | Home" desc={desc}>
    <Hero />
    <FeaturedCard />

    {/* <div className="span span-1-3"> */}
    <div className="col-md-5 col-lg-5">
      <ResourceCard
        lead="Create with WebVR"
        title="WebVR Starter Kit"
        desc="Build VR experiences with this kit we worked on with our friends at Glitch."
        link="https://hacks.mozilla.org/2019/02/webvr-starter-kit-mozilla-glitch/"
        linkText="Learn More"
      />
      <ResourceCard
        lead="Explore VR"
        title="WebVR Submissions"
        desc="Submit your WebVR experiences to be featured in Firefox Reality."
        link="https://airtable.com/shrHKZrLcGJhXNVuH"
        linkText="Submit Now"
      />
      <ResourceCard
        lead="Experience VR"
        title="Firefox Desktop"
        desc="Experience WebVR with Firefox: Mozilla's fast and private web browser."
        link="https://www.mozilla.org/firefox/new/"
        linkText="Get it Now"
      />
    </div>
    <div className="col-md-7 col-lg-8 col-last">
      <DemoCard
        bg={hubs}
        lead="Online Social VR"
        title="Hubs by Mozilla"
        linkText="Try Now"
        link="https://hubs.mozilla.com"
        supports={['Oculus', 'HTC', 'Daydream', 'Desktop', 'Mobile']}
      />
      <DemoCard
        bg={aPainter}
        lead="Create with A-Frame"
        title="A-Painter"
        linkText="Start Painting"
        link="https://aframe.io/a-painter/"
        supports={['Oculus Rift', 'HTC VIVE']}
      />
    </div>
    <Experiment />
    <Experience />
    <Signup />
    <AdditionalResources />
    <About />
  </Layout>
);

// const IndexPage = () => (
//   <Layout>
//     <div className="container py12">
//       <h1>Hello World</h1>
//     </div>
//   </Layout>
// );

export default Home;
