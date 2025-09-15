
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MovieRate, RatingValue, RatingContainer } from "./styles";

export type Props = {
    rating: number;
    showValue?: boolean;
    size?: 'small' | 'medium' | 'large';
}

export default function StarRating({ rating, showValue = true, size = 'small' }: Props) {
    const maxStars = 5;
    const normalizedRating = Math.max(0, Math.min(10, rating)) / 2; // Converte de 0-10 para 0-5
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 >= 0.5;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [
        ...Array(fullStars).fill('full'),
        ...(hasHalfStar ? ['half'] : []),
        ...Array(emptyStars).fill('empty')
    ];

    return (
        <RatingContainer>
            <MovieRate $size={size}>
                {stars.map((type, index) => {
                    switch (type) {
                        case 'full':
                            return <FaStar key={index} />;
                        case 'half':
                            return <FaStarHalfAlt key={index} />;
                        case 'empty':
                            return <FaRegStar key={index} />;
                        default:
                            return null;
                    }
                })}
            </MovieRate>
            {showValue && (
                <RatingValue $size={size}>
                    {rating.toFixed(1)}
                </RatingValue>
            )}
        </RatingContainer>
    );
}