import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

export default function ListOfGoals(props) {
    return (
        <UnorderedList>
            {props.allGoals.map((g) => (
                <ListItem key={g.goal}>
                    <Text>My goal is to {g.goal}, by{g.by}</Text>
                </ListItem>
            ))}
        </UnorderedList>
    )
}