import styled from 'styled-components';

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $isOpen }) => ($isOpen ? '150px' : '60px')};
  background-color: #0f172a;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  padding: ${({ $isOpen }) => ($isOpen ? '80px 20px 20px' : '20px')};
  gap: 15px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transition: width 0.4s ease, padding 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #ecf0f1;
`;

export const FilterButton = styled.button`
  background-color: #34495e;
  border: none;
  border-radius: 5px;
  color: #ecf0f1;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #1abc9c;
  }
`;

export const ContentFilters = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 25%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition : opacity 0.25s ease 0s, transform 0.3s ease 0.2s;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '40px')});
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  
`;

export const ToggleIcon = styled.div`
  position: fixed;
  top: 18%;
  width: 40px;
  height: 40px;
  background-color:rgb(66, 14, 161);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const  SwitchThenme = styled.div`

  position: absolute;
  bottom: 200px;
  left: 50%;
  justify-content: center;
  transform: translateX(-50%);
  display: flex;
  width: 50px;
  
`;