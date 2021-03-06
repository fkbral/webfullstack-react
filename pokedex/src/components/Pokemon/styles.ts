import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 11px;
  border: 2px #fff solid;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  &:hover {
    border: 2px #f3f3f3 solid;
    background: #f3f3f3;
  }

  > img {
    margin-bottom: 17px;
  }

  > span {
    font-size: 19px;
  }
`;
