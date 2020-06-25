import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap'
import CarAvailable from "./CarAvailable";


class ModalForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

        const label = this.props.buttonLabel

        let button = ''
        let title = ''

        if(label === 'Check available cars'){
            button = <Button
                color="primary"
                onClick={this.toggle}
                style={{float: "right",size:50, marginRight:"30px"}}>{label}
            </Button>
            title = 'Cars Details'
        }

        return (
            <div>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
                    <ModalBody>
                        <CarAvailable
                            item={this.props.item} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default ModalForm