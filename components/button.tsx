

type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void;
    disabled?: boolean;
  };
export default function Button({
    label,
    variant = "primary",
    onClick,
    disabled = false,
}: ButtonProps){
    return (
        <>
        <button
        className="bg-purple-600 text-white px-6 py-2 rounded-lg text-lg font-medium"
        onClick={onClick}
        disabled={disabled}
        >
        {label}
        </button>
        </>
    )
}