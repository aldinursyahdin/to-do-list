import { useState } from "react"
import TodoTypes from "../Todo"
import TodoService from "../TodoService"
import Modal from "./Modal"

const Heading = () => {
  const [hiddenComponent, setHiddenComponent] = useState(true)
  const [error, setError] = useState(false)
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos())
 const [showModal, setShowModal] = useState<boolean>(false)

 function toggleModal() {
   setShowModal(!showModal)
 }

//delete all todo
  const handleDeleteAllTodo = () => {
    TodoService.deleteAllTodos()
    window.location.reload()
  }

  //add todo
  const [newTodoText, setNewTodoText] = useState<string>("")
  const handleAddTodo = () => {
    if (newTodoText.length > 101) {
      setError(true)
    } else {
      setError(false)
    }

    if (newTodoText.trim() !== "" && newTodoText.length < 101) {
      const newTodo = TodoService.addTodos(newTodoText)
      setTodos((prevTodo) => [...prevTodo, newTodo])
      setNewTodoText("")
      setHiddenComponent((prev) => !prev)
      setNewTodoText("")
      setError(false)
      window.location.reload()
    }
  }

  
 
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoText(event.target.value)
  }

  //hidden classes for button create
  const toggleAddForm = () => {
    setHiddenComponent((prev) => !prev)
    setNewTodoText("")
    setError(false)
  }

  return (
    <div>
      <Modal open={showModal} onClose={toggleModal} deleteAlltodo={handleDeleteAllTodo} />

      <div className="flex justify-between pb-3 w-full">
        <h1 className="text-2xl font-bold leading-7 text-stone-800 flex items-center">Things you should be doing today...</h1>

        <div className="flex gap-2">
          <button onClick={toggleAddForm} className={`${hiddenComponent ? "" : "hidden"} flex items-center justify-center gap-2 px-4 py-2  bg-sky-800 text-sky-50 shadow-md rounded-lg`}>
            <span className="text-sm font-semibold leading-5">Add New</span>
          </button>

          <button onClick={() => toggleModal()} className="flex items-center justify-center gap-2 px-4 py-2 w-[68px] h-[36px] rounded-lg">
            <span className="text-sm font-semibold leading-5 text-rose-700 flex items-center">Clear</span>
          </button>
        </div>
      </div>
      <div className={`${hiddenComponent ? "hidden" : ""}`}>
        <div className="flex justify-between w-full my-5 mb-12">
          <div className="flex flex-col items-start w-full h-[36px]">
            <div className="flex items-center w-full h-full py-[10px]  ">
              <textarea value={newTodoText} onChange={handleChange} placeholder="Add new to-do title..." className="w-full leading-none bg-stone-50" />
            </div>
            <span className={`${error ? "" : "hidden"} text-xs text-rose-600 leading-4 font-medium my-1`}>Title must be shorter than or equal to 100 characters.</span>
          </div>

          <div className="flex gap-2 ml-5">
            <button onClick={toggleAddForm} className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-sky-700 flex items-center w-[36px] h-[20px]">Cancel</span>
            </button>

            <button
              onClick={() => {
                handleAddTodo()
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 w-[78px] h-[36px] bg-sky-800 text-sky-50 shadow-md rounded-lg"
            >
              <span className="text-sm font-semibold flex items-center w-[62px] h-[20px]">Create</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
