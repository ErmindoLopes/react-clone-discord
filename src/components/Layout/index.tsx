import React from 'react';

import {Grid} from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';

//CommonJS
// export default function Layout(){ 
//     return (
//         <div>Oi Mundo!</div>
//     )
// }

//ts
const Layout: React.FC = () => { 
    return (
        <Grid>
            <ServerList />
            <ServerName />
        </Grid>
    );
}

export default Layout;