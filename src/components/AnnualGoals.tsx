const goals = [
  `认识100位新朋友 (7/100)`,
  `坚持持续健身100天 (20/100)`,
  `开始记录生活一周一个视频吧 (0/50)`,
  `新公司能有100w的营收`,
  `成为一名influencer/社交花/social flower`,
];

export default function AnnualGoals() {
  return (
    <section>
      <h3 className="text-xl font-bold text-center my-6">
        我的2022年的小目标:
      </h3>
      <div className="flex justify-center">
        <ol className="w-80 list-decimal">
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
