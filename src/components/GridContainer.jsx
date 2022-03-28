import styled from 'styled-components';

const Container = styled.div`
    width: 1000px;
    display: grid;
    grid-template-columns: 300px 690px;
    grid-column-gap: 10px;
    margin: 10px auto;
`;

const GridContainer = ({ children }) => {
    return <Container>{children}</Container>;
};

export default GridContainer;
