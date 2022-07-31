// pages/Omikuji.jsx

// import { ActionButton } from "../components/ActionButton";

// export const Omikuji = () => {
//   return (
//     <>
//       <p>おみくじの画面</p>
//       <ActionButton text="おみくじをひく" />
//     </>
//   );
// };
// pages/Omikuji.jsx

// import { ActionButton } from "../components/ActionButton.jsx";

// export const Omikuji = () => {
//   // 🔽 追加
//   const getOmikuji = () => {
//     const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
//       Math.floor(Math.random() * 5)
//     ];
//     console.log(result);
//   };

//   return (
//     <>
//       <p>おみくじの画面</p>
//       {/* 🔽 編集 */}
//       <ActionButton text="おみくじをひく" action={getOmikuji} />
//     </>
//   );
// };
// pages/Omikuji.jsx

// 🔽 追加
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";
import Image1 from './main_image01.jpg';
import Image2 from './main_image02.jpg';
import Image3 from './main_image03.jpg';

export const Omikuji = () => {
  // 🔽 追加
  const [omikujiResult, setOmikujiResult] = useState("");

  const getOmikuji = () => {
    const result = ["プーさん🍯🍯🍯", "ピグレット🍯🍯", "ティガー🍯"][
      Math.floor(Math.random() * 3)
    ];
    console.log(result);
    // 🔽 追加
    setOmikujiResult(result);
  };

  if(omikujiResult=="プーさん🍯🍯🍯"){
    return (
      <>
        <p>おみくじの画面</p>
        <ActionButton text="おみくじをひく" action={getOmikuji} />
        {/* 🔽 追加 */}     
      <img src={Image1} alt="Image" /><p>{omikujiResult}</p>
      </>
    );
    }
  else if(omikujiResult=="ピグレット🍯🍯"){
    return (
      <>
        <p>おみくじの画面</p>
        <ActionButton text="おみくじをひく" action={getOmikuji} />
        {/* 🔽 追加 */}     
      <img src={Image2} alt="Image" /><p>{omikujiResult}</p>
      </>
    );
    }
    
  else{
    return (
      <>
        <p>おみくじの画面</p>
        <ActionButton text="おみくじをひく" action={getOmikuji} />
        {/* 🔽 追加 */}
        <img src={Image3} alt="Image" /><p>{omikujiResult}</p>
      </>
    );      
  }  
};
