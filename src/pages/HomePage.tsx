import { Trophy, Users, Target, ArrowRight, ExternalLink, Calendar } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Announcement Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden flex flex-col xl:flex-row shadow-2xl">
            
            {/* Image Banner */}
            <div className="xl:w-2/5 h-64 xl:h-auto relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent xl:bg-gradient-to-r z-10"></div>
              <img
                src="https://cdn.discordapp.com/attachments/1477407602802561194/1491179984235135097/April_Fools_Championship_4_1.png?ex=69d6c115&is=69d56f95&hm=9ae51cd11909a9614a16dbbbb90d236670f5d9ba27cad6d1554b3d7e881763bb&"
                alt="Tournament Announcement"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="xl:w-3/5 p-8 md:p-10 flex flex-col justify-center relative z-20">
              
              {/* Badges: Announcement & Date */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-sm font-bold tracking-wide border border-red-500/30">
                  📢 TOURNAMENT ANNOUNCEMENT
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold tracking-wide border border-blue-500/30">
                  <Calendar className="w-4 h-4" />
                  14 April
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Summoner’s Rift Championship
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Join us for a competitive League of Legends tournament where strategy, coordination, and mechanical skill determine who rises to the top. Gather your team and compete against strong opponents!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Format List */}
                <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    🏆 Format
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 5v5 Teams</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Single Elimination Bracket</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Best of 1 (Bo1) matches</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Grand Final: Best of 3 (Bo3)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Server: EU WEST</li>
                  </ul>
                </div>

                {/* Rules List */}
                <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    📋 Rules
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Official personal accounts only</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Sportsmanship is mandatory</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> 15 min early check-in required</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Prompt match result reporting</li>
                  </ul>
                </div>
              </div>

              {/* Prizes Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🎁 Prize Pool
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-yellow-900/40 to-gray-900 border border-yellow-700/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl mb-2">🥇</span>
                    <span className="text-white font-bold block mb-1">1st Place</span>
                    <span className="text-yellow-400 text-sm font-semibold">20 CHEST & KEY</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-700/40 to-gray-900 border border-gray-500/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl mb-2">🥈</span>
                    <span className="text-white font-bold block mb-1">2nd Place</span>
                    <span className="text-gray-300 text-sm font-semibold">15 CHEST & KEY</span>
                  </div>
                  <div className="bg-gradient-to-br from-orange-900/40 to-gray-900 border border-orange-700/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl mb-2">🥉</span>
                    <span className="text-white font-bold block mb-1">3rd Place</span>
                    <span className="text-orange-400 text-sm font-semibold">10 CHEST & KEY</span>
                  </div>
                </div>
              </div>

              {/* CTA Link */}
              <div>
                <a
                  href="https://battlefy.com/league-of-inhouses/lie-of-april/69d53bddade317001ab975f2/info?infoTab=details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-red-900/20"
                >
                  Register on Battlefy
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>

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
      
    </div>
  );
}