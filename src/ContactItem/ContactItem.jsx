import PropTypes from 'prop-types';

const ContactItem = ({
  name,
  number  
}) => {
    return (
        <li>{ name }: { number }</li>
    );
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired
}

export default ContactItem;