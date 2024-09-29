import Heading from "./components/Heading"
import ListToDo from "./components/ListToDo"

function App() {
  return (
    <div className="min-h-screen w-full bg-stone-50">
      <div className="mx-auto pt-[76px] max-w-[800px] w-full ">
        <Heading />
        <ListToDo />
      </div>
    </div>
  )
}

export default App
