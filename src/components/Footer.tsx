


const Footer = () => {

    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer-info">
                    <h4 className="footer-info__title">Анти-брокер</h4>
                    <p className="footer-info__text">Работаем в рамках: Федеральный закон от 22.04.1996 N 39-ФЗ (ред. от 17.06.2019) "О рынке ценных бумаг" Статья 3. Брокерская деятельность Федеральный закон "О бесплатной юридической помощи в Российской Федерации" от 21.11.2011 N 324-ФЗ</p>
                    <a className="footer-info__link" href="">Политика конфиденциальности</a>
                </div>
                <div className="footer-data">
                    <a className="footer-data__phone" href="tel:84951183934">8 (495) 118-39-34</a>
                    <strong className="footer-data__help">Бесплатная горячая линия</strong>
                    <p className="footer-data__personal">*отправляя формы на данном сайте, вы даете согласие на обработку персональных данных в соответствии с 152-ФЗ</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer