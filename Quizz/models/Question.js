export class Question{
    /**
    * 
    * @param {string} question question text
    * @param {string[]} options options of the question
    * @param {string} answer correct answer
    */

    constructor(question, options, answer, image){
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.image = image;
    }

    correctAnswer(choice){
        return choice === this.answer;
    }
}