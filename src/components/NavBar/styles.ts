import styled from "styled-components";

export const Navigation = styled.nav`
    background-color: #0f172a;
    position: absolute;
    display: flex;
    height: 60px;
    width: 100%;
    color: #fff;
    padding: 20px 3%;
    font-weight: 500;
    font-size: 1.5rem;
    z-index: 999;
    border-bottom :solid 3px #1a1a1a;
    
    @media (max-width: 768px) {
        height: 70px ;
        border-bottom: 3px solid #1a1a1a;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 32px;

    }
    
  
    `;