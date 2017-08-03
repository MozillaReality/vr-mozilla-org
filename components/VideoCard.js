/* eslint-disable jsx-a11y/no-static-element-interactions */

import PropTypes from 'prop-types';
import Modal from 'react-modal';
import React from 'react';
import ReactGA from 'react-ga';
import Img from './Img';


class VideoCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
    ReactGA.event({
      category: 'video',
      action: 'play',
      label: 'Open Video Modal',
    });
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const cardStyle = {
      backgroundImage: `url('${this.props.bg}')`,
    };

    return (
      <div className="video" style={cardStyle}>
        <div className="video__hover" onClick={this.openModal} >
          <Img className="video__icon" src="/static/img/video/play-button.svg" alt="play video" />
        </div>
        <div className="video__content">
          <p className="video__lead">{this.props.lead}</p>
          <h2 className="video__title">{this.props.title}</h2>
          <p className="video__link"><a onClick={this.openModal}>{this.props.linkText}</a></p>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
          shouldCloseOnOverlayClick
          className="vidmodal"
          overlayClassName="vidmodal__overlay"
        >
          <div className="vidmodal__vidwrap">
            <iframe
              title="Youtube Embed"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${this.props.videoID}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <button onClick={() => this.closeModal()}className="vidmodal__close">Close Video</button>
        </Modal>
      </div>
    );
  }
}


VideoCard.propTypes = {
  bg: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoID: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default VideoCard;
