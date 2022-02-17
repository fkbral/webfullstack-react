import styled from 'styled-components';
import Button from '../../components/Button';

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: #ccc solid 2px;
`;

export const PersonInfosContainer = styled.div`
  flex: 1;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 0px;
  color: ${(props) => props.theme.text};

  > label {
    font-weight: 600;
    margin-right: 11px;
    color: ${(props) => props.theme.primary};
  }

  > p {
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 13px;
`;

export const RedButton = styled(Button)`
  background-color: #f45;
  border-color: #f45;
  margin: 0px 11px;

  &:hover {
    color: #f45;
  }
`;
