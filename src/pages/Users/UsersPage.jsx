import { Container, FloatingLabel, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { GET, POST } from "./utils/api";
import { useEffect, useState } from 'react';
import { GET, POST } from '../../utils/api'

/*
    1) on every error from our api, we will display alert message
    2) on error, we want to pop alert message AND show an error text on page
    3) on error, we DONT WANT alert ONLY error text.
*/

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        handleGetUsers();
    }, [])

    const handleGetUsers = async () => {
        const users = await GET('/users');
        if (!users) { return }
        console.log(users);
        setUsers(users);
    }

    const handleAddUser = async () => {
        const body = {
            name,
            age,
            email
        }
        const data = await POST('/users', body);
        if (!data) { return }

        const { id } = data;

        const newUser = {
            id,
            ...body
        }

        setUsers([...users, newUser]);
    }

    return (
        <Container>
            <ListGroup>{
                users.map(u => (
                    <ListGroupItem key={u.id}>{u.name}</ListGroupItem>
                ))
            }</ListGroup>
            <Form>
                <FloatingLabel label='Name'>
                    <Form.Control type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel label='Age'>
                    <Form.Control type='text' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}></Form.Control>
                </FloatingLabel>
                <FloatingLabel label='Email'>
                    <Form.Control type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <Button type='submit' onClick={handleAddUser}>Add User</Button>
            </Form>
        </Container>
    )
}