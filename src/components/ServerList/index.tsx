import React from 'react';

import {Container, ServerButton, Separator} from './styles';

const ServerList: React.FC = () => {

    return (
        <Container>
            <ServerButton  isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={72} />
            <ServerButton />
        </Container>
    );

}

export  default ServerList;