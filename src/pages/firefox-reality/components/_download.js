import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ReactGA from 'react-ga';

// images
import oculus from '../img/download/oculus.svg';
import pico from '../img/download/pico.png';
import htc from '../img/download/htc.svg';
import msft from '../img/download/msft.svg';

// For GA Events
ReactGA.initialize('UA-35433268-70');

class DownloadItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  captureEvent = () => {
    ReactGA.event({
      category: 'download',
      action: 'click',
      label: `download ${this.props.alt}`,
    });
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
    ReactGA.event({
      category: 'download',
      action: 'click',
      label: `download ${this.props.alt}`,
    });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <a
          className="fxr-download__item-link"
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.link}
          onClick={
            this.props.isModal ? e => this.openModal(e) : this.captureEvent
          }
          onKeyDown={this.openModal}
        >
          <div className="fxr-download__item">
            <div className="fxr-download__item-bg" />
            <div className="fxr-download__item-content">
              <img src={this.props.img} alt={this.props.alt} />
              <span className="fxr-download__item-content-type">{this.props.deviceType}</span>
              <span className="fxr-download__item-content-text">{this.props.text}</span>
            </div>
          </div>
        </a>
        {this.props.isModal && (
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={this.closeModal}
            contentLabel="Modal"
            shouldCloseOnOverlayClick
            className="fxr-download__modal"
            overlayClassName="fxr-download__modal-overlay"
            closeTimeoutMS={300}
          >
            <p>{this.props.modalText}</p>
            <button type="button" onClick={this.closeModal}>
              Dismiss
            </button>
          </Modal>
        )}
      </>
    );
  }
}

const Download = () => (
  <div className="fxr-download">
    <p>Download For: </p>
    <DownloadItem
      isModal
      img={htc}
      text="Get it for Viveport"
      alt="Viveport"
      deviceType="Standalone VR"
      modalText="Please search for 'Firefox Reality' in the Viveport store"
    />
    <DownloadItem
      img={oculus}
      text="Get it for Oculus Go"
      alt="Oculus"
      deviceType="Standalone VR"
      link="https://www.oculus.com/experiences/go/2208418715853974/"
    />
    <DownloadItem
      isModal
      img={pico}
      text="Get it for Pico"
      alt="Pico"
      deviceType="Standalone VR"
      modalText="Firefox Reality is coming soon to the Pico store"
    />
    <DownloadItem
      img={htc}
      text="Get it for Viveport"
      alt="Viveport PC"
      deviceType="Tethered VR"
      link="about:blank"
    />
    <DownloadItem
      img={msft}
      text="Get it for Hololens"
      alt="Hololens"
      deviceType="Standalone AR"
      link="https://www.microsoft.com/en-us/p/firefox-reality/9npq78m7nb0r"
    />
  </div>
);

DownloadItem.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
  isModal: PropTypes.bool,
  modalText: PropTypes.string,
  deviceType : PropTypes.string,
};

DownloadItem.defaultProps = {
  link: '',
  modalText: '',
  isModal: false,
};

export default Download;
