import { FC } from "react"

type MainProps = {
    openModal: () => void
}

const Main:FC<MainProps> = ({ openModal }) => {


    return(
        <main className="main">
        <div className="container">
            <div className="main__inner">
                <div className="main__bg">
                    <img src="./images/main.png" alt="фон" />
                </div>
                <div className="main__content">
                    <img className="main__change" src="./images/charge.png" alt="Ионка" />
                    <h1 className="main__title">Подберем опытных юристов, которые решат вашу проблему с брокером</h1>
                    <h2 className="main__subtitle">Получите <strong className="text-blue">бесплатную</strong> пошаговую инструкцию по Chardgebakc</h2>
                    <div className="main__menu">
                        <button onClick={() => openModal()} className="main__btn btn">Получить бесплатно</button>
                        <button className="main__link link-btn">Связаться с нами</button>
                    </div>
                    <div className="main__load">
                        <img src="./images/arrBown.png" alt="Иконка" />
                        <strong className="main__load-text">Скачано 193 837 раз</strong>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Main