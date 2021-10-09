import cl from "./HeaderUser.module.css";
import UserAvatar from "../userAvatar/UserAvatar";
import imageUser from "../../data/images/the_Contacts_iOS7_App-1.png";
import InputSearch from "../inputSearch/InputSearch";
import {memo} from "react";

export default memo(function HeaderUser() {

        return (
            <div className={cl.mainHeaderUser}>
                <div className={cl.divImg}>
                    <UserAvatar imgUrl={imageUser} online={true} width={"50px"}/>
                </div>
                <div className={cl.searchChat}>
                    <InputSearch/>
                </div>
            </div>
        );
    }
);
