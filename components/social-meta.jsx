import Head from "next/head";

export default ({ title, description, image, path, keywords }) => (
  <Head>
    <meta name="twitter:site" content={`@O_Super_Gregory`} />
    <meta
      name="twitter:card"
      content={image ? "summary_large_image" : "summary"}
    />
    {image && (
      <meta property="og:image" content={`https://schrammel.co${image}`} />
    )}
    {title && <meta name="og:title" content={title} />}
    {path && <meta name="og:url" content={`https://schrammel.co${path}`} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);
