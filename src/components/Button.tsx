
interface ButtonProps {
    children: string;
    color?: "danger" | "primary" | "secondary" | "success" | "warning" | "info" | "light" | "dark";
    onClick: () => void;
    }

const Button = ({children, onClick, color}: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${color}`}
    onClick={onClick}>{children}</button>
  )
}

export default Button