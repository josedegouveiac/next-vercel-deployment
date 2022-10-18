import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
{/*       
      <ActiveLink href="/" text="Home" />
      <ActiveLink href="/about" text="About" />
      <ActiveLink href="/contact" text="Contact" /> */}
    {
     menuItems.map(({text, href}) => (
      <ActiveLink key={href} href={href} text={text} />

     ))
    }
    </nav>
  );
};
