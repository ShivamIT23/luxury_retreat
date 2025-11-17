import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@/app/providers/ThemeProvider"
import { ToastProvider } from "@/app/providers/ToastProvider"
import AppRouter from "@/app/router/routes"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/app/providers/ScrollToTop"
import WhatsApp from "./components/layout/WhatsApp"



function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main className="w-full pt-[70px] md:pt-0 min-h-screen h-fit">
            <AppRouter />
          </main>
          <WhatsApp />
          <Footer />
        </Router>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App