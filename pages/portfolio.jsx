import * as React from "react";

import Page from "../components/page";

import App from "../components/sections/app";
import TechILike from "../components/sections/tech-I-like";
import Projects from "../components/sections/projects";
import ContactInfo from "../components/sections/contact-info";
import SocialLinks from "../components/social-links";

export const config = {
  amp: true,
};

const wrapperStyle = "px-6 max-w-2xl lg:max-w-5xl mx-auto";

export default function Portfolio() {
  return (
    <Page
      title="Gregory Schrammel"
      description="Gregory Schrammel Portfolio"
      path="/portfolio"
      image="/assets/og-img.png"
      className="bg-white"
    >
      <header className={`${wrapperStyle} flex justify-between`}>
        <div className="flex flex-col">
          <h1 className="mt-20 text-4xl font-black">Hello, I'm Gregory</h1>
          <p className="text-lg font-medium text-gray-500 max-w-xl">
            <span className="text-gray-300">
              a nineteen-year-old, Brazilian 🇧🇷, developer.
            </span>
            <br />I like coffee, memes, computers, running, and psychology :)
          </p>
        </div>
        <SocialLinks
          twitter
          github
          linkedin
          color="black"
          className="hidden md:flex"
        />
      </header>

      <main className="flex flex-col space-y-20 my-20">
        <div className="s">
          <div className={`${wrapperStyle} mb-10 space-y-20`}>
            <App />
            <TechILike />
          </div>
        </div>

        <div className={`${wrapperStyle}`}>
          <Projects />
        </div>
      </main>

      <footer className="mt-32">
        <ContactInfo />
      </footer>

      <style jsx global>{`
        html {
          background-color: black;
        }
        .s {
          background-image: radial-gradient(
            70% 70% at 50% 100%,
            #e8e8e8 0,
            #fff 100%
          );
        }
        ::selection {
          background-color: rgba(255, 33, 96, 0.7);
          color: white;
        }
      `}</style>
    </Page>
  );
}
