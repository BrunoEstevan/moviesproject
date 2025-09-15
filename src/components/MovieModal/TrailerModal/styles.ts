import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(2px);
  display: grid;
  place-items: center;
  z-index: 1300; /* acima do MovieModal */
  animation: fadeIn 0.2s ease;
`;

export const Dialog = styled.div`
  width: min(1200px, 92vw);
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 10px 40px var(--shadow-color);
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  background: transparent;
`;

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 8px;
  padding: 6px;
  transition: background .2s ease, transform .1s ease;

  &:hover { background: rgba(255,255,255,0.08); }
  &:active { transform: scale(0.98); }
`;

export const VideoWrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  background: #000;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;