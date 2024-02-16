import EduCard from "./EduCard";
import {
  education_1,
  education_2,
  education_3,
  education_4,
  education_5,
  education_6,
  education_7,
  education_8,
} from "../../assets/images";

const cards = [
  {
    id: 1,
    price: "free",
    date: "12.03.24",
    topic:
      "React.js Front-End Development - The Complete Guide (incl Hooks, React Router, Redux)",
    image: education_1,
    circleText: "Discover your choice",
  },
  {
    id: 2,
    price: "free",
    date: "14.05.24",
    topic:
      "AI Basics - Creating AI Driven Education for a Better Connected Europe.",
    image: education_2,
    circleText: "LOG IN TO WATCH",
  },
  {
    id: 3,
    price: "20,00",
    date: "10.06.24",
    topic:
      "Education Technology Tutorials - The Complete Guide (incl AI, Machine Learning, Data Science)",
    image: education_3,
    circleText: "DISCOVER MORE",
  },

  {
    id: 4,
    price: "30,00",
    date: "10.04.24",
    topic:
      "Start Learning Python. Future-Proof your Career with the Best Python Course on the Market",
    image: education_4,
    circleText: "DISCOVER MORE",
  },
  {
    id: 5,
    price: "20,00",
    date: "16.08.24",
    topic:
      "Photoshop Tutorial for Begginers 2024. Everything you NEED to KNOW! Photoshopping your Drawings. Realistified! ",
    image: education_5,
    circleText: "90% match",
  },
  {
    id: 6,
    price: "10,00",
    date: "18.05.24",
    topic: "Learn Bootstrap 5 by Building a Portfolio Website - Full Course",
    image: education_6,
    circleText: "95% match",
  },
  {
    id: 7,
    price: "10,00",
    date: "18.05.24",
    topic: "Complete After Effects Course - Motion Graphics Masterclass",
    image: education_7,
    circleText: "100% match",
  },
  {
    id: 8,
    price: "10,00",
    date: "20.05.24",
    topic:
      "JavaScript Mastery Complete Course. Tutorial For Begginers to Advanced. Ignite Your Front-End Mastery Series!",
    image: education_8,
    circleText: "95% match",
  },
];


export default function EduCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <EduCard key={card.id} card={card} />
      ))}
    </article>
  );
}

