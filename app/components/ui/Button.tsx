import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={twMerge(
            clsx("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", className)
        )} 
        {...props}
        >{children}</button >
    )
}