import {
    Heading,
    FormControl,
    Container,
    Input,
    Button,
} from '@chakra-ui/react';
import React, { useState } from "react";

export default function GoalForm(props) {
    const [formData, setFormData] = React.useState({ goal: '', by: '' });

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submiteHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({ goal: '', by: '' });
        console.log('it worked')
    }

    return (
        <Container>
            <Heading>My Little Lemon Goals</Heading>
            <FormControl onSubmit={submiteHandler}>
                <Input
                    type='text'
                    name='goal'
                    placeholder='Goal'
                    value={formData.goal}
                    onChange={changeHandler} />
                <Input
                    type='text'
                    name='by'
                    placeholder='By...'
                    value={formData.by}
                    onChange={changeHandler} />
                <Button type='submit'>Submit Goal</Button>
            </FormControl>
        </Container>
    )
}