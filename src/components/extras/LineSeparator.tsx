interface lineProps {
    lineColor: string;
}

export const LineSeparator = ({lineColor} : lineProps) => {
    const colorClass = `line-${lineColor}`;
    return <div className={`line ${lineColor && colorClass}`}/>;
}