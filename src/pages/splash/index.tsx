import {
  Container,
  Link,
  Logo,
  LogoWrapper,
  Progress,
  SubTitle,
  Title,
} from "./styles";

type SplashPageProps = {
  progress: number;
};

export default function SplashPage(props: SplashPageProps) {
  const { progress } = props;

  return (
    <Container>
      <LogoWrapper>
        <Logo src="./Telegram_logo.png" alt="Telegram Logo" />
      </LogoWrapper>
      <Progress progress={progress} />
      <Title>Telegram</Title>
    </Container>
  );
}
