"use client"

export default function Download() {
  return (
    <section id="download" className="py-12 sm:py-16 md:py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 relative">READY TO DRIVE?</h2>
          <p className="text-white text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto relative">
            Download Monster Trux now and join millions of players crushing it on the track.
          </p>

          <div className="flex justify-center mb-8 relative">
            {/* Windows - Available */}
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/30 hover:border-white transition max-w-md w-full transform hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20">
              <div className="flex justify-center mb-4 sm:mb-6">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-center">Windows</h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-center text-base sm:text-lg">Now Available</p>
              <button 
                className="bg-gradient-to-r from-white to-gray-100 text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:from-gray-100 hover:to-white transition w-full text-base sm:text-lg shadow-lg"
                onClick={() => window.open('https://drive.google.com/file/d/1zbZJAX3GbqaT5WRBfgHe5KmEkP-IvjTq/view?usp=drive_link', '_blank')}
              >
                Download Now
              </button>
            </div>
          </div>

          <p className="text-white/80 text-sm sm:text-base relative">Free to play • 150 MB download • Available worldwide</p>
        </div>
      </div>
    </section>
  )
}
