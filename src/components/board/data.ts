export type QuestionType = {
  points: number;
  question: string;
  answer: string;
};

type Data = {
  categories: string[];
  questions: QuestionType[][];
};

const oLevel: Data = {
  categories: [
    "Biology",
    "Chemistry",
    "Physics",
    "Mathematics",
    "Computer Science",
    "Environmental Studies",
    "Mystery",
  ],
  questions: [
    [
      {
        points: 10,
        question:
          "The energy currency produced in the light reaction of photosynthesis.",
        answer: "ATP",
      },
      {
        points: 20,
        question: "Apart from hearing what other function the ear performs.?",
        answer: "Balancing",
      },
      {
        points: 30,
        question:
          "Which nerve helps move the tongue\n A) Trochlear\nB) Hypoglossal\nC) Vagus\nD) Olfactory",
        answer: "B) Hypoglossal",
      },
      {
        points: 40,
        question: "Which organ maintains blood sugar level?",
        answer: "Pancreas",
      },
      {
        points: 50,
        question:
          "The flap of tissue that prevents food from entering the trachea when swallowing.",
        answer: "Epiglottis",
      },
      {
        points: 60,
        question: "In genetics, what is a dominant allele?",
        answer:
          "An allele that is always expressed, even if only one copy is present.",
      },
    ],
    [
      {
        points: 10,
        question:
          "What is the smallest particle of an element that can exist independently and retain the properties of that element?\nA) Molecule\nB) Atom\nC) lon\nD) Compound",
        answer: "B) Atom",
      },
      {
        points: 20,
        question:
          "What is the systematic IUPAC name for the compound CH3CH2CH(CH3)CH2CH3?\nA) 2-Methylpentane\nB) 3-Methylpentane\nC) 2-Ethylbutane\nD) Hexane",
        answer: "B) 3-Methylpentane",
      },
      {
        points: 30,
        question:
          "Which of the following is the functional group present in carboxylic acids?\nA)-OH\nB)-CHO\nC) -COOH\nD) -NH2",
        answer: "C) -COOH",
      },
      {
        points: 40,
        question:
          "When a metal oxide reacts with water, it forms a base.\nWhat is the pH range typically associated with a basic solution?\nA) Less than 7\nB) Exactly 7\nC) Greater than 7\nD) Between 0 and 14 (no specific range)",
        answer: "C) Greater than 7",
      },
      {
        points: 50,
        question:
          "In the Haber process for producing ammonia, the balanced equation is:\nN2 + 3H2 -> 2NH3\nHow many moles of ammonia NH3 are produced from 3 moles of nitrogen gas 3N2, assuming excess hydrogen?\nA) 2 moles\nB) 3 moles\nC) 6 moles\nD) 9 moles",
        answer: "C) 6 moles",
      },
      {
        points: 60,
        question:
          "During the electrolysis of molten sodium chloride (NaCl), what substance is produced at the cathode, and why?\nA) Chlorine gas, because it gains electrons\nB)Sodium metal, because Na ions are reduced\nC) Hydrogen gas, because water is present\nD) Oxygen gas, because Cl ions are oxidized",
        answer: "B)Sodium metal, because Na⁺ ions are reduced",
      },
    ],
    [
      {
        points: 10,
        question:
          "Order the following 4 colors of light from the one with the LONGEST wavelength to the SHORTEST wavelength: orange; violet; red; yellow",
        answer: "Red, Orange, Yellow, Violet",
      },
      {
        points: 20,
        question:
          "Which part of the electromagnetic spectrum helps us see colors around us?",
        answer: "Visible",
      },
      {
        points: 30,
        question:
          "A green light looks blue when seen in the reflection from the surface of a piece of non-absorbing glass.\nWhat color does the light appear when looking through the glass?",
        answer: "Yellow",
      },
      {
        points: 40,
        question:
          "A 10-kilogram hay bale is raised to 5 meters above a barn floor and is then lowered to 4 meters below the floor.\nRelative to its starting position on the floor, what is the final gravitational potential energy of the bale, in joules, if g=10 Nm^-2?",
        answer: "-400 (must give negative value)",
      },
      {
        points: 50,
        question:
          "The Meissner effect is most directly associated with which of the following:\nA) Superconductors\nB) Rare earth magnets\nC) Very strong electromagnets\nD) Tesla coils",
        answer: "A) Superconductors",
      },
      {
        points: 60,
        question:
          "What is the abbreviated name of the most common field effect transistor in modern electronic circuitry:",
        answer: "MOSFET",
      },
    ],
    [
      {
        points: 10,
        question:
          "What is formula for calculating the area of non right angled triangle?",
        answer: "(1/2)ab sin C",
      },
      {
        points: 20,
        question: "If a^2 - 16 = 33, find the possible values of a.",
        answer: "7 and -7",
      },
      {
        points: 30,
        question:
          "The sum of two numbers is 17 and their product is 60. Find the numbers.",
        answer: "12 and 5",
      },
      {
        points: 40,
        question: "A=[3  -2\n1/2 4]\nFind its determinant:",
        answer: "13",
      },
      {
        points: 50,
        question: "Simplify: (3^9 x 3^-2) / (3^4 x 3^0)",
        answer: "27 or 3^3",
      },
      {
        points: 60,
        question: "If tan0 = 4/3 what is sine?",
        answer: "4/5",
      },
    ],
    [
      {
        points: 10,
        question:
          "Which of the following is the smallest unit of data in a computer?\na) Bit\nb) KB\nC) Nibble\nD) Byte",
        answer: "A) Bit",
      },
      {
        points: 20,
        question:
          "All C language functions that do not return values should be declared as returning type\na) empty.\nb) int.\nC) null.\nD) void",
        answer: "D) void",
      },
      {
        points: 30,
        question:
          "What are the disadvantages of arrays?\na) Index value of an array can be negative\nb) Elements are sequentially accessed\nC) Data structure like queue or stack cannot be implemented\nD) There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        answer:
          "D) There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
      },
      {
        points: 40,
        question:
          "Which of the following is the correct binary representation of the given octal number? (345)?\nA) 011000101\nB) 01100010\nC) 111000101\n(D) 011100101",
        answer: "D) 011100101",
      },
      {
        points: 50,
        question:
          "Which of the following statements are correct regarding Database Management System?\n(i) It is a collection of data.\n(ii) It provides an abstract view of data that hides the details.\n(iii) It is a computerized record-keeping system.\n(iv) It allows users to define, store, retrieve and update the information contained in the database.\nA) (i) and (ii) only\nB) (ii) and (iii) only\nC) (i), (ii) and (iv)\n(D) (i), (ii), (iii) and (iv)",
        answer: "D) (i), (ii), (iii) and (iv)",
      },
      {
        points: 60,
        question:
          "The prefix form of A-B/(C*D^E) is?\na) -A/B*C^DE\nb) -A/BC*^DE\nC) -ABCD*^DE\nD) -/*^ACBDE",
        answer: "A) -A/B*C^DE",
      },
    ],
    [
      {
        points: 10,
        question:
          "Which pollutant is primarily responsible for ozone layer depletion?\na) Carbon monoxide\nb) Sulfur dioxide\nC) Chlorofluorocarbons (CFCs)\nD) Methane",
        answer: "C) CHLOROFLUOROCARBONS",
      },
      {
        points: 20,
        question:
          "Which of the following is a sedimentary rock:\na) slate\nb) marble\nC) basalt\nD) sandstone",
        answer: "D) SANDSTONE",
      },
      {
        points: 30,
        question:
          "Mount Vesuvius in Italy is a typical:\na) mud volcano\nb) caldera\nC) cinder cone\nD) composite volcano",
        answer: "D) COMPOSITE VOLCANO",
      },
      {
        points: 40,
        question:
          "What is the main environmental impact of eutrophication?\na). Increased fish population\nb) Oxygen depletion\nC) Improved water clarity\nD) Reduced algae growth",
        answer: "B) OXYGEN DEPLETION",
      },
      {
        points: 50,
        question:
          "Which farming practice is considered sustainable?\na) Monoculture\nb) Slash-and-burn\nC) Crop rotation\nD) Overgrazing",
        answer: "C) CROP ROTATION",
      },
      {
        points: 60,
        question:
          "When Environmental Lapse Rate (ELR) is greater than Adiabatic Lapse Rate (ALR), then which of the following occurs?\na) Super adiabatic lapse rate\nb) Neutral lapse rate\nC) Adiabatic lapse rate\nD) Sub adiabatic lapse rate",
        answer: "A) SUPER ADIABATIC LAPSE RATE",
      },
    ],
    [
      {
        points: 10,
        question:
          "Which female Nobel laureate in Physics was awarded for her work on radioactivity?\na) Lise Meitner\nb) Irène Joliot-Curie\nC) Marie Curie\nD) Donna Strickland",
        answer: "C) Marie Curie",
      },
      {
        points: 20,
        question:
          "Who became the first woman to win the Nobel Prize in Chemistry for discovering the structure of vitamin B12 and insulin?\na) Rosalind Franklin\nb) Dorothy Hodgkin\nC) Ada Yonath\nD) Frances Arnold",
        answer: "B) Dorothy Hodgkin",
      },
      {
        points: 30,
        question:
          "Who is the first woman to win the Nobel Prize in Physics in the 21st century, recognized for her work on laser physics?\na) Andrea Ghez\nb) Donna Strickland\nC) Lene Hau\nD) Maria Goeppert-Mayer",
        answer: "C) Donna Strickland",
      },
      {
        points: 40,
        question:
          "Which female Nobel laureate shared the 2020 Nobel Prize in Physics for discovering supermassive black holes?\na) Andrea Ghez\nb) Vera Rubin\nC) Jocelyn Bell Burnell\nD) Chien-Shiung Wu",
        answer: "A) Andrea Ghez",
      },
      {
        points: 50,
        question:
          "Who received the 2018 Nobel Prize in Chemistry for her pioneering work in directed evolution of enzymes?\na) Frances Arnold\nb) Jennifer Doudna\nC) Emmanuelle Charpentier\nD) Ada Yonath",
        answer: "A) Frances Arnold",
      },
      {
        points: 60,
        question:
          "Which two female scientists were jointly awarded the 2020 Nobel Prize in Chemistry for developing CRISPR-Cas9 gene-editing technology?\na) Jennifer Doudna and Emmanuelle Charpentier\nb) Frances Arnold and Ada Yonath\nC) Dorothy Hodgkin and Rosalind Franklin\nD) Marie Curie and Irène Joliot-Curie",
        answer: "A) Jennifer Doudna and Emmanuelle Charpentier",
      },
    ],
  ],
};

const aLevel: Data = {
  categories: [
    "Biology",
    "Chemistry",
    "Physics",
    "Mathematics",
    "Information Technology",
    "Environment",
    "Mystery (Solar System)",
  ],
  questions: [
    [
      {
        points: 10,
        question:
          "Under a microscope, plant cells appeared rigid in shape unlike flexible animal cells.\nWhich feature can explain this difference?\nA) Cell Wall\nB) Vacuole\nC) Cytoskeleton\n(D) Plasma Membrane",
        answer: "Cell Wall",
      },
      {
        points: 20,
        question:
          "Which type of joint allows bending of the elbow joint and has a synovial cavity?\nA) Pubic symphysis\nB) Fibrous joint\nC) Hinge joint\n(D) Cartilaginous joint",
        answer: "Hinge joint",
      },
      {
        points: 30,
        question:
          "A man with blood type A and a woman with blood type B have a child with blood type 0. What are the genotypes of the parents?\nA) IAIA and IBIB\nB) IAi and IBi\nC) IAIB and ii\n(D) IAi and IBIB",
        answer: "IAi and IBi",
      },
      {
        points: 40,
        question:
          "Which of the following is correct about the structure of the brain?\nA) Cerebral cortex is outer part consists of grey matter\nB) Cerebral medulla is inner part consists of grey matter\nC) Cerebral cortex is inner part consists of white matter\n(D) Cerebral medulla is outer part consists of white matter",
        answer: "Cerebral cortex is outer part consists of grey matter",
      },
      {
        points: 50,
        question:
          "In the E. coli lac operon, what molecule binds to the repressor protein to inactivate it?\nA) Glucose\nB) Lactose (as allolactose)\nC) CAMP\n(D) RNA Polymerase",
        answer: "Lactose (as allolactose)",
      },
      {
        points: 60,
        question:
          "What is the primary function of siRNA in a eukaryotic cell?\nA) To transport amino acids to the ribosome\nB) To act as a template for DNA synthesis\nC) To bind to mRNA and trigger its degradation\n(D) To unwind DNA during replication",
        answer: "To bind to mRNA and trigger its degradation",
      },
    ],
    [
      {
        points: 10,
        question:
          "TThe pH of a 1.0 x 10⁻³ M HCl solution is approximately:\nA) 1\nB) 2\nC) 3\nD) 4",
        answer: "C) 3",
      },
      {
        points: 20,
        question:
          "What result does acetic acid give in a litmus test? \nA) It turns red litmus paper to blue\nB) It turns blue litmus paper to red \nC) No change\nD) It turns blue litmus paper to green",
        answer: "B) It turns blue litmus paper to red",
      },
      {
        points: 30,
        question:
          "Which aqueous salt solution is basic?\nA) NH4Cl\nB) NaCl\nC) KNO₃ \nD) Na₂CO₃ ",
        answer: "D) Na₂CO₃",
      },
      {
        points: 40,
        question:
          "Which of the following explains high melting points of ionic compounds?\nA) Covalent bonds\nB) Electrostatic forces\nC) Van der Waals forces\nD) Hydrogen bonding",
        answer: "B) Electrostatic forces",
      },
      {
        points: 50,
        question:
          "Visible light is not used to determine electron position because its wavelength is too large compared to:\nA) Energy\nB) Velocity\nC) Diameter\nD) Momentum",
        answer: "D) Momentum",
      },
      {
        points: 60,
        question:
          "Which metal has seven electrons in its 3d subshell in +2 oxidation state?\nA) Cr\nB) Fe\nC) Co\nD) Cu",
        answer: "C) Co",
      },
    ],
    [
      {
        points: 10,
        question:
          "SI unit of power is:\nA) Joule\nB) Watt\nC) Newton\nD) Pascal",
        answer: "B) Watt",
      },
      {
        points: 20,
        question:
          "What form of energy does a book gain when lifted to a higher shelf? \nA) Gravitational Potential\nB) Elastic\nC) Kinetic\nD) Chemical",
        answer: "A) Gravitational Potential",
      },
      {
        points: 30,
        question:
          "Work is the product of force and what quantity?\nA) Mass\nB) Displacement\nC) Velocity\n(D) Acceleration",
        answer: "B) Displacement",
      },
      {
        points: 40,
        question:
          "A copper and iron wire connected in series; which gets hotter?\nA) Both same\nB) Copper\nC) Iron\n(D) None",
        answer: "C) Iron",
      },
      {
        points: 50,
        question:
          "A body dropped on elastic surface returns to same height; KE vs time graph is:\nA) Linear\nB) Parabolic\nC) Triangular pulses\n(D) Constant line",
        answer: "C) Triangular pulses",
      },
      {
        points: 60,
        question:
          "Work done by gravity is independent of path because:\nA) Path matters\nB) Weak force\nC) Depends on initial and final heights\n(D) Friction cancels work",
        answer: "C) Depends on initial and final heights",
      },
    ],
    [
      {
        points: 10,
        question: "tan (45°) equals:\nA) 0\nB) 1/√3 \nC) 1\nD) √3",
        answer: "C)1",
      },
      {
        points: 20,
        question: "If If g(x)=x², then g(g(-1)) = \nA) -4\nB)-1\nC) 1\nD) 4",
        answer: "D) 4",
      },
      {
        points: 30,
        question:
          "Which function is odd?\nA) -x² \nB) (-x)² \nC) -x³+3 \nD) -x³+3x",
        answer: "D)-x³+3x",
      },
      {
        points: 40,
        question:
          "The Mean Value Theorem states that there exists c where:\nA)f'(C)=0 \nB) f(C)=0\nC) f'(C)=[f(B)-f(A)]/(b-a)\nD) fC)=[fA)+fB)]/2",
        answer: "C) f'(C)=[f(B)-f(A)]/(b-a)",
      },
      {
        points: 50,
        question:
          "A complex number z satisfies |z-3i|=3, largest |z|=\nA) 3\nB) 4\nC) 5\nD) 6",
        answer: "D) 6",
      },
      {
        points: 60,
        question:
          "f(x)=ln(x²+1) is:\nA) Odd\nB) Even\nC) Periodic\nD) Unbounded",
        answer: "B) Even",
      },
    ],
    [
      {
        points: 10,
        question:
          "What is the main job of the operating system?\nA) To design websites\nB) To manage computer hardware and software\nC) To write computer program automatically\nD) To display internet ads",
        answer: "B) To manage computer hardware and software",
      },
      {
        points: 20,
        question:
          "Scanner that reads filled bubbles is:\nA) OMR\nB) OCR\nC) QR reader\nD) MICR",
        answer: "A) OMR",
      },
      {
        points: 30,
        question:
          "OOP principle bundling data and methods is:\nA) Inheritance\nB) Polymorphism\nC) Encapsulation\nD) Abstraction",
        answer: "C) Encapsulation",
      },
      {
        points: 40,
        question:
          "In programming, which is used for decision making?\nA) while\nB) if-else\nC) array\nD) function",
        answer: "B) if-else",
      },
      {
        points: 50,
        question:
          "Which layer provides reliable delivery?\nA) Data Link\nB) Network\nC) Transport\nD) Session",
        answer: "C) Transport",
      },
      {
        points: 60,
        question:
          "In RSA, valid public exponent 'e' must satisfy:\nA) e < φ(η)\nB) gcd(e,φ(n))=1 \nC) e=φ(n) \nD) e=φ(n)/2",
        answer: "B) gcd(e,φ(n))=1",
      },
    ],
    [
      {
        points: 10,
        question:
          "Which human activity is the primary source of the sulfur dioxide (SO₂) that leads to acid rain?\n\nA) Rice cultivation\n\nB) Burning coal for electricity\n\nC) Using aerosol sprays\n\nD) Nuclear power generation",
        answer: "B) Burning coal for electricity",
      },
      {
        points: 20,
        question:
          " Which of the following lists the three recognized levels of biodiversity? \nA) Plants, Animals, and Microbes  \nB) Genetic, Species, and Ecosystem diversity  \nC) Individual, Population, and Community diversity  \n D) Local, Regional, and Global diversity ",
        answer: "B) Genetic, Species, and Ecosystem diversity",
      },
      {
        points: 30,
        question:
          "Biodegradable waste example:\nA) Plastic bottle\nB) Glass jar\nC) Aluminum can\nD) Apple core",
        answer: "D) Apple core",
      },
      {
        points: 40,
        question:
          "Planting legumes (like beans, peas, or clover) as part of a crop rotation is a key strategy for improving soil fertility. What is the primary benefit these specific plants provide to the soil? \nA) They break up compacted soil with their deep taproots.  \nB) They are excellent at attracting beneficial pollinators.  \nC) They host bacteria that convert atmospheric nitrogen into a usable form for plants.  \nD) They add large amounts of phosphorus to the soil. ",
        answer:
          "C) They host bacteria that convert atmospheric nitrogen into a usable form for plants.",
      },
      {
        points: 50,
        question:
          "Radon comes from decay of:\nA) Plutonium\nB) Uranium\nC) Thorium\nD) Potassium",
        answer: "B) Uranium",
      },
      {
        points: 60,
        question:
          "Transition zone between two ecosystems:\nA) Edge effect\nB) Ecotone\nC) Biome\nD) Succession",
        answer: "B) Ecotone",
      },
    ],
    [
      {
        points: 10,
        question:
          "Boundary marking Sun's influence end:\nA) Kuiper Belt\nB) Asteroid Belt\nC) Oort Cloud\nD) Heliopause",
        answer: "D) Heliopause",
      },
      {
        points: 20,
        question:
          "Planet that rotates on its side:\nA) Mars\nB) Jupiter\nC) Uranus\nD) Neptune",
        answer: "C) Uranus",
      },
      {
        points: 30,
        question:
          "Great Red Spot on Jupiter has existed for:\nA) 50\nB) 150\nC) 350\n(D) 1000 years",
        answer: "C) 350",
      },
      {
        points: 40,
        question:
          "Moon of Saturn with dense atmosphere:\nA) Enceladus\nB) Iapetus\nC) Rhea\nD) Titan",
        answer: "D) Titan",
      },
      {
        points: 50,
        question:
          "Hexagonal cloud pattern on Saturn is called:\nA) Great Dark Spot\nB) Polar Vortex\nC) Hexagon\nD) Jet Stream",
        answer: "C) Hexagon",
      },
      {
        points: 60,
        question:
          "Asteroid belt is between:\nA) Earth & Mars\nB) Mars & Jupiter\nC) Jupiter & Saturn\nD) Venus & Earth",
        answer: "B) Mars & Jupiter",
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

export const oLevelData = {
  categories: oLevel.categories,
  questions: transpose(oLevel.questions) as QuestionType[][],
};

export const aLevelData = {
  categories: aLevel.categories,
  questions: transpose(aLevel.questions) as QuestionType[][],
};
