import styled from 'styled-components';
import whenPlay from '../../utils/whenPlay';

const Container = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    letter-spacing: -0.42px;
    color: var(--greyish-brown);
    display: grid;
    text-align: center;
    padding: 13px 0px;
    .partition {
        background-color: ${({ border }) => border};
        width: 27px;
        height: 1px;
        margin: 0px auto;
    }
    .result {
        color: ${({ color }) => color};
    }
`;

const InfoBox = ({
    color,
    border,
    isWin,
    gameType,
    gameLength,
    createDate,
}) => {
    return (
        <Container color={color} border={border}>
            <b>{gameType}</b>
            <span>{whenPlay(createDate)}</span>
            <div className="partition"></div>
            <b className="result">{isWin ? '승리' : '패배'}</b>
            <span>{`${Math.floor(gameLength / 60)}분 ${Math.floor(
                gameLength % 60,
            )}초`}</span>
        </Container>
    );
};

export default InfoBox;
