import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import VideoCard from "../components/VideoCard";
import { videoLibrary } from "../assets/mockData";

function VideosPage() {
  const [query, setQuery] = useState("");

  const videos = useMemo(
    () =>
      videoLibrary.filter((video) =>
        `${video.title} ${video.category}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section className="container-wide py-10 md:py-14">
      <SectionTitle
        title="Video Learning Section"
        subtitle="Explore grape-related tutorials for disease management, spraying, pruning, and cultivation."
      />

      <div className="relative mb-8 max-w-lg">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-soil-500" />
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-leaf-200 bg-white py-3 pl-10 pr-3 focus:border-leaf-500 focus:outline-none"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <VideoCard key={video.youtubeId} video={video} />
        ))}
      </div>

      {videos.length === 0 ? (
        <p className="mt-6 rounded-xl bg-white p-4 text-sm text-soil-700">No videos matched your search.</p>
      ) : null}
    </section>
  );
}

export default VideosPage;
