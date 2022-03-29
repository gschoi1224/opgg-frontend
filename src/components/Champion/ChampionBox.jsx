import styled from 'styled-components';
import mathRound from '../../utils/mathRound';
import getKDA from '../../utils/getKDA';
import { useMemo } from 'react';
import classNames from 'classnames';

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--silver-three);
    display: grid;
    column-count: 4;
    height: 53px;
    align-items: center;
    justify-content: center;
    grid-template-columns: 45px 66px 90px 40px;
    grid-column-gap: 10px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    .face {
        width: 45px;
        height: 45px;
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
    }
    .nameBox {
        align-items: flex-start;
    }
    span.detail {
        font-family: Helvetica;
        font-size: 11px;
        text-align: center;
        color: var(--cool-grey);
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
`;

const ChampionBox = ({
    name,
    imageUrl,
    games,
    kills,
    deaths,
    assists,
    wins,
    losses,
    cs,
    rank,
}) => {
    const kda = useMemo(
        () => getKDA(kills, deaths, assists),
        [kills, deaths, assists],
    );
    const winRatio = useMemo(
        () => mathRound((wins / games) * 100),
        [wins, games],
    );
    return (
        <Container className="grayBox">
            <div className="face">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="infoBox nameBox">
                <b className="name">{name}</b>
                <span className="detail">
                    CS {cs}({mathRound(cs / 25, 1)})
                </span>
            </div>
            <div className="infoBox">
                <b
                    className={classNames(
                        'summary',
                        `${
                            kda >= 5
                                ? 'kdaHigh'
                                : kda >= 4
                                ? 'kdaCommon'
                                : kda >= 3
                                ? 'kdaLow'
                                : ''
                        }`,
                    )}
                >
                    {kda}:1 평점
                </b>
                <span className="detail">
                    {mathRound(kills / games, 1)} /{' '}
                    {mathRound(deaths / games, 1)} /{' '}
                    {mathRound(assists / games, 1)}
                </span>
            </div>
            <div className="infoBox">
                <b
                    className={classNames('summary', {
                        winRatioGod: winRatio >= 60,
                    })}
                >
                    {winRatio}%
                </b>
                <span className="detail">{games}게임</span>
            </div>
        </Container>
    );
};

export default ChampionBox;
