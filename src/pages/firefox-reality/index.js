import React from 'react';
import Layout from '../../layouts/layout';

// components
import Hero from './components/_hero';
import Download from './components/_download';
import Discover from './components/_discover';
import Designed from './components/_designed';
import Built from './components/_built';

const desc = `
  A new web browser buyilt for Mixed Reality.
`;

const Firefox = () => (
  <Layout title="Mozilla Mixed Reality | Home" desc={desc}>
    <div className="fxr">
      <Hero />
      <Download />
      <Discover />
      <Designed />
      <Built />
    </div>
  </Layout>
);

export default Firefox;
