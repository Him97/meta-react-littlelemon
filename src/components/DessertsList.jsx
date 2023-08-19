import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'

export default function DessertsList(props) {
    const lowCaloriesDesserts = props.data
        .filter((dessert) => {
            return dessert.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <ListItem>{dessert.name} - {dessert.calories} cal</ListItem>
            )
        })

    return (
        <UnorderedList>{lowCaloriesDesserts}</UnorderedList>
    );
}