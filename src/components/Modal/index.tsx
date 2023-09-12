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
}

const Modal = ({title, footer, onOk, okText, onCancel, cancelText, closable, visible, setVisible}: ModalProps) => {
  if(!visible) return null;

  return (
    <div className="w-1/2 h-2/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <header className="p-4 bg-orange-400 flex align-middle justify-between">
        <h3 className="font-bold text-white">{title}</h3>
        {closable && ( <X color="#fff" className="cursor-pointer" onClick={() => setVisible(!visible)}/>)}
      </header>
      <main className="p-4">
        <h4 className="font-bold mb-4">Textinho lorem ipsum:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in nunc diam. Nullam tempor eros est, ac consequat eros ullamcorper sed. Vestibulum imperdiet ipsum nunc, eget malesuada augue eleifend quis. Mauris accumsan turpis sagittis, vulputate tellus et, viverra lorem. Curabitur vulputate ac sapien a eleifend. Praesent massa lectus, sodales id dolor in, maximus fringilla tellus. Fusce ac ante sollicitudin, imperdiet lectus in, convallis sem. Nam orci metus, dignissim sit amet metus sit amet, bibendum feugiat velit. Sed eu nisl facilisis, condimentum justo at, pulvinar nisi. Quisque semper in sem sed accumsan.
        </p>
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