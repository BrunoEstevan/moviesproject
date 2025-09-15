import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: relative;
    margin-top: auto;
    width: 100%;
    color: #fff;
    padding: 3rem 0 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 1rem;
        gap: 2rem;
        text-align: center;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FooterTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    color: #f8fafc;
    margin: 0;
    background: linear-gradient(45deg, #6366f1, #8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
`;

export const FooterText = styled.p`
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    width: fit-content;
    
    &:hover {
        color: #6366f1;
        background: rgba(99, 102, 241, 0.1);
        transform: translateX(4px);
    }
    
    svg {
        transition: color 0.3s ease;
    }
`;

export const FooterBottom = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding: 2rem 1rem 0;
    }
`;