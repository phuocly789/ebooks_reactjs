import './assets/styles/_global.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import LoadingSpinner from '@components/Loading/Loading';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';

function App() {
    return (
        <SideBarProvider>
            <SideBar />
            <BrowserRouter>
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        {routers.map((item, index) => {
                            const Component = item.conponent;
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={<Component />}
                                />
                            );
                        })}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </SideBarProvider>
    );
}

export default App;
