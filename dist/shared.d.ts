import { Api, Theme, ThemeConfig } from './models';
export declare function getConfigFromApi(api: Api): ThemeConfig;
export declare function getConfig(parameters: ThemeConfig | Theme[]): ThemeConfig;
export declare function getSelectedTheme(list: Theme[], currentSelectedValue?: string): string;
