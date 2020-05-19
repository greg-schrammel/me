import Head from "next/head";
import styles from "../styles";

export default function Page({
  title,
  favicon = "/favicon.ico",
  description,
  children,
}) {
  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>
      </Head>
      {children}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <style jsx global>
        {styles}
      </style>
    </div>
  );
}
