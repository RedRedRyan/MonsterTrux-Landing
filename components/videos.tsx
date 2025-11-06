"use client";

export default function Videos() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WATCH <span className="text-primary">GAMEPLAY</span>
          </h2>
          <p className="text-gray-400 text-lg">See monster trucks in action</p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Video 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black border-2 border-primary/30 hover:border-primary transition-colors">
              <div className="w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/gDqxCAGX5KY?si=bfBmia8hvMSAgDpi"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl mt-4 md:mt-6">Epic Racing</h3>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Experience high-speed monster truck racing
            </p>
          </div>

          {/* Video 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black border-2 border-primary/30 hover:border-primary transition-colors">
              <div className="w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/cdo7AuZM-UU"
                  title="Monster Trux Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl mt-4 md:mt-6">
              Official Trailer
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Check out the full game trailer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}