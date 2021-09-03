import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EventForm from '../components/EventForm'


  let EventModal = (props)=>{
        return (
            <React.Fragment>
            <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
                 <ModalHeader toggle={props.toggleModal}>{props.title}</ModalHeader>
                    <ModalBody>
                        <EventForm
                            change={props.change}
                            formvalue={props.formvalue}
                        ></EventForm>
                    </ModalBody>
                        <ModalFooter>
                            <Button 
                                color="secondary"
                                onClick={props.toggleModal}>
                                Close
                            </Button>
                            <Button 
                                color="primary"
                                onClick={props.clickFunction}
                            >Send Form</Button>
                        </ModalFooter>
             </Modal>
             </React.Fragment>
        )
    }
    

export default EventModal