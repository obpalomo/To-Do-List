import Tarea from "../tarea/Tarea";

function ListaTareas({ tareas, onTareaCambiada, onTareaBorrada }) {
  return (
    <ul>
      {tareas.map((x, idx) => 
      <Tarea
          onTareaBorrada={onTareaBorrada}
          onTareaCambiada={onTareaCambiada}
          key={idx}
          tarea={x}
        ></Tarea>
        )}
    </ul>
  );
}

export default ListaTareas;
