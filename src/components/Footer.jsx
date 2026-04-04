export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 border-t">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Help Center</li>
            <li>Safety information</li>
            <li>Cancellation options</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Become a host</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-gray-600">
            <li>How it works</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">StayFinder</h3>
          <p className="text-gray-600">
            Find the best rooms with comfort and trust.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        
        <p>© 2026 StayFinder. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span className="cursor-pointer hover:underline">Terms</span>
          <span className="cursor-pointer hover:underline">Sitemap</span>
        </div>

      </div>
    </footer>
  );
}