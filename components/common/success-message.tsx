interface SuccessMessageProps {
  message: string;
  className?: string;
}

export function SuccessMessage({ message, className }: SuccessMessageProps) {
  return (
    <div className={`text-green-600 text-sm ${className || ""}`}>{message}</div>
  );
}
