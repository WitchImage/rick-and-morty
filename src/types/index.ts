export type Species = 'Human' | 'Alien';

export type Character = {
    id: string;
    name: string;
    status: string;
    species: Species;
    type: string;
    gender: string;
    image: string;
};

export type Characterfilter = 'Starred' | 'Others' | 'All';
export type SpeciesFilter = Species | 'All';
