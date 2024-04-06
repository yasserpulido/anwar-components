import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { Star as star, Favorite as favorite } from "grommet-icons";

import { colors } from "../theme/colors";
import { Anchor } from "../anchor";

type Media = {
  id: number;
  title: string;
  year: number;
  description: string;
  rating: number;
  favorite: boolean;
  anchorPath?: string;
};

type Props = {
  media: Media;
};

export const Item = ({ media }: Props) => {
  const { description, favorite, id, rating, title, year, anchorPath } = media;

  const [shortDescription, setShortDescription] = useState<string>(description);
  const stars = [];

  useEffect(() => {
    if (description.length > 200) {
      const result = description.substring(0, 200) + "...";
      setShortDescription(result);
    }
  }, [description]);

  if (rating !== undefined && rating !== 0) {
    for (let i = 0; i < rating; i++) {
      stars.push(<Star key={`${i}-item-${id}`} color={colors.Salmon} />);
    }
    for (let i = rating; i < 5; i++) {
      stars.push(<StarEmpty key={`${i}-item-${id}`} />);
    }
  }

  return (
    <Container>
      <Header>
        <LeftSide>
          <Title>{title}</Title>
          <Date>{year.toString()}</Date>
        </LeftSide>
        {favorite && <Favorite />}
      </Header>
      <Description>{shortDescription}</Description>
      <Footer>
        {stars && <div>{stars}</div>}
        {anchorPath && <Anchor href={anchorPath} text="Read more" />}
      </Footer>
    </Container>
  );
};

const Container = styled.article({
  border: `1px solid ${colors.DoveGrey}`,
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  boxShadow: "4px 4px 0px 0px rgb(0, 0, 0)",
});

const Header = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LeftSide = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Favorite = styled(favorite)({
  "path[fill='none']": {
    fill: colors.Salmon,
  },
  "path[stroke='#000']": {
    stroke: colors.Salmon,
  },
});

const Title = styled.h2({
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const Date = styled.span({
  fontWeight: "bold",
  fontSize: "0.8rem",
});

const Description = styled.p({
  textAlign: "end",
  lineHeight: "1.2rem",
});

const Footer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Star = styled(star)({
  "path[fill-rule='evenodd']": {
    fill: colors.ArylideYellow,
  },
});

const StarEmpty = styled(star)({
  "path[fill-rule='evenodd']": {
    fill: colors.Mercury,
  },
});
