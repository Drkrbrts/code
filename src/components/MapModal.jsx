import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React from 'react'

let MapModal = (props) =>{
    return (

        <Modal isMap={props.isMap} toggle={props.toggleMap}>
             <ModalHeader toggle={props.toggleMap}>{props.title}</ModalHeader>
                <ModalBody>
                    <div className="card">
                    <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26781.76811899168!2d-115.10164820493772!3d32.95837437871017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d722d02767ba63%3A0x851791a3111edcd8!2sAlgodones%20Dunes!5e0!3m2!1sen!2sus!4v1630536745204!5m2!1sen!2sus" style={{border:0,height:300,width:300}}></iframe>
                    </div>
                </ModalBody>
                    <ModalFooter>
                        <Button 
                            color="secondary"
                            onClick={props.toggleMap}>
                            Close
                        </Button>
                    </ModalFooter>
         </Modal>

    )
}

export default MapModal