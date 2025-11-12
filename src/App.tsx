import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { ToastProvider } from "@/app/providers/ToastProvider"
import AppRouter from "@/app/router/index"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"



function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Navbar />
          <main className="w-full pt-[70px] md:pt-0 min-h-screen h-fit">
            <AppRouter />
          </main>
          <Footer />
        </Router>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App