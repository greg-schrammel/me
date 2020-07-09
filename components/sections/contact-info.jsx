import { FaExternalLinkAlt } from "react-icons/fa";

import SocialLinks from "../social-links";

export default function ContactInfo() {
  return (
    <address className="text-center py-12 bg-black flex flex-col items-center justify-center not-italic space-y-6">
      <h2 className="text-3xl font-bold text-white">
        Are you cool and have a fun project?
        <br />I would love to help!
      </h2>
      <a className="text-4xl md:text-5xl font-semibold p-3 flex items-center hover:opacity-75 font-cursive leading-none">
        g.schrammel@icloud.com&nbsp;
        <FaExternalLinkAlt size="0.4em" />
      </a>
      <SocialLinks twitter github />
      <style jsx>{`
        a {
          cursor: pointer;
          color: aquamarine;
        }
      `}</style>
    </address>
  );
}
