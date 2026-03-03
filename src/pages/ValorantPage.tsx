import { Crosshair, Target, Flame, Shield, Zap, Star } from 'lucide-react';

export default function ValorantPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 to-red-600/80 z-10"></div>
             <img
               src="https://img.lightshot.app/W8LNackPQ1WMmCEvOycpcw.jpg"
            style={{ width: '100%', height: '24rem', objectFit: 'cover' }}
            alt="Valorant"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div>
              <h1 className="text-6xl font-bold text-white mb-4">Valorant</h1>
              <p className="text-2xl text-red-200">Tactical 5v5 Character-Based Shooter</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">InHouse System Overview</h2>
          <p className="text-xl text-gray-400 text-center max-w-4xl mx-auto leading-relaxed mb-12">
            Experience competitive Valorant matches in our organized InHouse system. Test your tactical skills, agent mastery, and teamwork in balanced 5v5 matches against players of similar skill levels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Crosshair className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Competitive Gameplay</h3>
              <p className="text-gray-400 leading-relaxed">
                Play on competitive map pool with tournament-standard rules. Every round matters in your journey to the top.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rank-Based Matching</h3>
              <p className="text-gray-400 leading-relaxed">
                Teams are balanced based on your competitive rank ensuring fair and exciting matches every time.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-500 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Agent Diversity</h3>
              <p className="text-gray-400 leading-relaxed">
                Showcase your agent pool and adapt your strategies. Team composition and synergy are key to victory.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/20 to-purple-900/20 border border-red-500/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Match Format</h2>

          <div className="space-y-6">
            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Open a Ticket</h3>
                <p className="text-gray-400">
                  Join the appropriate tier channel and create a ticket with your current Valorant rank. Be ready to verify your rank if needed.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Team Formation</h3>
                <p className="text-gray-400">
                  Teams are formed with balanced ranks and roles. Each team will have a mix of duelists, controllers, initiators, and sentinels.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Map Selection</h3>
                <p className="text-gray-400">
                  Maps are selected from the competitive pool. Both teams can ban one map each, then the match map is randomly selected.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Play to Win</h3>
                <p className="text-gray-400">
                  Standard competitive rules apply. First team to win 13 rounds takes the match. Communication and strategy are essential.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gray-900/50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl font-bold text-white">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Post-Match Review</h3>
                <p className="text-gray-400">
                  Results are recorded and stats are tracked. Review your performance and climb the leaderboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Tier 1 Players</h2>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-200 font-semibold">Diamond 1 to Radiant</p>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>High-level tactical gameplay and strategy</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced agent compositions and executes</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Compete against the best in the community</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Premium rewards and exclusive events</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Tier 2 Players</h2>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
              <p className="text-green-200 font-semibold">Gold 4 to Diamond 2</p>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Ideal environment for skill improvement</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Learn advanced tactics and strategies</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Path to promotion to Tier 1</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Active community coaching and support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Ranking System</h2>
          <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
            Your performance in InHouse matches affects your community ranking. Consistent wins and strong individual performance will elevate your standing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Win Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Match Victory</span>
                  <span className="text-green-400 font-semibold">+30 points</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">13-0 Victory (Stomp)</span>
                  <span className="text-yellow-400 font-semibold">+10 bonus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Match Loss</span>
                  <span className="text-blue-400 font-semibold">+5 points</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Performance Bonuses</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Match MVP</span>
                  <span className="text-yellow-400 font-semibold">+15 bonus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Team MVP</span>
                  <span className="text-purple-400 font-semibold">+8 bonus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ace Round</span>
                  <span className="text-red-400 font-semibold">+5 bonus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Shield className="w-7 h-7 mr-3 text-red-400" />
            Important Rules
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <span className="text-red-400 mr-2 font-bold">•</span>
              <span>No smurfing or account sharing - your rank must be verified</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2 font-bold">•</span>
              <span>Respectful communication only - toxicity results in immediate suspension</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2 font-bold">•</span>
              <span>No cheating, exploits, or unauthorized software</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2 font-bold">•</span>
              <span>Must be available for the full match duration (30-60 minutes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2 font-bold">•</span>
              <span>Follow all Discord server rules and community guidelines</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://discord.gg/dCjJ6fFH4g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Join Discord and Start Playing
          </a>
        </div>
      </div>
    </div>
  );
}
