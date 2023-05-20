import styled from "@emotion/styled";

import {
  Dropdown,
  Input,
  Workshop,
  maxWidth,
  mediaQuery,
} from "./design-system";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Animation" },
  { id: 4, name: "Comedy" },
  { id: 5, name: "Crime" },
  { id: 6, name: "Drama" },
  { id: 7, name: "Fantasy" },
  { id: 8, name: "Horror" },
  { id: 9, name: "Musical" },
  { id: 10, name: "Mystery" },
  { id: 11, name: "Romance" },
  { id: 12, name: "Science Fiction" },
  { id: 13, name: "Thriller" },
  { id: 14, name: "War" },
  { id: 15, name: "Western" },
];

function App() {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <Workshop>
        <Input label="Title" name="title" onChange={(e) => console.log(e)}/>
        <Dropdown
          label="Genre"
          name="genre"
          onChange={handleChange}
          options={genres}
          multiple
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
