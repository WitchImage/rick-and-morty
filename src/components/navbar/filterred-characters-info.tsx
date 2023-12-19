import useCharacterStore from '@/store/character-store';
import useFiltersStore from '@/store/filters-store';

export default function FilterredCharactersInfo() {
    const { characters, starredCharacters } = useCharacterStore();
    const { characterFilter, speciesFilter, genderFilter, statusFilter } =
        useFiltersStore();

    const totalCharacters = characters.length;

    const totalResults = () => {
        if (characterFilter === 'Others')
            return totalCharacters - Object.values(starredCharacters).length;

        return totalCharacters;
    };

    const totalFilters =
        (characterFilter !== 'All' ? 1 : 0) +
        (speciesFilter !== 'All' ? 1 : 0) +
        (statusFilter !== 'All' ? 1 : 0) +
        (genderFilter !== 'All' ? 1 : 0);

    if (totalFilters < 1) return;

    return (
        <section className="w-full pl-[58px] pr-[24px] flex flex-row justify-between">
            <span className="font-semibold text-mblue">{`${totalResults()} Result${
                totalCharacters > 1 ? 's' : ''
            }`}</span>
            <div className="px-[12px] py-[2px] bg-secondary-100 text-secondary-600 font-semibold rounded-full">
                {`${totalFilters} Filter${totalFilters > 1 ? 's' : ''}`}
            </div>
            <hr className="my-[my-3]" />
        </section>
    );
}
