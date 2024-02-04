
import { useState } from 'react'
import './App.css'
import InputTarea from './components/inputTarea/InputTarea'
import ListaTareas from './components/listaTarea/ListaTareas'

function App() {
  const [tareas, setTareas] = useState([
    {texto:"comprar pan", hecha: true, borrado:null},
    {texto:"pasear perro", hecha: false, borrado:null}
  
  ])

  function intentarAgregarTarea(textoTarea){
    /* tareas.push(textoTarea) */
    if(textoTarea !== "" && tareas.find(x=> x.texto === textoTarea) === undefined) {
    setTareas([{texto:textoTarea, hecha: false, borrado:null}, ...tareas])
    console.log(tareas);
  }
}

  function cambiarEstadoTarea(tareaCambiar){
    setTareas(tareas.map(t=>{
      if(t.texto === tareaCambiar.texto){
        return{...t, hecha: !t.hecha}
      } else {
        return t
      }
    }))
  }

  function borrarTarea(tareaBorrar){
    setTareas(tareas.filter(t=> t.texto!==tareaBorrar.texto))
  }

  function borrarTareaSoft(tareaBorrar){
    setTareas(tareas.map(t=>{
      if(t.texto === tareaBorrar.texto){
        if(t.borrado !== null){
          t.borrado = null
        } else {
          t.borrado = new Date()
        }
      }
      return t
    }))
  }


  return (
    <>
      <h1>Lista tareas({tareas.filter(x=>x.borrado === null).length})</h1>
      <h5>Completadas:{tareas.filter(x=>x.borrado === null).filter(x=>x.hecha).length}</h5>
      <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
      <ListaTareas onTareaBorrada={borrarTareaSoft} onTareaCambiada={cambiarEstadoTarea} tareas={tareas.filter(t=>t.borrado === null)}></ListaTareas>
      <hr></hr>
      <h3>Tareas eliminadas({tareas.filter(x=>x.borrado !== null).length})</h3>
      <ListaTareas onTareaBorrada={borrarTareaSoft} onTareaCambiada={cambiarEstadoTarea} tareas={tareas.filter(t=>t.borrado !== null)}></ListaTareas>
    </>
  )
}

export default App
