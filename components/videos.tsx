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
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black border-2 border-primary/30 hover:border-primary transition">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gDqxCAGX5KY?si=bfBmia8hvMSAgDpi"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                
              ></iframe>
            </div>
            <h3 className="text-white font-bold text-lg mt-4">Epic Racing</h3>
            <p className="text-gray-400">
              Experience high-speed monster truck racing
            </p>
          </div>

          {/* Video 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-lg aspect-video bg-black border-2 border-primary/30 hover:border-primary transition">
              <iframe
                width="100%"
                height="100%"
                src="https://youtube.com/embed/cdo7AuZM-UU"
                title="Monster Trux Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h3 className="text-white font-bold text-lg mt-4">
              Official Trailer
            </h3>
            <p className="text-gray-400">Check out the full game trailer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
