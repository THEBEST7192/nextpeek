import Image from 'next/image';

export default function PrimaryCTA() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="#" className="flex items-center px-8 py-4 text-lg font-bold text-white rounded-full bg-[#1DB954] transition-colors duration-300 hover:bg-[#1ed760]">
          <Image src="/window.svg" alt="Windows Logo" width={24} height={24} className="mr-2" />
          Download for Windows
        </a>
        <a href="#" className="flex items-center px-8 py-4 text-lg font-bold text-white rounded-full bg-[#1DB954] transition-colors duration-300 hover:bg-[#1ed760]">
          <Image src="/apple.svg" alt="macOS Logo" width={24} height={24} className="mr-2" />
          Download for macOS
        </a>
        <a href="#" className="flex items-center px-8 py-4 text-lg font-bold text-white rounded-full bg-[#1DB954] transition-colors duration-300 hover:bg-[#1ed760]">
          <Image src="/linux.svg" alt="Linux Logo" width={24} height={24} className="mr-2" />
          Download for Linux
        </a>
      </div>
      <p className="text-gray-600">
        Works with all Spotify accounts. Available for Windows, macOS & Linux.
      </p>
    </div>
  );
}