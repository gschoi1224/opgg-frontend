import { useState } from 'react';
import MyPieChart from './common/PieChart';
import styled from 'styled-components';
import classNames from 'classnames';
import { useMemo } from 'react';
import positionName from '../utils/positionName';
import positionImage from '../utils/positionImage';

const Container = styled.div`
    column-width: 690px;
    display: flex;
    flex-wrap: wrap;
    span.partition {
        width: 1px;
        height: 11px;
        background-color: var(--silver-three);
        display: inline-block;
        margin: 0px 6px;
    }
`;
const StyledNav = styled.ul`
    width: 100%;
    display: flex;
    padding: 0px 16px;
    border-radius: 2px 2px 0 0;
    li {
        height: 36px;
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: NanumBarunGothicOTF;
        font-size: 12px;
        color: var(--greyish-brown);
        cursor: pointer;
        position: relative;
        top: 1px;
    }
    li.active {
        font-weight: bold;
        color: var(--bluish);
        border-bottom: 2px solid var(--bluish);
    }
    li + li {
        margin-left: 24px;
    }
`;

const StyledKDAInfo = styled.section`
    width: 276px;
    height: 158px;
    border-top: 0;
    padding: 15px 24px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 0 0 0 2px;

    .chartArea {
        width: 90px;
        height: 120px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 10px;
        &:before {
            ${({ caption }) => `content : '${caption}'`};
            font-family: Helvetica;
            font-size: 12px;
            color: var(--brownish-grey-two);
            position: absolute;
            top: -10px;
            z-index: 99;
        }
        &:after {
            ${({ ratio }) => `content : '${ratio}'`};
            font-family: Helvetica;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: var(--greyish-brown);
            position: absolute;
        }
    }
    .rightArea {
        padding-left: 35px;
        .kdaArea {
            font-family: Helvetica;
            font-size: 11px;
            font-weight: bold;
            text-align: center;
            color: var(--black);
            margin-bottom: 6px;
            .slash {
                font-weight: normal;
                color: var(--warm-grey-two);
            }
            .deaths {
                color: var(--reddish);
            }
        }
        .evaluation {
            font-family: Helvetica;
            font-size: 16px;
            text-align: center;
            color: var(--brownish-grey);
        }
    }
`;

const StyledChampionInfo = styled.section`
    width: 230px;
    height: 158px;
    border-top: 0;
    border-left: 0;
    padding: 16px;
    border-radius: 0;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        li {
            width: 100%;
            height: 34px;
            display: flex;
            img {
                border-radius: 50%;
                width: 34px;
                height: 34px;
            }
            .championInfo {
                margin-left: 8px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                .historyContainer {
                    display: flex;
                    align-items: center;
                }
                .chamName {
                    font-family: NanumBarunGothicOTF;
                    font-size: 14px;
                    color: var(--black);
                }
                .rate {
                    font-size: 11px;
                    color: var(--reddish);
                    font-family: Helvetica;
                }
                .record {
                    font-family: Helvetica;
                    font-size: 11px;
                    color: var(--greyish-brown);
                    span {
                        font-family: AppleSDGothicNeo;
                    }
                }

                .score {
                    font-family: Helvetica;
                    font-size: 11px;
                    font-weight: bold;
                    color: var(--greyish-brown);
                }
            }
            .blankText {
                display: flex;
                margin-left: 8px;
                align-items: center;
                font-family: NanumBarunGothicOTF;
                font-size: 11px;
                color: var(--warm-grey-two);
            }
        }
    }
`;

const StyledPositionInfo = styled.section`
    width: 184px;
    height: 158px;
    border-top: 0;
    border-left: 0;
    padding: 16px;
    border-radius: 0 0 2px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .partition {
        width: 100%;
        display: flex;
        align-items: center;
        .title {
            font-family: NanumBarunGothicOTF;
            font-size: 12px;
            color: var(--brownish-grey-two);
        }
    }
    .positionBox {
        column-count: 2;
        display: grid;
        grid-template-columns: 28px auto;
        grid-column-gap: 8px;
        grid-row-gap: 3px;
        .imgBox {
            grid-row: span 2;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .name {
            font-family: NanumBarunGothicOTF;
            font-size: 14px;
            color: var(--black);
        }
        .ratio {
            .roleRatio {
                font-family: Helvetica;
                font-size: 11px;
                color: var(--bluish);
            }
            .winRatio {
                font-family: Helvetica;
                font-size: 11px;
                color: var(--brownish-grey-two);
                .rate {
                    color: var(--black);
                }
            }
        }
    }
`;

const PositionInfo = ({
    champions = [
        {
            id: 236,
            key: 'Lucian',
            name: '루시안',
            imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1',
            games: 12,
            kills: 8,
            deaths: 10,
            assists: 16,
            wins: 9,
            losses: 3,
        },
        {
            id: 246,
            key: 'Qiyana',
            name: '키아나',
            imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png?image=w_30&v=1',
            games: 8,
            kills: 19,
            deaths: 14,
            assists: 18,
            wins: 7,
            losses: 1,
        },
    ],
    positions = [
        {
            games: 13,
            wins: 6,
            losses: 7,
            position: 'SUP',
            positionName: 'Support',
        },
        {
            games: 7,
            wins: 4,
            losses: 3,
            position: 'TOP',
            positionName: 'Top',
        },
    ],
    summary = {
        wins: 5,
        losses: 15,
        kills: 31,
        deaths: 12,
        assists: 22,
    },
}) => {
    const [rankType, setRankType] = useState(0);
    const rankTypes = ['전체', '솔로게임', '자유랭크'];
    const blankChampions = useMemo(
        () => Array.from({ length: 3 - champions.length }),
        [champions],
    );
    const totalGames = summary.wins + summary.losses;
    const winRatio = Math.round((summary.wins / totalGames) * 100);
    const kda =
        Math.round(((summary.kills + summary.assists) / summary.deaths) * 100) /
        100;
    return (
        <Container>
            <StyledNav className="whiteBox">
                {rankTypes.map((type, i) => (
                    <li
                        className={rankType === i ? 'active' : ''}
                        onClick={() => setRankType(i)}
                        key={'nav' + type}
                    >
                        {type}
                    </li>
                ))}
            </StyledNav>
            {totalGames > 0 && (
                <StyledKDAInfo
                    className="grayBox"
                    caption={`${totalGames}전 ${
                        summary.wins > 0 ? summary.wins + '승' : ''
                    } ${summary.losses > 0 ? summary.losses + '패' : ''}`}
                    ratio={winRatio + '%'}
                >
                    <div className="chartArea">
                        <MyPieChart
                            radius={90}
                            wins={summary.wins}
                            weight={13}
                            loses={summary.losses}
                        />
                        <span className="chartLavel"></span>
                    </div>
                    <div className="rightArea">
                        <div className="kdaArea">
                            <span>{summary.kills / totalGames}</span>
                            <span className="slash"> / </span>
                            <span className="deaths">
                                {summary.deaths / totalGames}
                            </span>
                            <span className="slash"> / </span>
                            <span>{summary.assists / totalGames}</span>
                        </div>
                        <div className="evaluation">
                            <span
                                className={classNames(
                                    'evaluation',
                                    kda >= 5
                                        ? 'kdaHigh'
                                        : kda >= 4
                                        ? 'kdaCommon'
                                        : 'kdaLow',
                                )}
                            >
                                <b>{kda}</b>
                                :1
                            </span>
                            &nbsp;
                            <span
                                className={winRatio >= 60 ? 'winRatioGod' : ''}
                            >
                                ({winRatio}%)
                            </span>
                        </div>
                    </div>
                </StyledKDAInfo>
            )}
            <StyledChampionInfo className="grayBox">
                <ul>
                    {champions.map(
                        ({
                            key,
                            name,
                            imageUrl,
                            games,
                            kills,
                            deaths,
                            assists,
                            wins,
                            losses,
                            evaluation = ((kills + assists) / deaths).toFixed(
                                2,
                            ),
                            winRate = Math.round((wins / games) * 100),
                        }) => (
                            <li key={key}>
                                <img src={imageUrl} alt={name} />
                                <div className="championInfo">
                                    <div>
                                        <span className="chamName">{name}</span>
                                    </div>
                                    <div className="historyContainer">
                                        <span
                                            className={classNames('rate', {
                                                oddsGod: winRate >= 60,
                                            })}
                                        >
                                            <b>{winRate}</b>%
                                        </span>
                                        &nbsp;
                                        <span className="record">
                                            ({wins}
                                            <span>승</span> {losses}
                                            <span>패</span>)
                                        </span>
                                        <span className="partition"></span>
                                        <span
                                            className={classNames('score', {
                                                evaluatedGod: evaluation >= 6,
                                            })}
                                        >
                                            {evaluation} 평점
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ),
                    )}
                    {blankChampions.length &&
                        blankChampions.map((_, i) => (
                            <li key={'blankChampion' + i}>
                                <img
                                    src={'/assets/images/group.png'}
                                    alt={'없는 챔피언'}
                                />
                                <div className="blankText">
                                    <span>챔피언 정보가 없습니다.</span>
                                </div>
                            </li>
                        ))}
                </ul>
            </StyledChampionInfo>
            <StyledPositionInfo className="grayBox">
                <div className="partition">
                    <span className="title">선호 포지션 (랭크)</span>
                </div>
                {positions.length &&
                    positions.map(({ games, wins, position }) => (
                        <div className="partition positionBox">
                            <div className="imgBox">
                                <img
                                    src={positionImage(position)}
                                    alt={'icon_' + position}
                                />
                            </div>
                            <div className="name">
                                <span>{positionName(position)}</span>
                            </div>
                            <div className="ratio">
                                <span className="roleRatio">
                                    <b>
                                        {Math.round((games / totalGames) * 100)}
                                    </b>
                                    %
                                </span>
                                <span className="partition"></span>
                                <span className="winRatio">
                                    승률{' '}
                                    <span className="rate">
                                        <b>
                                            {Math.round((wins / games) * 100)}
                                        </b>
                                        %
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
            </StyledPositionInfo>
        </Container>
    );
};
export default PositionInfo;
