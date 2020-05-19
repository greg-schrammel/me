import * as React from "react";
import Button from "../button";
import theme from "../../theme";

const writeToClipboard = (email) =>
  navigator.clipboard.writeText(email).then(() => {
    const done = document.getElementById("copied");
    done.style.opacity = 1;
    done.style.display = "unset";
    setTimeout(() => {
      done.style.opacity = 0;
      done.style.display = "none";
    }, 3000); // 5seg
  });

const EmailMe = ({ email = "g.schrammel@icloud.com" }) => (
  <div className="flex flex-column">
    <h3>Working on something cool that I can help?</h3>
    <Button stretch rounded href={`mailto:${email}`}>
      Email me
    </Button>
    <a onClick={() => writeToClipboard(email)} className="text-center">
      Or just copy my email to clipboard
      <span id="copied"> nice!</span>
    </a>
    <style jsx>{`
      h3 {
        text-align: center;
        margin-bottom: ${theme.space.x4};
      }
      a {
        font-size: 1.2rem !important;
        padding: ${theme.space.x4};
        margin-top: ${theme.space.x2};
      }
      #copied {
        font-size: 1.2rem;
        color: ${theme.colors.done};
        opacity: 0;
        display: none;
        transition: opacity 0.2s ease-in-out;
      }
    `}</style>
  </div>
);

function AppPreview() {
  // const [isPhoneInFront, setIsPhoneInFront] = React.useState(true);
  return (
    <div className="flex relative container flex-column align-center">
      <div
        className="phone-container"
        // onClick={() => setIsPhoneInFront(true)}
        // style={{ zIndex: isPhoneInFront ? 1 : 0 }}
      >
        <div className="iphone">
          <div className="iphone-button iphone-power"></div>
          <div className="iphone-button iphone-left-button iphone-silent"></div>
          <div className="iphone-button iphone-left-button iphone-volume-up"></div>
          <div className="iphone-button iphone-left-button iphone-volume-down"></div>
          <img
            className="iphone-screen"
            src="/assets/app.png"
            type="image/png"
            alt="a react-native app I'm building"
          />
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
        rel="stylesheet"
      ></link>
      <span className="info">Initial MVP I was working on</span>
      <style jsx>{`
        img {
          max-width: 100%;
        }
        .container {
          flex: 1;
        }
        .info {
          font-size: 1.5rem;
          color: ${theme.colors.accents_5};
          margin-top: ${theme.space.x2};
          font-family: "Nanum Pen Script", cursive;
        }
        .phone-container {
          position: relative;
          margin: 0 auto;
        }
        .iphone-screen {
          height: 450px;
        }
        .iphone {
          max-height: 450px;
          box-shadow: ${theme.shadow.medium};
          background-color: #333;
          padding: 10px;
          border: solid 2px #555;
          border-radius: 35px;
          transition: all 0.2s ease-in-out;
        }
        .iphone:hover {
          box-shadow: ${theme.shadow.large};
        }
        .iphone:active {
          transform: scale(1.02);
        }
        .iphone-button {
          position: absolute;
          background-color: #555;
          width: 3px;
        }
        .iphone-left-button {
          border-bottom-left-radius: 2px;
          border-top-left-radius: 2px;
          left: -3px;
        }
        .iphone-power {
          border-bottom-right-radius: 2px;
          border-top-right-radius: 2px;
          height: 75px;
          top: 100px;
          right: -3px;
        }
        .iphone-silent {
          height: 20px;
          top: 75px;
        }
        .iphone-volume-up {
          height: 50px;
          top: 120px;
        }
        .iphone-volume-down {
          height: 50px;
          top: 180px;
        }
      `}</style>
    </div>
  );
}

export default function Intro() {
  return (
    <>
      <section className="wrapper">
        <div className="flex wrap">
          <div className="text-container flex flex-column">
            <div>
              <h1>
                I enjoy the process <br /> of building a product
              </h1>
              <p>Like every step of it UX, DX, UI, Marketing...</p>
            </div>
            <EmailMe />
          </div>
          <AppPreview />
        </div>
      </section>

      <style jsx>{`
        p {
          font-weight: 500;
          color: #969696;
          font-size: 1.4rem;
        }
        .text-container {
          margin-right: ${theme.space.x32}
        }
        @media screen and (max-width: 1200px) {
          section {
            flex-direction: column;
            align-items: center;
          }
          .text-container {
            margin-bottom: ${theme.space.medium};
            margin-right: 0;
            text-align: center;
          }
        }
        }
      `}</style>
    </>
  );
}
