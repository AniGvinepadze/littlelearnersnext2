import { title } from "process";
import {
  student,
  crown,
  faceMask,
  flag,
  ball,
  people,
  person1,
  person2,
  person3,
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
    desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
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

export const rankings = [
  {
    id: 1,
    img: person1,
    name: "Jennifer B",
    desc: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: 2,
    img: person2,
    name: "David K",
    desc: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: 3,
    img: person3,
    name: "Emily L",
    desc: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: 4,
    img: person2,
    name: "Bony J",
    desc: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: 5,
    img: person1,
    name: "Tom F",
    desc: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: 6,
    img: person3,
    name: "Kylie F",
    desc: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment..",
  },
];

export const questions = [
  {
    id: 1,
    question: "What are the school hours at Little Learners Academy?",
  },
  {
    id: 2,
    question: "Is there a uniform policy for students?",
  },
  {
    id: 3,
    question: "What extracurricular activities are available for students?",
  },
  {
    id: 4,
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
  },
  {
    id: 5,
    question: "What extracurricular activities are available for students?",
  },
  {
    id: 6,
    question: "How do you handle food allergies and dietary restrictions?",
  },
  {
    id: 7,
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
  },
  {
    id: 8,
    question: "How do I apply for admission to Little Learners Academy?",
  },
];
export const navigates = [
  {
    id: 1,
    title: "Abot Us",
    desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    id: 2,
    title: "Academics",
    desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    id: 3,
    title: "Student Life",
    desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    id: 4,
    title: "Admissions",
    desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];
