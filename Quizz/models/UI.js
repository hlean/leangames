export class UI{
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById("question");
            questionTitle.innerHTML = text;
    }

    showImage(image){
        const city_image = document.getElementById("city-image");
        city_image.src = image;
    }

    /**
     * 
     * @param {string[]} options the options of the question
     */

    showOptions(options, callback){
        const optionsContent = document.getElementById("options");
        optionsContent.innerHTML = "";

        for (let i = 0; i < options.length; i++){
            
            const button = document.createElement("button");
            button.innerHTML = options[i];
            button.className = "option-button rounded-xl text-center bg-brand-100";
            button.addEventListener("click", () => callback(options[i]));

            optionsContent.append(button);
        }
    }

    showFinalScore(score){
        const quizEndHTML = `
            <h2><b>Score</b></h2>
            <h2><b>${score}</b></h2>
        `;
        const element = document.getElementById("card");
        element.innerHTML = quizEndHTML;
    }

    showProgress(progress){
        const roundProgress = document.getElementById("round");
        roundProgress.innerHTML = progress;
    }
}