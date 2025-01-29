import classes from "./form.module.css";

export default function InputField({value, label, id}:{value:string, label: string, id: string}) {
    return (
      <div>
          <label htmlFor={id} className={`${classes.label}`}>
            {label}
          </label>
          <input className={`${classes.input}`} type="text" value={value} name={id} id={id} />
      </div>
    )
  }
  