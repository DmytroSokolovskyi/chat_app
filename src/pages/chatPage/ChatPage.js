import cl from './ChatPage.module.css';
import ChadSide from "../../components/chadSide/ChadSide";
import UserSide from "../../components/userSide/UserSide";

export default function ChatPage() {
    return (
        <div className={cl.mainDivChatPage}>
            <main>
                <UserSide/>
                <ChadSide/>
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
};
