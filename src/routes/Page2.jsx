import React from 'react';
import Button from '../components/Shared/Button';
import { Container } from '../components/Shared/Layout';

const Page2 = props => {
    const navigate = () => {
        props.history.push('/page1');
    };
    return (
        <Container>
            <Button
                variant="success"
                onClick={() => {
                    navigate();
                }}
            >
                Go Back
            </Button>
        </Container>
    );
};

export default Page2;
