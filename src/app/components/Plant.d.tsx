export interface Plant {
  id: number;
  common_name: string;
  image_url?: string;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string;
  genus_id: number;
  synonyms: string[];
  genus: string;
  family: string;
  links: {
    self: string;
    plant: string;
    genus: string;
  };
}
