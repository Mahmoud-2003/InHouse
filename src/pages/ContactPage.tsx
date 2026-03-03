import { MessageCircle, Twitter, Youtube, Twitch, ExternalLink, Mail, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Join Our Community</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start playing? Join our Discord server and connect with us on social media. We're here to help you get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-2 border-blue-500/50 rounded-2xl p-8 text-center">
            <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Discord Server</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our Discord server is the heart of the community. Join to participate in InHouse matches, connect with other players, and stay updated on events and tournaments.
            </p>
            <a
              href="https://discord.gg/dCjJ6fFH4g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Join Discord Server
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
        {/* كنت هكوننيكت حضرتك تحت */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#"
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-gray-800 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Twitter className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Twitter</h3>
              <p className="text-gray-400 mb-4">
                Follow us for updates, highlights, and community news
              </p>
              <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 font-semibold">
                Follow Us
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a
              href="#"
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-red-500 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-gray-800 group-hover:bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Youtube className="w-8 h-8 text-red-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">YouTube</h3>
              <p className="text-gray-400 mb-4">
                Watch match highlights, tutorials, and community content
              </p>
              <div className="flex items-center justify-center text-red-400 group-hover:text-red-300 font-semibold">
                Subscribe
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>

            <a
              href="#"
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-gray-800 group-hover:bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Twitch className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Twitch</h3>
              <p className="text-gray-400 mb-4">
                Watch live InHouse matches and community streams
              </p>
              <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300 font-semibold">
                Follow Channel
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </a>
          </div>
        </div> */}
      {/* هكوننكت حضرتك فوق */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Important Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Registration</h3>
                  <p className="text-gray-400 mb-3">
                    Sign up to participate in InHouse matches
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Support Center</h3>
                  <p className="text-gray-400 mb-3">
                    Get help with technical issues or questions
                  </p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center">
                    Get Support
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community Rules</h3>
                  <p className="text-gray-400 mb-3">
                    Read our guidelines and code of conduct
                  </p>
                  <a href="#" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                    View Rules
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Report Issues</h3>
                  <p className="text-gray-400 mb-3">
                    Report bugs, toxicity, or rule violations
                  </p>
                  <a href="#" className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center">
                    Submit Report
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Getting Started Guide</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Join the Discord Server</h4>
                <p className="text-gray-400">
                  Click the "Join Discord" button above and accept the server invite.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Complete Verification</h4>
                <p className="text-gray-400">
                  Follow the verification process to access all channels and features.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Register Your Rank</h4>
                <p className="text-gray-400">
                  Submit your in-game rank to be assigned to the appropriate tier.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Open Your First Ticket</h4>
                <p className="text-gray-400">
                  Navigate to your tier channel and open a ticket to join your first match.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Play and Have Fun</h4>
                <p className="text-gray-400">
                  Wait for your match assignment, join the lobby, and compete!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Have questions? Need help? Our community moderators are always ready to assist you.
          </p>
          <a
            href="https://discord.gg/dCjJ6fFH4g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Join Discord Now
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
