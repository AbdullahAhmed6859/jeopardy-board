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
          "What would happen if a red blood cell were placed in pure water?",
        answer: "It would swell and burst (lysis)",
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
        question: "What is the sum of angles in a triangle?",
        answer: "180",
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
        question: "A=[3 -2\n1/2 4]\nFind its determinant:",
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
          "Which of the following is the smallest unit of data in a computer?\na) Bit\nb) KB\nc) Nibble\nd) Byte",
        answer: "a) Bit",
      },
      {
        points: 20,
        question:
          "All C language functions that do not return values should be declared as returning type\na) empty.\nb) int.\nc) null.\nd) void",
        answer: "d) void",
      },
      {
        points: 30,
        question:
          "What are the disadvantages of arrays?\na) Index value of an array can be negative\nb) Elements are sequentially accessed\nc) Data structure like queue or stack cannot be implemented\nd) There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        answer:
          "d) There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
      },
      {
        points: 40,
        question:
          "Which of the following is the correct binary representation of the given octal number? (345)?\n(A) 011000101\n(B) 01100010\n(C) 111000101\n(D) 011100101",
        answer: "D) 011100101",
      },
      {
        points: 50,
        question:
          "Which of the following statements are correct regarding Database Management System?\n(i) It is a collection of data.\n(ii) It provides an abstract view of data that hides the details.\n(iii) It is a computerized record-keeping system.\n(iv) It allows users to define, store, retrieve and update the information contained in the database.\n(A) (i) and (ii) only\n(B) (ii) and (iii) only\n(C) (i), (ii) and (iv)\n(D) (i), (ii), (iii) and (iv)",
        answer: "D) (i), (ii), (iii) and (iv)",
      },
      {
        points: 60,
        question:
          "The prefix form of A-B/(C*D^E) is?\na) -A/B*C^DE\nb) -A/BC*^DE\nc) -ABCD*^DE\nd) -/*^ACBDE",
        answer: "a) -A/B*C^DE",
      },
    ],
    [
      {
        points: 10,
        question:
          "Which pollutant is primarily responsible for ozone layer depletion?\na) Carbon monoxide\nb) Sulfur dioxide\nc) Chlorofluorocarbons (CFCs)\nd) Methane",
        answer: "c) CHLOROFLUOROCARBONS",
      },
      {
        points: 20,
        question:
          "Which of the following is a sedimentary rock:\na) slate\nb) marble\nc) basalt\nd) sandstone",
        answer: "d) SANDSTONE",
      },
      {
        points: 30,
        question:
          "Mount Vesuvius in Italy is a typical:\na) mud volcano\nb) caldera\nc) cinder cone\nd) composite volcano",
        answer: "d) COMPOSITE VOLCANO",
      },
      {
        points: 40,
        question:
          "What is the main environmental impact of eutrophication?\na). Increased fish population\nb) Oxygen depletion\nc) Improved water clarity\nd) Reduced algae growth",
        answer: "b) OXYGEN DEPLETION",
      },
      {
        points: 50,
        question:
          "Which farming practice is considered sustainable?\na) Monoculture\nb) Slash-and-burn\nc) Crop rotation\nd) Overgrazing",
        answer: "c) CROP ROTATION",
      },
      {
        points: 60,
        question:
          "When Environmental Lapse Rate (ELR) is greater than Adiabatic Lapse Rate (ALR), then which of the following occurs?\na) Super adiabatic lapse rate\nb) Neutral lapse rate\nc) Adiabatic lapse rate\nd) Sub adiabatic lapse rate",
        answer: "a) SUPER ADIABATIC LAPSE RATE",
      },
    ],
    [
      {
        points: 10,
        question:
          "Which female Nobel laureate in Physics was awarded for her work on radioactivity?\na) Lise Meitner\nb) Irène Joliot-Curie\nc) Marie Curie\nd) Donna Strickland",
        answer: "c) Marie Curie",
      },
      {
        points: 20,
        question:
          "Who became the first woman to win the Nobel Prize in Chemistry for discovering the structure of vitamin B12 and insulin?\na) Rosalind Franklin\nb) Dorothy Hodgkin\nc) Ada Yonath\nd) Frances Arnold",
        answer: "b) Dorothy Hodgkin",
      },
      {
        points: 30,
        question:
          "Who is the first woman to win the Nobel Prize in Physics in the 21st century, recognized for her work on laser physics?\na) Andrea Ghez\nb) Donna Strickland\nc) Lene Hau\nd) Maria Goeppert-Mayer",
        answer: "b) Donna Strickland",
      },
      {
        points: 40,
        question:
          "Which female Nobel laureate shared the 2020 Nobel Prize in Physics for discovering supermassive black holes?\na) Andrea Ghez\nb) Vera Rubin\nc) Jocelyn Bell Burnell\nd) Chien-Shiung Wu",
        answer: "a) Andrea Ghez",
      },
      {
        points: 50,
        question:
          "Who received the 2018 Nobel Prize in Chemistry for her pioneering work in directed evolution of enzymes?\na) Frances Arnold\nb) Jennifer Doudna\nc) Emmanuelle Charpentier\nd) Ada Yonath",
        answer: "a) Frances Arnold",
      },
      {
        points: 60,
        question:
          "Which two female scientists were jointly awarded the 2020 Nobel Prize in Chemistry for developing CRISPR-Cas9 gene-editing technology?\na) Jennifer Doudna and Emmanuelle Charpentier\nb) Frances Arnold and Ada Yonath\nc) Dorothy Hodgkin and Rosalind Franklin\nd) Marie Curie and Irène Joliot-Curie",
        answer: "a) Jennifer Doudna and Emmanuelle Charpentier",
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
          "Under a microscope, plant cells appeared rigid in shape unlike flexible animal cells.\nWhich feature can explain this difference?\n(a) Cell Wall\n(b) Vacuole\n(c) Cytoskeleton\n(d) Plasma Membrane",
        answer: "Cell Wall",
      },
      {
        points: 20,
        question:
          "Which type of joint allows bending of the elbow joint and has a synovial cavity?\n(a) Pubic symphysis\n(b) Fibrous joint\n(c) Hinge joint\n(d) Cartilaginous joint",
        answer: "Hinge joint",
      },
      {
        points: 30,
        question:
          "A man with blood type A and a woman with blood type B have a child with blood type 0. What are the genotypes of the parents?\n(a) IAIA and IBIB\n(b) IAi and IBi\n(c) IAIB and ii\n(d) IAi and IBIB",
        answer: "IAi and IBi",
      },
      {
        points: 40,
        question:
          "Which of the following is correct about the structure of the brain?\n(a) Cerebral cortex is outer part consists of grey matter\n(b) Cerebral medulla is inner part consists of grey matter\n(c) Cerebral cortex is inner part consists of white matter\n(d) Cerebral medulla is outer part consists of white matter",
        answer: "Cerebral cortex is outer part consists of grey matter",
      },
      {
        points: 50,
        question:
          "In the E. coli lac operon, what molecule binds to the repressor protein to inactivate it?\n(a) Glucose\n(b) Lactose (as allolactose)\n(c) CAMP\n(d) RNA Polymerase",
        answer: "Lactose (as allolactose)",
      },
      {
        points: 60,
        question:
          "What is the primary function of siRNA in a eukaryotic cell?\n(a) To transport amino acids to the ribosome\n(b) To act as a template for DNA synthesis\n(c) To bind to mRNA and trigger its degradation\n(d) To unwind DNA during replication",
        answer: "To bind to mRNA and trigger its degradation",
      },
    ],
    [
      {
        points: 10,
        question:
          "The pH of a $1.0\\times10^{-3}$ M HCl solution is approximately:\n(a) 1\n(b) 2\n(c) 3\n(d) 4",
        answer: "3",
      },
      {
        points: 20,
        question:
          "Which of the following is correct about isotopes?\n(a) Same neutrons, different protons\n(b) Same protons, different neutrons\n(c) Same protons, different electrons\n(d) Same electrons, different protons",
        answer: "Same protons, different neutrons",
      },
      {
        points: 30,
        question:
          "Which aqueous salt solution is basic?\n(a) NH4Cl\n(b) NaCl\n(c) $KNO_{3}$\n(d) $Na_{2}CO_{3}$",
        answer: "$Na_{2}CO_{3}$",
      },
      {
        points: 40,
        question:
          "Which of the following explains high melting points of ionic compounds?\n(a) Covalent bonds\n(b) Electrostatic forces\n(c) Van der Waals forces\n(d) Hydrogen bonding",
        answer: "Electrostatic forces",
      },
      {
        points: 50,
        question:
          "Visible light is not used to determine electron position because its wavelength is too large compared to:\n(a) Energy\n(b) Velocity\n(c) Diameter\n(d) Momentum",
        answer: "Momentum",
      },
      {
        points: 60,
        question:
          "Which metal has seven electrons in its 3d subshell in +2 oxidation state?\n(a) Cr\n(b) Fe\n(c) Co\n(d) Cu",
        answer: "Co",
      },
    ],
    [
      {
        points: 10,
        question:
          "SI unit of power is:\n(a) Joule\n(b) Watt\n(c) Newton\n(d) Pascal",
        answer: "Watt",
      },
      {
        points: 20,
        question:
          "Energy possessed by a moving body is called:\n(a) Potential\n(b) Thermal\n(c) Kinetic\n(d) Chemical",
        answer: "Kinetic",
      },
      {
        points: 30,
        question:
          "Work is the product of force and what quantity?\n(a) Mass\n(b) Displacement\n(c) Velocity\n(d) Acceleration",
        answer: "Displacement",
      },
      {
        points: 40,
        question:
          "A copper and iron wire connected in series; which gets hotter?\n(a) Both same\n(b) Copper\n(c) Iron\n(d) None",
        answer: "Iron",
      },
      {
        points: 50,
        question:
          "A body dropped on elastic surface returns to same height; KE vs time graph is:\n(a) Linear\n(b) Parabolic\n(c) Triangular pulses\n(d) Constant line",
        answer: "Triangular pulses",
      },
      {
        points: 60,
        question:
          "Work done by gravity is independent of path because:\n(a) Path matters\n(b) Weak force\n(c) Depends on initial and final heights\n(d) Friction cancels work",
        answer: "Depends on initial and final heights",
      },
    ],
    [
      {
        points: 10,
        question:
          "tan (45°) equals:\n(a) 0\n(b) $1/\\sqrt{3}$\n(c) 1\n(d) $\\sqrt{3}$",
        answer: "1",
      },
      {
        points: 20,
        question:
          "If $g(x)=x^{2}$ then $g(g(-1))=$\n(a) -4\n(b)-1\n(c) 1\n(d) 4",
        answer: "4",
      },
      {
        points: 30,
        question:
          "Which function is odd?\n(a) $-x^{2}$\n(b) $(-x)^{2}$\n(c) $-x^{3}+3$\n(d) $-x^{3}+3x$",
        answer: "$-x^{3}+3x$",
      },
      {
        points: 40,
        question:
          "The Mean Value Theorem states that there exists c where:\n(a) $f^{\\prime}(c)=0$\n(b) $f(c)=0$\n(c) $f^{\\prime}(c)=[f(b)-f(a)]/(b-a)$\n(d) $f(c)=[f(a)+f(b)]/2$",
        answer: "$f^{\\prime}(c)=[f(b)-f(a)]/(b-a)$",
      },
      {
        points: 50,
        question:
          "A complex number z satisfies $|z-3i|=3,$ largest $|z|=$\n(a) 3\n(b) 4\n(c) 5\n(d) 6",
        answer: "6",
      },
      {
        points: 60,
        question:
          "$f(x)=ln(x^{2}+1)$ is:\n(a) Odd\n(b) Even\n(c) Periodic\n(d) Unbounded",
        answer: "Even",
      },
    ],
    [
      {
        points: 10,
        question:
          "What is the main job of the operating system?\n(a) To design websites\n(b) To manage computer hardware and software\n(c) To write computer program automatically\n(d) To display internet ads",
        answer: "To manage computer hardware and software",
      },
      {
        points: 20,
        question:
          "Scanner that reads filled bubbles is:\n(a) OMR\n(b) OCR\n(c) QR reader\n(d) MICR",
        answer: "OMR",
      },
      {
        points: 30,
        question:
          "OOP principle bundling data and methods is:\n(a) Inheritance\n(b) Polymorphism\n(c) Encapsulation\n(d) Abstraction",
        answer: "Encapsulation",
      },
      {
        points: 40,
        question:
          "In programming, which is used for decision making?\n(a) while\n(b) if-else\n(c) array\n(d) function",
        answer: "if-else",
      },
      {
        points: 50,
        question:
          "Which layer provides reliable delivery?\n(a) Data Link\n(b) Network\n(c) Transport\n(d) Session",
        answer: "Transport",
      },
      {
        points: 60,
        question:
          "In RSA, valid public exponent 'e' must satisfy:\n(a) e < φ(η)\n(b) $gcd(e,\\varphi(n))=1$\n(c) $e=\\varphi(n)$\n(d) $e=\\varphi(n)/2$",
        answer: "$gcd(e,\\varphi(n))=1$",
      },
    ],
    [
      {
        points: 10,
        question:
          "Gas responsible for acid rain formation:\n(a) $CO_{2}$\n(b) $SO_{2}$\n(c) $CH_{4}$\n(d) $O_{3}$",
        answer: "$SO_{2}$",
      },
      {
        points: 20,
        question:
          "Biodiversity is defined as:\n(a) Number of species\n(b) Variety of life\n(c) Total mass\n(d) Rate of formation",
        answer: "Variety of life",
      },
      {
        points: 30,
        question:
          "Biodegradable waste example:\n(a) Plastic bottle\n(b) Glass jar\n(c) Aluminum can\n(d) Apple core",
        answer: "Apple core",
      },
      {
        points: 40,
        question:
          "Practice that improves soil fertility:\n(a) Monoculture\n(b) Crop rotation\n(c) Over irrigation\n(d) Clear cutting",
        answer: "Crop rotation",
      },
      {
        points: 50,
        question:
          "Radon comes from decay of:\n(a) Plutonium\n(b) Uranium\n(c) Thorium\n(d) Potassium",
        answer: "Uranium",
      },
      {
        points: 60,
        question:
          "Transition zone between two ecosystems:\n(a) Edge effect\n(b) Ecotone\n(c) Biome\n(d) Succession",
        answer: "Ecotone",
      },
    ],
    [
      {
        points: 10,
        question:
          "Boundary marking Sun's influence end:\n(a) Kuiper Belt\n(b) Asteroid Belt\n(c) Oort Cloud\n(d) Heliopause",
        answer: "Heliopause",
      },
      {
        points: 20,
        question:
          "Planet that rotates on its side:\n(a) Mars\n(b) Jupiter\n(c) Uranus\n(d) Neptune",
        answer: "Uranus",
      },
      {
        points: 30,
        question:
          "Great Red Spot on Jupiter has existed for:\n(a) 50\n(b) 150\n(c) 350\n(d) 1000 years",
        answer: "350",
      },
      {
        points: 40,
        question:
          "Moon of Saturn with dense atmosphere:\n(a) Enceladus\n(b) Iapetus\n(c) Rhea\n(d) Titan",
        answer: "Titan",
      },
      {
        points: 50,
        question:
          "Hexagonal cloud pattern on Saturn is called:\n(a) Great Dark Spot\n(b) Polar Vortex\n(c) Hexagon\n(d) Jet Stream",
        answer: "Hexagon",
      },
      {
        points: 60,
        question:
          "Asteroid belt is between:\n(a) Earth & Mars\n(b) Mars & Jupiter\n(c) Jupiter & Saturn\n(d) Venus & Earth",
        answer: "Mars & Jupiter",
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
