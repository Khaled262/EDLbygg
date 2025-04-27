import Link from 'next/link';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  return (
    <nav className="bg-[#0D1B2A] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="EDL Bygg & Kakel AB" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/tjanster" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Tjänster
              </Link>
              <Link href="/referenser" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Referenser
              </Link>
              <Link href="/om-oss" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Om oss
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/offert" className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#6C9C7D] hover:bg-[#5A8A6A]">
              Begär offert
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
