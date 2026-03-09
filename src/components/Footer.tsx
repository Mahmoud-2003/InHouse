// Icon imports removed because icons are currently commented out in the markup.
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"> */}
              <img src="https://img.lightshot.app/lke4FT9SQS6qTLOoLaZv-A.png" 
              alt="Logo" className="w-15 h-10" />
            {/* </div> */}
              <span className="text-xl font-bold text-white">InHouse Community</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A competitive gaming community for League of Legends and Valorant players. Join us for organized InHouse matches and climb the tiers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.gg/dCjJ6fFH4g" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Discord Server
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Registration Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Support Center
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61586728110774&locale=ar_AR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 InHouse Community. Not affiliated with Riot Games.</p>
        </div>
      </div>
    </footer>
  );
}
