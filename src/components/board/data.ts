export type QuestionType = {
  points: number;
  question: string;
  answer: string;
};

type Data = {
  categories: string[];
  questions: QuestionType[][];
};

const juniors: Data = {
  categories: [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Biology",
    "Environmental Studies",
    "Chemistry",
    "Mystery"
  ],
  questions: [
    [
      {
        points: 10,
        question: "Which logic gate gives an output of 1 only when both of its inputs are 1?\nA) OR\nB) NOT\nC) XOR\nD) AND",
        answer: "D) AND",
      },
      {
        points: 20,
        question: "What is the output of this Python code?\nx = 5\nx += 3\nx *= 2\nprint(x)\n\nA) 13\nB) 16\nC) 18\nD) 10",
        answer: "B) 16",
      },
      {
        points: 30,
        question: "What is the result of adding the binary numbers 1011 and 0110?\nA) 10001\nB) 10011\nC) 11001\nD) 10101",
        answer: "A) 10001",
      },
      {
        points: 40,
        question: "What is the hexadecimal equivalent of the 4 bit binary number 1111?\nA) 1\nB) 4\nC) F\nD) 16",
        answer: "C) F",
      },
      {
        points: 50,
        question: "In pseudocode, a check reads: IF (Age >= 18) OR (HasID = TRUE AND IsVip = TRUE). If Age = 20, HasID = FALSE, and IsVip = FALSE are inputs given, what happens when the code is run?\nA) Error is generated as inputs are out of range\nB) Conditions are not satisfied\nC) Conditions are satisfied\nD) Wrong syntax",
        answer: "C) Conditions are satisfied",
      },
      {
        points: 60,
        question: "How many stars (*) does this pseudocode print?\nFor i from 1 to 4:\nFor j from 1 to i:\nPrint \"*\"\n\nA) 4\nB) 10\nC) 8\nD) 16",
        answer: "B) 10",
      },
    ],
    [
      {
        points: 10,
        question: "Evaluate (\u22123)\u00b2 \u2212 3\u00b2\nA) 0\nB) 18\nC) \u221218\nD) 9",
        answer: "A) 0",
      },
      {
        points: 20,
        question: "A bag contains 3 red balls and 7 blue balls. A ball is drawn at random and not replaced. A second ball is drawn. What is the probability that the second ball is red, given that the first ball drawn was red?\nA) 3/10\nB) 2/9\nC) 3/9\nD) 2/10",
        answer: "B) 2/9",
      },
      {
        points: 30,
        question: "Solve for \u221a(x\u00b2) = 9\nA) +9, \u22129\nB) +9\nC) \u22129\nD) Neither of the above",
        answer: "A) +9, \u22129",
      },
      {
        points: 40,
        question: "A 13 m ladder leans against a vertical wall, with its foot 5 m from the base of the wall. How high up the wall does the ladder reach?\nA) 8 m\nB) 12 m\nC) 14 m\nD) 18 m",
        answer: "B) 12 m",
      },
      {
        points: 50,
        question: "For what values of k does the equation 2x\u00b2 + kx + 8 = 0 have equal roots?\nA) k = \u00b14\nB) k = \u00b18\nC) k = 4\nD) k = 8",
        answer: "B) k = \u00b18",
      },
      {
        points: 60,
        question: "Find the compound interest on Rs. 10,000 for 2 years at 10% per annum, compounded yearly.\nA) Rs. 2,100\nB) Rs. 2,000\nC) Rs. 2,200\nD) Rs. 12,100",
        answer: "A) Rs. 2,100",
      },
    ],
    [
      {
        points: 10,
        question: "A 12 V battery is connected across a 4 \u03a9 resistor. What current flows through the resistor?\nA) 3 A\nB) 8 A\nC) 16 A\nD) 48 A",
        answer: "A) 3 A",
      },
      {
        points: 20,
        question: "A car travels 10 km East, turns around, and travels 10 km West in 20 minutes. What is the car\u2019s average velocity in km/h?\nA) \u221260 km/h\nB) 0 km/h\nC) 1 km/h\nD) 60 km/h",
        answer: "B) 0 km/h",
      },
      {
        points: 30,
        question: "A stone is dropped from rest. What is its speed after 3 seconds of free fall?\nA) 10 m/s\nB) 20 m/s\nC) 30 m/s\nD) 45 m/s",
        answer: "C) 30 m/s",
      },
      {
        points: 40,
        question: "A 1000 W heater is used to warm 2 kg of water by 10 \u00b0C. How long does it take, assuming no heat is lost? (specific heat capacity of water = 4200 J/kg\u00b0C)\nA) 42 s\nB) 168 s\nC) 84 s\nD) 8.4 s",
        answer: "C) 84 s",
      },
      {
        points: 50,
        question: "Two resistors of 4 \u03a9 and 6 \u03a9 are connected in parallel across an ideal 12 V battery. Which resistor dissipates more power?\nA) 4 \u03a9\nB) 6 \u03a9\nC) Same for both resistors as they are in parallel\nD) Resistors do not dissipate power",
        answer: "A) 4 \u03a9",
      },
      {
        points: 60,
        question: "An object is placed 15 cm in front of a diverging (concave) lens with a focal length of 10 cm. Is the image real or virtual, and is it inverted or upright?\nA) Real, Inverted\nB) Real, Upright\nC) Virtual, Inverted\nD) Virtual, Upright",
        answer: "D) Virtual, Upright",
      },
    ],
    [
      {
        points: 10,
        question: "Which of the following describes the bonds found in one molecule of water?\nA) Hydrogen\nB) Nonpolar covalent\nC) Polar covalent\nD) Ionic",
        answer: "C) Polar covalent",
      },
      {
        points: 20,
        question: "A protein\u2019s tertiary structure is most strongly influenced by:\nA) ATP synthetase (pronounced: SIN the tase)\nB) imbedding in the plasma membrane\nC) ionic and hydrogen bonds between R groups\nD) the quaternary structure",
        answer: "C) ionic and hydrogen bonds between R groups",
      },
      {
        points: 30,
        question: "Excess secretion from this gland can cause a person to be thin, hyperactive, always hungry, and irritable.\nA) adrenal cortex\nB) thyroid\nC) anterior pituitary\nD) adrenal medulla",
        answer: "B) thyroid",
      },
      {
        points: 40,
        question: "Transfer RNA has all of the following characteristics, EXCEPT which of the following?\nA) It travels from the nucleus to the cytoplasm in eukaryotes\nB) It is attached to an amino acid at the 5 prime end\nC) Its three dimensional structure is roughly L shaped\nD) It can be used repeatedly",
        answer: "B) It is attached to an amino acid at the 5 prime end",
      },
      {
        points: 50,
        question: "What is water loss through the stomata of a plant called:\nA) condensation\nB) liquidation\nC) transpiration\nD) exchange",
        answer: "C) transpiration",
      },
      {
        points: 60,
        question: "In early experiments in the mid 1900\u2019s, the source and fate of oxygen involved in photosynthesis was mostly determined through experiments that used:\nA) animals in closed containers that would die unless a plant was introduced into the container\nB) a heavy isotope of oxygen as a tracer\nC) fluorescent labeling of various enzymes and organic products\nD) simple accounting of the atomic mass of all the reactants and products",
        answer: "B) a heavy isotope of oxygen as a tracer",
      },
    ],
    [
      {
        points: 10,
        question: "What forms when streams enter bodies of standing water, undergo an abrupt loss of velocity, and drop their load of sediment?\nA) Alluvial fans\nB) Taluscones\nC) Vasnes\nD) Deltas",
        answer: "D) Deltas",
      },
      {
        points: 20,
        question: "Geothermal power plants use which of the following to generate electricity:\nA) coal\nB) steam\nC) sunlight\nD) pressurized water",
        answer: "B) steam",
      },
      {
        points: 30,
        question: "Named in honor of the English Mathematician who explained them, what is the name for the thermal circulation consisting of rising air near the equator and sinking air near 30\u00b0 latitude:\nA) Rossby wave\nB) Ferrel cell\nC) Hadley cell\nD) Christopher cell",
        answer: "C) Hadley cell",
      },
      {
        points: 40,
        question: "A major function of a refractory is\nA) the conduction of heat\nB) for heat insulation\nC) as a source of essential reactants for smelting\nD) as a source of flux material for slag formation",
        answer: "B) for heat insulation",
      },
      {
        points: 50,
        question: "Chemical weathering of sodium and plagioclase feldspar result in hydrous aluminous silicates otherwise known as?\nA) Evaporites\nB) Clay minerals\nC) Precipitates\nD) Sheet silicates",
        answer: "B) Clay minerals",
      },
      {
        points: 60,
        question: "All of the following are formed by deposition EXCEPT:\nA) sea stack\nB) beach\nC) sandbar\nD) spit",
        answer: "A) sea stack",
      },
    ],
    [
      {
        points: 10,
        question: "Sulfur forms the following compounds: SO2, SCl2, and SO32\u2212. Which form of hybridization is NOT represented by these molecules?\nA) sp\nB) sp\u00b2\nC) sp\u00b3\nD) None of these",
        answer: "A) sp",
      },
      {
        points: 20,
        question: "Which of the following is least related to the strength of a covalent bond?\nA) vibrational frequency\nB) bond order\nC) bond length\nD) bond direction",
        answer: "D) bond direction",
      },
      {
        points: 30,
        question: "Which of the following scientists hypothesized that it would be possible for particles to have wave like properties? Was it:\nA) Planck\nB) Heisenberg\nC) Einstein\nD) de Broglie",
        answer: "D) de Broglie",
      },
      {
        points: 40,
        question: "An amine is a class of compounds that contains a:\nA) sulfur and hydrogen group\nB) nitrogen and oxygen group\nC) nitrogen and hydrogen group\nD) carbon and sulfur group",
        answer: "C) nitrogen and hydrogen group",
      },
      {
        points: 50,
        question: "Out of the following choices, which is the correct name for N2O3:\nA) dinitrogen oxide\nB) dinitrogen dioxide\nC) dinitrogen trioxide\nD) dinitrogen tetroxide",
        answer: "C) dinitrogen trioxide",
      },
      {
        points: 60,
        question: "Which of the following is the theoretical end of a titration:\nA) end point\nB) indicator point\nC) equivalence point\nD) standardization point",
        answer: "C) equivalence point",
      },
    ],
    [
      {
        points: 10,
        question: "Known as the \u201cHuman Computer\u201d of India, she set a world record by mentally multiplying two 13 digit numbers in just 28 seconds. Name her.\nA) Janaki Ammal\nB) Shakuntala Devi\nC) Kalpana Chawla\nD) Asima Chatterjee",
        answer: "B) Shakuntala Devi",
      },
      {
        points: 20,
        question: "Who was the first Indian origin woman to travel into space aboard the Space Shuttle Columbia in 1997?\nA) Sunita Williams\nB) Shawna Pandya\nC) Kalpana Chawla\nD) Sirisha Bandla",
        answer: "C) Kalpana Chawla",
      },
      {
        points: 30,
        question: "Born in Lahore, this Pakistani American astrophysicist served as the Dean of Science at MIT and helped detect gravitational waves. Name her.\nA) Dr. Nergis Mavalvala\nB) Dr. Tasneem Zehra Husain\nC) Dr. Perween Rahman\nD) Dr. Abha Sur",
        answer: "A) Dr. Nergis Mavalvala",
      },
      {
        points: 40,
        question: "Which pioneering botanist cross bred sugarcane varieties in the 1930s to make them sweeter and suit India\u2019s tropical climate?\nA) Asima Chatterjee\nB) Anna Mani\nC) Archana Sharma\nD) Janaki Ammal",
        answer: "D) Janaki Ammal",
      },
      {
        points: 50,
        question: "Who holds the distinction of being the first Pakistani woman to earn a PhD in Theoretical Physics / String Theory?\nA) Dr. Nergis Mavalvala\nB) Dr. Tasneem Zehra Husain\nC) Dr. Samina Shah\nD) Dr. Azra Raza",
        answer: "B) Dr. Tasneem Zehra Husain",
      },
      {
        points: 60,
        question: "She was the first woman to earn a Doctorate of Science from an Indian university (1944) for developing plant based drugs to treat malaria. Who was she?\nA) Kamala Sohonie\nB) Asima Chatterjee\nC) Rajeshwari Chatterjee\nD) Raman Parimala",
        answer: "B) Asima Chatterjee",
      },
    ],
  ],
};

const seniors: Data = {
  categories: [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Computer Science",
    "Biology",
    "Environment",
    "Mystery (South Asian Women in STEM)"
  ],
  questions: [
    [
      {
        points: 10,
        question: "What is the value of cos(60\u00b0)?\nA) 0\nB) 1/2\nC) \u221a3/2\nD) 1",
        answer: "B) 1/2",
      },
      {
        points: 20,
        question: "If h(x) = x\u00b2 \u2212 3x + 2, what is the value of h(3)?\nA) 1\nB) 2\nC) 3\nD) 4",
        answer: "B) 2",
      },
      {
        points: 30,
        question: "What is the sum of the interior angles of a hexagon?\nA) 540\u00b0\nB) 600\u00b0\nC) 720\u00b0\nD) 900\u00b0",
        answer: "C) 720\u00b0",
      },
      {
        points: 40,
        question: "If y = x\u00b3 + 2x\u00b2 \u2212 5x + 1, what is the second derivative of y?\nA) 6x + 4\nB) 6x + 2\nC) 6x \u2212 5\nD) 6x",
        answer: "A) 6x + 4",
      },
      {
        points: 50,
        question: "A circle has the equation: x\u00b2 + y\u00b2 \u2212 6x + 8y + 9 = 0\n\nWhat is its radius?\nA) 2\nB) 3\nC) 4\nD) 5",
        answer: "C) 4",
      },
      {
        points: 60,
        question: "Evaluate the following limit: lim (x\u21920) [1 \u2212 cos(4x)] / x\u00b2\nA) 4\nB) 8\nC) 16\nD) 2",
        answer: "B) 8",
      },
    ],
    [
      {
        points: 10,
        question: "What is the SI unit of electrical resistance?\nA) Ampere\nB) Volt\nC) Ohm\nD) Watt",
        answer: "C) Ohm",
      },
      {
        points: 20,
        question: "Which color of the visible light spectrum has the highest frequency and shortest wavelength?\nA) Red\nB) Green\nC) Yellow\nD) Violet",
        answer: "D) Violet",
      },
      {
        points: 30,
        question: "What is the net work done on an object moving at a constant speed along a circular track for exactly one complete revolution?\nA) Maximum positive work\nB) Maximum negative work\nC) Zero work\nD) Equal to the centripetal force multiplied by the circumference",
        answer: "C) Zero work",
      },
      {
        points: 40,
        question: "A sound wave travels through water with a frequency of 500 Hz and a wavelength of 3.0 meters. What is the speed of the sound wave in water?\nA) 1,000 m/s\nB) 1,500 m/s\nC) 3,000 m/s\nD) 4,500 m/s",
        answer: "B) 1,500 m/s",
      },
      {
        points: 50,
        question: "An electron and a proton are accelerated from rest through the exact same potential difference V. How do their de Broglie wavelengths compare?\nA) The de Broglie wavelength of the electron is greater because of its smaller mass.\nB) The de Broglie wavelength of the proton is greater because of its larger mass.\nC) Their de Broglie wavelengths are identical because they experience the same electrostatic force.\nD) The de Broglie wavelength of the electron is zero.",
        answer: "A) The de Broglie wavelength of the electron is greater because of its smaller mass.",
      },
      {
        points: 60,
        question: "According to Wien's Displacement Law, if the absolute temperature (T) of a blackbody radiator is doubled, what happens to the wavelength at which the maximum spectral emission occurs (lambda max)?\nA) It doubles\nB) It quadruples\nC) It is halved\nD) It remains unchanged",
        answer: "C) It is halved",
      },
    ],
    [
      {
        points: 10,
        question: "Which of the following is a noble gas?\nA) Nitrogen\nB) Chlorine\nC) Neon\nD) Hydrogen",
        answer: "C) Neon",
      },
      {
        points: 20,
        question: "How many moles are present in 36 g of water (H\u2082O, M = 18 g/mol)?\nA) 1\nB) 2\nC) 3\nD) 18",
        answer: "B) 2",
      },
      {
        points: 30,
        question: "For the exothermic reaction N\u2082(g) + 3H\u2082(g) \u21cc 2NH\u2083(g), which change increases the equilibrium yield of NH\u2083?\nA) Increasing the temperature\nB) Increasing the pressure\nC) Removing the catalyst\nD) Removing N\u2082 from the mixture",
        answer: "B) Increasing the pressure",
      },
      {
        points: 40,
        question: "A 80 g sample of a radioactive isotope has a half-life of 5 days. How much remains after 15 days?\nA) 40 g\nB) 20 g\nC) 10 g\nD) 5 g",
        answer: "C) 10 g",
      },
      {
        points: 50,
        question: "50 mL of 0.20 M HCl is mixed with 50 mL of 0.10 M NaOH. What is the pH of the resulting solution?\nA) 1.0\nB) 1.3\nC) 1.7\nD) 2.0",
        answer: "B) 1.3",
      },
      {
        points: 60,
        question: "Ionization energy generally increases across a period, yet the first ionization energy of oxygen (1314 kJ/mol) is lower than that of nitrogen (1402 kJ/mol). Which explanation is correct?\nA) Oxygen has a larger atomic radius than nitrogen, so its outer electrons are held less tightly.\nB) Oxygen has a lower nuclear charge than nitrogen.\nC) In oxygen, one 2p orbital holds a paired electron, and the inter-electronic repulsion in that orbital makes the electron easier to remove than from nitrogen\u2019s stable half-filled 2p subshell.\nD) Oxygen\u2019s electrons are removed from a 2s orbital, which is higher in energy than 2p.",
        answer: "C) In oxygen, one 2p orbital holds a paired electron, and the inter-electronic repulsion in that orbital makes the electron easier to remove than from nitrogen\u2019s stable half-filled 2p subshell.",
      },
    ],
    [
      {
        points: 10,
        question: "Which service translates a domain name into an IP address?\nA) DHCP\nB) DNS\nC) FTP\nD) HTTP",
        answer: "B) DNS",
      },
      {
        points: 20,
        question: "What is the output of an XOR gate when both inputs are 1?\nA) 0\nB) 1\nC) Undefined\nD) Depends on clock",
        answer: "A) 0",
      },
      {
        points: 30,
        question: "A binary search is performed on the sorted list:[3, 7, 11, 15, 19, 23, 27] What is the minimum number of comparisons required to find the value 23 using the standard binary search algorithm?\nA) 1\nB) 2\nC) 3\nD) 4",
        answer: "B) 2",
      },
      {
        points: 40,
        question: "During compilation, which phase converts source code into tokens such as keywords, identifiers and operators?\nA) Syntax Analysis\nB) Lexical Analysis\nC) Code Generation\nD) Code Optimisation",
        answer: "B) Lexical Analysis",
      },
      {
        points: 50,
        question: "Consider the following pseudocode:\nFOR i \u2190 1 TO n\n    j \u2190 1\n    WHILE j < n\n        j \u2190 j * 2\n    ENDWHILE\nENDFOR\nWhat is the time complexity of this algorithm in Big-O notation?\n\nA) O(n)\nB) O(n\u00b2)\nC) O(n log n)\nD) O(log n)",
        answer: "C) O(n log n)",
      },
      {
        points: 60,
        question: "Consider the following recursive pseudocode:\n\nFUNCTION mystery(n)\n    IF n = 0 THEN\n        RETURN 1\n    ELSE IF n = 1 THEN\n        RETURN 2\n    ELSE\n        RETURN mystery(n-1) + 2 * mystery(n-2) + n\n    ENDIF\nEND FUNCTION\nOUTPUT mystery(4)\n\nWhat will be the output?",
        answer: "29.0",
      },
    ],
    [
      {
        points: 10,
        question: "Which of these molecules is the main product of photosynthesis, used by plants for energy storage and respiration?\nA) Glucose\nB) ATP\nC) Starch\nD) Cellulose",
        answer: "A) Glucose",
      },
      {
        points: 20,
        question: "Why is the wall of the left ventricle thicker than that of the right ventricle?\nA) It holds more blood than the right ventricle\nB) It contains valves that need extra muscle\nC) It pumps deoxygenated blood to the lungs\nD) It pumps blood at higher pressure around the whole body",
        answer: "D) It pumps blood at higher pressure around the whole body",
      },
      {
        points: 30,
        question: "What is the main force that moves water up the xylem in a tall tree?\nA) Root pressure only\nB) Cohesion and tension created by transpiration\nC) Active transport by xylem vessels\nD) Osmosis through the xylem walls",
        answer: "B) Cohesion and tension created by transpiration",
      },
      {
        points: 40,
        question: "A drawing of a cell measures 45 mm across. The actual cell is 15 \u00b5m across. What is the magnification?\nA) \u00d7300\nB) \u00d730 000\nC) \u00d73000\nD) \u00d70.003",
        answer: "C) x3000",
      },
      {
        points: 50,
        question: "During the mitotic cell cycle, in which phase do sister chromatids separate and move to opposite poles?\nA) Metaphase\nB) Anaphase\nC) Prophase\nD) Telophase",
        answer: "B) Anaphase",
      },
      {
        points: 60,
        question: "A fully turgid plant cell has a solute potential of \u22120.9 MPa. It is placed in a solution with a water potential of \u22120.5 MPa. What happens?\nA) Water leaves the cell, because the cell\u2019s water potential (0 MPa) is higher than the solution\u2019s\nB) Water enters the cell, because its pressure potential is positive\nC) There is no net movement of water, because the cell is turgid\nD) Water enters the cell, because its solute potential is more negative",
        answer: "A) Water leaves the cell, because the cell\u2019s water potential (0 MPa) is higher than the solution\u2019s",
      },
    ],
    [
      {
        points: 10,
        question: "Which natural material is primarily used to manufacture paper products?\nA) Glass\nB) Plastic\nC) Wood (Trees)\nD) Aluminum",
        answer: "C) Wood (Trees)",
      },
      {
        points: 20,
        question: "What term is used to describe a community of living organisms (like plants and animals) interacting with one another and their physical surroundings?\nA) Ecosystem\nB) Population\nC) Biosphere\nD) Biome",
        answer: "A) Ecosystem",
      },
      {
        points: 30,
        question: "What is the primary ecological role of decomposers, such as fungi and bacteria, in a food web?\nA) Producing food using sunlight and water\nB) Consuming living plants to control their growth\nC) Breaking down dead organic matter and recycling nutrients back into the soil\nD) Providing energy directly to apex predators",
        answer: "C) Breaking down dead organic matter and recycling nutrients back into the soil",
      },
      {
        points: 40,
        question: "What environmental term measures the total area of biologically productive land and water required collectively to produce all the resources a population consumes and to absorb its wastes?\nA) Carbon footprint\nB) Ecological footprint\nC) Biocapacity index\nD) Environmental load displacement",
        answer: "B) Ecological footprint",
      },
      {
        points: 50,
        question: "In aquatic toxicology and wastewater management, what does the acronym BOD stand for, and what does a high BOD reading typically signify?\nA) Biological Ozone Demand; high atmospheric pollution\nB) Biochemical Oxygen Demand; high organic pollution and depleted dissolved oxygen\nC) Basic Organic Decomposition; rapid soil nutrient renewal\nD) Benthic Organism Density; high structural biodiversity",
        answer: "B) Biochemical Oxygen Demand; high organic pollution and depleted dissolved oxygen",
      },
      {
        points: 60,
        question: "What term describes the standard rate at which atmospheric temperature decreases with an increase in altitude within the troposphere?\nA) Environmental lapse rate\nB) Adiabatic gradient\nC) Thermal inversion index\nD) Barometric decay constant",
        answer: "A) Environmental lapse rate",
      },
    ],
    [
      {
        points: 10,
        question: "At what young age did Arfa Karim become the world's youngest Microsoft Certified Professional (MCP) in 2004?\nA) 5 years old\nB) 9 years old\nC) 14 years old\nD) 18 years old",
        answer: "B) 9 years old",
      },
      {
        points: 20,
        question: "Though born in Germany, Dr. Ruth Pfau became a national hero in Pakistan and was given a state funeral in 2017 for dedicating 55 years of her life to nearly eradicating which disease from the country?",
        answer: "Leprosy",
      },
      {
        points: 30,
        question: "At the time of independence in 1947, there was a severe shortage of female medical professionals, with barely over 100 female doctors in the region. To address this crisis, the government established Pakistan's first-ever exclusive women's medical college in Lahore. What is the name of this historic institution?",
        answer: "Fatima Jinnah Medical College (now University)",
      },
      {
        points: 40,
        question: "What is the name of Pakistan's annual women-only tech competition launched by the digital engineering firm 10Pearls, particpated by hundreds of female developers, QA professionals, and UX/UI designers across cities like Karachi, Lahore, and Islamabad?\nA) Women in Tech PK\nB) Women Tech Quest (WTQ)\nC) Tech Karo\nD) CodeGirls",
        answer: "B) Women Tech Quest (WTQ)",
      },
      {
        points: 50,
        question: "Dr. Nergis Mavalvala is renowned for her pioneering work in the direct detection of gravitational waves as part of which major international scientific collaboration?\nA) LIGO (Laser Interferometer Gravitational-Wave Observatory)\nB) CERN (The Large Haldron Collider)\nC) The Hubble Space Telescope Mission\nD) The James Webb Space Telescope Team",
        answer: "A) LIGO (Laser Interferometer Gravitational-Wave Observatory)",
      },
      {
        points: 60,
        question: "At MIT, Dr. Nergis Mavalvala\u2019s research group heavily focuses on macroscopic quantum mechanics and the generation of what specific optical state to dramatically reduce quantum noise in gravitational wave detectors?\nA) Bose-Einstein condensates of photons\nB) Rydberg polariton lattices\nC) Chiral soliton waves\nD) Squeezed states of light",
        answer: "D) Squeezed states of light",
      },
    ],
  ],
};

function transpose<T>(matrix: T[][]): (T | undefined)[][] {
  if (!matrix || matrix.length === 0) return [];
  const rows = matrix.length;
  const cols = Math.max(...matrix.map((r) => r.length));
  const result: (T | undefined)[][] = Array.from({ length: cols }, (_, c) =>
    Array.from({ length: rows }, (_, r) => matrix[r][c])
  );
  return result;
}

export const juniorsData = {
  categories: juniors.categories,
  questions: transpose(juniors.questions) as QuestionType[][],
};

export const seniorsData = {
  categories: seniors.categories,
  questions: transpose(seniors.questions) as QuestionType[][],
};
