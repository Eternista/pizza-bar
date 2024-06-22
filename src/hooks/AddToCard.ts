interface CardProps {
    id: number;
    name: string;
    cost: number;
}

export const AddToCard = ({id, name, cost} : CardProps) => {
    return console.log("Added product: " + name + " with id: " + id + "; Cost: " + cost);
}