
const AddForm = () => {
  return (
    <div className="flex justify-between w-full my-5 mb-12">
      <div className="flex flex-col items-start w-full h-[36px]">
        <div className="flex items-center w-full h-full py-[10px]  ">
          <textarea placeholder="Add new to-do title..." className="w-full leading-none bg-stone-50" />
        </div>
        <span className="text-xs text-rose-600 leading-4 font-medium my-1">Title must be shorter than or equal to 100 characters.</span>
      </div>

      <div className="flex gap-2 ml-5">
        <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg">
          <span className="text-sm font-semibold text-sky-700 flex items-center w-[36px] h-[20px]">Cancel</span>
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2 w-[78px] h-[36px] bg-sky-800 text-sky-50 shadow-md rounded-lg">
          <span className="text-sm font-semibold flex items-center w-[62px] h-[20px]">Create</span>
        </button>
      </div>
    </div>
  )
}

export default AddForm