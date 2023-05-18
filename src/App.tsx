import styled from "@emotion/styled";

import { TimelineBase, maxWidth, mediaQuery } from "./design-system";

function App() {
  const description =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <Container>
      <TimelineBase.Timeline>
        <TimelineBase.Item
          title="Reservoir Dogs"
          date="1993"
          description={description}
          readMoreLink="https://en.wikipedia.org/wiki/Reservoir_Dogs"
        />
        <TimelineBase.Item
          title="Reservoir Dogs"
          date="1993"
          description={description}
          readMoreLink="https://en.wikipedia.org/wiki/Reservoir_Dogs"
        />
        <TimelineBase.Item
          title="Reservoir Dogs"
          date="1993"
          description={description}
          readMoreLink="https://en.wikipedia.org/wiki/Reservoir_Dogs"
        />
      </TimelineBase.Timeline>
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
