import React from 'react'
import './styles.css'

const AdditionalInfo = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <h2 className="card__heading">
          Зажмите, чтобы узнать, как <br />
          <span className="card__heading__this1">это</span> работает.
        </h2>
        <img
          className="card__image"
          alt="plus"
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
        />
      </div>
      <div className="card__side card__side--back">
        <p className="card__text">
          Система очень проста для тех, кто разбирается в делах финансовых и
          экономических. Просто зайдите в любой интересующий вас раздел и
          нажмите нужную кнопку. Готово! Теперь можно провести анализ, прочитать
          определение, рассчитать любой коэффициент, узнать формулу, по которой
          ведется расчёт, узнать о нормальном значении для этого коэффициента и
          все это Онлайн. <br />
          <br />
          Пользуйтесь!
        </p>
        <img
          className="card__image"
          alt="plus"
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=0&g=0&b=0"
        />
      </div>
    </div>
  )
}

export default AdditionalInfo
