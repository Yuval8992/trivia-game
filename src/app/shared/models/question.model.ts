import { Answer } from "./answer.model";

export type Question = {
    question: string,
    answers: Answer[],
}