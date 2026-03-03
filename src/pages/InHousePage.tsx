import { Ticket, Users, Trophy, Clock, Shield, Target } from 'lucide-react';

export default function InHousePage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            What is InHouse?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            InHouse is a competitive gaming system where players participate in organized 5v5 matches within our community. Experience fair, balanced games with players of similar skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Competitive Environment</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              All matches are played with serious intent to win. Our system ensures balanced teams based on player skill and rank, creating competitive and exciting games every time.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Balanced team composition</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Ranked-based matchmaking</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Points and rewards system</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Community Driven</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Join a thriving community of passionate players who love competitive gaming. Make new friends, form lasting connections, and improve your skills together.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Active Discord community</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Regular tournaments and events</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Friendly and supportive environment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Join Discord</h3>
              <p className="text-gray-400">
                Join our Discord server and verify your account
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Choose Your Tier</h3>
              <p className="text-gray-400">
                Select Tier 1 or Tier 2 based on your current rank
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Open a Ticket</h3>
              <p className="text-gray-400">
                Create a ticket for your tier and wait for match confirmation
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
          <div className="flex items-center mb-6">
            <Ticket className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Ticket System</h2>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Our ticket system is the gateway to participating in InHouse matches. Here's what you need to know:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Tier 1 Tickets</h3>
              </div>
              <p className="text-gray-400 mb-3">For players ranked Diamond IV to Challenger</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">→</span>
                  <span>High-level competitive matches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">→</span>
                  <span>Advanced strategies and gameplay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">→</span>
                  <span>Exclusive rewards and recognition</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Tier 2 Tickets</h3>
              </div>
              <p className="text-gray-400 mb-3">For players ranked Gold IV to Emerald I</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">→</span>
                  <span>Balanced competitive environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">→</span>
                  <span>Perfect for skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">→</span>
                  <span>Path to Tier 1 promotion</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Important Notes</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Tickets are processed on a first-come, first-served basis</li>
                  <li>• Make sure you're available for at least 1 hour after opening a ticket</li>
                  <li>• Your rank will be verified before match assignment</li>
                  <li>• Be respectful and follow community guidelines at all times</li>
                </ul>
              </div>
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
            Join Discord and Start Playing
          </a>
        </div>
      </div>
    </div>
  );
}
