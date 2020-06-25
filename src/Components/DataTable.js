import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './Modal'

class DataTable extends Component {

        getFieldName = item => {
        let names = []
        for (var key in item) {
            names.push(key);
        }
        return names;
    }

    getValues = item => {
        let values = []
        for (const value in item) {
            values.push(item[value])
        }
        return values
    }

    putValsInTd = values => {
        let valTd = []
        for (let i = 1; i < values.length -2; i++) {
            valTd.push(<td key={i}>{values[i]}</td>)
        }
        return valTd
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {

        const items = this.props.items.map(item => {

            const values = this.getValues(item)
            return (
                <tr key={values[0]}>
                    {this.putValsInTd(values)}
                    <td>
                        <div style={{ width: "110px" }}>
                            <ModalForm buttonLabel="Check available cars" item={item} />
                        </div>
                    </td>
                </tr>

            )
        })

        return (
            <Table responsive hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Building Number</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </Table>
        )
    }
}

export default DataTable