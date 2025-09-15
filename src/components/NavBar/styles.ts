import styled from "styled-components";

export const Navigation = styled.nav`
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 80px;
    width: 100%;
    color: #fff;
    padding: 0 2rem;
    font-weight: 500;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
        height: 70px;
        padding: 0 1rem;
    }
`;

export const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    
    span {
        background: linear-gradient(45deg, #6366f1, #8b5cf6);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    &:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
        span {
            display: none;
        }
    }
`;

export const SearchContainer = styled.div`
    flex: 1;
    max-width: 500px;
    margin: 0 2rem;
    
    @media (max-width: 768px) {
        max-width: 200px;
        margin: 0 1rem;
    }
    
    @media (max-width: 480px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    
    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }
    
    &:focus {
        border-color: #6366f1;
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }
`;

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    
    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

export const ThemeToggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.2rem;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
`;

export const UserSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        span {
            display: none;
        }
        padding: 0.5rem;
    }
`;