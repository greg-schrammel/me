import * as React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import SocialLinks from "../social-links";
import theme from "../../theme";

export default function ContactMe() {
  return (
    <address className="wrapper">
      <h2>
        If you think I can help your team <br /> hit me up!
      </h2>
      <a>
        g.schrammel@icloud.com&nbsp;
        <FaExternalLinkAlt size="0.75em" />
      </a>
      <SocialLinks color="white" twitter github />
      <style jsx>{`
        h2 {
          color: white;
          text-align: center;
          margin: 0;
        }
        a {
          font-size: 1.5rem;
          padding: 1rem;
          margin: 2rem 0;
          display: flex;
          align-items: center;
          color: aquamarine;

          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #a8ffe4, white, #a8ffe4);
          background-repeat: no-repeat;
          background-size: 80%;
          animation: animate 2s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: aquamarine;
        }

        @keyframes animate {
          0% {
            background-position: -500%;
          }
          100% {
            background-position: 500%;
          }
        }
        address {
          font-style: normal;
          padding-top: ${theme.space.large};
          padding-bottom: ${theme.space.large};
          background: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </address>
  );
}
