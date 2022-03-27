import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SummonersPage from './pages/SummonersPage';

function App() {
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
