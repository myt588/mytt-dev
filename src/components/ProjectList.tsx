import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    link: `https://tokyo-circles.com/`,
    title: `东京圈投资移民`,
    subtitle: `Tokyo Circles`,
    description: `以最透明的价格和最优质的服务，致力于帮助想要在日本定居的朋友们.`,
  },
  {
    link: `https://residence.xincere.jp/`,
    title: `シンシアレジデンス`,
    subtitle: `都内高級不動産`,
    description: `针对于想居住在东京周边的朋友，提供的高级不动产服务。`,
  },
  {
    link: `https://rokujou.shop/`,
    title: `「六畳の憩」`,
    subtitle: `Rokujou`,
    description: `跨境电商，略有涉猎。`,
  },
  {
    link: `#`,
    title: `开发者圈 (WIP)`,
    subtitle: `Dev Circles`,
    description: `有兴趣来日本当程序员？那进来看看。不是最好也不是最差的选择。卷是不可能卷的。`,
  },
  {
    link: `#`,
    title: `Vouched (WIP)`,
    subtitle: `信任圈`,
    description: `具体内容目前还是个秘密 ㊙️`,
  },
  {
    link: `mailto:yetian.mao@gmail.com`,
    title: `More to come`,
    subtitle: `欢迎合作交流`,
    description: `联系我点这里 👆 ...`,
  },
];

export default function ProjectList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      {projects.map((project, index) => (
        <article key={index}>
          <ProjectCard
            link={project.link}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
          />
        </article>
      ))}
    </section>
  );
}
