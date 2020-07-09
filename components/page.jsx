import Head from "next/head";
import SocialMeta from "./social-meta";

export default function Page({
  title,
  favicon = "/favicon.ico",
  description,
  path,
  image,
  className,
  children,
}) {
  return (
    <div className={className}>
      <Head>
        <link rel="icon" href={favicon} />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="author" content="Gregory M. Schrammel" />
        <meta name="theme-color" content="#000" />
      </Head>
      <SocialMeta
        image={image}
        description={description}
        title={title}
        path={path}
      />
      {children}
    </div>
  );
}
