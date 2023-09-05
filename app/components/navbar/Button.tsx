'use client';

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
            className="transition hover:opacity-60 text-amber-50"
        >
            {label}
        </button>
    );
}

export default Button;