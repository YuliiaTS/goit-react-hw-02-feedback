import PropTypes from 'prop-types';

export default function Notification({message}) {
    return (
        <p style={{ color: 'red', fontWeight: '500' }}>{message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}