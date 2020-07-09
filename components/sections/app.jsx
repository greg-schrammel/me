function IphoneApp() {
  return (
    <div className="mx-auto inline-block mt-8 lg:mt-0">
      <div className="transform rotate-3 shadow-code bg-gray-200 p-2 border-2 border-gray-300 rounded-iphone">
        <amp-anim
          alt="a react-native app"
          src="/assets/app.webp"
          layout="intrinsic"
          className="block"
          width="258.719"
          height="560"
        >
          <amp-img
            placeholder=""
            alt="a react-native app"
            src="/assets/app-placeholder.webp"
            width="258.719"
            height="560"
          >
            <amp-img
              fallback=""
              alt="a react-native app"
              src="/assets/app-fallback.png"
              width="258.719"
              height="560"
            ></amp-img>
          </amp-img>
        </amp-anim>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex items-center flex-wrap">
      <div className="max-w-lg mx-auto font-cursive">
        <h2 className="font-black text-5xl max-w-lg leading-none">
          The last project I worked on
        </h2>
        <p className="font-medium text-3xl mb-6 leading-none text-gray-400">
          It's a Cloud Storage App, just like Dropbox!
        </p>
        <div
          className="h-24 hidden lg:block md:mb-24"
          dangerouslySetInnerHTML={{
            __html: require("../../public/assets/arrow-left.svg?include"),
          }}
        />
      </div>
      <IphoneApp />
    </div>
  );
}
