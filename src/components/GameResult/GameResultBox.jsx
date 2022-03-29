import styled from 'styled-components';
import ChampionBox from './ChampionBox';
import InfoBox from './InfoBox';
import ItemsBox from './ItemsBox';
import KDABox from './KDABox';
import ParticipantsBox from './ParticipantsBox';
import StatsBox from './StatsBox';

const Container = styled.li`
    width: 690px;
    height: 96px;
    display: grid;
    border: solid 1px ${({ color }) => color};
    background-color: ${({ background }) => background};
    grid-template-columns: 70.5px 100px 113.5px 90px 113.5px 170.5px 30px;
    & > div {
        align-items: center;
    }
    .action {
        background-color: ${({ isWin }) =>
            isWin ? 'var(--perrywinkle)' : 'var(--pinkish-tan)'};
        border: 1px solid
            ${({ isWin }) =>
                isWin ? 'var(--cool-blue)' : 'var(--brownish-pink)'};
        .detail {
            width: 30px;
            height: 100%;
            border: 0;
            position: relative;
            img {
                position: absolute;
                bottom: 10px;
                left: 9px;
            }
        }
    }
`;

const GameResultBox = ({
    champion,
    gameId,
    gameLength,
    gameType,
    isWin,
    items,
    peak,
    spells,
    stats,
    summonerId,
    summonerName,
    tierRankShort,
    createDate,
    teams = [
        {
            teamId: 1,
            players: [
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Jayce.png',
                        level: 12,
                    },
                    summonerId: '2254552',
                    summonerName: 'Hide on bush',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Jayce.png',
                        level: 12,
                    },
                    summonerId: '3755694',
                    summonerName: 'K T',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
                        level: 7,
                    },
                    summonerId: '2199254',
                    summonerName: 'DWG Canyon',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png',
                        level: 6,
                    },
                    summonerId: '1308685',
                    summonerName: 'UijU',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png',
                        level: 9,
                    },
                    summonerId: '2773808',
                    summonerName: 'lIIIllIlIIlIlIll',
                },
            ],
        },
        {
            teamId: 2,
            players: [
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
                        level: 31,
                    },
                    summonerId: '2037182',
                    summonerName: 'JUGKlNG',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
                        level: 31,
                    },
                    summonerId: '2012713',
                    summonerName: 'Mango Fish',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Galio.png',
                        level: 20,
                    },
                    summonerId: '2010529',
                    summonerName: '저승용호야',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
                        level: 31,
                    },
                    summonerId: '2600943',
                    summonerName: 'qwetyz',
                },
                {
                    champion: {
                        imageUrl:
                            'https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png',
                        level: 6,
                    },
                    summonerId: '2745783',
                    summonerName: 'KT Malrang',
                },
            ],
        },
    ],
}) => {
    return (
        <Container
            color={isWin ? 'var(--light-grey-blue)' : 'var(--pinkish-grey-two)'}
            background={
                isWin ? 'var(--light-blue-grey)' : 'var(--pinkish-grey)'
            }
            isWin={isWin}
        >
            <InfoBox
                color={isWin ? 'var(--ugly-blue)' : 'var(--scarlet)'}
                border={
                    isWin
                        ? 'var(--light-grey-blue-two)'
                        : 'var(--pinkish-grey-three)'
                }
                isWin={isWin}
                gameType={gameType}
                gameLength={gameLength}
                createDate={createDate}
            />
            <ChampionBox spells={spells} peak={peak} champion={champion} />
            <KDABox {...stats.general} />
            <StatsBox
                cs={stats.general.cs}
                csPerMin={stats.general.csPerMin}
                level={champion.level}
                contributionForKillRate={stats.general.contributionForKillRate}
            />
            <ItemsBox
                items={items}
                isWin={isWin}
                visionWardsBought={stats.ward.visionWardsBought}
            />
            <ParticipantsBox teams={teams} />
            <div className="action">
                <button className="detail">
                    <img
                        src={`/assets/images/icon-viewdetail-${
                            isWin ? 'blue' : 'red'
                        }.png`}
                        alt="buttonImg"
                    />
                </button>
            </div>
        </Container>
    );
};

export default GameResultBox;
