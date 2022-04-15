import { Container, GithubButton, GithubRedirect } from "./styles";

export const GitHubSection = () => {
  return (
    <Container>
      <GithubRedirect>Ou entre com</GithubRedirect>
      <GithubButton type="button">Github</GithubButton>
    </Container>
  );
};
