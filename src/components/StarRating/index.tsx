import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { MovieRate } from "./styles";

export type Props = {
    rating: number,
}


export default function StarRating(props: Props)  {
    const numStars = Math.round(props.rating / 2);

    const starsArrayGordo = [];
    const starsArrayMagro = [];

    for (let i = 0; i < 5; i++) {
        if (i < numStars) {
            starsArrayGordo.push(i);
        } else {
            starsArrayMagro.push(i);
        }
    }

    return (
        <MovieRate>
            {starsArrayGordo.map(index => <FaStar key={index} />)}
            {starsArrayMagro.map((index: number) => <FaRegStar key={index} />)}
        </MovieRate>
    );
}