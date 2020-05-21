import * as React from "react";

import Page from "../components/page";
import IphoneApp from "../components/tailwind/iphone-app";
import Code from "../components/tailwind/code";
import Scroller from "../components/tailwind/scroller";
import Logo from "../components/tailwind/logo";
import Store from "../components/tailwind/store";

import { getCLS, getFID, getLCP } from "web-vitals";

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
}

export const config = {
  amp: true,
};

export default function Tailwind() {
  return (
    <Page
      title="Tailwind Application"
      description="Thats my application for Tailwind"
      path="/tailwind"
    >
      <main className="px-6 max-w-2xl lg:max-w-5xl mx-auto flex flex-col space-y-20">
        <div className="space-y-8">
          <div className="pt-16">
            <h1 className="text-4xl font-black text-center md:text-left">
              Hello, I'm Gregory{" "}
              <span className="font-bold text-2xl text-gray-700 align-middle">
                and this is
              </span>
            </h1>
          </div>

          <h1 className="text-5xl md:text-hero font-black text-center">
            My <mark className="text-tailwind">Tailwind UI</mark>
            <br />
            Application
          </h1>

          <p className="text-2xl font-medium text-gray-700 text-center">
            I'm 19, Brazilian 🇧🇷 and really enjoy
            <br />
            the process of building a product
          </p>
        </div>

        <div className="flex items-center flex-wrap">
          <div className="max-w-lg mx-auto">
            <h2 className="font-black text-3xl max-w-lg">
              Here is an app MVP I worked on
            </h2>
            <p className="font-semibold text-2xl text-gray-500 mb-4">
              It's a file storage app, just like dropbox
            </p>
            <p className="font-semibold text-xl text-gray-500">
              Made with React Native and Firebase, managing state with XState
              and React Context
            </p>
          </div>
          <IphoneApp />
        </div>

        <div className="text-center pb-8">
          <h2 className="font-semibold text-2xl text-gray-500 mb-8">
            This is the tech I'm most excited about lately
          </h2>
          <Scroller initScrollWidth="1260px" className="h-24">
            <Logo name="typescript" src="typescript" />
            <Logo name="nextjs" />
            <Logo name="framer-motion" src="framer-motion" />
            <Logo name="expo" />
            <Logo name="firebase" src="firebase" />
            <Logo name="xstate" />
          </Scroller>
        </div>

        <Code.Window className="mx-auto max-w-2xl">
          <Code.Md># Let's migrate the docs to Nextjs + MDX!</Code.Md>
          <br />
          And we could make it interactive
          <br />
          <br />
          <Code.Reserved>export</Code.Reserved>&nbsp;
          <Code.Reserved2>const</Code.Reserved2> <Code.Var>meta</Code.Var>
          &nbsp;=&nbsp;{"{"}
          <br />
          &nbsp;&nbsp;<Code.Var>author:</Code.Var>&nbsp;
          <Code.String>'Gregory'</Code.String>,
          <br />
          {"}"};
        </Code.Window>

        <div className="text-center">
          <h2 className="font-black text-3xl ">
            I can help to build the official React lib
          </h2>
          <h3 className="font-semibold text-2xl text-gray-700">
            and I want to learn Vue :)
          </h3>
          <Code.Window className="mt-8 max-w-2xl ml-auto">
            <Code.Reserved>import</Code.Reserved>&nbsp;
            <Code.Reserved2>*</Code.Reserved2>&nbsp;
            <Code.Reserved>as</Code.Reserved>&nbsp;
            <Code.Var>React</Code.Var>&nbsp;
            <Code.Reserved>from</Code.Reserved>&nbsp;
            <Code.String>'react'</Code.String>
            <br />
            <br />
            <Code.Reserved>export</Code.Reserved>&nbsp;
            <Code.Reserved2>const</Code.Reserved2>&nbsp;
            <Code.Function>TailwindUI</Code.Function>
            {" = () => {"}
            <br />
            &nbsp;&nbsp;<Code.Reserved>return</Code.Reserved>&nbsp;
            <Code.String>'I'm very confortable doing React'</Code.String>;
            <br />
            {"}"}
          </Code.Window>
        </div>

        <h1 className="font-bold text-gray-600 text-center text-2xl mx-auto max-w-xl">
          I can help with the growth to portuguese speaking countries
          <br />
          (Theres a big market here in Brazil)
        </h1>

        <div className="text-center space-y-8 py-8">
          <h2 className="font-bold text-3xl">
            I also have some experience building
            <br />
            and optimizing ecommerce sites
            <br />
            on shopify
          </h2>
          <h3 className="font-semibold text-2xl text-gray-600">
            I'm very interested in psychology and marketing as well
          </h3>
          <Store />
        </div>

        <div className="py-8">
          <h2 className="font-semibold text-4xl text-center">
            I really care about building <br />a{" "}
            <b className="font-black">great</b> piece of software
          </h2>
        </div>

        <div className="text-2xl max-w-xl lg:max-w-2xl mx-auto">
          <h2 className="text-center font-semibold text-gray-500 mb-6">
            Professional Experience
          </h2>
          <h3 className="text-3xl font-bold">
            Fullstack dev at{" "}
            <a
              href="https://syonet.com.br/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Syonet
            </a>
          </h3>
          <ul className="font-regular mt-4 text-gray-800 text-xl space-y-6">
            <li>
              Designed and developed several performant, clean, easy to use and
              to maintain, REST APIs and User Interfaces, leveraging Java Spring
              and React
            </li>
            <li>
              Dockerized development environment, reducing long times to set
              things up enabling any newcomer to get going fast
            </li>
            <li>
              Built and fixed CI pipelines ensuring we wouldn't be screwing
              things up in production
            </li>
          </ul>
        </div>

        <div className="text-center text-2xl">
          <h2 className="font-semibold text-gray-500">
            Tech I have some experience with
          </h2>
          <div className="flex flex-wrap justify-center align-center font-bold space-y-6 space-x-6 mx-auto max-w-3xl">
            <a className="mt-6">Java</a>
            <a>GraphQL</a>
            <a>Browser Extensions</a>
            <a>Go</a>
            <a>React</a>
            <a>Node</a>
            <a>Typescript</a>
            <a>Docker</a>
          </div>
        </div>

        <div className="text-center text-3xl mx-auto max-w-xl pt-20">
          <h1 className="font-bold mb-6">
            I would love to be a part in building the future of Tailwind
          </h1>
        </div>

        <div className="h-32"></div>
      </main>
      <style jsx global>{`
        html {
          background-color: #181818; /* find way of using from tailwind theme */
          color: white;
        }
        ::selection {
          background-color: rgba(22, 189, 202, 0.7);
          color: white;
        }
      `}</style>
    </Page>
  );
}
