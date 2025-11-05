"use client"

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              CRUSH THE
              <br />
              <span className="text-primary">COMPETITION</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience the ultimate monster truck racing game. Massive trucks. Massive action. Massive fun.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition text-lg">
                Download Now
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition text-lg">
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="h-96 md:h-full bg-gradient-to-br from-primary/20 to-black border-2 border-primary/30 rounded-xl flex items-center justify-center">
            <img src='/images/logo1.png' alt="pic"/>
          </div>
        </div>
      </div>
    </section>
  )
}
