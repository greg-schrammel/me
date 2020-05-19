import Button from "../button";
import theme from "../../theme";

export const Project = ({ children, title, link, used = [] }) => (
  <div className="container">
    <div className="flex flex-column project">
      <h2>{title}</h2>
      <div className="flex align-center used">
        {used.map((name) => (
          <img src={`assets/logos/${name}.svg`} alt={name} />
        ))}
      </div>
      <small>{children}</small>
      {link && (
        <>
          <br />
          <Button href={link} outlined>
            Read More
          </Button>
        </>
      )}
    </div>
    <style jsx>{`
      .used {
        margin-bottom: ${theme.space.x4};
      }
      img {
        margin-left: ${theme.space.x2};
        margin-right: ${theme.space.x2};
        min-height: 25px;
        max-height: 25px;
      }
      .read-more {
        margin-top: ${theme.space.x4};
      }
      .container {
        width: 50%;
        padding: ${theme.space.x4};
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      @media screen and (max-width: 1200px) {
        .container {
          width: 100%;
        }
      }
      .project {
        border-radius: 20px;
        padding: ${theme.space.x8};
        box-shadow: ${theme.shadow.medium};
      }
    `}</style>
  </div>
);

export default function ProjectsList() {
  return (
    <section className="wrapper flex flex-column align-center">
      <h3>Like a Portfolio</h3>

      <div className="flex wrap space-between">
        <Project title="This Site :)" link="/blog/my-resume" used={["nextjs"]}>
          Build with Next, AMP support, 100% lighthouse score, vitals
        </Project>

        <Project
          title="Storage App (like dropbox)"
          link="/blog/storage-app"
          used={["expo", "firebase", "xstate", "typescript"]}
        >
          React Native, XState, Firebase it started as a freelance but they drop
          it off it's not complete but I take an overview of my approach here
        </Project>

        <Project title="Curious Dog" used={["nextjs", "firebase"]}>
          Nextjs, Firebase Another project I didn't finish, but learned a lot
          about Firebase, Unit tests and Service Workers
        </Project>

        <Project title="WhatsApp Message Bot" used={["go", "now"]}>
          Build with Go, My cousing doubted that I could make a bot to send him
          whatsapp messages without a bussiness account, so I set a cronjob and
          sent him messages everyday
        </Project>
      </div>
    </section>
  );
}
