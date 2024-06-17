interface CardProps {
    id: number;
    name: string;
}

export const AddToCard = ({id, name} : CardProps) => {
    return console.log("Added product: " + name + " with id: " + id);
}