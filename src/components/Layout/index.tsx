import React from 'react';
import {Grid} from './styles';
import ServerList from '../ServerList';

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
        </Grid>
    );
}

export default Layout;