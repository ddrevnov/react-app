import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

class ErrorModal extends Component {
  state = {show: false};

  static propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    title: 'Error',
    message: 'Error message'
  };

  componentDidMount() {
    this.setState({show: true});
  }

  render() {
    let {title, message} = this.props;
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container" style={{height: 200}}>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ErrorModal;
