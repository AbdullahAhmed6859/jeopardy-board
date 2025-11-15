type BoardSchema = {
  categories: string[];
  questions: {
    points: number;
    question: string;
    answer: string;
  }[][];
};

export type { BoardSchema };
