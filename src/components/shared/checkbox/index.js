import classes from './styles/checkbox.module.scss';


export default function Checkbox({ id, title, name, handleChange, checked }) {
    return (
        <div className={classes['checkbox-input']}>
            <input
                id={id}
                type='checkbox'
                name={name}
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={id}>{title}</label>
        </div>
    )
}
