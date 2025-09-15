 
import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const MovieRate = styled.div<{ $size: 'small' | 'medium' | 'large' }>`
    display: flex;
    gap: 2px;
    align-items: center;

    svg {
        color: #fbbf24;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        transition: color 0.3s ease;
        
        font-size: ${({ $size }) => {
            switch ($size) {
                case 'small': return '0.9rem';
                case 'medium': return '1.1rem';
                case 'large': return '1.3rem';
                default: return '0.9rem';
            }
        }};
    }
`;

export const RatingValue = styled.span<{ $size: 'small' | 'medium' | 'large' }>`
    color: #e2e8f0;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    
    font-size: ${({ $size }) => {
        switch ($size) {
            case 'small': return '0.8rem';
            case 'medium': return '0.9rem';
            case 'large': return '1rem';
            default: return '0.8rem';
        }
    }};
`;