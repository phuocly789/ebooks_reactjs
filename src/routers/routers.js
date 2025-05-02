import { lazy } from 'react';

const routers = [
    {
        path: '/',
        conponent: lazy(() => import('../components/HomePage/HomePage.jsx'))
    }
];
export default routers;
