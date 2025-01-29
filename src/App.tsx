import Arrow from "./components/icones/Arrow"
import InputField from "./components/form/InputField"
import ShowInfo from "./components/display/ShowInfo"
import classes from "./App.module.css"

function App() {

  return (
    <>
      <main>

        <h1 className={`${classes.h1}`}>Age calculator</h1>

        <div className={`${classes.body}`}>

          <form>

            <div className={`${classes.inputs}`}>

              <InputField label="day" id="day" value="24"/>
              <InputField label="month" id="month" value="09"/>
              <InputField label="year" id="year" value="1984"/>

            </div>
            
            <div className={`${classes.parentB}`}>
              <button type="submit" className={`${classes.button}`}>
                <Arrow  width={38}/>
              </button>
            </div>

          </form>

          <div>
            <ShowInfo  result="38" info="years"/>
            <ShowInfo  result="3" info="month"/>
            <ShowInfo  result="26" info="days"/>
          </div>
          
        </div>

      </main>
    </>
  )
}

export default App
