import { IoBookOutline } from 'react-icons/io5';
import { BsBoxArrowUp } from 'react-icons/bs';
import { HiOutlineSquare2Stack } from 'react-icons/hi2';
import Button from '../button/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface MobileNavbarProps {
    setShowCharactersNavbar: (value: boolean) => void;
}

export default function MobileNavbar({
    setShowCharactersNavbar,
}: MobileNavbarProps) {
    return (
        <nav className="z-10 fixed w-full bottom-0 h-[63px] bg-gray-500 flex flex-row justify-between p-3 shadow-lg">
            <Button variant="unstyled">
                <IoIosArrowBack size={25} className="fill-mblue" />
            </Button>
            <Button variant="unstyled">
                <IoIosArrowForward size={25} className="fill-mblue" />
            </Button>
            <Button variant="unstyled">
                <BsBoxArrowUp size={25} className="fill-mblue" />
            </Button>
            <Button variant="unstyled">
                <IoBookOutline
                    size={25}
                    className="stroke-mblue"
                    onClick={() => setShowCharactersNavbar(true)}
                />
            </Button>
            <Button variant="unstyled">
                <HiOutlineSquare2Stack size={25} className="stroke-mblue" />
            </Button>
        </nav>
    );
}
