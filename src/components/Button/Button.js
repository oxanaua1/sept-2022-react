import css from './Button.module.css';

//створюємо кнопку з {children (то що між тегами, напис),
// click (як ф-я), ...props(наприклад стилі та інші речі що приймє дів)}
//виводимо в Home Page
const Button = ({children, click, ...props}) => {
    return (
        <div className={css.Button} onClick={click} {...props}>
            {children}
        </div>
    );
};

export {Button};