interface Props {
  link: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function ProjectCard(props: Props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="h-full block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      rel="noreferrer"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h3>
      <h4 className="mb-2 text-xl font-bold underline text-gray-900 dark:text-white">
        {props.subtitle}
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
    </a>
  );
}
