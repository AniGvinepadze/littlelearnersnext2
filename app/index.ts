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
  img,
  mail,
  phone,
  location,
  fb,
  tw,
  inpng,
  mission,
  vision,
  award1,
  award2,
  award3,
  teacher1,
  teacher2,
  teacher3,
  teacher4,
  teacher5,
  teacher6,
  book,
  mobileData,
  puzzle,
  brush,
  sun,
  star2,
  student1,
  student2,
  student3,
  student4,
  student6,
  student5,
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
    href: "/",
  },
  {
    id: "aboutUs",
    name: "About Us",
    href: "/about-us",
  },
  {
    id: "academics",
    name: "Academics",
    href: "/academics",
  },
  {
    id: "admissions",
    name: "Admissions",
    href: "/admissions",
  },
  {
    id: "studentLife",
    name: "Student Life",
    href: "/student-life",
  },
  {
    id: "contact",
    name: "Contact",
    href: "/contact",
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

export const address = [
  {
    id: 1,
    img: mail,
    title: "hello@littlelearners.com",
  },
  {
    id: 2,
    img: phone,
    title: "+91 91813 23 2309",
  },
  {
    id: 3,
    img: location,
    title: "Somewhere in the World",
  },
];
export const soccial = [
  {
    id: 1,
    img: fb,
  },
  {
    id: 2,
    img: tw,
  },
  {
    id: 3,
    img: inpng,
  },
];

export const links1 = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Features",
  },
  {
    id: 3,
    title: "Our Testimonials",
  },
  {
    id: 4,
    title: "Faq",
  },
];

export const links2 = [
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Our Mission",
  },
  {
    id: 3,
    title: "Our Vission",
  },
  {
    id: 4,
    title: "Awards and Recognitions",
  },
  {
    id: 5,
    title: "History",
  },
  {
    id: 6,
    title: "Teachers",
  },
];

export const links3 = [
  {
    id: 1,
    title: "Academics",
  },
  {
    id: 2,
    title: "Special Features",
  },
  {
    id: 3,
    title: "Gallery",
  },
];

export const links4 = [
  {
    id: 1,
    title: "Contact Us",
  },
  {
    id: 2,
    title: "Information",
  },
  {
    id: 3,
    title: "Map & Direction",
  },
];

export const missions = [
  {
    id: 1,
    img: mission,
    title: "Mission",
    desc: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
  },
  {
    id: 2,
    img: vision,
    title: "Vision",
    desc: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
  },
];
export const awards = [
  {
    id: 1,
    img: award1,
    title: "Outstanding Early Childhood Education Awar",
    desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    id: 2,
    img: award2,
    title: "Innovative STEAM Education Award",
    desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    id: 3,
    img: award3,
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    id: 4,
    img: award1,
    title: "Outstanding Early Childhood Education Awar",
    desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    id: 5,
    img: award2,
    title: "Innovative STEAM Education Award",
    desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    id: 6,
    img: award3,
    title: "Environmental Stewardship Award",
    desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

export const history = [
  {
    id: 1,
    year: "2023",
    name: "Resilience and Future Horizons",
    desc: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    id: 2,
    year: "2017",
    name: "Innovation and Technology",
    desc: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    id: 3,
    year: "2012",
    name: "Expansion and Recognition",
    desc: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    id: 4,
    year: "2005",
    name: "Inception and Growth",
    desc: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

export const teachers = [
  {
    id: 1,
    img: teacher1,
    name: "Ms. Sarah Anderson",
    subject: "Qualification:Bachelor's Degree in Early Childhood Education",
    info: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    id: 2,
    img: teacher2,
    name: "Mr. David Roberts",
    subject: "Qualification: Master's Degree in Elementary Education",
    info: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    id: 3,
    img: teacher3,
    name: "Ms. Emily Hernandez",
    subject: "Qualification: Diploma in Child Psychology",
    info: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    id: 4,
    img: teacher4,
    name: "Mr. Michael Turner",
    subject: "Qualification: Bachelor's Degree in Physical Education",
    info: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    id: 5,
    img: teacher5,
    name: "Ms. Jessica Lee",
    subject: "Qualification: Master's Degree in Special Education",
    info: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    id: 6,
    img: teacher6,
    name: "Mr. William Parker",
    subject: "Qualification: Bachelor's Degree in Fine Arts",
    info: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export const features = [
  {
    id: 1,
    img: book,
    title: "Thematic Learning",
    desc: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    id: 2,
    img: mobileData,
    title: "STEAM Education",
    desc: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    id: 3,
    img: puzzle,
    title: "Language Immersion",
    desc: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    id: 4,
    img: brush,
    title: "Art and Creativity",
    desc: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    id: 5,
    img: sun,
    title: "Outdoor Education",
    desc: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    id: 6,
    img: star2,
    title: "Play-Based Learning",
    desc: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

export const students = [
  {
    id: 1,
    img: student1,
    title: "Language Arts",
    desc: "Reading, writing, storytelling, and communication skills.",
  },
  {
    id: 2,
    img: student2,
    title: "Mathematics",
    desc: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    id: 3,
    img: student3,
    title: "Science",
    desc: "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    id: 4,
    img: student4,
    title: "Social Studies",
    desc: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    id: 5,
    img: student5,
    title: "Arts and Crafts",
    desc: "Encouraging creativity through various art forms and crafts.",
  },
  {
    id: 6,
    img: student6,
    title: "Physical Education",
    desc: "Promoting physical fitness, coordination, and teamwork.",
  },
];
