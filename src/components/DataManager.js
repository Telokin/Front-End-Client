import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import DataTable from './DataTable'

class DataManager extends Component {

    state = {


        items: []
    }



    getItems() {
        fetch("https://placowki.herokuapp.com/places/all")
            //.then(res=>console.log(res.json()))
            .then(res => res.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))

    }


    addItemToState = (item) => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    updateState = (item) => {
        const itemIndex = this.state.items.findIndex(data => data.id === item.id)
        const newArray = [
            // destructure all items from beginning to the indexed item
            ...this.state.items.slice(0, itemIndex),
            // add the updated item to the array
            item,
            // add the rest of the items to the array from the index after the replaced item
            ...this.state.items.slice(itemIndex + 1)
        ]
        this.setState({ items: newArray })
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        return (
            <Container className="crud">
                <Row>
                    <Col>
                        <img src={localStorage.getItem('image')}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 style={{ margin: "20px 0" }}>Places</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DataTable items={this.state.items}   updateState={this.updateState}  />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default DataManager