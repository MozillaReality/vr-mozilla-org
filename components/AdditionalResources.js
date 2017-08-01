import Img from './Img';

const AdditionalResources = () => (
  <div className="additional" >
    <Img className="mb4" src="/static/img/additional/link.svg" alt="additional link" />
    <h2 className="mb6">Tutorials & Resources</h2>

    <div className="additional__resource">
      <span>Links, sources<br /> and emulators</span>
      <a href="https://webvr.info" rel="noopener noreferrer">wevbr.info</a>
    </div>
    <hr className="additional__hr" />
    <div className="additional__resource additional__resource--last">
      <span>Browser and devices<br /> compatibility support</span>
      <a href="https://webvr.rocks" rel="noopener noreferrer">wevbr.rocks</a>
    </div>
  </div>
);


export default AdditionalResources;
