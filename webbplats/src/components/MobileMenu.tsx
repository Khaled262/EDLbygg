import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Disclosure>
        {({ open }: { open: boolean }) => (
          <>
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="md:hidden absolute top-16 inset-x-0 bg-[#0D1B2A] shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/tjanster" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                  Tjänster
                </Link>
                <Link href="/referenser" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                  Referenser
                </Link>
                <Link href="/om-oss" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                  Om oss
                </Link>
                <Link href="/offert" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#6C9C7D] hover:bg-[#5A8A6A]">
                  Begär offert
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
