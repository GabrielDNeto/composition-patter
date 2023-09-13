import { X } from "lucide-react";
import { ReactNode } from "react"

interface ModalRootProps {
  children: ReactNode;
  visible: boolean;
}

const ModalRoot = ({children, visible}: ModalRootProps) => {
  if(!visible) return null;

  return (
    <div className="w-1/2 h-2/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    {children}
    </div>
  )
}
export default ModalRoot;