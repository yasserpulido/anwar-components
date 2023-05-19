import styled from "@emotion/styled";

import { Textfield, Workshop, maxWidth, mediaQuery } from "./design-system";

function App() {
  return (
    <Container>
      <Workshop>
        <Textfield
          label="Description"
          name="description"
          onChange={(e) => console.log(e)}
          rows={2}
          disabled={false}
        />
      </Workshop>
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
