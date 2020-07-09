import Lock from "../../public/assets/lock.svg?include";

const Store = () => (
  <div className="bg-white rounded-xl max-w-xl p-4 md:pb-8">
    <div className="h-8 mb-6 flex align-center">
      <div className="flex align-center space-x-2">
        <div className="rounded-full h-4 w-4 bg-close"></div>
        <div className="rounded-full h-4 w-4 bg-minimize"></div>
        <div className="rounded-full h-4 w-4 bg-maximize"></div>
      </div>
      <div className="rounded-lg bg-gray-900 py-1 pr-2 md:pr-8 mx-auto text-black flex select-none">
        <div
          className="mx-2 my-auto"
          dangerouslySetInnerHTML={{
            __html: Lock,
          }}
        />
        https://my-store.com
      </div>
    </div>

    <div className="px-2 md:px-2">
      <div className="flex justify-between mb-4 md:mb-6 h-6 md:h-10">
        <div className="rounded-xl bg-gray-800 w-1/3"></div>
        <div className="rounded-full bg-gray-800 w-10"></div>
      </div>

      <div className="flex justify-around">
        <div className="rounded-xl bg-gray-800 w-2/4 h-32 md:h-48 mr-4 md:mr-6"></div>
        <div className="flex flex-col flex-1 space-y-3 md:space-y-4">
          <div className="rounded-xl bg-gray-700 w-3/4 h-5 md:h-8"></div>
          <div className="rounded-xl bg-gray-800 w-full h-20 md:h-24"></div>
          <div className="rounded-full bg-gray-200 w-3/4 p-2 mx-auto font-bold text-center text-xs md:text-lg">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function EcomXP() {
  return (
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
  );
}
