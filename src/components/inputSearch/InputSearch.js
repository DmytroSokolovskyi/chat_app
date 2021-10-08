import cl from "./InputSearch.module.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ContactMini from "../contactMini/ContactMini";
import {useHistory} from "react-router";
import {createNewContact, findChoseContact} from "../../services";

export default function InputSearch() {
    const [inputSearch, setInputSearch] = useState('');
    const {mainReducer} = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const {contacts} = mainReducer;

    const searchContacts = contacts.filter(item => item.login.toLowerCase().includes(inputSearch.toLowerCase()));
    const onSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const newContact = (e) => {
        e.preventDefault();
        dispatch(createNewContact(inputSearch));
        history.push(inputSearch.toLowerCase())
        setInputSearch('');
    }

    const choseContactChat = (id) => {
        history.push(id.toLowerCase());
        dispatch(findChoseContact(contacts, id));
        setInputSearch('');
    }

    return (
        <div className={cl.searchChatDiv}>
            <form className={cl.searchChatForm} onSubmit={newContact}>
                <input className={cl.myInputSearch}
                       name={'massage'}
                       value={inputSearch}
                       placeholder={'Search or start new chat'}
                       onInput={onSearch}
                       type="text"
                       autoComplete="off"/>

            </form>
            <div className={cl.searchResultDiv}>
                {
                    inputSearch !== '' && searchContacts.length < 1 &&
                    <div className={cl.newContact}>
                        <div className={cl.toTab}>Tab Enter to create new chat</div>
                        <ContactMini contact={{login: inputSearch}} params={"30px"}/>
                    </div>
                }
                {
                    inputSearch !== '' &&
                    searchContacts.map(contact => <ContactMini choseContactChat={choseContactChat}
                                                               contact={contact}
                                                               params={"30px"}
                                                               key={contact.id}/>)
                }

            </div>
        </div>
    );
}
