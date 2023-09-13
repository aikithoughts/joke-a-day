import React, { useState } from 'react';
import { getJoke } from '../lib/icanhasdadjoke.js';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import CenteredContainer from './CenteredContainer';

const JokeComponent = () => {
    const [joke, setJoke] = useState(
        {
            id: "default",
            joke: "When is a joke a dad joke? When the punchline becomes apparent."
        }
    );

    const handleGetJokeClick = async () => {
        try {
            const newJoke = await getJoke();
            setJoke(newJoke);
        } catch (error) {
            console.log("Error getting joke: ", error);
        }
    }

    const handleSaveJokeClick = async () => {
        try {
            const response = await fetch('/api/jokes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(joke),
            });
            const jsonResponse = await response.json();
            if (response.status === 200) {
                console.log('Joke saved:', jsonResponse);
            }

        } catch (error) {
            console.log("Error saving joke: ", error);
        }
    }

    return (
        <CenteredContainer id={joke.id}>
            <Row className="justify-content-md-center"></Row>
            <Col xs lg="2">
                {joke.joke}
            </Col>
            <Button onClick={handleGetJokeClick}>Get New Joke</Button> {''}
            <Button onClick={handleSaveJokeClick}>Save Joke</Button>
        </CenteredContainer>
    )

};

export default JokeComponent;