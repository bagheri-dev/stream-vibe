import Image from "next/image";

interface ProductionCompanyProps {
    name: string;
    logoPath: string | null;
}

export const ProductionCompany: React.FC<ProductionCompanyProps> = ({ name, logoPath }) => {
    return (
        <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
            {logoPath ? (
                <div className="relative w-8 h-8">
                    <Image
                        src={`https://image.tmdb.org/t/p/w200${logoPath}`}
                        alt={name}
                        fill
                        className="object-contain"
                    />
                </div>
            ) : (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">{name.charAt(0)}</span>
                </div>
            )}
            <span className="text-sm">{name}</span>
        </div>
    );
};