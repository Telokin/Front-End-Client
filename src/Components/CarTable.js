import ModalForm from "./Modal";
import {Table} from "reactstrap";
import React, {Component} from "react";
import {Button} from "react-bootstrap";


class CarTable extends Component {
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
    for (let i = 0; i < values.length; i++) {
        valTd.push(<td key={i}>{values[i]}</td>)
    }
    return valTd
}



render() {

    const items = this.props.items.map(item => {

        const values = this.getValues(item)
        return (
            <tr key={values[0]}>
                {this.putValsInTd(values)}
                <Button variable="variable">Rent Car</Button>
            </tr>

        )
    })

    return (
        <Table responsive hover>
            <thead>
            <tr>
                <th>prodYear</th>
                <th>enginePower</th>
                <th>engineCapacity</th>
                <th>gearBoxLevel</th>
                <th>gearBoxType</th>
                <th>bodyKit</th>
                <th>colour</th>
                <th>fuelType</th>
                <th>countryProd</th>
                <th>fuelUsage</th>
                <th>model</th>
                <th>vin</th>
                <th>id</th>
                <th>serviceNeeded</th>
                <th>mark</th>
                <th>Rent Cars</th>

            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>
        </Table>
    )
}
}
export default CarTable