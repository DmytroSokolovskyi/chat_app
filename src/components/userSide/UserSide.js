import cl from './UserSide.module.css';

export default function UserSide() {
    return (
        <div className={cl.userSide}>
            <div className={cl.headerUser}>
                header
            </div>
            <div className={cl.contacts}>
                контакт
            </div>
        </div>
    );
};
