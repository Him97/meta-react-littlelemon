import { Container, FloatingLabel, Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('http://localhost:2500/users',)
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            })
    }, [])

    const UsersList = users.map((user) => {
        return (
            <ListGroupItem>{user.name}</ListGroupItem>
        )
    })

    const handleSubmit = async () => {
        await axios.post('http://localhost:2500/users', {
            name: name,
        })
    }

    return (
        <Container>
            <ListGroup>{UsersList}</ListGroup>
            <Form>
                <FloatingLabel label='Name'>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </FloatingLabel>
                <Button type='submit' onClick={handleSubmit}>Add User</Button>
            </Form>
        </Container>
    )
}