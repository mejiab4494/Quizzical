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
    question: "What is the role of a compressor in a refrigeration cycle?",
    options: [
    "A) Compresses low-pressure refrigerant gas into high-pressure hot gas",
    "B) Removes heat from refrigerant by cooling it into a liquid",          
    "C) Expands refrigerant to lower its pressure and temperature",           
    "D) Absorbs heat from the space being cooled into the refrigerant"        
    ],
    answer: "A) Compresses low-pressure refrigerant gas into high-pressure hot gas",
  },
  {
    id: 3,
    question: "What is the role of a condenser in a refrigeration cycle?",
    options: [
    "A) Absorbs heat from the space being cooled into the refrigerant",
    "B) Compresses low-pressure refrigerant gas into high-pressure hot gas",
    "C) Expands refrigerant to lower its pressure and temperature",
    "D) Removes heat from refrigerant and releases it outside, turning gas into liquid"
    ],
    answer: "D) Removes heat from refrigerant and releases it outside, turning gas into liquid"
  },
  {
    id: 4,
    question: "What is the role of a metering device (expansion valve) in a refrigeration cycle?",
    options: [
    "A) Compresses low-pressure refrigerant gas into high-pressure hot gas",
    "B) Absorbs heat from the space being cooled into the refrigerant",
    "C) Expands refrigerant to lower its pressure and temperature",
    "D) Removes heat from refrigerant and releases it outside, turning gas into liquid"
  ],
    answer: "C) Expands refrigerant to lower its pressure and temperature"
  },
  {
    id: 5,
    question: "What is the role of an evaporator in a refrigeration cycle?",
    options: [
    "A) Expands refrigerant to lower its pressure and temperature",
    "B) Absorbs heat from the space being cooled into the refrigerant",
    "C) Removes heat from refrigerant and releases it outside, turning gas into liquid",
    "D) Compresses low-pressure refrigerant gas into high-pressure hot gas"
  ],
  answer: "B) Absorbs heat from the space being cooled into the refrigerant"
  }
];


export default questions;