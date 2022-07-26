import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.css';

export default function Statistics({ good, neutral, bad }) {
    return (
        <div>
        <p className={style.text}>
            Good:<span> {good}</span>
        </p>
        <p className={style.text}>
            Neutral:<span> {neutral}</span>
        </p>
        <p className={style.text}>
            Bad:<span> {bad}</span>
        </p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};
