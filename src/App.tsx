import styled from "@emotion/styled";

import { maxWidth, mediaQuery } from "./design-system";

function App() {
  return <Container>App</Container>;
}

export default App;

const Container = styled.div({
  [mediaQuery.large]: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
});
