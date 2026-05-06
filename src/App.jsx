import { Bell, CreditCard, Users, BarChart3 } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { SideModal } from "./side-modal"
import { useSearchParams } from "react-router-dom"

const stats = [
  { title: "Total Revenue", value: "$48,241", icon: CreditCard, detail: "+12.5% from last month" },
  { title: "Active Users", value: "2,394", icon: Users, detail: "+4.3% from last week" },
  { title: "Conversion", value: "6.42%", icon: BarChart3, detail: "+0.8% today" },
]

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams()

  const openSideModal = () => {
    const next = new URLSearchParams(searchParams)
    next.set("modal", "side")
    next.set("name", "Nate")
    setSearchParams(next)
  }

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
              <Button variant="outline" size="sm" onClick={openSideModal}>
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

      <SideModal />
    </div>
  )
}
