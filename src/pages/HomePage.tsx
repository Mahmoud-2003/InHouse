import { useState, useEffect } from 'react';
import { Trophy, Users, Target, ArrowRight, ExternalLink, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

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

  useEffect(() => {
    const tournamentRef = ref(db, 'tournament');
    const unsubscribe = onValue(tournamentRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setTournament(data);
    });
    return () => unsubscribe();
  }, []);

  if (!tournament) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            InHouse Community
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 mt-2">
              League & Valorant
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join competitive InHouse matches, climb the tier system, and prove your skills in organized 5v5 games
          </p>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden flex flex-col xl:flex-row shadow-2xl">
            
            {/* Image Banner */}
            <div className="xl:w-2/5 h-80 xl:h-auto relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent xl:bg-gradient-to-r z-10"></div>
              <img 
                src={tournament.imageUrl} 
                className={`w-full h-full object-cover transition-all duration-1000 ${tournament.status === 'ended' ? 'grayscale opacity-40 scale-105' : 'scale-100'}`} 
                alt="Banner"
              />
            </div>

            {/* Content */}
            <div className="xl:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {tournament.status === 'upcoming' && (
                  <div className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black border border-blue-500/20">📢 UPCOMING</div>
                )}
                {tournament.status === 'ended' && (
                  <div className="px-4 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-black border border-red-500/20">FINISHED</div>
                )}
                <div className="flex items-center gap-2 px-4 py-1 bg-gray-900 text-gray-400 rounded-full text-xs font-bold border border-gray-700">
                   <Calendar className="w-3 h-3" /> {tournament.date || "14 April"}
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">{tournament.title}</h2>

              {/* Dynamic Logic: Winners OR Description */}
              {tournament.status === 'ended' ? (
                <div className="mb-8 space-y-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">🏆 Tournament Results</h3>
                  <div className="bg-gradient-to-r from-yellow-600/20 to-transparent p-4 rounded-xl border border-yellow-500/20 flex items-center gap-4">
                    <span className="text-3xl">🥇</span>
                    <div>
                      <p className="text-[10px] text-yellow-500 font-bold uppercase">Champion</p>
                      <p className="text-lg font-black text-white italic">{tournament.winners?.first || "TBD"}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-400/10 p-4 rounded-xl border border-gray-400/20 flex items-center gap-3">
                      <span className="text-xl">🥈</span>
                      <p className="text-sm font-bold text-white">{tournament.winners?.second || "TBD"}</p>
                    </div>
                    <div className="bg-orange-800/10 p-4 rounded-xl border border-orange-800/20 flex items-center gap-3">
                      <span className="text-xl">🥉</span>
                      <p className="text-sm font-bold text-white">{tournament.winners?.third || "TBD"}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <h3 className="text-xs font-black text-blue-400 uppercase mb-3">Format</h3>
                    <ul className="space-y-1">
                      {tournament.format?.map((f: string, i: number) => <li key={i} className="text-gray-400 text-xs">• {f}</li>)}
                    </ul>
                  </div>
                  <div className="p-5 bg-gray-900/50 rounded-xl border border-gray-700/50">
                    <h3 className="text-xs font-black text-purple-400 uppercase mb-3">Rules</h3>
                    <ul className="space-y-1">
                      {tournament.rules?.map((r: string, i: number) => <li key={i} className="text-gray-400 text-xs">• {r}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {/* Prizes */}
              <div className="mb-10 p-4 bg-black/20 rounded-xl border border-gray-800">
                <p className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-widest">🎁 Prize Pool</p>
                <div className="flex justify-between gap-2">
                  <div className="text-center flex-1"><p className="text-yellow-500 font-bold text-xs">{tournament.prizes?.first}</p></div>
                  <div className="text-center flex-1 border-x border-gray-800"><p className="text-gray-400 font-bold text-xs">{tournament.prizes?.second}</p></div>
                  <div className="text-center flex-1"><p className="text-orange-600 font-bold text-xs">{tournament.prizes?.third}</p></div>
                </div>
              </div>

              {/* Link */}
              {tournament.status !== 'ended' ? (
                <a href={tournament.registrationLink || "#"} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl transition-all">
                  REGISTER NOW <ExternalLink size={18} />
                </a>
              ) : (
                <div className="w-full py-4 bg-gray-900 text-gray-600 text-center font-black rounded-xl border border-gray-800">CLOSED</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}