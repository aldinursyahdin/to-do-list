import React from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  deleteAlltodo:() => void
}

const Modal: React.FC<ModalProps> = ({open, onClose, deleteAlltodo}) => {
  return (
    <div className={`${open ? "fixed inset-0 bg-black/80 flex justify-center items-center z-50" : "hidden"}`}>
      <div className="flex flex-col justify-center items-center relative w-[300px] h-[156px] bg-white shadow-md rounded-lg">
        <div className="flex justify-center items-center h-[96px]">
          <div className="text-sm font-medium leading-4 flex items-center text-black">Confirm clear all todos?</div>
        </div>
        <div className="flex flex-row items-start p-[12px_16px] gap-[12px] w-[300px] h-[60px] bg-[#FAFAF9] rounded-b-[16px]">
          <button onClick={onClose} className="flex flex-row justify-center items-center p-[8px_16px] gap-[10px] w-[128px] h-[36px] rounded-[8px]">
            <span className="w-[48px] h-[20px] text-sm leading-5 font-semibold text-[#44403C] flex items-center">Close</span>
          </button>
          <button onClick={deleteAlltodo} className="flex flex-row justify-center items-center p-2 px-4 gap-2 w-[128px] h-[36px] bg-[#9F1239] shadow-md rounded-lg">
            <span className="flex items-center w-[55px] h-[20px] text-sm font-semibold text-[#FFF1F2] leading-5">Confirm</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal