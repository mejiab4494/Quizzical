const questions = [
   {
     id: 1,
       type: "dragdrop",
       question: "Label the Refrigeration cycle?",
       image: "./refricycle.png",

     labels: [
       "Compressor",
       "Hot high-pressure gas",
       "Condenser",
       "Warm high-pressure liquid",
       "Metering Device",
       "Cold low-pressure liquid",
       "Evaporator",
       "Cold low-pressure gas"
     ],

     // correct mapping
     answer: {
       1: "Compressor",
       2: "Hot high-pressure gas",
       3: "Condenser",
       4: "Warm high-pressure liquid",
       5: "Metering Device",
       6: "Cold low-pressure liquid",
       7: "Evaporator",
       8: "Cold low-pressure gas"
     }
   },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    id: 4,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    id: 5,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  }
];


export default questions;