import Head from "next/head";

type MetaTitleProps = {
  title: string;
  description: string;
};

const MetaTitle: React.FC<MetaTitleProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{`${title}- Finology Test`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Louis Yoong" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaTitle;
