import Arrow from "./components/icones/Arrow"
import InputField from "./components/form/InputField"
import ShowInfo from "./components/display/ShowInfo"
import classes from "./App.module.css"
import { useState } from "react"
import { ErrorsType, FormEventType, InputChangeType } from "./@types/types"

function App() {

  const [isCalculating, setIsCalculating] = useState(()=>false)

  const [day, setDay] = useState(()=>0);
  const [month, setMonth] = useState(()=>0);
  const [year, setYear] = useState(()=>0);

  
  const [dayCalc, setDayCalc] = useState(()=>0);
  const [monthCalc, setMonthCalc] = useState(()=>0);
  const [yearCalc, setYearCalc] = useState(()=>0);
  

  const [errors, setErrors] = useState<ErrorsType>({})

  function handleChangeYear(e: InputChangeType){
    if(e.target.value == "")
      setYear(0)
    else if(Number(e.target.value))
      setYear(Number(e.target.value))
    else
      return
  }

  function handleChangeDay(e: InputChangeType){
    if(e.target.value == "")
      setDay(0)
    else if(Number(e.target.value))
      setDay(Number(e.target.value))
    else
      return
  }

  function handleChangeMonth(e: InputChangeType){
    if(e.target.value == "")
      setMonth(0)
    else if(Number(e.target.value))
      setMonth(Number(e.target.value))
    else
      return
  }

  function handleSubmit(e: FormEventType){

    e.preventDefault()
    setIsCalculating(true)

    const errors:ErrorsType = {};
    setErrors({})

    const currentDate = (new Date());
    const currentYear = currentDate.getFullYear();
    const validYear200 = currentYear - 210;
   
    if(month == 0)
      errors.month = "This field is required"
    else if(month > 12)
      errors.month = "Must be a valid month"
    
    if(year == 0)
      errors.year = "This field is required"
    else if(year > currentYear || year < validYear200-1)
      errors.year = `must be a year in ${validYear200} and ${currentYear}`

    if(day == 0)
      errors.day = "This field is required"
    else if(errors.month == "" && errors.year == ""){
      const totalDaysInMonth = new Date(Date.UTC(2025,2,0)).getDate()
      if(day > totalDaysInMonth)
        errors.day = "must be a valid day"
    }

    if(Object.entries(errors).length > 0){
      setErrors(errors)
      setIsCalculating(false)
      return
    }

    //calculate date
    const providedDate = new Date(`${month}/${day}/${year}`)
    
    const diff = new Date(currentDate.getTime() - providedDate.getTime())

    setDayCalc(diff.getUTCDate() - 1);
    setMonthCalc(diff.getUTCMonth())
    setYearCalc(()=>{
      return (diff.getUTCFullYear() - 1970) < 0 ? (diff.getUTCFullYear() - 1970)*(-1) : (diff.getUTCFullYear() - 1970)
    })
    
    setIsCalculating(false)
  }

  return (
    <>
      <main>

        <h1 className={`${classes.h1}`}>Age calculator</h1>

        <div className={`${classes.body}`}>

          <form onSubmit={handleSubmit}>

            <div className={`${classes.inputs}`}>

              <InputField 
                handleChange={handleChangeDay} 
                placeholder="DD" 
                label="day" 
                id="day" 
                value={day == 0 ? "" : day.toString()}
                errorMessage={errors.day}
              />
              <InputField 
                handleChange={handleChangeMonth} 
                placeholder="MM" 
                label="month" 
                id="month" 
                value={month == 0 ? "" : month.toString()}
                errorMessage={errors.month}
              />
              <InputField 
                handleChange={handleChangeYear} 
                placeholder="YYYY" 
                label="year" 
                id="year" 
                value={year == 0 ? "" : year.toString()}
                errorMessage={errors.year}
              />

            </div>
            
            <div className={`${classes.parentB}`}>
              <button disabled={isCalculating} type="submit" className={`${classes.button}`}>
                <Arrow  width={38}/>
              </button>
            </div>

          </form>

          <div>
            <ShowInfo  result={yearCalc.toString()} info="years"/>
            <ShowInfo  result={monthCalc.toString()} info="months"/>
            <ShowInfo  result={dayCalc.toString()} info="days"/>
          </div>
          
        </div>

      </main>
    </>
  )
}

export default App
