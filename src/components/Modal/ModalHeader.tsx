import { X } from "lucide-react"

interface ModalHeaderProps {
  title: string;
}

const ModalHeader = ({title}: ModalHeaderProps) => {
  return (
      <header className="p-4 bg-orange-400">
        <h3 className="font-bold text-white">{title}</h3>
      </header>
  )
}

export default ModalHeader;