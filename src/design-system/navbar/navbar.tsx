import styled from "@emotion/styled";
import { colors } from "../theme";

type Item = {
  /**
   * The name of the item
   */
  name: string;
  /**
   * The link of the item
   */
  link: string;
  /**
   * The onClick event of the item
   */
  onClick?: () => void;
};

type Title = {
  /**
   * The name of the title
   */
  name: string;
  /**
   * The color of the title
   */
  color?: keyof typeof colors;
  /**
   * The link of the title
   */
  link: string;
};

type Props = {
  /**
   * The title of the navbar
   */
  title: Title;
  /**
   * The items of the navbar
   */
  items: Item[];
};

/**
 * The Navbar component is used to display a navigation bar.
 */
export const Navbar = ({
  title: { color = "Black", ...title },
  items,
}: Props) => {
  return (
    <Nav>
      <Logo color={color} href="/">
        {title.name}
      </Logo>
      <NavList>
        {items.map((item) => (
          <NavItem key={item.name}>
            <Link href={item.link} onClick={item.onClick}>
              {item.name}
            </Link>
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

const Logo = styled.a(({ color }: TitleProps) => ({
  fontWeight: "bold",
  color: colors[color],
  textDecoration: "none",
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
