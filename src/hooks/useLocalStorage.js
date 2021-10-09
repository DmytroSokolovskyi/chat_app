import {useEffect, useRef, useState} from "react";
import {setState} from "../redux/actions";

export const useLocalStorage = (key, dispatch) => {
    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const keyRef = useRef(key);

    useEffect(() => {
            console.log("fffffffffffffffffffffffffffffffff");
            try {
                const storageItem = JSON.parse(localStorage.getItem(key));

                if (storageItem) {
                    setValue(storageItem);
                }
            } catch (e) {
                setError(e.message);
            }
        }
        , []);

    const changeState = () => (dispatch) => {
        console.log(value)
        try {
            if (value) {
                dispatch(setState(value))
            }
        } catch (e) {
            setError(e.message);
        }
    };

    useEffect(() => {
        try {
            if (value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (e) {
            setError(e.message);
        }
    }, [value]);

    //
    // useEffect(() => {
    //     const lastKey = keyRef.current;
    //     if (key !== lastKey) {
    //         try {
    //             localStorage.setItem(key, JSON.stringify(value));
    //             keyRef.current = key;
    //             localStorage.removeItem(JSON.stringify(lastKey));
    //         } catch (e) {
    //             setError(e.message);
    //         }
    //     }
    // }, [key]);

    // if (value) {return [value, setValue, error]}

    return [value ,setValue, changeState, error];
};
