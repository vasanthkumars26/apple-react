import React from 'react';

const Items = () => {
  const cards = [
    {
      img: "https://www.silicon.co.uk/wp-content/uploads/2022/10/AppleiPadPro-01.jpg",
      title: "iPad Pro",
      subtitle: "Unbelievably thin. Incredibly powerful.",
      extra: "Built for Apple Intelligence."
    },
    {
      img: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg",
      title: "Watch",
      subtitle: "Series 10",
      extra: null
    },
    {
      img: "https://www.indiaistore.com/files/uploads/bts/2025/mobile/01.jpg",
      title: "MacBook for Students",
      subtitle: "Mega power. Mini size.",
      extra: null
    },
    {
      img: "https://www.apple.com/v/airpods-4/f/images/overview/welcome/hero__1z1ep1te3eq2_xlarge.jpg",
      title: "Iconic ",
      subtitle: "Lovable. Drawable. Magical.",
      extra: null
    }
  ];

  return (
    <div className="mt-64 grid grid-cols-2 gap-2 h-screen ">
      {cards.map((card, index) => (
        <div
          key={index}
          className=" p-10 pb-14 text-white m-3 bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url('${card.img}')` }}
        >
          <div>
            <h1 className="text-5xl font-bold pt-4">{card.title}</h1>
            <p className="text-3xl font-semibold">{card.subtitle}</p>
          </div>

          <div className='justify-items-center'>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 text-white rounded-full p-2 w-[100%] hover:bg-blue-800">
                Learn more
              </button>
              <button className="border border-blue-600 p-2 w-fit text-blue-500 rounded-full hover:bg-blue-700 hover:text-white transition">
                Buy
              </button>
            </div>

            {card.extra && (
              <p className="text-xl font-semibold mt-4 bg-gradient-to-r from-pink-700 via-purple-700 to-gray-300 bg-clip-text text-transparent">
                {card.extra}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
