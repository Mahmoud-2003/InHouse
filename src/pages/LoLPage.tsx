import { Swords, Award, TrendingUp, Star, Zap } from 'lucide-react';

export default function LoLPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-600/80 z-10"></div>
          <img
            src="https://img.lightshot.app/JCbdDY2-RQKEkax13zcHiQ.png"
            alt="League of Legends"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div>
              <h1 className="text-6xl font-bold text-white mb-4">League of Legends</h1>
              <p className="text-2xl text-blue-200">Competitive 5v5 on Summoner's Rift</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">InHouse System Overview</h2>
          <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto leading-relaxed mb-12">
            Our League of Legends InHouse system provides a structured competitive environment where players can test their skills in organized 5v5 matches on Summoner's Rift. Every game matters, and every play counts toward your progression.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Swords className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Balanced Drafts</h3>
              <p className="text-gray-400 leading-relaxed">
                Teams are carefully balanced based on player ranks and roles to ensure competitive and fair matches every time.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Point System</h3>
              <p className="text-gray-400 leading-relaxed">
                Earn points for wins, outstanding performance, and consistent participation. Top performers get special recognition.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rank Progression</h3>
              <p className="text-gray-400 leading-relaxed">
                Climb through tiers by winning games and maintaining high performance. Reach Tier 1 for elite competition.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>

          <div className="space-y-6">
            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Select Your Role</h3>
                <p className="text-gray-400">
                  When opening a <a href="https://discord.com/channels/1255867468090445900/1442226281377960036">ticket</a>, specify your primary and secondary roles. We'll match you with complementary teammates.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Wait for Match Creation</h3>
                <p className="text-gray-400">
                  Our moderators will form balanced teams based on ranks and roles. You'll receive a notification when your match is ready.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Join Custom Lobby</h3>
                <p className="text-gray-400">
                  Enter the custom game lobby with your team. Champions are selected through draft pick mode.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Play and Compete</h3>
                <p className="text-gray-400">
                  Give your best effort and play to win. All standard League of Legends rules apply.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Earn Points and Climb</h3>
                <p className="text-gray-400">
                  Results are recorded and points are awarded. Check the leaderboard to see your ranking.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Tier 1 Requirements</h2>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-200 font-semibold">Diamond IV to Challenger</p>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Compete against the best players in the community</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Higher stakes and more intense matches</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Exclusive rewards and recognition</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Priority matchmaking during peak hours</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Tier 2 Requirements</h2>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
              <p className="text-green-200 font-semibold">Gold IV to Emerald I</p>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Perfect environment for improving your skills</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Balanced competition with similar-ranked players</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Clear path to Tier 1 promotion</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Active community support and coaching</span>
              </li>
            </ul>
          </div>
        </div>
          {/* Point System */}
        {/* <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Point System Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-gray-300 font-semibold">Action</th>
                  <th className="py-4 px-6 text-gray-300 font-semibold">Points Earned</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-4 px-6">Match Victory</td>
                  <td className="py-4 px-6 text-green-400 font-semibold">+25 points</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-4 px-6">MVP Performance</td>
                  <td className="py-4 px-6 text-yellow-400 font-semibold">+10 bonus points</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-4 px-6">Match Defeat</td>
                  <td className="py-4 px-6 text-blue-400 font-semibold">+5 points</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-4 px-6">Weekly Participation (3+ games)</td>
                  <td className="py-4 px-6 text-purple-400 font-semibold">+15 bonus points</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="py-4 px-6">Sportsmanship Bonus</td>
                  <td className="py-4 px-6 text-pink-400 font-semibold">+5 bonus points</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
        {/* Point System End */}
        <div className="mt-12 text-center">
          <a
            href="https://discord.gg/dCjJ6fFH4g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Open a Ticket and Start Playing
          </a>
        </div>
      </div>
    </div>
  );
}
