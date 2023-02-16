import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import { AiOutlineUserAdd } from "react-icons/all";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import {runnerType} from "./../types/index"

export function AddRunner() {
    const [show, setShow] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isConfirmationSubmit, setIsConfirmationSubmit] = useState(false)

    const [formData, setFormData] = useState<runnerType>({
        name: '',
        lastName: '',
        ci: 0,
        shoeSize: 0,
        flannelCarving: '',
        address: '',
        profession: '',
        social: '',
        livesAlone: false,
        livesWith: ''
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseConfirmation = () => setIsConfirmationSubmit(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(e.target.checked);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setShow(false)
        setIsConfirmationSubmit(true)
        console.log(formData);
    };

    return (
        <>
            <Button
                variant="contained"
                startIcon={<AiOutlineUserAdd style={{ color: 'white' }} />}
                color="warning"
                onClick={handleShow}
            >
                Agregar Corredor
            </Button>

            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Corredor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleInputChange}
                                    placeholder='nombre'
                                    name="name"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastname">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleInputChange}
                                    placeholder="apellido"
                                    name="lastName"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formCi">
                                <Form.Label>Cedula</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleInputChange}
                                    placeholder='cedula'
                                    name="ci"
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="forDate">
                                <Form.Label>Fecha de Nacimiento</Form.Label>
                                <Form.Control
                                    type="date"
                                    onChange={handleInputChange}
                                    name='date'
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formShoeSize">
                                <Form.Label>Talla de zapatos</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleInputChange}
                                    placeholder="Talla de Zapatos"
                                    name="shoeSize"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formFlannelCarving">
                                <Form.Label>Talla de Franela</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleInputChange}
                                    placeholder="Talla de Franela"
                                    name="flannelCarving"
                                />

                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleInputChange}
                                placeholder="Direccion"
                                name="address"
                            />
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} controlId="formProfession">
                                <Form.Label>Profesion</Form.Label>
                                <Form.Control
                                    onChange={handleInputChange}
                                    placeholder="Profesion"
                                    name="profession"
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formSocial">
                                <Form.Label>Red Social</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        placeholder="username"
                                        onChange={handleInputChange}
                                        name="social"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formLivesAlone">
                                <Form.Check
                                    inline={true}
                                    type="checkbox"
                                    label="vive solo"
                                    onChange={handleInputChange}
                                    name="livesAlone"
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formLiveWith">
                                <Form.Control
                                    disabled={isDisabled}
                                    onChange={handleInputChange}
                                    placeholder="Especifique con quien vive"
                                    name="livesWith"
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mr-3" color="warning" variant="contained" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button color="primary" variant="contained" onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* conformacion de guardado */}
            <Modal show={isConfirmationSubmit} size="lg">
                <Modal.Header> Corredor Agregado </Modal.Header>
                <Modal.Body>
                    <p>Los datos del corredor han sido guardados con exito.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="primary" variant="contained" onClick={handleCloseConfirmation}>
                        Cerrar
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    );
}
