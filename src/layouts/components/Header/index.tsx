import ExploreModule from "./components/ExploreModule";
import Logo from "./components/Logo";
// import Nav from "./components/Nav";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <ExploreModule />
      {/* <Nav /> */}
    </header>
  )
}
export default Header
