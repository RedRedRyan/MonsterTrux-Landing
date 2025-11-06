"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          ABOUT <span className="text-primary">MONSTER TRUX</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder 1 */}
          <div className="h-80 bg-gradient-to-br from-primary/20 to-black border-2 border-primary/30 rounded-xl flex items-center justify-center">
            <img src="images/poly1.png"/>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Intense Action</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Monster Trux delivers speedy action with different trucks, realistic physics, and
              jaw-dropping stunts. Every race is unique, every moment unforgettable.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <span className="text-primary font-bold">•</span> Massive maps to explore
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-primary font-bold">•</span> 50+ unique monster trucks
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-primary font-bold">•</span> Multiplayer racing
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Customize & Conquer</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Upgrade your truck with epic weapons, armor, and performance parts. Create the ultimate monster truck and
              dominate the competition.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <span className="text-primary font-bold">•</span> Full vehicle customization
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-primary font-bold">•</span> Earn rewards daily
              </li>
              <li className="flex items-center gap-3 text-white">
                <span className="text-primary font-bold">•</span> Climb the leaderboards
              </li>
            </ul>
          </div>

          {/* Image Placeholder 2 */}
          <div className="h-80 bg-gradient-to-br from-primary/20 to-black border-2 border-primary/30 rounded-xl flex items-center justify-center">
            <img src="images/cars.png"/>
          </div>
        </div>
      </div>
    </section>
  )
}
