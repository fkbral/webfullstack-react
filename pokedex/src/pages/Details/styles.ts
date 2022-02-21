import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  margin: 11px 0px 23px;
`;

export const GoBack = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 13px 17px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface RowProps {
  column?: boolean;
}
export const Info = styled.div<RowProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center;
  font-size: 19px;
  margin-bottom: 23px;

  > label {
    font-weight: 600;
    margin-right: 9px;
  }

  > span {
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;

    > img:not(:first-child) {
      margin-left: 7px;
    }
  }

  img {
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
