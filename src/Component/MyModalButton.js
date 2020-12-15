import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MyModalButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {show: false}
        this.value =this.props.value
    }
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render(){
      
        return (
          <>
            <Button variant="primary" onClick={this.handleShow}>
              {this.value}
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Site En Construction</Modal.Title>
              </Modal.Header>
              <Modal.Body>Le système de connexion est en cours de developpement</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Fermer
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
}
export default MyModalButton;