import Image from 'next/image';
import Avatar from '@/assets/avatar.jpg';

export default function Introduction() {
  return (
    <section>
      <h3 className="text-xl font-bold text-center my-5">关于我:</h3>
      <div className="w-24 h-24 mx-auto my-4 rounded-full overflow-hidden">
        <Image src={Avatar} alt="avatar" />
      </div>
      <h4 className="text-xl font-bold text-center mt-5">Mytt Mao</h4>
      <p className="text-xl font-bold text-center mb-5">
        (pronounce as might <span className="px-2">👉</span> 可能)
      </p>
      <div className="text-center">
        来自浙江的一个小镇，硅谷圣塔克拉拉大学计算机本科，东京大学计算机硕士。目前生活在日本东京。
      </div>
      <div className="text-center my-2">不甘平凡，目前持续创业中...</div>
      {false && (
        <div className="grid grid-cols-1 md:grid-cols-4 mt-5">
          <div className="flex flex-col items-center">
            <h4 className="text-lg">微信</h4>
            <div className="w-24 h-24 my-5">
              <Image src={Avatar} alt="微信账号" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg">抖音</h4>
            <div className="w-24 h-24 my-5">
              <Image src={Avatar} alt="抖音账号" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg">知乎</h4>
            <div className="w-24 h-24 my-5">
              <Image src={Avatar} alt="知乎账号" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg">B站</h4>
            <div className="w-24 h-24 my-5">
              <Image src={Avatar} alt="B站账号" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
