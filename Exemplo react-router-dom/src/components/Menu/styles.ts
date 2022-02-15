import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Primary } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 19px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  padding: 19px 11px;

  &:hover {
    background-color: ${Primary};
    color: #fff;
  }
`;
