import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
    text: string;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    pulseAnimation?: boolean;
};

type ButtonAsButtonProps = BaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
    href?: never;
};

type ButtonAsLinkProps = BaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "link";
    href: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = (props: ButtonProps) => {
    const {
        text,
        variant = "primary",
        size = "md",
        className = "",
        fullWidth = false,
        disabled = false,
        loading = false,
        pulseAnimation = false,
    } = props;

    // Base classes
    const baseClasses = `rounded-lg font-manrope-semibold transition-all duration-300 ease-in-out 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 
    ${fullWidth ? "w-full" : "w-auto"} 
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${pulseAnimation ? "animate-pulse-once" : ""}`;

    // Variant classes
    const variantClasses = {
        primary: `bg-red45 text-white hover:scale-105 hover:shadow-lg hover:shadow-red45/30 
              active:scale-95 focus:ring-red45`,
        secondary: `bg-gray-700 text-white hover:scale-105 hover:shadow-lg hover:shadow-gray-700/30 
                active:scale-95 focus:ring-gray-700`,
        ghost: `bg-transparent text-red45 border border-red45 hover:bg-red45/10 
            active:bg-red45/20 focus:ring-red45`,
    };

    // Size classes
    const sizeClasses = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 sm:px-6 py-3 text-base",
        lg: "px-6 sm:px-8 py-4 text-lg",
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (props.as === "link") {
        const { href, ...linkProps } = props;
        return (
            <Link href={href} passHref legacyBehavior>
                <a className={combinedClasses} {...linkProps}>
                    {loading ? "Loading..." : text}
                </a>
            </Link>
        );
    }

    const { type = "button", ...buttonProps } = props;
    return (
        <button
            type={type}
            className={combinedClasses}
            disabled={disabled || loading}
            {...buttonProps}
        >
            {loading ? "Loading..." : text}
        </button>
    );
};