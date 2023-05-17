import styled from "@emotion/styled";
import { colors } from "../theme";

type Item = {
  name: string;
  link: string;
};

type Props = {
  title: string;
  titleColor?: keyof typeof colors;
  items: Item[];
};

export const Navbar = ({ title, titleColor, items }: Props) => {
  console.log(titleColor);
  return (
    <Nav>
      <Title color={titleColor}>{title}</Title>
      <NavList>
        {items.map((item) => (
          <NavItem key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem",
}));

type TitleProps = {
  color: keyof typeof colors;
};

const Title = styled.span(({ color }: TitleProps) => ({
  fontWeight: "bold",
  color: colors[color],
}));

const NavList = styled.ul(() => ({
  display: "flex",
  listStyle: "none",
  gap: "1rem",
}));

const NavItem = styled.li(() => ({}));

const Link = styled.a(() => ({
  textDecoration: "none",
  color: colors.DoveGrey,

  "&:hover": {
    color: colors.Black,
  },
}));
