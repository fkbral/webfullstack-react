import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  backgroundColor?: string;
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 11px 0px;
  font-size: 17px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#1cbaa4'};

  color: #fff;
  border-style: solid;
  border-color: #1cbaa4;
  border-radius: 7px;

  ${(props) =>
    props.disabled
      ? css`
          background-color: #ccc;
          border-color: #333;
        `
      : css`
          &:hover {
            background-color: #fff;
            color: #1cbaa4;
          }
        `}
`;
