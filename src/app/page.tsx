"use client"
import Modal from "@/components/Modal"
import { useState } from "react"


export default function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  return (
   <>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button 
        className="w-1/4 p-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-800 transition-colors"
        onClick={() => setModalVisible(true)}
      >
          Open Modal</button>
    </main>

    <Modal
      title='Modal Title'
      onOk={() => console.log('onOk')}
      okText="Concluído"
      onCancel={() => console.log('onCancel')}
      cancelText="Fechar"
      closable={true}
      visible={modalVisible}
      setVisible={setModalVisible}
    />
   </>
  )
}
