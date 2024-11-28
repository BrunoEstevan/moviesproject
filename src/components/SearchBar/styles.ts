
import styled from 'styled-components';

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 8px 16px 8px 8px;
    border-radius: 24px;
    gap: 8px;
`;

export const InputIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    min-height: 32px;
    border-radius: 100%;
    background-color: #6046ff;
    color: #fff;
    cursor: pointer;
`;

export const InputField = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`;