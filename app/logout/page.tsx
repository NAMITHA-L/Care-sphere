"use client"

import { useEffect } from "react"
import { LogoutConfirmDialog } from "../components/LogoutConfirmDialog"

export default function LogoutPage() {
  useEffect(() => {
    // This will ensure the dialog opens as soon as the page loads
    const dialog = document.querySelector("dialog")
    if (dialog) {
      dialog.showModal()
    }
  }, [])

  return <LogoutConfirmDialog />
}

