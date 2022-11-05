import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
          title,
          des
        });
        setTitle('')
        setDes('')

    }

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
        <h1 className='text-white text-2xl font-bold mb-3'>Crea tu Tarea</h1>
        <input placeholder="Escribe tu tarea"
            onChange={(e) => setTitle(e.target.value)} value={title}
            autoFocus className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea placeholder="Escribe tu descripcion"
            onChange={(e) => setDes(e.target.value)} value={des}
            className='bg-slate-300 p-3 w-full mb-2'
        />
        <button className="bg-indigo-500 px-3 py-1 rounded-md  hover:bg-indigo-600 text-white"> Guardar </button>
    </form>
    </div>
    
  )
}

export default TaskForm