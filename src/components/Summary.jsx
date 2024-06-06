import quizIsFinishedImg from '../assets/eagle-trophy.png';
import QUESTIONS from '../questions';

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersShare = Math.round(skippedAnswers.length / userAnswers.length * 100);
    const correctAnswersShare = Math.round(correctAnswers.length / userAnswers.length * 100);

    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;


    return (
        <div id="summary">
            <img src={quizIsFinishedImg} height="150" width="150" alt="Trophy icon with polish eagle" />
            <h2> Quizz Completed! </h2>
            <div id="summary-stats">
                <p>
                    <span className="number"> {skippedAnswersShare}%</span>
                    <span className="skipped"> not answered</span>
                </p>
                <p>
                    <span className="number"> {correctAnswersShare}%</span>
                    <span className="skipped"> answered correctly </span>
                </p>
                <p>
                    <span className="number"> {wrongAnswersShare}%</span>
                    <span className="skipped"> answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }
                    return (
                        <li key={index}>

                            <h3> {index + 1} </h3>
                            <p className="question"> {QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}

            </ol>
        </div>
    )
}