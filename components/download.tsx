"use client"

export default function Download() {
  return (
    <section id="download" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">READY TO DRIVE?</h2>
          <p className="text-white text-lg mb-12 max-w-2xl mx-auto">
            Download Monster Trux now and join millions of players crushing it on the track.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Windows - Available */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white transition">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Windows</h3>
              <p className="text-white/80 mb-4">Now Available</p>
              <button 
              className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition w-full"
              onClick={() => window.open('https://drive.google.com/file/d/1ugNXEAnyqxb1ui6YXPr-lx0lJfcI3NwX/view?usp=drive_link', '_blank')}
              >
            Download
            </button>
            </div>

            {/* Mac - Coming Soon */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 opacity-60">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.51.93.72 1.97 1.87 1.97 3.54 0 2.5-2.01 4.9-5.54 4.9-4.24 0-8.33-3.64-8.33-8.48 0-3.72 3.07-6.82 6.87-6.82 1.34 0 2.59.32 3.72.88.89-.69 2.07-1.08 3.3-1.08 1.99 0 3.76 1.14 4.6 2.8h.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-.31 0-.61-.04-.9-.11-.13 1.38-.95 2.56-1.94 3.16-.09-.46-.14-.94-.14-1.43 0-1.52.72-2.87 1.84-3.77z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Mac</h3>
              <p className="text-white/80 mb-4">Coming Soon</p>
              <button
                disabled
                className="bg-white/30 text-white font-bold py-3 px-6 rounded-lg w-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>

            {/* Linux - Coming Soon */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 opacity-60">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Linux</h3>
              <p className="text-white/80 mb-4">Coming Soon</p>
              <button
                disabled
                className="bg-white/30 text-white font-bold py-3 px-6 rounded-lg w-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <p className="text-white/80">Free to play • 800 MB download • Available worldwide</p>
        </div>
      </div>
    </section>
  )
}
