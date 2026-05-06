import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { Modal } from "antd"

export const ChildModal = NiceModal.create(({ name = "Nate" }) => {
  const modal = useModal()

  return (
    <Modal
      title="Child Modal"
      open={modal.visible}
      onOk={() => modal.hide()}
      onCancel={() => modal.hide()}
      okText="Done"
    >
      <p>This is an Ant Design child modal for {name}.</p>
    </Modal>
  )
})
