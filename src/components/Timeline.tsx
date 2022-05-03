type TimeEvent = {
  timestamp: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
};

const events: TimeEvent[] = [
  {
    timestamp: `August 2008`,
    title: `高中留学美国`,
    description: `Colorado Rocky Mountain School (CRMS)`,
  },
  {
    timestamp: `September 2010`,
    title: `到美国硅谷就读大学`,
    description: `Santa Clara University (SCU)`,
  },
  {
    timestamp: `March 2013`,
    title: `日本交换留学`,
    description: `Sophia University (上智大学)`,
  },
  {
    timestamp: `September 2013`,
    title: `第一次Intern`,
    description: `MultiTaction Inc. `,
  },
  {
    timestamp: `September 2014`,
    title: `第一次创业`,
    description: `Whistle App - Whistle For Favors`,
  },
  {
    timestamp: `September 2016`,
    title: `重回日本取得硕士学位`,
    description: `University of Tokyo (东京大学)`,
  },
  {
    timestamp: `April 2017`,
    title: `加入创业公司`,
    description: `Infervision Japan Inc. 成为东京分部最初的团队成员`,
  },
  {
    timestamp: `April 2019`,
    title: `加入日本电商巨头`,
    description: `Mercari Inc. Senior Software Engineer & Scrum Master`,
  },
  {
    timestamp: `January 2022`,
    title: `加入日本通信巨头`,
    description: `目前新公司担任管理职位 + 第N次创业并行`,
  },
];

const TimeSlot = ({ event }: { event: TimeEvent }) => (
  <>
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {event.timestamp}
    </time>
    <h3 className="my-1 text-lg font-semibold text-gray-900 dark:text-white">
      {event.title}
    </h3>
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {event.description}
    </p>
    {event.link && (
      <a
        href={event.link}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        {event.linkText}
        {` `}
        <svg
          className="ml-2 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    )}
  </>
);

export default function Timeline() {
  return (
    <section>
      <h3 className="text-xl font-bold text-center my-5">一路走来:</h3>
      <div className="flex justify-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {events.map((event, index) => (
            <li key={index} className="mb-10 ml-4">
              <TimeSlot event={event} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
