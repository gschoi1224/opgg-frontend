import { useMemo } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import toTierString from '../../utils/toTierString';

const Container = styled.div`
    width: 260px;
    background: pink;
    position: absolute;
    top: 33px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
    overflow: hidden;
    left: 0;
`;

const StyledList = styled.ul`
    width: 100%;
    color: var(--charcoal);
    font-size: 12px;
    line-height: 15px;
    padding: 8px 0;
    align-items: center;
    li {
        width: 100%;
        display: flex;
        padding: 6px 16px;
        cursor: pointer;
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-right: 14px;
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
    }
    li:hover {
        background-color: var(--light-blue-grey);
    }
`;

const FitSummoner = ({
    summoner = {
        name: 'a',
        level: 55,
        profileImageUrl:
            'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg',
        profileBorderImageUrl:
            'https://opgg-static.akamaized.net/images/borders2/challenger.png',
        url: 'https://www.op.gg/summoner/userName=a',
        leagues: [
            {
                hasResults: true,
                wins: 130,
                losses: 679,
                tierRank: {
                    name: '솔랭',
                    tier: 'Bronze',
                    tierDivision: 'Bronze',
                    string: 'Bronze (664LP)',
                    shortString: 'B1',
                    division: 'i',
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/medals/bronze_1.png',
                    lp: 664,
                    tierRankPoint: 141,
                },
            },
            {
                hasResults: true,
                wins: 522,
                losses: 563,
                tierRank: {
                    name: '자유 5:5 랭크',
                    tier: 'Gold',
                    tierDivision: 'Gold',
                    string: 'Gold (967LP)',
                    shortString: 'G1',
                    division: 'i',
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/medals/gold_1.png',
                    lp: 967,
                    tierRankPoint: 14,
                },
            },
        ],
        previousTiers: [
            {
                name: '솔랭',
                tier: 'Challenger',
                tierDivision: 'Challenger',
                string: 'Challenger (921LP)',
                shortString: 'C1',
                division: 'i',
                imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/challenger_1.png',
                lp: 921,
                tierRankPoint: 126,
                season: 9,
            },
            {
                name: '솔랭',
                tier: 'Challenger',
                tierDivision: 'Challenger',
                string: 'Challenger (754LP)',
                shortString: 'C1',
                division: 'i',
                imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/challenger_1.png',
                lp: 754,
                tierRankPoint: 496,
                season: 8,
            },
            {
                name: '솔랭',
                tier: 'Gold',
                tierDivision: 'Gold',
                string: 'Gold (429LP)',
                shortString: 'G1',
                division: 'i',
                imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/gold_1.png',
                lp: 429,
                tierRankPoint: 156,
                season: 7,
            },
            {
                name: '솔랭',
                tier: 'Gold',
                tierDivision: 'Gold',
                string: 'Gold (426LP)',
                shortString: 'G1',
                division: 'i',
                imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/gold_1.png',
                lp: 426,
                tierRankPoint: 92,
                season: 6,
            },
        ],
        ladderRank: {
            rank: 528713,
            rankPercentOfTop: 28,
        },
        profileBackgroundImageUrl:
            'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg',
    },
    isFocused,
    setResultShow,
}) => {
    const tier = useMemo(() => {
        if (
            summoner.leagues[0]?.hasResults &&
            summoner.leagues[0]?.tierRank.name === '솔랭'
        ) {
            return `${toTierString(
                summoner.leagues[0].tierRank.shortString,
            )} - ${Number(summoner.leagues[0].tierRank.lp).toLocaleString()}LP`;
        } else {
            return `Level ${summoner.level}`;
        }
    }, [summoner]);
    return (
        <Container>
            <OutsideClickHandler
                onOutsideClick={() => !isFocused && setResultShow(false)}
            >
                <StyledList>
                    {summoner && (
                        <li>
                            <img
                                src={summoner.profileImageUrl}
                                alt={summoner.name}
                            />
                            <div className="championInfo">
                                <div>
                                    <span className="chamName">
                                        {summoner.name}
                                    </span>
                                </div>
                                <div className="historyContainer">{tier}</div>
                            </div>
                        </li>
                    )}
                </StyledList>
            </OutsideClickHandler>
        </Container>
    );
};

export default FitSummoner;
