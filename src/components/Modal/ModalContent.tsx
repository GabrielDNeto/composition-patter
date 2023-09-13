import { ReactNode } from "react"

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({children}: ModalContentProps) => {
  return (
    <main className="p-4">
        {children}
      </main>
  )
}

export default ModalContent;