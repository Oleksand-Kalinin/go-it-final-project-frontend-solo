import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";
import css from "./WelcomeSection.module.css";
import useResponsive from "../../hooks/useResponsive.ts";

const WelcomeSection = () => {
  const { isTablet, isDesktop } = useResponsive();

  let marginBottom: string;
  if (isDesktop) {
    marginBottom = "132px";
  } else if (isTablet) {
    marginBottom = "50px";
  } else {
    marginBottom = "74px";
  }

  return (
    <>
      <Logo marginBottom={marginBottom} />
      <div className={css.wrapper}>
        <p className={css.textHomePage}>Record daily water intake and track</p>
        <h1 className={css.titleHomePage}>Water consumption tracker</h1>
        <nav className={css.nav}>
          <Link to="/signup" className={css.itemNav}>
            Try tracker
          </Link>
          <Link to="/signin" className={css.itemNav}>
            Sign In
          </Link>
        </nav>
      </div>
    </>
  );
};

export default WelcomeSection;