import styled from 'styled-components';
import SearchInput from '../components/header/SearchInput';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--azure);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainPage = () => {
    return (
        <Container>
            <SearchInput />
        </Container>
    );
};
export default MainPage;
