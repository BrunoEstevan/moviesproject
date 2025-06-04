import styled from 'styled-components';

export const InputGroup = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ $isExpanded }) =>
    $isExpanded ? '#fffc' : 'transparent'};
  padding: 0px 0px;
  border: none;
  margin: 0;
  border-radius: 24px;
  gap: ${({ $isExpanded }) => ($isExpanded ? '8px' : '0')};
  transition: background-color 0.3s linear, gap 0.3s ease;
  overflow: hidden;

  ${({ $isExpanded }) =>
    !$isExpanded &&
    `
    width: fit-content;
  `}
`;

export const InputIcon = styled.div`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  border-radius: 100%;
  background-color: rgb(24, 40, 77);
  color: #fff;
  cursor: pointer;
`;


export const HiddenSearchBar = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  flex: 1;
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
