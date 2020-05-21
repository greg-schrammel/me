import Head from "next/head";
import SocialMeta from "./social-meta";

export default function Page({
  title,
  favicon = "/favicon.ico",
  description,
  path,
  children,
}) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="author" content="Gregory M. Schrammel" />
        <SocialMeta description={description} title={title} path={path} />
      </Head>
      {children}
    </>
  );
}
