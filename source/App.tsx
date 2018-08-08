import * as React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import stores from '@/mobx/stores';
import ThemeConfig from '@/theme/ThemeConfig';

import Main from '~/Main/screens/Main.screen';

export default () => (
    <Provider { ...stores }>
        <ThemeProvider theme={ThemeConfig}>
            <Main />
        </ThemeProvider>
    </Provider>
);