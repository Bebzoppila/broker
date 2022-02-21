import { FC } from "react"

type ThanksProps = {
    img: string,
    subtitle: string
}

const Thanks:FC<ThanksProps> = ({img, subtitle}) => {


    return (
        <div className="thanks">
            <div className="thanks__inner">
                <h2 className="thanks__title">Спасибо!</h2>
                <h3 className="thanks__subtitle">{subtitle}</h3>
                <img className="thanks__img" src={img} alt="Картинка спасибо" />
            </div>
        </div>
    )
}

export default Thanks