'use client';

import { roboto_mono } from "../fonts";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`transition hover:opacity-70 tracking-tighter ${roboto_mono.className}`}
        >
            {label}
        </button>
    );
}

export default Button;