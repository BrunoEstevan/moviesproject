import styled from "styled-components";

export const MovieInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85) 70%);
  height: 50%;
  transition: all 0.4s ease;
  z-index: 1;
`;

export const MovieCardContainer = styled.li`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 420px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  cursor: pointer;
  animation: fadeIn 0.6s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
    border-color: rgba(99, 102, 241, 0.5);

    img {
      transform: scale(1.1);
      filter: brightness(0.7);
    }

    .poster-button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    ${MovieInfos} {
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.95) 60%);
    }
  }

  @media (max-width: 768px) {
    height: 360px;
  }
`;

export const MoviePoster = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-radius: 20px 20px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s ease;
    filter: brightness(0.9);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 40%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, 0, 0, 0.8) 100%
    );
    pointer-events: none;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  padding: 12px 24px;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  opacity: 0;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  backdrop-filter: blur(10px);
  z-index: 2;

  &:hover {
    background: linear-gradient(45deg, #5855f5, #7c3aed);
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 6px 30px rgba(99, 102, 241, 0.6);
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;

export const MovieTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8fafc;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HiddenContent = styled.div<{ $isVisible: boolean }>`
  max-height: ${({ $isVisible }) => ($isVisible ? "200px" : "0")};
  overflow: hidden;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: all 0.4s ease;
  margin-top: ${({ $isVisible }) => ($isVisible ? "1rem" : "0")};
`;

export const MovieDescription = styled.p`
  font-size: 0.9rem;
  color: #e2e8f0;
  line-height: 1.5;
  margin: 0;
  max-height: 120px;
  overflow-y: auto;
  padding-right: 8px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.6);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.8);
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
