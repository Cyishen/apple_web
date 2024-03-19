import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["商店", "Mac", "iPhone", "支援服務"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "A17 Pro，",
      "驚天的晶片，顛覆效能極限",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["鈦金屬，", "超堅固、超輕、超 Pro。"],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max 擁有 iPhone",
      "歷來最長光學變焦範圍，前瞻眼界。",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["全新動作按鈕，", "動手試新招。"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "原色鈦金屬 iPhone 15 Pro",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "藍色鈦金屬 iPhone 15 Pro",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "白色鈦金屬 iPhone 15 Pro",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "黑色鈦金屬 iPhone 15 Pro",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1吋', value: "small" },
  { label: '6.7吋', value: "large" },
];

export const footerLinks = [
  "隱私權政策",
  "使用條款",
  "銷售及退款",
  "法律聲明",
  "網站地圖",
];