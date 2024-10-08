import React from "react";
import { MOBILE_BREAKPOINT } from "src/types/types";
import styled, { css } from "styled-components";

import colorSet from "../../styles/colorSet";

export enum ButtonVariant {
  outlined = "outlined",
  contained = "contained",
  navbar = "navbar",
  navbarChild = "navbarChild",
  taskItem = "taskItem",
  postItem = "postItem",
}

interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];
  disabled?: boolean;
  variant?: ButtonVariant;
  animated?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : undefined)};
  height: ${({ height }) => (height ? height : undefined)};
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: 0.1s;
  line-height: 0;
  color: inherit;

  ${({ variant }) => {
    if (variant) {
      return css`
        border-radius: 5px;
        padding: 10px 20px;

        @media (max-width: ${MOBILE_BREAKPOINT}) {
          padding: 3px 10px;
        }
      `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case ButtonVariant.outlined:
        return css`
          border: 1px solid ${colorSet.primary};
          color: ${colorSet.primary};

          :hover {
            background-color: ${colorSet.secondary};
          }
        `;
      case ButtonVariant.contained:
        return css`
          background-color: ${colorSet.primary};
          color: ${colorSet.colorless};

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.navbar:
        return css`
          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.navbarChild:
        return css`
          background: gray;
          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
      case ButtonVariant.taskItem:
        return css`
          border: 1px solid ${colorSet.outlines};
          color: ${colorSet.colorless};
          padding: 10px;
          background-color: white;
          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
            border: 1px solid ${colorSet.outlines};
          }
        `;
      case ButtonVariant.postItem:
        return css`
          border: 2px solid ${colorSet.outlines};
          color: black;
          padding: 10px;
          background-color: #fffff0;
          border-radius: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          :hover {
          }
        `;
    }
  }}
  ${({ border }) => css`
    border: ${border};
  `}
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `}
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
    border: none;
  }

  ${({ animated }) =>
    animated &&
    css`
      &:active {
        transform: scale(0.95);
      }
    `}
`;

export default Button;
