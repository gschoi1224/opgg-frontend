import styled from 'styled-components';

const Container = styled.div`
    ${({ height }) => 'height: ' + height + 'px'};
    border-bottom: 1px solid var(--silver-three);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 0;
    width: 100%;
    .exclamation {
        width: 70px;
        height: 70px;
        border: 1px solid #555e5e;
        color: #555e5e;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .noData {
        font-family: Helvetica;
        text-align: center;
        font-size: 16px;
        color: #555e5e;
    }
`;

const NoData = (props) => {
    return (
        <Container {...props}>
            <div className="exclamation">!</div>
            <div className="noData">기록된 전적이 없습니다.</div>
        </Container>
    );
};

export default NoData;
