/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

  return (
    <div className="form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Digite o título' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default Form