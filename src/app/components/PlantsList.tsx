import Image from 'next/image';
import { Plant } from './Plant.d';

const { TREFLE_TOKEN, TREFLE_PAGES } = process.env;

const getPlants = async () => {
  const url = `https://trefle.io/api/v1/plants?token=${TREFLE_TOKEN}`;

  const pages = new Array(Number(TREFLE_PAGES)).fill(0).map((_, index) => index + 1);
  const plants = (
    await Promise.all<Plant>(
      pages.map((page) =>
        fetch(`${url}&page=${page}`)
          .then((response) => response.json())
          .then(({ data }) => data)
      )
    )
  ).flat();

  return plants;
};

interface PlantsListProps {
  viewMode?: 'list' | 'cards';
}

export const PlantsList = async ({ viewMode = 'list' }: PlantsListProps) => {
  const plants = await getPlants();

  const isCardsView = viewMode === 'cards';

  return (
    <div className={`grid ${isCardsView ? 'gap-16': 'gap-1'} md:grid-cols-2 lg:grid-cols-4`}>
      {plants.map((plant) => (
        <div
          key={plant.id}
          className={`flex flex-row gap-2 center bg-white rounded-xl shadow-md overflow-hidden ${
            isCardsView ? 'h-24' : 'h-10 w-48'
          }`}
        >
          {isCardsView && (
            <Image
              src={plant.image_url?.toString() || ''}
              width={48}
              height={48}
              alt=""
              className="min-h-20"
            />
          )}
          <div className={`flex flex-col gap-1 justify-center ${isCardsView ? '' : 'm-auto'}`}>
            <span className="text-gray-700">
              {isCardsView && <b>name:</b>}
              {plant.common_name}
            </span>
            {isCardsView && (
              <>
                <span className="text-left text-gray-700">
                  <b>genus:</b>
                  {plant.genus}
                </span>
                <span className="text-left text-gray-700">
                  <b>family:</b>
                  {plant.family}
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
