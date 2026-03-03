import { Crown, Award, TrendingUp, Star, ChevronRight } from 'lucide-react';

export default function TiersPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Tier System</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our tier system ensures balanced and competitive matches by grouping players based on their in-game rank. Progress through the tiers and unlock exclusive benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Tier 1</h2>
                  <p className="text-yellow-400 font-semibold">Elite Division</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-6 border border-yellow-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Rank Requirements</h3>

              <div className="mb-6">
                <p className="text-yellow-300 font-semibold mb-2">League of Legends:</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-300 text-lg">Diamond IV to Challenger</p>
                </div>
              </div>

              <div>
                <p className="text-yellow-300 font-semibold mb-2">Valorant:</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-300 text-lg">Diamond 1 to Radiant</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Tier 1 Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compete against the best players in the community</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Exclusive Tier 1 Discord role and channel access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority matchmaking during peak hours</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Special tournaments with premium prizes</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Recognition on community leaderboards</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ability to participate in coaching programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-sm text-yellow-200">
                <strong>Note:</strong> Tier 1 status is reviewed regularly. Dropping below the rank requirement may result in tier reassignment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-500/50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Tier 2</h2>
                  <p className="text-green-400 font-semibold">Competitive Division</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-6 border border-green-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Rank Requirements</h3>

              <div className="mb-6">
                <p className="text-green-300 font-semibold mb-2">League of Legends:</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-300 text-lg">Gold IV to Emerald I</p>
                </div>
              </div>

              <div>
                <p className="text-green-300 font-semibold mb-2">Valorant:</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-300 text-lg">Gold 4 to Diamond 2</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-green-400 mr-2" />
                Tier 2 Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Balanced competitive matches with similar-skilled players</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Exclusive Tier 2 Discord role and channel access</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to community coaching and improvement resources</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular tournaments and community events</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Clear path to Tier 1 promotion</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Active community support and mentorship</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <p className="text-sm text-green-200">
                <strong>Tip:</strong> Maintain consistent performance and reach Diamond to qualify for Tier 1 promotion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Promotion Requirements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Tier 2 to Tier 1
              </h3>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Reach Diamond rank in League of Legends or Valorant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Maintain at least 60% win rate in last 20 InHouse games</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Accumulate 500+ community points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>No recent toxicity or rule violations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    <span>Active participation (minimum 15 games per month)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Maintaining Your Tier
              </h3>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Keep your rank within tier requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Play at least 10 InHouse games per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Follow all community rules and guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Be an active and positive community member</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Ranks are reviewed monthly for tier adjustments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Can I play in both tiers?</h3>
              <p className="text-gray-400">
                No, you are assigned to one tier based on your current rank. You can only participate in matches within your designated tier.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">What happens if my rank changes during the season?</h3>
              <p className="text-gray-400">
                Ranks are reviewed regularly. If you drop below your tier's requirement for an extended period, you may be moved to the appropriate tier. Promotions are also processed when you meet the requirements.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">How long does promotion take?</h3>
              <p className="text-gray-400">
                Once you meet all promotion requirements, submit a ticket to request tier review. Promotions are typically processed within 2-3 business days.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Are there more tiers planned?</h3>
              <p className="text-gray-400">
                We're always evaluating the tier system. As our community grows, we may introduce additional tiers or adjust requirements to ensure balanced matches.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://discord.gg/dCjJ6fFH4g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Join Discord and Find Your Tier
          </a>
        </div>
      </div>
    </div>
  );
}
