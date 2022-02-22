


const Header = () => {

    return(
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header-info">
                    <a className="header-info__link" href=""><img src="./images/logo.png" alt="Логотип" /></a>
                    <div className="header-info__text">
                        <h2 className="header-info__title">Анти-брокер</h2>
                        <strong className="header-info__subtitle">Бесплатная помощь обманутым инвесторам с 2011 года</strong>
                    </div>
                </div>
                <div className="header-content">
                    <strong className="header-content__text">Проводим процедуру Chargeback по платежным системам:</strong>
                    <div className="header-content__cards">
                        <img src="./images/cards/visa.png" alt="Виза" />
                        <img src="./images/cards/mastercart.png" alt="Мастеркард" />
                        <img src="./images/cards/maestro.png" alt="Маэфтро" />
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header