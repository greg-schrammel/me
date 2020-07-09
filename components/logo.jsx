const Logo = ({ name, src = name, className }) => {
  return (
    <i aria-label={name} className={`h-full ${className}`}>
      <div
        className="h-full"
        dangerouslySetInnerHTML={{
          __html: require(`../public/assets/logos/${src}.svg?include`),
        }}
      />
    </i>
  );
};

export const LogoList = ({ logos, className }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    {logos.map((name) => (
      <Logo name={name} key={name} />
    ))}
  </div>
);

export default Logo;
