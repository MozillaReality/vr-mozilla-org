/* eslint-disable react/no-danger */
import Head from 'next/head';
import PropTypes from 'prop-types';

// styles
import stylesheet from 'styles/style.scss';

const Meta = ({ title, desc }) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <script src="https://rawgit.com/aframevr/aframe/master/dist/aframe-master.min.js" />
      <title>{ title }</title>
      <meta name="description" content={`${desc}`} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta property="og:url" content="https://vr.mozilla.org" />
      <meta property="og:title" content="Mozilla VR" />
      <meta property="og:description" content="VR for a free and open web" />
      <meta property="og:image" content="static/img/about/bg.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mozilla" />
      <meta name="twitter:creator" content="@mozilla" />
      <meta name="twitter:title" content="Mozilla VR" />
      <meta name="twitter:description" content="VR for a free and open web" />
      <meta name="twitter:image" content="static/img/about/bg.png" />
      <link rel="icon" type="image/png" href="static/img/favicon16.png?s=16" sizes="16x16" />
      <link rel="icon" type="image/png" href="static/img/favicon32.png?s=32" sizes="32x32" />
      <script async src="static/js/dnt-helper.js" />
      <script async src="static/js/autotrack.js" />
      <script async src="https://www.google-analytics.com/analytics.js" />
      <script async src="static/js/ga.js" />
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" />
      <script src="static/js/webfont.js" />
    </Head>
  </div>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Meta;
