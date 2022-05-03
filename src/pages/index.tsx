import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>可能开发的个人主页-圈子们-东京圈-开发圈创始人</title>
        <meta
          name="description"
          content="mytt.dev-可能开发，致力于打造不同人群的圈子来连接起一个个的机会。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
        </a>
      </footer>
    </div>
  );
}
