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
        lead="Experience VR"
        title="Firefox"
        desc="Experience WebVR with Firefox: Mozilla's fast, private, and ethical web browser."
        link="https://www.mozilla.org/firefox/new/"
        linkText="Get it Now"
      />
      <ResourceCard
        lead="Build with Unity"
        title="Unity WebVR Assets"
        desc="Publish and share VR experiences created in Unity on the open Web."
        link="https://hacks.mozilla.org/2018/02/create-vr-on-the-web-using-unity3d/"
        linkText="Get Started"
      />
      <ResourceCard
        lead="Explore VR"
        title="WebVR Showcase"
        desc="Explore a curated list of WebVR experiences."
        link="https://airtable.com/embed/shr2Lc7pmlJis02R4/tblZbV2S0W0T5DDth?viewControls=on"
        linkText="Read More"
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
