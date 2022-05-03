import Image from 'next/image';
import Avatar from '@/assets/avatar.jpg';

export default function Introduction() {
  return (
    <section>
      <h3 className="text-xl font-bold text-center my-5">关于我:</h3>
      <div className="w-24 h-24 mx-auto my-4 rounded-full overflow-hidden">
        <Image src={Avatar} alt="avatar" />
      </div>
      <div className="text-center">
        来自浙江的一个小镇，硅谷圣塔克拉拉大学计算机本科，东京大学计算机硕士。目前生活在日本东京。
      </div>
      <div className="text-center my-2">目前持续创业中...</div>
    </section>
  );
}
