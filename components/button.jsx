import * as React from "react";
import css from "styled-jsx/css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useAmp } from "next/amp";
import Link from "next/link";
import theme from "../theme";

const btnStyles = css`
  .button {
    width: fit-content;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem 3rem;

    border-radius: 7px;

    border: none;
    color: white !important;
    background-color: ${theme.colors.success};
    font-size: 1.3rem;
    user-select: none;
    box-shadow: ${theme.shadow.medium};
    outline: none;
  }
  .button:active {
    opacity: 0.9;
  }
  .button:hover {
    filter: brightness(115%);
  }
  a:hover {
    opacity: 1;
  }
  .outlined {
    font-size: 1rem;
    background-color: white;
    border: solid 1px ${theme.colors.success};
    color: ${theme.colors.success} !important;
    box-shadow: none;
    padding: 0.8rem 1.2rem;
  }
  .outlined:hover {
    transform: "none";
    background: ${theme.colors.success_light};
    border-color: ${theme.colors.success};
  }
  .widthAuto {
    width: auto;
  }
  .rounded {
    border-radius: 52px;
    font-weight: 700;
  }
`;

const Button = ({
  children,
  href,
  outlined,
  as,
  stretch,
  rounded,
  ...props
}) => {
  const isAmp = useAmp();
  const classNames = `button ${outlined && "outlined"} ${stretch && "widthAuto"}
  ${rounded && "rounded"}`;
  const openInNewTab = { target: "_blank", rel: "noopener noreferrer" };
  if (href) {
    const isExternal = href.startsWith("http") | href.startsWith("mailto");
    const a = (
      <a
        className={classNames}
        href={href}
        {...(isExternal && openInNewTab)}
        {...props}
      >
        {children}
        <style jsx>{btnStyles}</style>
      </a>
    );

    return isAmp || isExternal ? (
      a
    ) : (
      <Link href={href} as={as} passHref>
        {a}
      </Link>
    );
  }

  return (
    <button type="button" className={classNames} {...props}>
      <span className="text">{children}</span>
      <style jsx>{btnStyles}</style>
    </button>
  );
};

export default Button;
