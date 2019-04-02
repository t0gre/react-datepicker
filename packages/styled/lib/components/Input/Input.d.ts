import { BorderProperty, MinHeightProperty, TopProperty, PaddingProperty } from 'csstype';
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system';
interface InputProps {
    placeholder: string;
    value: string;
    id: string;
    ariaLabel: string;
    onClick(): void;
    showCalendarIcon: boolean;
    inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>;
    inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>;
    inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>;
    calendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>;
}
declare function Input({ placeholder, id, ariaLabel, onClick, value, showCalendarIcon, inputBorder, inputMinHeight, inputPadding, calendarWrapperTop, }: InputProps): JSX.Element;
export default Input;
