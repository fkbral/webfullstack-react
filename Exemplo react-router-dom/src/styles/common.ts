import styled from 'styled-components';

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

    &:hover,
    &:focus,
    &:active {
      border-bottom-color: #1cbaa4;
    }
  }
`;
