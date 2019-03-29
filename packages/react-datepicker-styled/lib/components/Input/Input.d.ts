interface InputProps {
    placeholder: string;
    value: string;
    id: string;
    ariaLabel: string;
    onClick(): void;
}
declare function Input({ placeholder, id, ariaLabel, onClick, value }: InputProps): JSX.Element;
export default Input;
