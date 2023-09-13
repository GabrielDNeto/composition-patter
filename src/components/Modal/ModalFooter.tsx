import { ReactNode } from "react"

interface ModalFooterProps {
  children: ReactNode;
}

const ModalFooter = ({children}: ModalFooterProps) => {
  return (
    <footer className="w-full px-4 py-2  absolute bottom-0 mb-4 left-0 flex align-middle justify-end gap-4">
      {children}
    </footer>
  )
}

export default ModalFooter;