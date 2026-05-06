import { useState } from "react"
import { Bell, CreditCard, Users, BarChart3, X } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"

const stats = [
  { title: "Total Revenue", value: "$48,241", icon: CreditCard, detail: "+12.5% from last month" },
  { title: "Active Users", value: "2,394", icon: Users, detail: "+4.3% from last week" },
  { title: "Conversion", value: "6.42%", icon: BarChart3, detail: "+0.8% today" },
]

export default function App() {
  const [isSidebarModalOpen, setSidebarModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
        <aside className="border-r border-border bg-card p-6">
          <h1 className="text-xl font-semibold">Acme Admin</h1>
          <nav className="mt-8 space-y-2 text-sm">
            <a className="block rounded-md bg-muted px-3 py-2 font-medium" href="#">Dashboard</a>
            <a className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-muted" href="#">Users</a>
            <a className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-muted" href="#">Reports</a>
          </nav>
        </aside>

        <main className="p-6 md:p-8">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">Dashboard</h2>
              <p className="text-muted-foreground">Welcome back, here is your business overview.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setSidebarModalOpen(true)}>
                Open Side Modal
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" /> Alerts
              </Button>
            </div>
          </div>

          <section className="grid gap-4 md:grid-cols-3">
            {stats.map(({ title, value, icon: Icon, detail }) => (
              <Card key={title}>
                <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{value}</div>
                  <CardDescription>{detail}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
        </main>
      </div>

      <div
        className={`fixed inset-0 z-50 transition ${
          isSidebarModalOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isSidebarModalOpen}
      >
        <button
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isSidebarModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebarModalOpen(false)}
          aria-label="Close side modal"
        />

        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-border bg-card p-6 shadow-2xl transition-transform duration-300 sm:w-[420px] ${
            isSidebarModalOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="side-modal-title"
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 id="side-modal-title" className="text-lg font-semibold">
              Quick Actions
            </h3>
            <Button size="sm" variant="outline" onClick={() => setSidebarModalOpen(false)}>
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
    </div>
  )
}
