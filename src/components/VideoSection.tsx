
import { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          // Don't pause to allow continuous play once started
        }
      });
    }, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  return (
    <section id="video-section" className="relative h-screen w-full overflow-hidden">
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/vimeo/474071422/abstract-digital-49264.mp4?width=1280&hash=0f3e6598ead1f52fe84fb0dad5fe9650e942ae43" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          AI-Powered <span className="text-skye-red">Innovation</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#services" 
            className="bg-skye-red hover:bg-skye-red/90 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 group"
          >
            Explore Our Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a 
            href="https://preview--insight-assessment-compass.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-transparent border border-skye-red/80 text-white px-8 py-3 rounded-md hover:bg-skye-red/10 flex items-center justify-center"
          >
            Take Psychometric Test
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
