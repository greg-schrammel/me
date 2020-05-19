import * as React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const SOCIAL_ICON_SIZE = 32;

const SocialLinks = ({ color, github = false, twitter = false }) => (
  <div className="flex align-center">
    {github && (
      <a
        href="https://github.com/greg-schrammel"
        aria-label="Gregory Schrammel on GitHub"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub size={SOCIAL_ICON_SIZE} />
      </a>
    )}
    {twitter && (
      <a
        href="https://twitter.com/O_Super_Gregory"
        aria-label="Gregory Schrammel on Twitter"
        rel="noopener noreferrer"
        target="_blank"
        style={github && { marginLeft: SOCIAL_ICON_SIZE }}
      >
        <FaTwitter size={SOCIAL_ICON_SIZE} />
      </a>
    )}
    <style jsx>{`
      a {
        ${color && `color: ${color} !important;`}
        height: fit-content;
      }
    `}</style>
  </div>
);

export default SocialLinks;
