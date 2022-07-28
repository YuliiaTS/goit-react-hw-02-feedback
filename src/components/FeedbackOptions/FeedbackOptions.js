import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
        {options.map(keyName => {
            return (
            <div style={{ display: 'inline-flex' }}>
                <button
                type="button"
                name={keyName}
                onClick={() => onLeaveFeedback(keyName)}
                >
                {keyName}
                </button>
            </div>
            );
        })}
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};
