import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap'
import DataManager from "./DataManager";
import CarAvailable from "./CarAvailable";



class ModalForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    openModalWithItem(item) {
        this.setState({
            openDeleteModal: true,
            activeItemName: item.name,
            activeItemId: item.id
        })
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
                style={{float: "right",width: "150px"}}>{label}
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