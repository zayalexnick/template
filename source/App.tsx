import * as React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import stores from '@/mobx/stores';
import Navigator from '@/navigation/Navigator';
import ThemeConfig from '@/theme/ThemeConfig';

export default () => (
    <Provider { ...stores }>
        <ThemeProvider theme={ThemeConfig}>
            <Navigator />
        </ThemeProvider>
    </Provider>
);