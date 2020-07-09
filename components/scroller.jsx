const Scroller = ({ children, initScrollWidth }) => {
  return (
    <div className="h-20">
      <div className="absolute left-0 w-screen overflow-hidden">
        <div className="slider h-20">
          <div>{children}</div>
          <div id="wtf">{children}</div>
        </div>
        <style jsx>{`
          .slider {
            display: inline-flex;
          }
          .slider > div {
            display: inline-flex;
          }
          #wtf {
            display: none;
          }
          @media screen and (max-width: ${initScrollWidth}) {
            .slider {
              display: inline-flex;
              animation: slide 20s linear infinite;
            }
            #wtf {
              display: inline-flex;
            }
          }
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Scroller;
