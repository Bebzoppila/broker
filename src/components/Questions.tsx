import { FC } from "react"

type QuestionsProps = {
    openModal: () => void
}

const Questions:FC<QuestionsProps> = ({ openModal }) => {

    return(
        <section className="questions">
        <div className="container">
            <div className="questions__inner">
                <h2 className="questions__title">Остались вопросы?</h2>
                <h3 className="questions__subtitle">Запишитесь на <strong className="text-blue">бесплатную консультацию</strong> профильного специалиста прямо сейчас!</h3>
                <button onClick={() => openModal()} className="btn questions__btn">Записаться на консультацию</button>
            </div>
        </div>
    </section>
    )
}

export default Questions