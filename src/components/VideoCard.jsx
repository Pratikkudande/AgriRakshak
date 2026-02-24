function VideoCard({ video }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-leaf-100 bg-white shadow-soft">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-soil-900">{video.title}</h3>
        <p className="mt-1 text-sm text-soil-700">{video.category}</p>
      </div>
    </article>
  );
}

export default VideoCard;
