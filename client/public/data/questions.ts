type MCQQuestion = {
  id: number;
  type: "mcq";
  question: string;
  options: number[];
};

type NumberQuestion = {
  id: number;
  type: "number";
  question: string;
};

type Question = MCQQuestion | NumberQuestion;

export const questions: Question[] = [
  {
    id: 1,
    type: "mcq",
    question: "How much do you enjoy listening to music",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    type: "mcq",
    question: "How much do you enjoy folk music",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    type: "mcq",
    question: "How much do you enjoy classical music",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    type: "mcq",
    question: "How much do you enjoy metal and hard rock",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 5,
    type: "mcq",
    question: "How much do you enjoy hip hop and rap",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
    type: "mcq",
    question: "How much do you enjoy watching movies",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 7,
    type: "mcq",
    question: "How much do you enjoy the horror genre",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 8,
    type: "mcq",
    question: "How much do you enjoy the thriller genre",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 9,
    type: "mcq",
    question: "How much do you enjoy the comedy genre",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 10,
    type: "mcq",
    question: "How much do you enjoy the sci-fi genre",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 11,
    type: "mcq",
    question: "How much do you enjoy the animated genre",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 12,
    type: "mcq",
    question: "How much do you enjoy the action genre",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 13,
    type: "mcq",
    question: "How much do you enjoy reading",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 14,
    type: "mcq",
    question: "How much you interested in foreign languages",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 15,
    type: "mcq",
    question: "How much are you interested in cars",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 16,
    type: "mcq",
    question: "How much do you enjoy dancing",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 17,
    type: "mcq",
    question: "How much do you like to play musical instruments",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 18,
    type: "mcq",
    question: "How much do you enjoy dancing",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 19,
    type: "mcq",
    question: "How much do you like to write poetry",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 20,
    type: "mcq",
    question: "How much do you enjoy sport and leisure activities",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 21,
    type: "mcq",
    question: "How much do you enjoy following celebrities",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 22,
    type: "mcq",
    question:
      "How much do you enjoy spending time with your pet (Mark 1 if you don't have any)",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 23,
    type: "mcq",
    question: "How much do you enjoy studying or working in your free time",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 24,
    type: "mcq",
    question: "How often do you wish to be the funniest one in the room",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 25,
    type: "mcq",
    question: "How often do you feel lonely in life",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 26,
    type: "mcq",
    question: "Do you believe you have a lot of friends",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 27,
    type: "mcq",
    question: "How much do you enjoy meeting new people",
    options: [1, 2, 3, 4, 5],
  },
  {
    id: 28,
    type: "number",
    question: "How old are you",
  },
];
