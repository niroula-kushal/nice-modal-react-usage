import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { X } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card"

export const SideModal = NiceModal.create(({ name = "Admin" }) => {
  const modal = useModal()

  return (
    <div className={`fixed inset-0 z-50 transition ${modal.visible ? "pointer-events-auto" : "pointer-events-none"}`}>
      <button
        className={`absolute inset-0 bg-black/40 transition-opacity ${modal.visible ? "opacity-100" : "opacity-0"}`}
        onClick={() => modal.hide()}
        aria-label="Close side modal"
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-border bg-card p-6 shadow-2xl transition-transform duration-300 sm:w-[420px] ${
          modal.visible ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="side-modal-title"
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 id="side-modal-title" className="text-lg font-semibold">
            Quick Actions for {name}
          </h3>
          <Button size="sm" variant="outline" onClick={() => modal.hide()}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Report</CardTitle>
              <CardDescription>Generate a new weekly performance report.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Invite Team Member</CardTitle>
              <CardDescription>Send an invitation to a new admin user.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </aside>
    </div>
  )
})
