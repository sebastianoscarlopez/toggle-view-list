'use client';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation'


export const ToggleView = () => {
  const searchParams = useSearchParams()
  const path = usePathname()
 
  const viewMode = searchParams.get('view-mode')
  const isCardsView = viewMode === 'cards';

  return (
    <div className="flex px-8 items-center place-content-between max-w-56 mb-8">
      <Link
        href={`${path}?view-mode=${isCardsView ? 'list' : 'cards'}`}
        className={`bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ${isCardsView ? 'text-green-500' : 'text-white'}`}
      >
        {isCardsView ? 'Cards View' : 'List View'}
      </Link>
    </div>
  );
};
