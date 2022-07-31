// pages/BookCreate.jsx

// import { useState } from "react";
// import axios from "axios";

// export const BookCreate = () => {
//   const [books, setBooks] = useState([]);

//   const getBooks = async (keyword) => {
//     const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
//     const result = await axios.get(`${url}${keyword}`);
//     console.log(result.data);
//     setBooks(result.data.items ?? []);
//   };

//   return (
//     <>
//       <p>キーワードで検索する</p>
//       <input type="text" onChange={(e) => getBooks(e.target.value)} />
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>書籍名</th>
//             <th>出版社</th>
//             <th>出版年</th>
//             <th>リンク</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((x, i) => (
//             <tr key={i}>
//               <td>
//                 <button type="button">選択</button>
//               </td>
//               <td>{x.volumeInfo.title}</td>
//               <td>{x.volumeInfo.publisher}</td>
//               <td>{x.volumeInfo.publishedDate}</td>
//               <td>
//                 <a
//                   href={x.volumeInfo.infoLink}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Link
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// pages/BookCreate.jsx

// import { useState } from "react";
// import axios from "axios";

// export const BookCreate = () => {
//   const [books, setBooks] = useState([]);

//   // 🔽 追加
//   const [book, setBook] = useState("");

//   const getBooks = async (keyword) => {
//     const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
//     const result = await axios.get(`${url}${keyword}`);
//     console.log(result.data);
//     setBooks(result.data.items ?? []);
//   };

//   // 🔽 追加
//   const selectBook = (book) => {
//     setBook(book.volumeInfo.title);
//   };

//   return (
//     <>
//       {/* 🔽 ここから追加 */}
//       <table>
//         <tbody>
//           <tr>
//             <td>読んだ本</td>
//             <td>{book}</td>
//           </tr>
//         </tbody>
//       </table>
//       {/* 🔼 ここまで追加 */}
//       <p>キーワードで検索する</p>
//       <input type="text" onChange={(e) => getBooks(e.target.value)} />
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>書籍名</th>
//             <th>出版社</th>
//             <th>出版年</th>
//             <th>リンク</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((x, i) => (
//             <tr key={i}>
//               <td>
//                 {/* 🔽 編集（onClick部分） */}
//                 <button type="button" onClick={() => selectBook(x)}>
//                   選択
//                 </button>
//               </td>
//               <td>{x.volumeInfo.title}</td>
//               <td>{x.volumeInfo.publisher}</td>
//               <td>{x.volumeInfo.publishedDate}</td>
//               <td>
//                 <a
//                   href={x.volumeInfo.infoLink}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Link
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// pages/BookCreate.jsx

// // 🔽 編集
// import { useState, useEffect } from "react";
// import axios from "axios";

// export const BookCreate = () => {
//   const [books, setBooks] = useState([]);
//   const [book, setBook] = useState("");
//   // 🔽 追加
//   const [geoLocation, setGeoLocation] = useState(null);

//   const getBooks = async (keyword) => {
//     const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
//     const result = await axios.get(`${url}${keyword}`);
//     console.log(result.data);
//     setBooks(result.data.items ?? []);
//   };

//   const selectBook = (book) => {
//     setBook(book.volumeInfo.title);
//   };

//   // 🔽 追加
//   const success = (position) => {
//     const { latitude, longitude } = position.coords;
//     setGeoLocation({ latitude, longitude });
//   };

//   // 🔽 追加
//   const fail = (error) => console.log(error);

//   // 🔽 追加
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success, fail);
//   }, []);

//   return (
//     <>
//       <table>
//         <tbody>
//           {/* 🔽 追加 */}
//           <tr>
//             <td>場所</td>
//             <td>{JSON.stringify(geoLocation)}</td>
//           </tr>
//           <tr>
//             <td>読んだ本</td>
//             <td>{book}</td>
//           </tr>
//         </tbody>
//       </table>
//       <p>キーワードで検索する</p>
//       <input type="text" onChange={(e) => getBooks(e.target.value)} />
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>書籍名</th>
//             <th>出版社</th>
//             <th>出版年</th>
//             <th>リンク</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((x, i) => (
//             <tr key={i}>
//               <td>
//                 <button type="button" onClick={() => selectBook(x)}>
//                   選択
//                 </button>
//               </td>
//               <td>{x.volumeInfo.title}</td>
//               <td>{x.volumeInfo.publisher}</td>
//               <td>{x.volumeInfo.publishedDate}</td>
//               <td>
//                 <a
//                   href={x.volumeInfo.infoLink}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Link
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// pages/BookCreate.jsx

// import { useState, useEffect } from "react";
// import axios from "axios";

// export const BookCreate = () => {
//   const [books, setBooks] = useState([]);
//   const [book, setBook] = useState("");
//   const [geoLocation, setGeoLocation] = useState(null);
//   // 🔽 追加
//   const [place, setPlace] = useState("");

//   const getBooks = async (keyword) => {
//     const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
//     const result = await axios.get(`${url}${keyword}`);
//     console.log(result.data);
//     setBooks(result.data.items ?? []);
//   };

//   const selectBook = (book) => {
//     setBook(book.volumeInfo.title);
//   };

//   const success = async (position) => {
//     const { latitude, longitude } = position.coords;
//     setGeoLocation({ latitude, longitude });
//     // 🔽 追加
//     const placeData = await axios.get(
//       `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//     );
//     console.log(placeData.data);
//     setPlace(placeData.data.display_name);
//   };

//   const fail = (error) => console.log(error);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success, fail);
//   }, []);

//   return (
//     <>
//       <table>
//         <tbody>
//           <tr>
//             <td>場所</td>
//             {/* 🔽 編集 */}
//             <td>{place}</td>
//           </tr>
//           <tr>
//             <td>読んだ本</td>
//             <td>{book}</td>
//           </tr>
//         </tbody>
//       </table>
//       <p>キーワードで検索する</p>
//       <input type="text" onChange={(e) => getBooks(e.target.value)} />
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>書籍名</th>
//             <th>出版社</th>
//             <th>出版年</th>
//             <th>リンク</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((x, i) => (
//             <tr key={i}>
//               <td>
//                 <button type="button" onClick={() => selectBook(x)}>
//                   選択
//                 </button>
//               </td>
//               <td>{x.volumeInfo.title}</td>
//               <td>{x.volumeInfo.publisher}</td>
//               <td>{x.volumeInfo.publishedDate}</td>
//               <td>
//                 <a
//                   href={x.volumeInfo.infoLink}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Link
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// pages/BookCreate.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import weatherJson from "../static/weather.json";
import Image1 from './image.jpg';
import Image2 from './image02.jpg';
import Image3 from './image03.jpg';
import Image4 from './image04.jpg';

let img=Image1;
let meal="ワイン";
// let img="./image.jpg";

export const BookCreate = () => {
  // 🔽 追加
  const [loading, setLoading] = useState(true);

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");
  const [geoLocation, setGeoLocation] = useState(null);
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState("");


  const getBooks = async (keyword) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${url}${keyword}`);
    console.log(result.data);
    setBooks(result.data.items ?? []);
  };

  const selectBook = (book) => {
    setBook(book.volumeInfo.title);
  };

  const success = async (position) => {
    const { latitude, longitude } = position.coords;
    setGeoLocation({ latitude, longitude });
    
    const placeData = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    console.log(placeData.data);
    setPlace(placeData.data.display_name);

    const weatherData = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`
    );
    console.log(weatherData.data);
    setWeather(weatherJson[weatherData.data.daily.weathercode[0]]+','
        +weatherData.data.daily.temperature_2m_min[0]+','+weatherData.data.daily.temperature_2m_max[0]);
        
    let n=Math.floor(Math.random() * 4);
    
    if(weatherData.data.daily.temperature_2m_max[0]>=30){
      meal='よく冷えた生ビール';
      img=Image3;
    }
    else if(weatherData.data.daily.temperature_2m_min[0]<10){
      meal='熱燗';
      img=Image3;
    }
    else {
      if(weatherData.data.daily.weathercode[0]<=1){
        meal='白ワイン';
        img=Image1;
      }
      else{
        if (n==3){  // weatherData.data.daily.weathercode[0]
          meal='日本酒';
          img=Image1;
        } else if (n==1){ // weatherData.data.daily.weathercode[0]
          meal='焼酎';
          img=Image2;
        }else if (n==2){  // weatherData.data.daily.weathercode[0]
          meal='生ビール';
          img=Image3;
        }else if (n==0){ //weatherData.data.daily.weathercode[0]==57
          meal='ウイスキー';
          img=Image4;
      }
  
      }
    }




    // 🔽 追加
    setLoading(false);
  };

  const fail = (error) => console.log(error);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  // 🔽 追加
  if (loading) {
    return <p>now loading...</p>;
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>場所</td>
            <td>{place}</td>
          </tr>
          <tr>
            <td>天気と最高最低気温</td>
            <td>{weather}</td>
          </tr>
          <tr>
            <td>おすすめのお酒<br></br>
            <img src={img} width="150" hight="150" alt="Image1"></img></td>
            <td>{meal}</td>
          </tr>
          <tr>
            <td>読んだ本</td>
            <td>{book}</td>
          </tr>
       
        </tbody>
      </table>
      <p>キーワードで検索する</p>
      <input type="text" onChange={(e) => getBooks(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>書籍名</th>
            <th>出版社</th>
            <th>出版年</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          {books.map((x, i) => (
            <tr key={i}>
              <td>
                <button type="button" onClick={() => selectBook(x)}>
                  選択
                </button>
              </td>
              <td>{x.volumeInfo.title}</td>
              <td>{x.volumeInfo.publisher}</td>
              <td>{x.volumeInfo.publishedDate}</td>
              <td>
                <a
                  href={x.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
