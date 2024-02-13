type Props = { image: string };

export const RandomCat = ({ image }: Props): JSX.Element => {
    return <img width={350} height="auto" src={image} />
}