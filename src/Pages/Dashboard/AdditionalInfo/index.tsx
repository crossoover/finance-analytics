/* eslint-disable prettier/prettier */
import React from 'react';
import './styles.css';

const AdditionalInfo = () => {
	return (
		<div className="card">
			<div className="card__side card__side--front">
				<h2 className="card__heading">
					Зажміть, щоб дізнатися, як
					<br />
					<span className="card__heading__this1">ЦЕ</span> працює.
				</h2>
				<img
					className="card__image"
					alt="plus"
					src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
				/>
			</div>
			<div className="card__side card__side--back">
				<p className="card__text">
					Система дуже проста для тих, хто розуміється на справах фінансових і
					економічних. Просто зайдіть в будь-який цікавий для вас розділ і
					натисніть на потрібну кнопку. Готово! Тепер можна провести аналіз,
					прочитати визначення, розрахувати будь-який коефіцієнт, дізнатися
					формулу, за якою ведеться розрахунок, дізнатися про нормальне значення
					для цього коефіцієнта та все це Онлайн.
					<br />
					<br />
					Користуйтесь на здоровʼя!
				</p>
				<img
					className="card__image"
					alt="plus"
					src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=0&g=0&b=0"
				/>
			</div>
		</div>
	);
};

export default AdditionalInfo;
