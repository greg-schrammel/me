export default function IphoneApp() {
  return (
    <div className="mx-auto inline-block mt-8 lg:mt-0">
      <div className="transform rotate-3 shadow-code bg-gray-100 p-2 border-4 border-gray-200 rounded-iphone">
        <amp-anim
          alt="a react-native app"
          src="/assets/app.webp"
          width="258.719"
          height="560"
          layout="intrinsic"
        >
          <amp-img
            placeholder=""
            alt="a react-native app"
            width="258.719"
            height="560"
            src="/assets/app-placeholder.webp"
          >
            <amp-img
              fallback=""
              alt="a react-native app"
              width="258.719"
              height="560"
              src="/assets/app-fallback.png"
            ></amp-img>
          </amp-img>
        </amp-anim>
      </div>
    </div>
  );
}
