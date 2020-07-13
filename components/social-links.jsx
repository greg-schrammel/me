import * as React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ href, color, size, icon: Icon, ariaLabel }) => (
  <a href={href} aria-label={ariaLabel} className="hover:opacity-75">
    <Icon size={size} color={color} />
  </a>
);

const SocialLinks = ({
  color,
  size = "32px",
  className = "",
  github = false,
  twitter = false,
  linkedin = false,
}) => (
  <div className={"flex items-center space-x-12 " + className}>
    {github && (
      <SocialLink
        icon={FaGithub}
        href="https://github.com/greg-schrammel"
        ariaLabel="Gregory Schrammel on GitHub"
        color={color}
        size={size}
      />
    )}
    {twitter && (
      <SocialLink
        icon={FaTwitter}
        href="https://twitter.com/O_Super_Gregory"
        ariaLabel="Gregory Schrammel on Twitter"
        color={color}
        size={size}
      />
    )}
    {linkedin && (
      <SocialLink
        icon={FaLinkedin}
        href="https://www.linkedin.com/in/gregory-s-88806a130/"
        ariaLabel="Gregory Schrammel on Linkedin"
        color={color}
        size={size}
      />
    )}
  </div>
);

export default SocialLinks;
