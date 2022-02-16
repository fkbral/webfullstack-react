import styled from 'styled-components';
import Button from '../../components/Button';

export const SelectedThemeText = styled.span`
  color: ${(props) => props.theme.text};
  margin-bottom: 23px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  margin-bottom: 23px;
`;

export const RedButton = styled(Button)`
  background-color: #f45;
`;
