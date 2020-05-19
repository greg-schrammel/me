import * as React from "react";

import SocialLinks from "./social-links";
import theme from "../theme";

const Header = () => (
  <header className="wrapper flex space-between">
    <h2 className="flex wrap align-center">
      hello, I'm Gregory&nbsp;
      <span>and that's my resume</span>
    </h2>
    <SocialLinks color="black" twitter github />
    <style jsx>{`
      header {
        padding-top: ${theme.space.large};
        padding-bottom: ${theme.space.large};
      }
      h2 {
        margin-right: ${theme.space.x8};
        margin-bottom: 0;
      }
      span {
        font-size: 1.25rem;
        font-weight: 300;
      }
    `}</style>
  </header>
);

export default Header;
