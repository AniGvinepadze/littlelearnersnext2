import {
  student,
  crown,
  faceMask,
  flag,
  ball,
  people,
} from "../public/assets/index/index";

export type NavLinks = [
  {
    id: string;
    name: string;
  }
];

export const navLinks = [
  {
    id: "home",
    name: "HOME",
  },
  {
    id: "aboutUs",
    name: "About Us",
  },
  {
    id: "academics",
    name: "Academics",
  },
  {
    id: "admissions",
    name: "Admissions",
  },
  {
    id: "studentLife",
    name: "Student Life",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export type Info = [
  {
    id: number;
    info: string;
    title: string;
  }
];

export const info = [
  {
    id: 1,
    info: "+7000",
    title: "Students Passed Out",
  },
  {
    id: 2,
    info: "+37",
    title: " Awards & Recognitions",
  },
  {
    id: 3,
    info: "+15",
    title: "Experience Educators",
  },
];

export const benefits = [
  {
    id: 1,
    img: student,
    title: "Holistic Learning Approach",
    desc: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    id: 2,
    img: crown,
    title: "Experienced Educators",
    desc: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    id: 3,
    img: faceMask,
    title: "Nurturing Environment",
    desc: "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    id: 4,
    img: flag,
    title: "Play-Based Learning",
    desc:"We believe in the power of play to foster creativity, problem-solving skills, and imagination."
  },
  {
    id: 5,
    img: ball,
    title: "Individualized Attention",
    desc: "Our small class sizes enable personalized attention, catering to each child's unique needs..",
  },
  {
    id: 6,
    img: people,
    title: "Parent Involvement",
    desc: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];
