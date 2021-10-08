import {useDispatch, useSelector} from "react-redux";
import Contact from "../contact/Contact";
import moment from "moment";
import {findChoseContact} from "../../services";
import {useHistory} from "react-router";


export default function Contacts() {
    const {mainReducer} = useSelector(state => state);
    const history = useHistory();
    const dispatch = useDispatch();
    const {contacts} = mainReducer;

    const choseContact = (id) => {
        history.push(id.toLowerCase());
        dispatch(findChoseContact(contacts, id));

    }
    const sortedContacts = contacts.sort((a, b) => moment.utc(b.massages[b.massages.length - 1].time).diff(moment.utc(a.massages[a.massages.length - 1].time)));


    return (
        <>
            {sortedContacts.map(contact => <Contact contact={contact} choseContact={choseContact} key={contact.id}/>)}
        </>
    );
}
