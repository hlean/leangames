import { Question } from "../models/Question.js";
import {data} from "./data.js";

export const cities = data.cities.map(question => new Question(question.question, question.options, question.correct_answer, question.image))
export const capitals = data.capitals.map(question => new Question(question.question, question.options, question.correct_answer, question.image))
export const flags = data.flags.map(question => new Question(question.question, question.options, question.correct_answer, question.image))

