interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md" }) => {
    const sizes = {
        sm: "h-5 w-5",
        md: "h-8 w-8",
        lg: "h-12 w-12"
    };

    return (
        <div className={`animate-spin rounded-full border-2 border-solid border-gray-300 border-t-transparent ${sizes[size]}`} />
    );
};