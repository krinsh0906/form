import react from "react";
import {useState} from "react";


const Form = () => {
    const [data,SetData] = useState(0);
    const Use = () =>{
        SetData (data+1);
    }
    const delet = () =>{
        SetData (data-1);
    }
    return(
 
 <>
 <form>
        <lable>
          name:
          <input type="text" name="name" placeholder='enter your first name'/>
  
        </lable>
        <input type="submit" value="submit"/>
        
       </form>
       <p>button use{data}time</p>
       <button onClick={Use}>use</button>
       <button onClick={delet}>delet</button>

   
   </>
    );
}
export default Form;
