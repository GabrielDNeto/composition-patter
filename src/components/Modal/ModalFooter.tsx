import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface ModalFooterProps extends HTMLAttributes<HTMLElement>{
  children: ReactNode;
}

const ModalFooter = ({children, ...rest}: ModalFooterProps) => {
  return (
    <footer className={twMerge("w-full px-4 py-2  absolute bottom-0 mb-4 left-0 flex align-middle justify-end gap-4", rest.className)}>
      {children}
    </footer>
  )
}

export default ModalFooter;