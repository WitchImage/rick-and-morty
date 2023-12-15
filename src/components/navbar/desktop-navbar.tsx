import SearchBar from '../search-bar/search-bar';

export default function DesktopNavbar() {
    return (
        <nav className="h-full bg-gray-100/50">
            <span className="text-3xl block mt-[42px] px-[24px] mb-[25px]">
                Rick and Morty list
            </span>
            <section className="px-[19px] mb-[45px]">
                <SearchBar />
            </section>
        </nav>
    );
}
