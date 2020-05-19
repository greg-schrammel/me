import * as React from "react";
import theme from "../../theme";

export default function SomeExperience() {
  return (
    <section className="wrapper flex-column text-center">
      <h3>Also have some experience with</h3>
      <div className="flex wrap align-center">
        <a>Java</a>
        <a>GraphQL</a>
        <a>Browser Extensions</a>
        <a>Go</a>
        <a>Docker</a>
        <a>Service Workers</a>
      </div>
      <style jsx>{`
        a {
          border-radius: 5px;
          background-color: ${theme.colors.accents_2};
          padding: ${theme.space.x2};
          margin: ${theme.space.x2};
        }
      `}</style>
    </section>
  );
}
