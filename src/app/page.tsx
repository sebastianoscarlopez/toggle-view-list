import { Suspense } from 'react';
import { PlantsList, ToggleView } from './components';

interface SearchParams {
  'view-mode': 'list' | 'cards' | undefined;
}

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main className="bg-slate-800 p-12">
      <ToggleView />
      <Suspense fallback={<div>Loading...</div>}>
        <PlantsList viewMode={searchParams['view-mode']} />
      </Suspense>
    </main>
  );
}
