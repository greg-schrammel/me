import Scroller from "../scroller";
import Logo from "../logo";

export default function TechILike() {
  return (
    <div className="text-center pb-8">
      <h2 className="font-semibold text-4xl text-gray-500 mb-8 font-cursive leading-none">
        This is the tech I'm most excited about lately
      </h2>
      <Scroller initScrollWidth="1260px">
        <Logo name="typescript" className="mx-8" />
        <Logo name="nextjs" className="mx-8" />
        <Logo name="framer-motion" className="mx-8" />
        <Logo name="expo" className="mx-8" />
        <Logo name="firebase" className="mx-8" />
        <Logo name="xstate" className="mx-8" />
      </Scroller>
    </div>
  );
}
