import { Trophy, Users, Target, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20"></div>
  <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            InHouse Community
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 mt-2">
              League & Valorant
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join competitive InHouse matches, climb the tier system, and prove your skills in organized 5v5 games
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/dCjJ6fFH4g"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Join Discord Server
            </a>
            <button
              onClick={() => onNavigate('inhouse')}
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Matches</h3>
              <p className="text-gray-400 leading-relaxed">
                Participate in organized InHouse 5v5 matches with balanced teams and fair competition. Every game counts toward your ranking.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tier System</h3>
              <p className="text-gray-400 leading-relaxed">
                Progress through our tier system based on your in-game rank. Tier 1 for Diamond+ and Tier 2 for Gold to Emerald players.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Active Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Join a thriving community of League of Legends and Valorant players. Make friends, form teams, and compete together.
              </p>
            </div>
          </div>
        </div>
      </section>

      

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
    </div>
  );
}
