import * as React from 'react';
import { Container, Title } from './Main.styles';

export interface PropsInterface {

}

export interface StateInterface {

}

export default class Main extends React.Component<PropsInterface, StateInterface>
{
    render(): JSX.Element
    {
        return (
            <Container>
                <Title>Hello World</Title>
            </Container>
        );
    }
}