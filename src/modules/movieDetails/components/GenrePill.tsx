import React from "react";

interface GenrePillProps {
    genre: string;
}

export const GenrePill: React.FC<GenrePillProps> = ({ genre }) => {
    return (
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium border border-gray-700">
            {genre}
        </span>
    );
};