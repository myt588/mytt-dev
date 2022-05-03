import Head from 'next/head';
import ProjectList from '@/components/ProjectList';
import AnnualGoals from '@/components/AnnualGoals';
import Introduction from '@/components/Introduction';
import Timeline from '@/components/Timeline';

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

      <main className="mx-auto max-w-screen-lg">
        <h1 className="text-3xl font-bold text-center my-5">可能开发</h1>
        <h2 className="text-2xl font-bold text-center mb-6">mytt.dev</h2>

        <ProjectList />

        <AnnualGoals />

        <Introduction />

        <Timeline />
      </main>
    </div>
  );
}
