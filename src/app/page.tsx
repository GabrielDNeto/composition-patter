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
    >
      <h4 className="font-bold mb-4">Textinho lorem ipsum:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in nunc diam. Nullam tempor eros est, ac consequat eros ullamcorper sed. Vestibulum imperdiet ipsum nunc, eget malesuada augue eleifend quis. Mauris accumsan turpis sagittis, vulputate tellus et, viverra lorem. Curabitur vulputate ac sapien a eleifend. Praesent massa lectus, sodales id dolor in, maximus fringilla tellus. Fusce ac ante sollicitudin, imperdiet lectus in, convallis sem. Nam orci metus, dignissim sit amet metus sit amet, bibendum feugiat velit. Sed eu nisl facilisis, condimentum justo at, pulvinar nisi. Quisque semper in sem sed accumsan.
        </p>
    </Modal>
   </>
  )
}
