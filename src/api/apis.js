import axios from "axios";
let ID = process.env.NAVER_CLIENT_ID;
let SECRET = process.env.NAVER_CLIENT_SECRET;

// https://openapi.naver.com/v1/papago/detectLangs
// axios.create로 반복값(헤더)를 설정해놓고 그 후에 post
const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/papago/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Naver-Client-Id": ID,
    "X-Naver-Client-Secret": SECRET,
  },
});

export default instance;
