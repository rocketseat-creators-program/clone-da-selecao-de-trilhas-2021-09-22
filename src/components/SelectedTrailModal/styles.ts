import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: 50px 64px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 36px;
    color: var(--text-title);
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    color: var(--text-body);
    line-height: 26px;
    margin-top: 20px;
  }

  footer {
    display: flex;
    margin-top: 28px;
    justify-content: flex-end;

    button:first-child {
      margin-right: 16px;
      background-color: var(--second-button);
      border-color: var(--second-button);
    }
  }
`;
