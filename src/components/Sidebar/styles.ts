import styled from 'styled-components';

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 80px);
  width: ${({ $isOpen }) => ($isOpen ? '280px' : '60px')};
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  overflow: hidden;

  /* Scrollbar personalizada
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.6);
    border-radius: 3px;
  } */

  @media (max-width: 768px) {
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
    width: 280px;
  }
`;

export const ToggleIcon = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  width: 44px;
  height: 44px;
  background: ${({ $isOpen }) => 
    $isOpen 
      ? 'linear-gradient(45deg, #ef4444, #dc2626)' 
      : 'linear-gradient(45deg, #6366f1, #8b5cf6)'
  };
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.6);
  }

  svg {
    color: white;
    transition: transform 0.3s ease;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    color: #6366f1;
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: #f8fafc;
  background: linear-gradient(45deg, #ffffff, #e2e8f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SwitchTheme = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 0.75rem 1rem;
  color: #f8fafc;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  width: 100%;
  margin-bottom: 2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #6366f1;
    transform: translateY(-2px);
  }

  svg {
    color: #fbbf24;
  }
`;

export const GenreGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

export const FilterButton = styled.button<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ $isSelected }) => 
    $isSelected 
      ? 'linear-gradient(45deg, #6366f1, #8b5cf6)' 
      : 'rgba(255, 255, 255, 0.05)'
  };
  border: 1px solid ${({ $isSelected }) => 
    $isSelected 
      ? 'rgba(99, 102, 241, 0.5)' 
      : 'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 12px;
  color: #f8fafc;
  padding: 0.75rem 1rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;

  .genre-icon {
    font-size: 1.2rem;
    min-width: 24px;
  }

  .genre-name {
    flex: 1;
  }

  &:hover {
    background: ${({ $isSelected }) => 
      $isSelected 
        ? 'linear-gradient(45deg, #5855f5, #7c3aed)' 
        : 'rgba(255, 255, 255, 0.15)'
    };
    transform: translateY(-2px);
    border-color: #6366f1;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ContentFilters = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-20px')});
  transition: all 0.4s ease 0.1s;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  padding-top: 3rem;
`;

export const ClearFiltersButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #ef4444, #dc2626);
  border: none;
  border-radius: 8px;
  color: white;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #dc2626, #b91c1c);
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  }

  svg {
    font-size: 0.9rem;
  }
`;

// Mantém compatibilidade
export const SwitchThenme = styled(SwitchTheme)``;