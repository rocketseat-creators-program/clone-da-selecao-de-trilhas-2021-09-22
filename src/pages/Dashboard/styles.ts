import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 64px;

  @media (max-width: 750px) {
    padding: 32px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const IgniteContainer = styled.div`
  display: flex;
  margin-bottom: 48px;

  svg {
    width: 100%;
    max-width: 200px;
  }

  @media (max-width: 1224px) {
    svg {
      display: none;
    }
  }
`;
export const TextContainer = styled.div`
  padding: 24px;

  h1 {
    margin-bottom: 4px;
    font-size: 24px;
    color: var(--text-title);
  }

  p {
    color: var(--text-body);
  }
`;
export const Footer = styled.div`
  margin-top: 20px;

  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: var(--text-title);
  }
`;
