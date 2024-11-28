import styled from "styled-components";

export const MovieContainer = styled.section`
    padding: 24px 3%;
`;

export const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 24px;
`;

export const Title = styled.h1`
    font-size: 32px;
`;

export const MovieListUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    list-style: none;
    width: 100%;
`;