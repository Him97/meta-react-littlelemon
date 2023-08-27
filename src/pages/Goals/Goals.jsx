import { Container } from 'react-bootstrap';
import { useState } from 'react';
import GoalForm from './GoalForm';
import ListOfGoals from './GoalsList';

export default function Goals() {
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

    return (
        <Container>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </Container>
    )
}