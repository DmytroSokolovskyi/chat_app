import cl from './ChadSide.module.css';
import WriteMSG from "../writeMSG/WriteMSG";
import moment from "moment/moment";
import {useDispatch, useSelector} from "react-redux";
import ContactMini from "../contactMini/ContactMini";
import ChatMessage from "../chatMessage/ChatMessage";
import {useEffect} from "react";

export default function ChadSide({match: {params: {id}}}) {
    const {mainReducer} = useSelector(state => state);
    const {chosenContact} = mainReducer;
    const dispatch = useDispatch();

    useEffect(() => {


    }, []);


    return (
        <div className={cl.chadSide}>
            <div className={cl.headerChat}>
                <ContactMini contact={chosenContact} params={"50px"}/>
            </div>
            <div className={cl.chatByContact}>
                {chosenContact && <ChatMessage contact={chosenContact}/>}
            </div>
            <div className={cl.writeMSG}>
                <WriteMSG contact={chosenContact}/>
            </div>
        </div>
    );
}
