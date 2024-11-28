import styled from "styled-components";

export const MovieCardContainer = styled.li`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c; 

  &:hover {
    cursor: pointer;

    img {
      opacity: 0.5;
    }

    .hidden-content {
      opacity: 1;
      height: auto; 
    }

    .poster-button {
      opacity: 1;
    }
  }
`;

export const MoviePoster = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.6s;
    opacity: 1;
  }
`;


export const StyledButton = styled.button`
  position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  background-color: #6046ff;
  padding: 6px 8px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: opacity 0.3s, background-color 0.3s;
  opacity: 0; 
  &:hover {
    background-color: #5037cc;
  }
`;

export const MovieInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(#00000000, #000000 90%);
  height: 200px;
  width: 100%;
`;

export const MovieTitle = styled.p`
  font-size: 12px;
  color: #f1f5f9;
`;

export const HiddenContent = styled.div<{ $isVisible: boolean }>`
  max-height: ${({ $isVisible }) => ($isVisible ? "100px" : "0")};
  overflow: hidden; 
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: all 0.6s;
`;

export const MovieDescription = styled.p`
  font-size: 14px;
  color: #fff;
  margin-top: 8px;
`;
