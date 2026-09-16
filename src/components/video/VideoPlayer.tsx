interface VideoPlayerProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

export const VideoPlayer = ({
  videoId,
  title,
  className = "",
  autoplay = false,
}: VideoPlayerProps) => {
  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-border/60 ${className}`}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1${
          autoplay ? "&autoplay=1" : ""
        }`}
        title={title}
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default VideoPlayer;
