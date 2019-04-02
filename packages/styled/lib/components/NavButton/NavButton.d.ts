interface NavButtonProps {
    type: 'next' | 'prev';
    onClick(): void;
}
declare function NavButton({ type, onClick }: NavButtonProps): JSX.Element;
export default NavButton;
