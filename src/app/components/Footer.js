export default function Footer() {
    return (
      <footer className="bg-gray-900 backdrop-blur-sm bg-opacity-80 py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ML Counter Guide. All game content belongs to Moonton.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-blue-400 transition duration-200">
                Home
              </a>
              <a href="/heroes" className="text-gray-400 hover:text-blue-400 transition duration-200">
                Heroes
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }