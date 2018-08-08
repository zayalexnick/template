import * as React from 'react';
import { Container, Title } from './Main.styles';
import Storage from '@/components/Storage';


export interface PropsInterface {

}

export interface StateInterface {

}

export default class MainScene extends React.Component<PropsInterface, StateInterface>
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