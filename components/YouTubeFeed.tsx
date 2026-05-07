interface Video {
  id: { videoId: string };
  snippet: { title: string; description: string; thumbnails: { high: { url: string } } };
}

async function getLatestVideos() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=UC5djZHbotPShAEJwgdOV9pw&part=snippet,id&order=date&maxResults=3&type=video`,
    { next: { revalidate: 3600 } } 
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.items;
}

export default async function YouTubeFeed() {
  const videos = await getLatestVideos();

  return (
    <section id="videos" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center">Latest Transmissions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video: Video) => (
          <div key={video.id.videoId} className="group bg-charcoal rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald/50 transition-all duration-500">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.snippet.thumbnails.high.url} 
                alt={video.snippet.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="bg-emerald text-background px-6 py-2 rounded-full font-semibold">
                  Play Video
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg line-clamp-2 mb-2">{video.snippet.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-3">{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}