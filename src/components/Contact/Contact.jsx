import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';




const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  
  return (
    <div className={s.container}>
      <div className={s.infoContainer}>
        <span className={s.contactLine}>
          <FaUser />
          <p>{name}</p>
        </span>
        <span className={s.contactLine}>
          <FaPhoneAlt />
          <p>{number}</p>
        </span>
      </div>
      <button
        className={s.deleteCntBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;