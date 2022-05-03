import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>可能开发的个人主页-圈子们-东京圈-开发圈创始人</title>
        <meta
          name="description"
          content="mytt.dev-可能开发，致力于打造不同人群的圈子来连接起一个个的机会。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
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
