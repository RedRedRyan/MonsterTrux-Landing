"use client"

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-primary mb-2">MONSTER TRUX</h3>
            <p className="text-gray-400">The ultimate monster truck racing experience.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/YtekStudios" className="text-gray-400 hover:text-primary transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/RedRedRyan" className="text-gray-400 hover:text-primary transition">
                  Github
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@0xredredryan?si=koMRNVZiyWLNOxjG" className="text-gray-400 hover:text-primary transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Monster Trux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
