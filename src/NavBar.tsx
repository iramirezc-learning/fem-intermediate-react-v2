import React from "react";
import { css, keyframes } from "@emotion/core";
import { Link } from "@reach/router";
import colors from "./colors";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const styles = {
  navbar: css`
    background-color: ${colors.dark};
    position: sticky;
    top: 0;
    z-index: 9;
  `,
  doggy: css`
    display: inline-block;
    font-size: 60px;

    &:hover {
      animation: 0.5s ${Spin} linear infinite;
    }
  `,
};

const NavBar = () => {
  return (
    <nav css={styles.navbar}>
      <header>
        <Link to="/">Adopt Me!</Link>
        <span aria-label="logo" role="img" css={styles.doggy}>
          🐶
        </span>
      </header>
    </nav>
  );
};

export default NavBar;
