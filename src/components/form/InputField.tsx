import classes from "./form.module.css";

export default function InputField({handleChange,value, label, id, placeholder, errorMessage}:{value:string, placeholder: string, label: string,errorMessage?: string, id: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void}) {
    return (
      <div>
          <div>
            <label htmlFor={id} className={errorMessage? `${classes.labelError}` :` ${classes.label}`}>
              {label}
            </label>
            <input type="text"
              className={errorMessage? `${classes.inputError}` : `${classes.input}`}
              value={value}
              name={id}
              id={id}
              placeholder={placeholder}
              onChange={handleChange}
            />
          </div>
          <p className={`${classes.error}`}>{errorMessage}</p>
      </div>
    )
  }
  