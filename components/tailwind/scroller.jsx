const Scroller = ({ children, initScrollWidth, className }) => {
  return (
    <div className={`${className}`}>
      <div className="absolute left-0 w-screen overflow-hidden">
        <div className="slider">
          <div>{children}</div>
          <div>{children}</div>
        </div>
        <style jsx>{`
          .slider {
            display: inline-flex;
          }
          .slider > div {
            display: inline-flex;
          }
          .slider:nth-child(2) {
            display: none;
          }
          @media screen and (max-width: ${initScrollWidth}) {
            .slider {
              display: inline-flex;
              animation: slide 20s linear infinite;
            }
            .slider:nth-child(2) {
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
