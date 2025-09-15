import styled from "styled-components";

export const MovieContainer = styled.section`
    padding: 2rem 3%;
    margin-left: 280px;
    min-height: calc(100vh - 80px);
    animation: fadeIn 0.6s ease-out;

    @media (max-width: 1200px) {
        margin-left: 200px;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1rem;
    }
`;

export const SubHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
    margin-bottom: 3rem;
    padding: 2rem 0;
    
    .title {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(45deg, #ffffff, #e2e8f0);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        animation: slideInLeft 0.8s ease-out;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
`;

export const ResultsInfo = styled.div`
    span {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        font-weight: 400;
    }
`;

export const FilterSection = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

export const MoviesGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    
    @media (max-width: 1400px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
`;

// Mantém compatibilidade com o código existente
export const MovieListUl = styled(MoviesGrid)``;

export const LoadMoreButton = styled.button`
    display: block;
    margin: 3rem auto;
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #6366f1, #8b5cf6);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    min-width: 200px;
    position: relative;
    overflow: hidden;
    
    &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
    }
    
    &:hover::before {
        left: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
`;