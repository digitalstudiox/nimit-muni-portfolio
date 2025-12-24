import { useRef, useState } from "react";
import { X, Play } from "lucide-react";

const portfolioItems = [
  { id: 1, video: "/videos/performance-1.mp4", poster: "/thumbnails/1.jpg" },
  { id: 2, video: "/videos/performance-2.mp4", poster: "/thumbnails/2.jpg" },
  { id: 3, video: "/videos/performance-3.mp4", poster: "/thumbnails/3.jpg" },
  { id: 4, video: "/videos/performance-4.mp4", poster: "/thumbnails/4.jpg" },
  { id: 5, video: "/videos/performance-5.mp4", poster: "/thumbnails/5.jpg" },
  { id: 6, video: "/videos/performance-6.mp4", poster: "/thumbnails/6.jpg" },
  { id: 7, video: "/videos/performance-7.mp4", poster: "/thumbnails/7.jpg" },
  { id: 8, video: "/videos/performance-8.mp4", poster: "/thumbnails/8.jpg" },
  { id: 9, video: "/videos/performance-9.mp4", poster: "/thumbnails/9.jpg" },
];

export default function PortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section
      id="portfolio"
      className="relative py-16 bg-gradient-to-b from-card/50 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="relative mb-14">
          <span className="font-display text-[8rem] md:text-[12rem] text-primary/10 absolute -top-16 -left-4 select-none">
            04
          </span>
          <div className="relative z-10">
            <span className="text-primary text-sm uppercase tracking-[0.3em]">
              Gallery
            </span>
            <h2 className="font-display text-5xl md:text-7xl mt-2">
              <span className="gradient-text">PORTFOLIO</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              A glimpse into my live performances across various events and venues.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <VideoCard
              key={item.id}
              video={item.video}
              poster={item.poster}
              onClick={() => setSelectedVideo(item.video)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary transition"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-w-full max-h-[85vh] rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

/* ---------- Video Card Component ---------- */

function VideoCard({
  video,
  poster,
  onClick,
}: {
  video: string;
  poster?: string;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      onClick={onClick}
    >
      <div className="aspect-square bg-card overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Play Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
          <Play className="w-6 h-6 text-primary-foreground ml-1" />
        </div>
      </div>
    </div>
  );
}
