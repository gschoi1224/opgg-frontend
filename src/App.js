import { useCallback } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { getItemInfo } from './lib/api';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SummonersPage from './pages/SummonersPage';

function App() {
    useEffect(() => {
        if (!localStorage.getItem('itemInfo')) {
            executeGetItemInfo();
        }
        // eslint-disable-next-line
    }, []);

    const executeGetItemInfo = useCallback(async () => {
        const items = await getItemInfo();
        localStorage.setItem('itemInfo', JSON.stringify(items.data));
    }, []);

    return (
        <>
            <Reset />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/summoners/:id" element={<SummonersPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
