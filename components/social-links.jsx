import * as React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = ({ color, github = false, twitter = false }) => (
  <div className="flex align-center text-white">
    {github && (
      <a
        href="https://github.com/greg-schrammel"
        aria-label="Gregory Schrammel on GitHub"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:opacity-75"
      >
        <FaGithub size="32px" color="white" />
      </a>
    )}
    {twitter && (
      <a
        href="https://twitter.com/O_Super_Gregory"
        aria-label="Gregory Schrammel on Twitter"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:opacity-75"
        style={github && { marginLeft: "32px" }}
      >
        <FaTwitter size="32px" color="white" />
      </a>
    )}
  </div>
);

export default SocialLinks;
