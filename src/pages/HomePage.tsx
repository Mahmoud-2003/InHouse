import { useState, useEffect } from 'react';
import { Trophy, Target, ArrowRight, ExternalLink, Calendar, AlertCircle, Gamepad2, Users, Star } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// إعدادات فايربيز
const firebaseConfig = {
  apiKey: "AIzaSyAA-vBOTLjEfzjZ3PqzxWecc00_cho8Jvo",
  authDomain: "inhouseproject-facd0.firebaseapp.com",
  databaseURL: "https://inhouseproject-facd0-default-rtdb.firebaseio.com",
  projectId: "inhouseproject-facd0",
  storageBucket: "inhouseproject-facd0.firebasestorage.app",
  messagingSenderId: "962024767549",
  appId: "1:962024767549:web:199c2db19e117da19e2a54"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [tournament, setTournament] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // مؤقت حماية 3 ثواني لضمان فتح الموقع تحت أي ظرف
    const safetyTimeout = setTimeout(() => setIsLoading(false), 3000);
    const tournamentRef = ref(db, 'tournament');
    
    const unsubscribe = onValue(tournamentRef, 
      (snapshot) => {
        setTournament(snapshot.val());
        setIsLoading(false);
        clearTimeout(safetyTimeout);
      },
      (error) => {
        console.error("Firebase Connection Error:", error);
        setIsLoading(false);
        clearTimeout(safetyTimeout);
      }
    );

    return () => { unsubscribe(); clearTimeout(safetyTimeout); };
  }, []);

  if (isLoading) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  // اختيار البيانات للعرض (البطولة الحقيقية أو الحالة المقفولة)
  const isTourneyActive = tournament && tournament.status !== "none";
  const displayTourney = isTourneyActive ? tournament : {
    isPlaceholder: true,
    status: "none",
    imageUrl: "https://img.lightshot.app/JCbdDY2-RQKEkax13zcHiQ.png",
    date: "TBD",
    gameType: null,
    title: "NEXT EVENT TBD"
  };

  const tournamentTitle = isTourneyActive 
    ? (displayTourney.gameType === 'lol' ? "LEAGUE OF LEGENDS TOURNAMENT" : "VALORANT TOURNAMENT")
    : "COMMUNITY EVENTS";

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">InHouse Community</h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto italic">"Proven mechanical skill meets organized strategy"</p>
        </div>
      </section>

      {/* Tournament Section - Always Visible */}
      <section className="py-24 relative z-10 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm flex flex-col xl:flex-row shadow-2xl">
            
            {/* Image */}
            <div className="xl:w-2/5 h-[400px] xl:h-auto relative overflow-hidden">
              <img 
                src={displayTourney.imageUrl} 
                className={`w-full h-full object-cover ${displayTourney.isPlaceholder || displayTourney.status === 'ended' ? 'grayscale opacity-30' : ''}`} 
                alt="Banner" 
              />
            </div>

            {/* Content */}
            <div className="xl:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-10">
                {displayTourney.gameType === 'lol' && <div className="px-4 py-1.5 bg-blue-600/10 text-blue-400 rounded-lg text-[10px] font-black border border-blue-500/20">LEAGUE OF LEGENDS</div>}
                {displayTourney.gameType === 'valorant' && <div className="px-4 py-1.5 bg-red-600/10 text-red-500 rounded-lg text-[10px] font-black border border-red-500/20">VALORANT</div>}
                <div className="px-4 py-1.5 bg-white/5 text-gray-400 rounded-lg text-[10px] font-bold border border-white/5 tracking-widest uppercase">
                  {displayTourney.status === 'upcoming' ? "Active" : (displayTourney.status === 'ended' ? "Finished" : "TBD")}
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 text-gray-400 rounded-lg text-[10px] font-bold border border-white/5">
                  <Calendar size={14} /> {displayTourney.date || "Updating..."}
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase italic">{tournamentTitle}</h2>

              {/* Conditional Rendering based on Status */}
              {displayTourney.isPlaceholder ? (
                <div className="mb-12 flex items-center gap-4 text-gray-400 bg-white/5 p-8 rounded-2xl border border-white/5">
                   <AlertCircle className="w-10 h-10 text-blue-500 flex-shrink-0" />
                   <div>
                     <p className="font-bold text-white text-lg">Preparing for the next battle...</p>
                     <p className="text-sm">We are currently organizing new events. Stay tuned to our Discord for announcements!</p>
                   </div>
                </div>
              ) : displayTourney.status === 'ended' ? (
                <div className="mb-12 space-y-4">
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6">🏆 Tournament Winners</h3>
                  <div className="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20 flex items-center gap-6">
                    <div className="text-5xl">🥇</div>
                    <div><p className="text-[10px] font-black text-yellow-500 uppercase">Champion</p><p className="text-2xl font-black italic">{displayTourney.winners?.first || "TBD"}</p></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5"><p className="text-[10px] font-black text-gray-400 uppercase">2nd</p><p className="text-lg font-bold">{displayTourney.winners?.second || "TBD"}</p></div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5"><p className="text-[10px] font-black text-orange-500 uppercase">3rd</p><p className="text-lg font-bold">{displayTourney.winners?.third || "TBD"}</p></div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                   <div><h3 className="text-xs font-black text-blue-400 mb-4 tracking-widest border-b border-blue-500/20 pb-2">FORMAT</h3><ul className="text-gray-400 text-sm space-y-2">{displayTourney.format?.map((f:any, i:any)=><li key={i}>▶ {f}</li>)}</ul></div>
                   <div><h3 className="text-xs font-black text-purple-400 mb-4 tracking-widest border-b border-purple-500/20 pb-2">RULES</h3><ul className="text-gray-400 text-sm space-y-2">{displayTourney.rules?.map((r:any, i:any)=><li key={i}>▶ {r}</li>)}</ul></div>
                </div>
              )}

              {/* Registration Button */}
              {displayTourney.status === 'upcoming' ? (
                <a 
                  href={displayTourney.registrationLink || "#"} 
                  target="_blank" 
                  className={`group flex items-center justify-center gap-3 w-full py-6 text-white font-black rounded-2xl transition-all ${displayTourney.gameType === 'lol' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'}`}
                >
                  JOIN TOURNAMENT <ExternalLink size={20} />
                </a>
              ) : (
                <div className="w-full py-6 bg-white/5 text-gray-600 text-center font-black rounded-2xl border border-white/5 tracking-[0.3em]">
                  REGISTRATION CLOSED
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Choose Game Section (كما هي في ملفك الأصلي) */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Choose Your Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div onClick={() => onNavigate('lol')} className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-gray-800 hover:border-blue-500 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
              <img src="https://img.lightshot.app/zbmOUtzaROeDjNm5QaImsA.png" alt="LoL" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20"><h3 className="text-3xl font-bold text-white mb-2">League of Legends</h3><p className="text-gray-300 mb-4">5v5 competitive matches</p><div className="flex items-center text-blue-400 font-semibold">Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></div></div>
            </div>
            <div onClick={() => onNavigate('valorant')} className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-gray-800 hover:border-red-500 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
              <img src="https://img.lightshot.app/Tdva4daYQpyNsS4yySiBYw.png" alt="Val" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20"><h3 className="text-3xl font-bold text-white mb-2">Valorant</h3><p className="text-gray-300 mb-4">Tactical 5v5 shooter</p><div className="flex items-center text-red-400 font-semibold">Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5">
         <p className="text-gray-600 text-[10px] font-bold tracking-[0.5em] uppercase">Powered by InHouse Management System</p>
      </footer>
    </div>
  );
}