import styled, { css } from "styled-components";

interface ContainerProps {
  readonly colorBorder: string;
}

interface ContentProps {
  readonly textColor: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  background-color: var(--modal-background);
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    ${({ colorBorder }) => colorBorder}
  );

  svg {
    min-width: 178px;
  }

  @media (max-width: 1330px) {
    svg:first-child {
      display: none;
    }
  }
`;

export const ContainerImage = styled.div`
  svg {
    position: absolute;
    bottom: -9px;
  }
`;

export const InvisibleDiv = styled.div`
  width: 500px;

  @media (max-width: 1330px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  padding: 32px 32px 74px;

  h1 {
    font-size: 24px;
    line-height: 34px;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 26px;
    color: var(--text-body);
  }
`;

export const Footer = styled.div`
  margin-top: 24px;
  display: inline-block;

  span {
    font-size: 16px;
    line-height: 26px;
    color: var(--text-body);
  }

  strong {
    color: var(--text-highlight);
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 24px;
      color: var(--text-title);
    }

    span:last-child {
      ${({ textColor }) => css`
        color: ${textColor || "#FFF"};
        font-weight: bold;
        margin-left: 5px;
      `}
    }

    svg {
      min-width: 0px;
    }

    a {
      color: ${({ color }) => color};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const VideoContainer = styled.div`
  padding: 32px 26px;
  cursor: pointer;

  div {
    width: 352px;
    height: 200px;
    border-radius: 5px;
  }

  button {
    margin-top: 16px;
    width: 100%;
  }
`;
