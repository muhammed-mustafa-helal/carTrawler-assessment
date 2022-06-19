import classes from './styles/radio.module.scss';


export default function Radio({ id, title, name, handleChange, checked, value }) {
    return (
        <div className={classes['radio-input']}>
            <input
                id={id}
                type='radio'
                name={name}
                onChange={handleChange}
                checked={checked}
                value={value}
            />
            <label htmlFor={id}>{title}</label>
        </div>
    )
}
