import classes from "./display.module.css"

export default function ShowInfo({result, info}:{result: string, info: string}) {
  return (
    <p className={`${classes.p}`}>
        <span className={`${classes.span}`}>{result == "0" ? "- -":result} </span>
        {info}
    </p>
  )
}
