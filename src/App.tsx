import styled from "@emotion/styled";

import { Navbar, maxWidth, mediaQuery } from "./design-system";

function App() {
  return (
    <Container>
      <Navbar
        title="My Website"
        titleColor={"BlueDress"}
        items={[
          { name: "Home", link: "" },
          { name: "About", link: "" },
          { name: "Contact", link: "" },
        ]}
      />
    </Container>
  );
}

export default App;

const Container = styled.div({
  [mediaQuery.large]: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: maxWidth.medium,
  },
});
