import cl from './UserSide.module.css';
import Contacts from "../contacts/Contacts";
import HeaderUser from "../headerUser/HeaderUser";

export default function UserSide() {
    return (
        <div className={cl.userSide}>
            <div className={cl.headerUser}>
                <HeaderUser/>
            </div>
            <div className={cl.chatsDiv}>Chats</div>
            <div className={cl.contacts}>
                <Contacts/>
            </div>
        </div>
    );
};
