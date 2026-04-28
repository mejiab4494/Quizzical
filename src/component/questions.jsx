const questions = [
  {
    id: 1,
    topic: "refrigeration",
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
    topic: "refrigeration",
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
    topic: "refrigeration",
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
    topic: "refrigeration",
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
    topic: "refrigeration",
    question: "What is the role of an evaporator in a refrigeration cycle?",
    options: [
      "A) Expands refrigerant to lower its pressure and temperature",
      "B) Absorbs heat from the space being cooled into the refrigerant",
      "C) Removes heat from refrigerant and releases it outside, turning gas into liquid",
      "D) Compresses low-pressure refrigerant gas into high-pressure hot gas"
    ],
    answer: "B) Absorbs heat from the space being cooled into the refrigerant"
  },
  {
    id: 6,
    topic: "fire safety",
    question: "How many cabinets per suite does the double interlock pre-action system contain?",
    options: [
      "A) 1 cabinet per suite",
      "B) 2 cabinets per suite",
      "C) 3 cabinets per suite",
      "D) 4 cabinets per suite"
    ],
    answer: "C) 3 cabinets per suite"
  },
  {
    id: 7,
    topic: "fire safety",
    question: "What is the correct system air pressure range for pipes in gauge identification?",
    options: [
      "A) 75-150 PSI",
      "B) 75-175 PSI",
      "C) 15-60 PSI",
      "D) 50-100 PSI"
    ],
    answer: "C) 15-60 PSI"
  },
  {
    id: 8,
    topic: "fire safety",
    question: "What is the priming pressure range for the deluge system?",
    options: [
      "A) 15-60 PSI",
      "B) 75-150 PSI",
      "C) 100-200 PSI",
      "D) 75-175 PSI"
    ],
    answer: "D) 75-175 PSI"
  },
  {
    id: 9,
    topic: "fire safety",
    question: "What type of smoke detector is used in the Cross Zone (HSO) system?",
    options: [
      "A) Overhead smoke detector",
      "B) Underfloor smoke detector",
      "C) Duct-mounted smoke detector",
      "D) Beam-type smoke detector"
    ],
    answer: "B) Underfloor smoke detector"
  },
  {
    id: 10,
    topic: "fire safety",
    question: "In the Cross Detection Pre-Action system, how are the two overhead smoke detectors assigned?",
    options: [
      "A) Each assigned to separate zones",
      "B) Both assigned to different buildings",
      "C) Assigned to the same zone",
      "D) Assigned to underfloor zones only"
    ],
    answer: "C) Assigned to the same zone"
  },
  {
    id: 11,
    topic: "fire safety",
    question: "What is the second step in the double interlock pre-action system after CD primes the solenoid?",
    options: [
      "A) Activation of building strobes",
      "B) Loss of air pressure, allowing the deluge valve to open",
      "C) HVAC HSO Shutdown",
      "D) Sending a supervisory signal to FACP"
    ],
    answer: "B) Loss of air pressure, allowing the deluge valve to open"
  },
  {
    id: 12,
    topic: "fire safety",
    question: "What does the FIRST smoke detector activation do?",
    options: [
      "A) Sends an alarm to FACP and activates building A/V",
      "B) Closes computer room smoke dampers",
      "C) Sends a supervisory to FACP and activates strobe in the affected suite",
      "D) Activates the Pre-Action cabinet solenoid"
    ],
    answer: "C) Sends a supervisory to FACP and activates strobe in the affected suite"
  },
  {
    id: 13,
    topic: "fire safety",
    question: "Which of the following is NOT triggered by the second smoke detector activation?",
    options: [
      "A) Activate building and suite A/V (strobes and horns)",
      "B) Illuminated solid red LED on detector",
      "C) Close computer room smoke dampers",
      "D) HVAC HSO Shutdown"
    ],
    answer: "B) Illuminated solid red LED on detector"
  },
  {
    id: 14,
    topic: "fire safety",
    question: "What is the water supply pressure range for water entry?",
    options: [
      "A) 15-60 PSI",
      "B) 75-175 PSI",
      "C) 75-150 PSI",
      "D) 100-175 PSI"
    ],
    answer: "C) 75-150 PSI"
  },
  {
    id: 15,
    topic: "fire safety",
    question: "What triggers the mechanical signal in the double interlock pre-action system?",
    options: [
      "A) Loss of water pressure",
      "B) Signal from smoke heads",
      "C) Loss of air pressure",
      "D) Activation of door holders"
    ],
    answer: "B) Signal from smoke heads"
  },
  {
    id: 16,
    topic: "generator",
    question: "What is the correct battery voltage range for the generator's running parameters?",
    options: [
      "A) 12-15V",
      "B) 24-27V",
      "C) 18-22V",
      "D) 28-32V"
    ],
    answer: "B) 24-27V"
  },
  {
    id: 17,
    topic: "generator",
    question: "What is the minimum acceptable oil pressure for the generator while running?",
    options: [
      "A) >25 psi",
      "B) >50 psi",
      "C) >35 psi",
      "D) >68 psi"
    ],
    answer: "C) >35 psi"
  },
  {
    id: 18,
    topic: "generator",
    question: "At what temperature is the generator flagged (X) for coolant and oil temperature?",
    options: [
      "A) =>180F",
      "B) =>200F",
      "C) =>210F",
      "D) =>225F"
    ],
    answer: "D) =>225F"
  },
  {
    id: 19,
    topic: "generator",
    question: "What is the generator's normal engine speed and frequency?",
    options: [
      "A) ~1200 RPM / 50 HZ",
      "B) ~1800 RPM / 60 HZ",
      "C) ~2400 RPM / 60 HZ",
      "D) ~1500 RPM / 50 HZ"
    ],
    answer: "B) ~1800 RPM / 60 HZ"
  },
  {
    id: 20,
    topic: "generator",
    question: "What is the correct amperage range for the generator's running parameters?",
    options: [
      "A) 1-2 ADC",
      "B) 5-10 ADC",
      "C) 2-4 ADC",
      "D) 10-15 ADC"
    ],
    answer: "C) 2-4 ADC"
  },
  {
    id: 21,
    topic: "generator",
    question: "What is the minimum acceptable fuel pressure for the generator?",
    options: [
      "A) >60 psi",
      "B) >72 psi",
      "C) >80 psi",
      "D) >92 psi"
    ],
    answer: "B) >72 psi"
  },
  {
    id: 22,
    topic: "generator",
    question: "What does the 10% ullage in the fuel tank allow for?",
    options: [
      "A) Emergency fuel reserve",
      "B) Fuel filtration",
      "C) Expansion",
      "D) Sediment settling"
    ],
    answer: "C) Expansion"
  },
  {
    id: 23,
    topic: "generator",
    question: "What type of fuel does the generator use and why?",
    options: [
      "A) Regular diesel — widely available and inexpensive",
      "B) Ultra Low Red Sulfur Diesel — for stationary off-road use, burns cleaner and costs less",
      "C) Biodiesel — environmentally friendly and renewable",
      "D) JP-8 jet fuel — high energy density and stability"
    ],
    answer: "B) Ultra Low Red Sulfur Diesel — for stationary off-road use, burns cleaner and costs less"
  },
  {
    id: 24,
    topic: "generator",
    question: "How many gallons does the fuel tank hold at 90% capacity?",
    options: [
      "A) 5,400 gallons",
      "B) 6,400 gallons",
      "C) 5,760 gallons",
      "D) 4,800 gallons"
    ],
    answer: "C) 5,760 gallons"
  },
  {
    id: 25,
    topic: "generator",
    question: "What is the cooling system capacity and coolant mixture used?",
    options: [
      "A) 200 gallons, 50/50 Propylene glycol",
      "B) 316 gallons, 50/50 Ethylene glycol",
      "C) 171 gallons, 15/40w oil mix",
      "D) 450 gallons, pure distilled water"
    ],
    answer: "B) 316 gallons, 50/50 Ethylene glycol"
  },
  {
    id: 26,
    topic: "generator",
    question: "What is the DEF/Urea tank capacity at 100%?",
    options: [
      "A) 316 gallons",
      "B) 400 gallons",
      "C) 450 gallons",
      "D) 500 gallons"
    ],
    answer: "D) 500 gallons"
  },
  {
    id: 27,
    topic: "generator",
    question: "When is ozone season and what are the restricted hours?",
    options: [
      "A) June 1 – August 31, 6am-6pm",
      "B) April 1 – October 31, 8am-4pm",
      "C) May 1 – September 30, 7am-5pm",
      "D) May 15 – September 15, 9am-3pm"
    ],
    answer: "C) May 1 – September 30, 7am-5pm"
  },
  {
    id: 28,
    topic: "generator",
    question: "Approximately how many hours of DEF dosing does the tank provide at 100% load?",
    options: [
      "A) 20 hours",
      "B) 30 hours",
      "C) 40 hours",
      "D) 50 hours"
    ],
    answer: "C) 40 hours"
  },
  {
    id: 29,
    topic: "generator",
    question: "What is the oil capacity including filters?",
    options: [
      "A) 100 gallons (10/30w)",
      "B) 171 gallons (15/40w)",
      "C) 200 gallons (5/20w)",
      "D) 316 gallons (15/40w)"
    ],
    answer: "B) 171 gallons (15/40w)"
  },
  {
    id: 30,
    topic: "generator",
    question: "What is the boost pressure for the generator's running parameters?",
    options: [
      "A) 7 psi",
      "B) 10 psi",
      "C) 14 psi",
      "D) 20 psi"
    ],
    answer: "C) 14 psi"
  },
  {
    id: 31,
    topic: "UPS",
    question: "What is the primary function of a Rectifier in a UPS system?",
    options: [
      "A) Converts DC to AC power",
      "B) Converts AC to DC power",
      "C) Stores backup power",
      "D) Switches between power sources"
    ],
    answer: "B) Converts AC to DC power"
  },
  {
    id: 32,
    topic: "UPS",
    question: "What is the primary function of an Inverter in a UPS system?",
    options: [
      "A) Converts AC to DC power",
      "B) Stores backup power",
      "C) Converts DC to AC power",
      "D) Regulates voltage fluctuations"
    ],
    answer: "C) Converts DC to AC power"
  },
  {
    id: 33,
    topic: "UPS",
    question: "What role do batteries play in a UPS system?",
    options: [
      "A) Convert AC power to DC power",
      "B) Switch between utility and generator power",
      "C) Regulate frequency output",
      "D) Serve as a backup power source"
    ],
    answer: "D) Serve as a backup power source"
  },
  {
    id: 34,
    topic: "UPS",
    question: "What is the function of a Static Switch in a UPS system?",
    options: [
      "A) Converts DC power back to AC",
      "B) Switches between power sources",
      "C) Stores energy for backup use",
      "D) Filters electrical noise from the power supply"
    ],
    answer: "B) Switches between power sources"
  },
  {
    id: 35,
    topic: "UPS",
    question: "Which two UPS components work together to first convert AC to DC and then back to AC?",
    options: [
      "A) Static Switch and Batteries",
      "B) Capacitors and Transformers",
      "C) Rectifier and Inverter",
      "D) Contactor and Breaker"
    ],
    answer: "C) Rectifier and Inverter"
  },
  {
    id: 36,
    topic: "UPS",
    question: "Which UPS component stores electrical energy and helps smooth out voltage fluctuations?",
    options: [
      "A) Contactor",
      "B) Transformer",
      "C) Breaker",
      "D) Capacitor"
    ],
    answer: "D) Capacitor"
  },
  {
    id: 37,
    topic: "UPS",
    question: "What is the role of a Contactor in a UPS system?",
    options: [
      "A) Steps up or steps down voltage levels",
      "B) Electrically switches circuits on or off",
      "C) Stores energy for short-term backup",
      "D) Protects against overcurrent conditions"
    ],
    answer: "B) Electrically switches circuits on or off"
  },
  {
    id: 38,
    topic: "UPS",
    question: "What is the primary purpose of Breakers in a UPS system?",
    options: [
      "A) Convert AC to DC power",
      "B) Step up or step down voltage",
      "C) Protect circuits by interrupting overcurrent or fault conditions",
      "D) Store electrical charge for backup use"
    ],
    answer: "C) Protect circuits by interrupting overcurrent or fault conditions"
  },
  {
    id: 39,
    topic: "UPS",
    question: "What is the function of a Transformer in a UPS system?",
    options: [
      "A) Switches between utility and bypass power",
      "B) Steps up or steps down voltage levels",
      "C) Converts DC power to AC power",
      "D) Stores energy during power outages"
    ],
    answer: "B) Steps up or steps down voltage levels"
  },
  {
    id: 40,
    topic: "UPS",
    question: "Which of the following is NOT listed as one of the four MAIN components of a UPS?",
    options: [
      "A) Rectifier",
      "B) Inverter",
      "C) Transformer",
      "D) Static Switch"
    ],
    answer: "C) Transformer"
  },
  {
    id: 41,
    topic: "UPS",
    type: "dragdrop",
    question: "Label the UPS system",
    image: "../img/ups.png",
    labels: [
      "Maintenance Bypass Breaker",
      "UPS Input Breaker",
      "Rectifier",
      "Battery",
      "Inverter",
      "UPS Output Breaker",
      "Static Bypass Switch",
      "Maintenance Isolation Breaker"
    ],
    answer: {
      1: "Maintenance Bypass Breaker",
      2: "UPS Input Breaker",
      3: "Rectifier",
      4: "Inverter",
      5: "Battery",
      6: "UPS Output Breaker",
      7: "Static Bypass Switch",
      8: "Maintenance Isolation Breaker"
    }
  },
  {
    id: 42,
    topic: "pre-action cabinet",
    type: "dragdrop",
    question: "Label the Pre-Action Cabinet system",
    image: "../img/preActionCabinet.png",
    labels: [
      "Flapper/Deluge Valve",
      "Water Supply",
      "Dry Pipe Valve",
      "Priming Pressure Line",
      "Priming Pressure Gauge",
      "Water Pressure Gauge",
      "Release Valve"
    ],
    answer: {
      1: "Flapper/Deluge Valve",
      2: "Water Supply",
      3: "Dry Pipe Valve",
      4: "Priming Pressure Line",
      5: "Priming Pressure Gauge",
      6: "Water Pressure Gauge",
      7: "Release Valve",
    }
  }
];

export default questions;