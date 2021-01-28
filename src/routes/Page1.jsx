import React, { useState } from 'react';
import { useStore } from '../store';
import Button from '../components/Shared/Button';
import Input from '../components/Shared/Input';
import { Col, Container, Row } from '../components/Shared/Layout';
import Alert from '../components/Shared/Alert';


const Page1 = (props) => {
    // Handles Global value
    const {
        dispatch,
        state: { globalValue, globalInput },
    } = useStore();

    const handleClick = (payload) => dispatch({ type: 'ADD', payload });
    const handleInput = (payload) => dispatch({ type: 'ADD_INPUT', payload });

    // Handles local state
    const [localValue, setLocalValue] = useState(0);
    const [localInput, setLocalInput] = useState('');

    // state for Alert
    const [show, setShow] = useState(false);

    // Navigate to a new route
    const navigate = () => {
        props.history.push('/page2');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Using local state</h4>
                    Counter: {localValue}
                    <Input
                        placeholder="write a number"
                        value={localInput}
                        onChange={(val) => {
                            setLocalInput(val);
                        }}
                    />
                    <Button
                        variant="primary"
                        onClick={() => {
                            setLocalValue(
                                parseInt(localValue) + parseInt(localInput)
                            );
                        }}
                    >
                        Add by local state
                    </Button>
                </Col>
                <Col>
                    <h4>Using global state</h4>
                    Counter: {globalValue}
                    <Input
                        placeholder="write a number"
                        value={globalInput}
                        onChange={(val) => {
                            handleInput(val);
                        }}
                    />
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleClick(globalInput);
                        }}
                    >
                        Add by global state
                    </Button>
                </Col>
            </Row>
            <br />
            <br />
            <hr />
            <Button
                variant="warning"
                onClick={() => {
                    navigate();
                }}
            >
                Navigate to new view
            </Button>
            <br />
            <br />
            <br />
            <hr />
            <Button variant="secondary" onClick={() => setShow(true)}>
                Click to see message
            </Button>
            <Alert show={show} variant="success">
                <Alert.Heading>This is the heading</Alert.Heading>
                <p>This is using local state to 'show' or 'hide'</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={() => setShow(false)}
                        variant="outline-success"
                    >
                        Close me
                    </Button>
                </div>
            </Alert>
            <br />
            <br />
            <br />
            <br />
            <hr />
        </Container>
    );
};

export default Page1;
