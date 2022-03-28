import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
`;

const Main = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Main;
