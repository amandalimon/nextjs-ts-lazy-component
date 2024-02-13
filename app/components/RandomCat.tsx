import { useRef } from "react";

type Props = { image: string };

export const RandomCat = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);

    return (
        <img ref={node} width={350} height="auto" src={image} />
    )
}


