import { useState, useEffect } from 'react';
import { Trophy, Users, Target, ArrowRight, ExternalLink, Calendar, CheckCircle, AlertCircle, Gamepad2 } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// إعدادات فايربيز (تأكد من مطابقتها لبيانات مشروعك)
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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500/30">
      
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
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto italic">
            "Proven mechanical skill meets organized strategy"
          </p>
        </div>
      </section>

      {/* ---------------- Tournament Section ---------------- */}
      <section className="py-24 relative z-10 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm flex flex-col xl:flex-row shadow-2xl">
            
            {/* Image Banner */}
            <div className="xl:w-2/5 h-[400px] xl:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent xl:bg-gradient-to-r z-10"></div>
              <img 
                src={tournament.imageUrl} 
                className={`w-full h-full object-cover transition-all duration-1000 transform hover:scale-105 ${tournament.status === 'ended' ? 'grayscale opacity-30' : 'grayscale-0 opacity-80'}`} 
                alt="Tournament Banner"
              />
            </div>

            {/* Content Area */}
            <div className="xl:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                {/* Game Type Badge */}
                {tournament.gameType === 'lol' ? (
                  <div className="px-4 py-1.5 bg-blue-600/10 text-blue-400 rounded-lg text-[10px] font-black border border-blue-500/20 tracking-[0.2em] flex items-center gap-2">
                    <Gamepad2 size={14} /> LEAGUE OF LEGENDS
                  </div>
                ) : (
                  <div className="px-4 py-1.5 bg-red-600/10 text-red-500 rounded-lg text-[10px] font-black border border-red-500/20 tracking-[0.2em] flex items-center gap-2">
                    <Target size={14} /> VALORANT
                  </div>
                )}

                {/* Status Badge */}
                {tournament.status === 'upcoming' && (
                  <div className="px-4 py-1.5 bg-green-500/10 text-green-400 rounded-lg text-[10px] font-black border border-green-500/20 tracking-widest">ACTIVE</div>
                )}
                {tournament.status === 'ended' && (
                  <div className="px-4 py-1.5 bg-red-500/10 text-red-500 rounded-lg text-[10px] font-black border border-red-500/20 tracking-widest">CLOSED</div>
                )}
                
                {/* Date Badge */}
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 text-gray-400 rounded-lg text-[10px] font-bold border border-white/5">
                  <Calendar size={14} /> {tournament.date || "Updating..."}
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tight italic uppercase">
                {tournament.title}
              </h2>

              {/* Dynamic Content Switching */}
              {tournament.status === 'ended' ? (
                /* --- WINNERS PODIUM --- */
                <div className="mb-12 space-y-4">
                   <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6">🏆 Final Standings</h3>
                   
                   <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/20 flex items-center gap-6 group hover:bg-yellow-500/20 transition-all cursor-default">
                      <div className="text-5xl drop-shadow-2xl">🥇</div>
                      <div>
                        <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Champion</p>
                        <p className="text-2xl font-black text-white italic tracking-wide">{tournament.winners?.first || "TBD"}</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-all">
                        <div className="text-3xl">🥈</div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase">2nd Place</p>
                          <p className="text-lg font-bold text-white">{tournament.winners?.second || "TBD"}</p>
                        </div>
                      </div>
                      <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-all">
                        <div className="text-3xl">🥉</div>
                        <div>
                          <p className="text-[10px] font-black text-orange-500 uppercase">3rd Place</p>
                          <p className="text-lg font-bold text-white">{tournament.winners?.third || "TBD"}</p>
                        </div>
                      </div>
                   </div>
                </div>
              ) : (
                /* --- RULES & FORMAT --- */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-5">
                    <h3 className={`text-xs font-black uppercase tracking-widest pb-2 border-b ${tournament.gameType === 'lol' ? 'text-blue-400 border-blue-500/30' : 'text-red-500 border-red-500/30'}`}>🏆 Format</h3>
                    <ul className="space-y-3">
                      {tournament.format?.map((f: string, i: number) => (
                        <li key={i} className="text-gray-400 text-sm font-medium flex gap-3">
                          <span className={tournament.gameType === 'lol' ? 'text-blue-500' : 'text-red-500'}>▶</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-xs font-black text-purple-400 uppercase tracking-widest pb-2 border-b border-purple-500/30">📋 Rules</h3>
                    <ul className="space-y-3">
                      {tournament.rules?.map((r: string, i: number) => (
                        <li key={i} className="text-gray-400 text-sm font-medium flex gap-3">
                          <span className="text-purple-500">▶</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Prize Pool Row */}
              <div className="mb-12 border-t border-white/5 pt-10">
                 <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">1st Prize</p>
                      <p className="text-white text-sm font-black italic">{tournament.prizes?.first}</p>
                    </div>
                    <div className="text-center border-x border-white/5">
                      <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">2nd Prize</p>
                      <p className="text-white text-sm font-black italic">{tournament.prizes?.second}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">3rd Prize</p>
                      <p className="text-white text-sm font-black italic">{tournament.prizes?.third}</p>
                    </div>
                 </div>
              </div>

              {/* Final Action */}
              {tournament.status !== 'ended' ? (
                <a 
                  href={tournament.registrationLink || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-3 w-full py-6 text-white font-black rounded-2xl transition-all shadow-2xl transform hover:-translate-y-1 ${tournament.gameType === 'lol' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20' : 'bg-red-600 hover:bg-red-700 shadow-red-900/20'}`}
                >
                  JOIN TOURNAMENT <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ) : (
                <div className="w-full py-6 bg-white/5 text-gray-600 text-center font-black rounded-2xl border border-white/5 tracking-[0.3em] cursor-not-allowed">
                  REGISTRATION CLOSED
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
       {/* Choose Game Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Choose Your Game
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => onNavigate('lol')}
              className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
              <img
                src="https://img.lightshot.app/zbmOUtzaROeDjNm5QaImsA.png"
                alt="League of Legends"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-3xl font-bold text-white mb-2">League of Legends</h3>
                <p className="text-gray-300 mb-4">5v5 competitive matches on Summoner's Rift</p>
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            <div
              onClick={() => onNavigate('valorant')}
              className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-gray-800 hover:border-red-500 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
              <img
                src="https://img.lightshot.app/Tdva4daYQpyNsS4yySiBYw.png" style ={{width: '100%', height: '20rem', objectFit: 'cover'}}
                src="https://img.lightshot.app/Tdva4daYQpyNsS4yySiBYw.png" 
                style={{width: '100%', height: '20rem', objectFit: 'cover'}}
                alt="Valorant"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-3xl font-bold text-white mb-2">Valorant</h3>
                <p className="text-gray-300 mb-4">Tactical 5v5 character-based shooter</p>
                <div className="flex items-center text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-10 text-center border-t border-white/5">
         <p className="text-gray-600 text-[10px] font-bold tracking-[0.5em] uppercase">Powered by InHouse Management System</p>
      </footer>
    </div>
  );
}