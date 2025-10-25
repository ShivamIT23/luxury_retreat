import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./app/providers/ThemeProvider"
import { ToastProvider } from "./app/providers/ToastProvider"
import AppRouter from "./app/router"



function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <main className="w-full min-h-screen h-fit pt-[100px]">
            <AppRouter />
          </main>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App