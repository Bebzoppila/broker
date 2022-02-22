import FormThanks from "./FormThanks"
const Manual = () => {


    const sendToBack = () => {

    }

    return(
        <section className="manual">
        <div className="container">
            <div className="manual__inner">
                <div className="manual-content">
                    <h3 className="manual-content__title">В инструкции вы узнаете, как сделать chardgebakc-возврат платежей от:</h3>
                    <ol className="manual-content__list list">
                        <li className="list__item">Брокеров</li>
                        <li className="list__item">Кооперативов</li>
                        <li className="list__item">Банков-банкротов</li>
                        <li className="list__item">Брокеров</li>
                        <li className="list__item">Кооперативов</li>
                        <li className="list__item">Банков-банкротов</li>
                    </ol>
                    <div className="warning manual-content__warning">
                        <h3 className="warning__title">ВАЖНО!</h3>
                        <p className="warning__text">Чем больше времени проходит с момента передачи денег брокеру, тем выше риск их полной потери</p>
                    </div>
                </div>
                <div className="manual-form">
                    <FormThanks thanksImg="/images/thanksnotepad.png" sendToBack={sendToBack} />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Manual