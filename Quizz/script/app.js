import {cities} from '../data/questions.js';
import {capitals} from '../data/questions.js';
import {flags} from '../data/questions.js';
import {Quiz} from '../models/Quiz.js';
import {UI} from '../models/UI.js';

const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
        ui.showFinalScore(quiz.score);
    }else{
        let index = quiz.getQuestionsIndex()

        if(index.question != ""){
            ui.showQuestion(index.question);
        }
        
        ui.showImage(index.image);
        ui.showOptions(index.options, (currentOption)=>{
            quiz.guess(currentOption)
            renderPage(quiz, ui);
        }
    );
        ui.showProgress(quiz.getProgressQuestion());
    }
}

function main() {
    // Obtener parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');

    let questions;
    if (type === 'cities') {
        questions = cities;
    } else if (type === 'capitals') {
        questions = capitals;
    } else if (type === 'flags') {
        questions = flags;
    } else {
        // Si no se proporciona un tipo válido, redirigir a una página de error o hacer algo apropiado
        window.location.href = 'error-page.html';
        return;
    }

    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz, ui);
}

main();