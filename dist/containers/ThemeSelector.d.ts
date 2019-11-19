import { Component } from 'react';
import { Api, ThemeSelectorItem } from '../models';
interface ThemeToolProps {
    api: Api;
}
interface ThemeToolState {
    decorator: boolean;
    items: ThemeSelectorItem[];
    selected: string;
    expanded: boolean;
}
export declare class ThemeSelector extends Component<ThemeToolProps, ThemeToolState> {
    state: ThemeToolState;
    private setStories;
    private setTheme;
    private setDecorator;
    componentDidMount(): void;
    componentWillUnmount(): void;
    change: (args: {
        selected: string;
        expanded: boolean;
    }) => void;
    render(): JSX.Element;
}
export {};
