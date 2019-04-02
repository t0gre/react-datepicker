import React from 'react';
import { HeightProperty } from 'csstype';
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system';
interface DayProps {
    day: string;
    date: Date;
    isActive: boolean;
    disabled: boolean;
    isStartOrEnd: boolean;
    onDaySelect(date: Date): void;
    daySize?: ResponsiveValue<HeightProperty<TLengthStyledSystem>>;
}
declare function Day({ day, isActive, isStartOrEnd, disabled, onDaySelect, date, daySize }: DayProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Day>;
export default _default;
