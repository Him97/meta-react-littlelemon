import { Container, ListGroup } from 'react-bootstrap'

export default function DessertsList(props) {

    const desserts = [
        {
            name: "Chocolate Cake",
            calories: 400,
            createdAt: "2022-09-01",
        },
        {
            name: "Ice Cream",
            calories: 200,
            createdAt: "2022-01-02",
        },
        {
            name: "Tiramisu",
            calories: 300,
            createdAt: "2021-10-03",
        },
        {
            name: "Cheesecake",
            calories: 600,
            createdAt: "2022-01-04",
        },
    ];

    const lowCaloriesDesserts = desserts
        .filter((dessert) => {
            return dessert.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <ListGroup.Item>{dessert.name} - {dessert.calories} cal</ListGroup.Item>
            )
        })

    return (
        <Container>
            <h1>List of low calorie desserts:</h1>
            <ListGroup>{lowCaloriesDesserts}</ListGroup>
        </Container>
    );
}