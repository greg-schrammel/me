import * as React from "react";
import theme from "../../theme";

export default function MostUsed() {
  const containerRef = React.useRef();
  React.useEffect(() => {}, []);
  return (
    <section className="flex flex-column align-center">
      <h3>Tech I'm in love lately</h3>
      <div className="flex align-center" ref={containerRef}>
        <img src="assets/logos/typescript.svg" alt="typescript" />
        <img src="assets/logos/firebase.svg" alt="firebase" />
        <img src="assets/logos/nextjs.svg" alt="nextjs" />
        <img src="assets/logos/react.svg" alt="react" />
        <img src="assets/logos/xstate.svg" alt="xstate" />
        <img src="assets/logos/expo.svg" alt="expo" />
      </div>
      <style jsx>{`
        div {
          height: 75px;
          max-width: 100vw;
          overflow: hidden;
        }
        img {
          margin: 0 ${theme.space.x8};
          min-height: 100%;
          max-height: 100%;
        }
      `}</style>
    </section>
  );
}
