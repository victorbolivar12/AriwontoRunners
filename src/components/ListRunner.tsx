import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Spinner } from "react-bootstrap";
import Button from '@mui/material/Button';
import {AiOutlineUserAdd } from "react-icons/all";
import {AddRunner} from "./AddRunner"


const columns = [
    { name: "Nombre", selector: "nombre", sortable: true },
    { name: "Apellido", selector: "apellido", sortable: true },
    { name: "Fecha Nacimiento", selector: "fecha_nacimieto", sortable: true },
    { name: "Cedula", selector: "cedula", sortable: true },
];


export default function ListRunner() {

    const [data, setData] = useState([]);
 

    useEffect(() => {
        axios.get('http://localhost:3000/runner')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <AddRunner/>
            <DataTable
                columns={columns}
                data={data}
                //actions={actions}
                title="Lista de Corredores"
                responsive={true}
                highlightOnHover={true}
                noDataComponent={<Spinner animation="border" variant="warning" />}
                pagination
            />
        </>
    )
}
