import styled from "@emotion/styled";
import { colors } from "../theme";

type Item = {
  name: string;
  link: string;
};

type Props = {
  logo: string;
  items: Item[];
};

export const Navbar = ({ logo, items }: Props) => {
  return (
    <Nav>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
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
  padding: "1.5rem 0",
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
