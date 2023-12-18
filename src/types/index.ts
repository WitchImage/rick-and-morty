export type Species = 'Human' | 'Alien';
export type Status = 'Alive' | 'Dead' | 'Unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'Unknown';

export type Character = {
    id: string;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    image: string;
};

export type Characterfilter = 'Starred' | 'Others' | 'All';
export type SpeciesFilter = Species | 'All';
export type StatusFilter = Status | 'All';
export type GenderFilter = Gender | 'All';
export type Filters = {
    characterFilter: Characterfilter;
    speciesFilter: SpeciesFilter;
    statusFilter: StatusFilter;
    genderFilter: GenderFilter;
};

export type Comment = {
    message: string;
    createdAt: string;
};

export type CharacterComments = {
    [characterId: string]: Comment[];
};
