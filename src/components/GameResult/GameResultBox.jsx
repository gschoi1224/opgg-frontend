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
    detail,
    createDate,
    teams,
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
            <ParticipantsBox teams={detail.teams} />
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
