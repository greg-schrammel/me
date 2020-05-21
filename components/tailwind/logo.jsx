const Logo = ({ name, src = `${name}.gray` }) => {
  return (
    <div
      className="px-8"
      dangerouslySetInnerHTML={{
        __html: require(`../../public/assets/logos/${src}.svg?include`),
      }}
    />
  );
};

export default Logo;
