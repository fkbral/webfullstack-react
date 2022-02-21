import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 87px;
`;

export const SearchContainer = styled.div`
  position: fixed;
  top: 0px;
  background: #fff;
  display: flex;
  flex: 1;
  width: 920px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 23px 27px;

  > input {
    width: 45%;
    padding: 11px 9px;
    margin-right: 11px;
  }

  > button {
    padding: 11px;
    margin-right: 11px;
  }
`;

export const ListFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 27px 0px;
`;

export const LoadMoreButton = styled.button`
  padding: 11px 19px;
  cursor: pointer;
`;
