import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

//хук можна викликати тільки в компоненті або в іншому хуку!
// оскількт всі хуки то фукції, тому записуємо контекст як фю і він стає хуком = () =>
//дана фя поверне мені об'єкт контексту

const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
}