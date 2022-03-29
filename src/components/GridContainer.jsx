import styled from 'styled-components';

const Container = styled.div`
    width: 1000px;
    display: grid;
    grid-template-columns: 300px 690px;
    grid-column-gap: 10px;
    grid-row-gap: 8px;
    column-count: 2;
    margin: 10px auto;
    .leftArea {
        column-width: 300px;
    }
    .rightArea {
        column-width: 690px;
    }
`;

const GridContainer = ({ leftChild, rightChild }) => {
    return (
        <Container>
            <div className="leftArea">{leftChild}</div>
            <div className="rightArea">{rightChild}</div>
        </Container>
    );
};

export default GridContainer;
