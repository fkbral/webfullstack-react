import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.background};
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column !important;
  margin-bottom: 17px;

  > label {
    font-weight: 600;
    margin-bottom: 7px;
  }

  > input {
    padding: 11px;
    border: none;
    border-bottom: 1px #ccc solid;
    background: transparent;

    &:hover,
    &:focus,
    &:active {
      border-bottom-color: ${(props) => props.theme.input.hoverColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
  margin-bottom: 9px;
`;
