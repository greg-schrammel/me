const Link_Blank = ({ href, children }) => (
  <a
    className="text-gray-300"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default function ProfessionalXP() {
  return (
    <div className="text-2xl max-w-xl lg:max-w-2xl mx-auto">
      <h2 className="text-center font-semibold text-gray-500 mb-6">
        I've also been a
      </h2>
      <h3 className="text-3xl font-bold">
        Fullstack Dev at{" "}
        <Link_Blank href="https://syonet.com.br/">Syonet CRM</Link_Blank>/
        <Link_Blank href="https://leadstation.com.br/">Leadstation</Link_Blank>
      </h3>
      <small className="text-gray-600">
        from may/2017 to dec/2017 and then dec/2018 to mar/2019
      </small>
      <ul className="font-regular mt-4 text-gray-300 text-xl space-y-6">
        <li>
          Designed and developed several REST APIs and User Interfaces, focusing
          on ease of use and maintenability, leveraging Java Spring and React
        </li>
        <li>
          Dockerized development environment, reducing long times to set things
          up enabling any newcomer to get going fast
        </li>
        <li>
          Built and fixed CI pipelines ensuring we wouldn't be screwing things
          up in production
        </li>
        <li>
          Started acessibility project developing a version of the software
          easier for blind people to use
        </li>
      </ul>
    </div>
  );
}
