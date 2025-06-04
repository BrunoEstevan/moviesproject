import styled from "styled-components";

export const MovieContainer = styled.section`
    padding: 24px 3%;
    margin-left: 140px;


    @media (max-width: 768px) {
      margin-left: auto;
      
    }
`;

export const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 70px;
    margin-top: 60px;
`;

export const Title = styled.h1`
    font-size: 32px;
    
`;

export const MovieListUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 16px;
    list-style: none;
    width: 100%;
`;

export const LoadMoreButton = styled.button`
    display: block;
    margin: 50px auto;
    padding: 10px 20px;
    background-color:rgb(0, 26, 255);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;