import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ModalContainer = styled.div`
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  animation: modalSlideIn 0.3s ease-out;
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.6);
    border-radius: 4px;
  }
`;

export const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: linear-gradient(to bottom, rgba(30, 41, 59, 0.9), transparent);
  backdrop-filter: blur(10px);
  z-index: 10;
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 0 2rem 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem 1rem;
  }
`;

export const MoviePoster = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #fff;
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #ffffff, #e2e8f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MovieMeta = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  span {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

export const GenreList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const GenreTag = styled.span`
  padding: 0.5rem 1rem;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #fff;
  border: none;
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const ActionButton = styled.button<{ $isFavorite?: boolean; $isPrimary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  border: none;
  
  ${({ $isPrimary, $isFavorite }) => {
    if ($isPrimary) {
      return `
        background: linear-gradient(45deg, #6366f1, #8b5cf6);
        color: #fff;
        
        &:hover {
          background: linear-gradient(45deg, #5855f5, #7c3aed);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }
      `;
    }
    
    if ($isFavorite) {
      return `
        background: linear-gradient(45deg, #ef4444, #dc2626);
        color: #fff;
        
        &:hover {
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);
        }
      `;
    }
    
    return `
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
      }
    `;
  }}
  
  &:active {
    transform: translateY(0);
  }
`;