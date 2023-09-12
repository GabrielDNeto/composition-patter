import { X } from "lucide-react";
import React, { ReactNode } from "react";

interface ModalProps {
  title: string;
  footer?: ReactNode;
  onOk: () => void;
  okText: string;
  onCancel: () => void;
  cancelText: string;
  closable: boolean;
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({title, footer, onOk, okText, onCancel, cancelText, closable, visible, setVisible, children}: ModalProps) => {
  if(!visible) return null;

  return (
    <div className="w-1/2 h-2/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <header className="p-4 bg-orange-400 flex align-middle justify-between">
        <h3 className="font-bold text-white">{title}</h3>
        {closable && ( <X color="#fff" className="cursor-pointer" onClick={() => setVisible(!visible)}/>)}
      </header>
      <main className="p-4">
        {children}
      </main>
      {footer 
      ? footer 
      : (
        <footer className="w-full px-4 py-2  absolute bottom-0 mb-4 left-0 flex align-middle justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setVisible(!visible)}>{cancelText}</button>
          <button className="px-4 py-2 bg-orange-400 rounded-md text-white" onClick={() => setVisible(!visible)}>{okText}</button>
        </footer>
      )}
    </div>
  )
}

export default Modal;