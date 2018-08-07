export interface ThemeConfigInterface {
    colors: {
        [name: string]: string | number;
    }
}

const ThemeConfig: ThemeConfigInterface = {
    colors: {
        primary: '#fff'
    }
};

const ThemeConfigDark: ThemeConfigInterface = {
    colors: {
        primary: '#000'
    }
}

export default ThemeConfig;