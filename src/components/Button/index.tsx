import styled, { css } from "styled-components";

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  height: 40px;
  color: #fff;
  padding: 10px;
  transition: filter 0.2s;

  ${({ color }) => css`
    background: ${color || "#8257E5"};
    border: 2px solid ${color || "#8257E5"};
  `}

  &:hover {
    filter: brightness(0.9);
  }
`;
