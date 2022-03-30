import styled from 'styled-components';
import mathRound from '../../utils/mathRound';
import { useMemo } from 'react';
import classNames from 'classnames';

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--silver-three);
    display: grid;
    column-count: 4;
    height: 53px;
    align-items: center;
    justify-content: space-evenly;
    grid-template-columns: 32px 60px 30px 123px;
    grid-column-gap: 10px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    .face {
        width: 32px;
        height: 32px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .infoBox {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0px auto;
    }
    .nameBox {
        align-items: flex-start;
    }
    b.name {
        font-family: AppleSDGothicNeo;
        font-size: 13px;
        color: var(--brownish-grey);
    }
    b.summary {
        font-family: Helvetica;
        font-size: 13px;
        text-align: center;
        color: var(--brownish-grey);
    }
    .graph {
        width: 123px;
        height: 24px;
        border-radius: 4px;
        background-color: var(--coral);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 4px;
        font-family: AppleSDGothicNeo;
        font-size: 12px;
        color: var(--white-two);
        position: relative;
        span {
            z-index: 10;
        }
        b {
            font-family: Helvetica;
        }
        .winRange {
            border-radius: ${({ winRatio }) =>
                winRatio === 100 ? '4px' : '4px 0 0 4px'};
            background-color: var(--bluish);
            position: absolute;
            height: 100%;
            width: ${({ winRatio }) => winRatio}%;

            left: 0;
            z-index: 1;
        }
    }
`;

const RatioGraph = ({ name, imageUrl, games, wins, losses }) => {
    const winRatio = useMemo(
        () => mathRound((wins / games) * 100),
        [wins, games],
    );
    return (
        <Container className="grayBox" winRatio={winRatio}>
            <div className="face">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="infoBox nameBox">
                <b className="name">{name}</b>
            </div>
            <div className="infoBox">
                <b
                    className={classNames('summary', {
                        winRatioGod: winRatio >= 60,
                    })}
                >
                    {winRatio}%
                </b>
            </div>
            <div className="infoBox">
                <div className="graph">
                    <div className="winRange"></div>
                    <span className="win">
                        <b>{wins}</b>승
                    </span>
                    <span className="lose">
                        <b>{losses}</b>패
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default RatioGraph;
