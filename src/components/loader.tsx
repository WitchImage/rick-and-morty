import { LuLoader2 } from 'react-icons/lu';

export default function Loader() {
    return (
        <div className="space-y-4">
            <span className="block text-3xl font-semibold">Cargando</span>
            <LuLoader2 size={35} className="mx-auto animate-spin" />
        </div>
    );
}
