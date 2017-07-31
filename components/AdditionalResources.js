import Img from './Img';

const AdditionalResources = () => (
  <div className="additional" >
    <Img className="mb4" src="/static/img/additional/link.svg" alt="additional link" />
    <h2 className="mb6">Tutorials & Resources</h2>

    <div className="additional__resource">
      <span>Links, sources<br /> and emulators</span>
      <a href="http://webvr.info" target="_blank">wevbr.info</a>
      /*
      Add rel="noopener" above?
      */
    </div>
    <hr className="additional__hr" />
    <div className="additional__resource additional__resource--last">
      <span>Browser and devices<br /> compatibility charts</span>
      <a href="http://webvr.rocks" target="_blank">wevbr.rocks</a>
      /*
      Add rel="noopener" above?
      */
    </div>
  </div>
);


export default AdditionalResources;
