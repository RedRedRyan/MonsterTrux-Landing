import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Videos from "@/components/videos"
import Download from "@/components/download"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Videos />
      <Download />
      <About />
      <Footer />
    </main>
  )
}
