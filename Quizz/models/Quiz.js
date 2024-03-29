// @ts-check
import { Question } from "./Question.js";

export class Quiz {

    previousIndex = [];
    currentIndex = 0;
    questionIndex = 0;
    score = 0;

    constructor(questions) {
        this.questions = questions;
    }

    getQuestionsIndex() {
        let indiceAleatorio = this.generateUniqueIndex();
        this.currentIndex = indiceAleatorio;
        return this.questions[indiceAleatorio];
    }

    generateUniqueIndex() {
        let indiceAleatorio = Math.floor(Math.random() * this.questions.length);

        while (this.previousIndex.includes(indiceAleatorio)) {
            indiceAleatorio = Math.floor(Math.random() * this.questions.length);
        }
        this.previousIndex.push(indiceAleatorio);
        return indiceAleatorio;
    }

    isEnded(){
        return this.questionIndex === 10;
    }

    /**
     * 
     * @param {string} answer current answer 
     */
    guess(answer){
        if(this.getCurrentIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    getCurrentIndex(){
        return this.questions[this.currentIndex];
    }

    getProgressQuestion(){
        return this.questionIndex;
    }
    getCurrentScore(){
        return this.score;
    }
}