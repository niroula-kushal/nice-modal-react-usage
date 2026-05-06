import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { X } from "lucide-react"
import { Button } from "./components/ui/button"

export const ChildModal = NiceModal.create(({ name = "Nate", onCloseAll }) => {
  const modal = useModal()

  return (
    <div className={`fixed inset-0 z-[60] transition ${modal.visible ? "pointer-events-auto" : "pointer-events-none"}`}>
      <button className={`absolute inset-0 bg-black/30 transition-opacity ${modal.visible ? "opacity-100" : "opacity-0"}`} onClick={onCloseAll} aria-label="Close child side modal" />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-sm border-l border-border bg-card p-6 shadow-2xl transition-transform duration-300 sm:w-[360px] ${
          modal.visible ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="child-side-modal-title"
      >
        <div className="mb-4 flex items-center justify-between">
          <h4 id="child-side-modal-title" className="text-base font-semibold">Nested Side Modal</h4>
          <Button size="sm" variant="outline" onClick={onCloseAll}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">This stacked side modal was opened for {name}.</p>
      </aside>
    </div>
  )
})
