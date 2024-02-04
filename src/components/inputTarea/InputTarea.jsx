import { useState } from "react"



function InputTarea({onAgregarTarea}){

    const[texto,setTexto] = useState("")

    function agregarTarea(){
        onAgregarTarea(texto)
        setTexto("")
    }


    return(
        <>
            <input type="text" value={texto} onChange={(e)=>setTexto(e.target.value)}></input>
            <button onClick= { agregarTarea }>➕</button>
        </>
    )
}


export default InputTarea