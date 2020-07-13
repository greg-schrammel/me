import { FaGithub } from "react-icons/fa";
import { LogoList } from "../logo";

const Project = ({ children, title, github, used = [], thumb = null }) => (
  <div className="max-w-md p-3">
    <div className="flex flex-col rounded-xl p-8 shadow-lg space-y-4">
      {thumb}
      <h2 className="text-xl font-bold">{title}</h2>
      <LogoList logos={used} className="h-6" />
      <p>{children}</p>
      <a
        href={`https://github.com/greg-schrammel${github}`}
        className="rounded-xl border-gray-300 p-3 flex items-center justify-center bg-gray-900 hover:opacity-75"
      >
        <FaGithub size="1.3rem" />
        &nbsp;See Project
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div>
      <h3 className="text-center font-bold text-4xl mb-2 text-gray-300 font-cursive leading-none">
        Some things I've done
      </h3>

      <div className="flex flex-wrap justify-between">
        <Project
          title="Curious Dog"
          github="/curious-dog"
          used={["nextjs", "firebase"]}
          thumb={
            <amp-img
              className="w-full h-full"
              src="/assets/curious-dog.png"
              alt="curious dog project"
              width="738"
              height="638"
              layout="responsive"
            />
          }
        >
          Send and reply to anonymous messages.
        </Project>

        <Project
          title="WhatsApp Message Bot"
          github="/whatsapi"
          used={["go"]}
          thumb={
            <div className="rounded-lg bg-gray-200 text-gray-800 p-3 font-mono break-all">
              curl -d '{"{"} <br />
              "to":"5551983330006", <br />
              "message":"hello", <br />
              "session":"-LtVrXfeFfrOXnud2C2m" <br />
              {"}"}' <br />
              -H "Content-Type: application/json" <br />
              -X POST https://aham.gregs.now.sh/whatsapp/send
            </div>
          }
        >
          My cousin doubted I couldn't make a whatsapp bot without a business
          account so I made an endpoint and set a cronjob to send him messages
          everyday.
        </Project>
      </div>
    </div>
  );
}
