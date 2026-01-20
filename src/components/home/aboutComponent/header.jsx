import React from "react";

const Header = () => {
  return (
    <section >
      <div className="flex justify-center">
        <div className="text-center mb-30">
          <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wide">
            BERANDA <span className="text-black">/ TENTANG KAMI</span>
          </p>
          <h1 className=" font-bold text-4xl pt-8">
            Bersatu Untuk Menjadi Lebih Baik
          </h1>
          <p className="pt-8 text-1xl px-20">
            Bersatu adalah kunci untuk saling menguatkan dan melangkah bersama
            menuju perubahan yang lebih baik.
            <br />
            Dengan kebersamaan, setiap perbedaan menjadi kekuatan dan setiap
            tujuan lebih mudah dicapai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
