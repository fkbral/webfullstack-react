import { Container, Main } from '../../styles/common';
import Menu from '../Menu';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <Main>
      <Container>
        <Menu />
        {children}
      </Container>
    </Main>
  );
}
