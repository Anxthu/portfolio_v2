import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLocation } from "react-router-dom";

const GlobalSound = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  const isHidden = 
    location.pathname === "/resume" || 
    location.pathname === "/booklet" || 
    location.pathname === "/archives" || 
    location.pathname === "/blog" || 
    location.pathname.startsWith("/blog/");

  useEffect(() => {
    const savedMutePreference = localStorage.getItem("portfolio-muted");
    if (savedMutePreference === "false") {
      setIsMuted(false);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Audio play prevented by browser policy", error);
            setIsMuted(true);
          });
        }
      }
    }
    localStorage.setItem("portfolio-muted", isMuted.toString());
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (isHidden) return null;

  return (
    <>
      <audio 
        ref={audioRef} 
        src="https://actions.google.com/sounds/v1/science_fiction/space_room_hum.ogg" 
        loop 
        preload="auto"
      />
      
      <button 
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-none flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all shadow-lg mix-blend-difference cursor-pointer pointer-events-auto"
        aria-label={isMuted ? "Unmute sound" : "Mute sound"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </>
  );
};

export default GlobalSound;
