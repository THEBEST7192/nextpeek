import Image from 'next/image';
import Link from 'next/link';

export default function NavSimple() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/nextpeek.svg" alt="NextPeek Logo" width={120} height={30} className="font-bold" />
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/features" className="text-gray-600 hover:text-gray-900 font-bold">
          Features
        </Link>
        <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-bold">
          FAQ
        </Link>
        <button className="px-4 py-2 text-white bg-[#1DB954] rounded-full transition-colors duration-300 hover:bg-[#1ed760]">
          Download
        </button>
      </div>
    </nav>
  );
}