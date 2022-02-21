import { CenterContainer, Container } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <CenterContainer>
      <Container>{children}</Container>
    </CenterContainer>
  );
}
