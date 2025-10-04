import React from "react";

const Home = () => {
  // Массив с картинками (можно заменить на свои)
  const images = [
    "https://freight.cargo.site/w/1152/q/94/i/b262d3dacf2bb64f0375be3fe18fe0a2e933e3143747cac34ad8cf08d2b32031/1c3a8fe8-1c33-4c1b-b725-b5f5e97fd746.JPG",
    "https://freight.cargo.site/w/1200/q/94/i/fd203981b6801f68c06753ddd876fa88a6ae557b337d9058bbc4368b62eb0a64/84f9b450-56e1-474d-a834-452b7df031ef.JPG",
    "https://freight.cargo.site/w/1500/q/75/i/9ee42cd3e9c171adbcb49ef7518892b6519413ddd4c4bcce90cf710fe307a8ba/98ce4076-be13-436c-9728-31758e984316.JPG",
    "https://freight.cargo.site/w/1500/q/75/i/14e4f3d811556f0edaf3495638729f8b6105f0c6e40b1938701ee00dd8dd5e2f/IMG_1390-2.JPG",
    "https://freight.cargo.site/w/1467/q/75/i/14192d02d3100d38b0ef1d25968109ff501f4bd2801ce81b2f6f74d7596fafaf/IMG_4397-copy.jpg",
    "https://freight.cargo.site/w/1467/q/75/i/c9b81783e6f6b177b9a0fb9929e65c233517077f851c31338768c480768b4c6f/IMG_4317-copy.jpg",
    "https://freight.cargo.site/w/1170/q/94/i/4f3ca9900d1dae8be6f8a2e43bf99cba6daa5309fb9dccc6a3b8abe0f57cbdfb/IMG_6698.jpg",
    "https://freight.cargo.site/w/1467/q/75/i/5d7854528e6c91b4d79a3dea6a626dc37ef3f208ac66e005d6400284e781608e/IMG_4959-copy.jpg",
    "https://freight.cargo.site/w/1500/q/75/i/49044ad0a099397f8f06d21352efb3eac390512418b804979f401d43a93bd47f/proto7.jpg",
    "https://freight.cargo.site/w/640/q/94/i/d68126a997c452ff0d66433c965b7734ed8a78b212d50b4250cc32433f7c4aca/0505b.JPG",
    "https://freight.cargo.site/w/1200/q/94/i/fce6533173390e4a79156545b035c131f81cf4bec99bef474c9ae9daf7222bc0/Web0608.JPG",
    "https://freight.cargo.site/w/1500/q/75/i/e79bf16597f0338c724e94c680a702cf5ddcdecca71ae5d3896ac24a6a505e91/Web0602.JPG",
    "https://freight.cargo.site/w/1500/q/75/i/ac042407aecfa13b0255d4d04235460fb8c8f17820e9be7a35e53c2c887c7701/IMG_5281-2.JPG",
    "https://i.pinimg.com/736x/86/76/6d/86766ddb85c5f7844301bc47ad667b9d.jpg",
    "https://freight.cargo.site/w/1500/q/75/i/3ef9fad0c1f3ae0f3d3df9df45415c3483f9c983105c95222a004e7695667ce3/PT07AC05WWB_6.jpg",
    "https://i.pinimg.com/736x/74/5f/60/745f607b1e68dc3c38bf1892c79c93e2.jpg",
  ];

  //todo: Home.jsx => Home.tsx
  //todo: Поменьше CSS побольше библиотек типа AndDesign

  return (
    <div>
      <div className="hero-section"></div>
      <div className="container">
        <div className="gallery-container">
          <div className="hero-colone1">
            {images
              .filter((_, index) => index % 2 === 0)
              .map((img, i) => (
                <img
                  key={`left-${i}`}
                  src={img}
                  alt={`Изображение ${i * 2 + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              ))}
          </div>

          <div className="hero-colone2">
            {images
              .filter((_, index) => index % 2 !== 0)
              .map((img, i) => (
                <img
                  key={`right-${i}`}
                  src={img}
                  alt={`Изображение ${i * 2 + 2}`}
                  className="gallery-image"
                  loading="lazy"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
