import cl from './ChatMessage.module.css';
import Massage from "../massage/Massage";

export default function ChatMessage ({contact}) {
    console.log(contact);

    return (
        <div className={cl.chatMessagesDiv}>
            {contact.massages.map(massage => <Massage massage={massage} imgAva={contact.photo} key={massage.time}/>)}
        </div>
    );
 }
