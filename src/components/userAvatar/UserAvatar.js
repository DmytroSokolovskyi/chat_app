import cl from "./UserAvatar.module.css";

export default function UserAvatar(props) {
    // console.log(props)

    return (
        <div className={cl.divImgUser} style={{backgroundImage: `url(${props.imgUrl})`, width: `${props.width}`}}>
            {
                props.online ?
                    <div className={cl.onlineDivUser} style={{backgroundColor: "green"}}> </div>
                    :
                    <div className={cl.onlineDivUser}> </div>
            }
        </div>
    );
}
