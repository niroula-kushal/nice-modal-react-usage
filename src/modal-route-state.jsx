import { createContext, useContext, useMemo } from "react"
import { useSearchParams } from "react-router-dom"

const ModalRouteStateContext = createContext(null)

export function ModalRouteStateProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const value = useMemo(() => {
    const isSideOpen = searchParams.get("modal") === "side"
    const isChildOpen = searchParams.get("child") === "true"
    const name = searchParams.get("name") ?? "Admin"

    const updateParams = (updater) => {
      const next = new URLSearchParams(searchParams)
      updater(next)
      setSearchParams(next)
    }

    return {
      isSideOpen,
      isChildOpen,
      name,
      openSideModal: (nextName = "Nate") => {
        updateParams((next) => {
          next.set("modal", "side")
          next.set("name", nextName)
        })
      },
      closeSideModal: () => {
        updateParams((next) => {
          next.delete("modal")
          next.delete("name")
          next.delete("child")
        })
      },
      openChildModal: () => {
        updateParams((next) => {
          next.set("child", "true")
        })
      },
      closeChildModal: () => {
        updateParams((next) => {
          next.delete("child")
        })
      },
    }
  }, [searchParams, setSearchParams])

  return <ModalRouteStateContext.Provider value={value}>{children}</ModalRouteStateContext.Provider>
}

export function useModalRouteState() {
  const context = useContext(ModalRouteStateContext)

  if (!context) {
    throw new Error("useModalRouteState must be used within a ModalRouteStateProvider")
  }

  return context
}
