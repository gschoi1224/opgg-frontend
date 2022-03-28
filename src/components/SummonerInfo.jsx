import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 175px;
    border-bottom: 1px solid var(--white-three);
    display: flex;
    justify-content: center;
    grid-column: span 2;

    .summonerInfo {
        width: 1000px;

        .previousTiers {
            margin-left: 32px;
            li {
                height: 20px;
                border-radius: 2px;
                padding: 4px 5px 3px;
                border: solid 1px var(--silver-two);
                background-color: var(--silver);
                font-family: Helvetica;
                font-size: 11px;
                letter-spacing: -0.42px;
                color: var(--slate-grey);
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
            li + li {
                margin-left: 7px;
            }
        }
        .profileContainer {
            margin: 6px 21px;
            display: flex;
            div + div {
                margin-left: 17px;
            }
        }
        .profile {
            width: 120px;
            height: 120px;
            ${({ profileBorderImageUrl }) =>
                `background:url(${profileBorderImageUrl})`};
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .profileImage {
                width: 100px;
                height: 100px;
            }
            .profileLevelBorder {
                height: 24px;
                align-items: center;
                justify-content: center;
                display: flex;
                position: absolute;
                bottom: 0;
                &:before {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 0;
                    top: 0;
                    border-left: 12px solid transparent;
                    border-right: 12px solid transparent;
                    border-bottom: 12px solid #ca9a2c;
                }
                &:after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 0;
                    top: 12px;
                    border-left: 12px solid transparent;
                    border-right: 12px solid transparent;
                    border-top: 12px solid #ca9a2c;
                }

                .profileLevelBackground {
                    text-align: center;
                    height: 22px;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    position: absolute;
                    bottom: 0;
                    &:before {
                        content: '';
                        position: absolute;
                        width: 20px;
                        height: 0;
                        top: 0;
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                        border-bottom: 10px solid #2c3548;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        width: 20px;
                        height: 0;
                        top: 10px;
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                        border-top: 10px solid #2c3548;
                        z-index: 99;
                    }
                    .profileLevel {
                        color: var(--dull-yellow);
                        font-family: Helvetica;
                        font-size: 14px;
                        z-index: 100;
                    }
                }
            }
        }
        .profileInfo {
            height: 120px;
            display: flex;
            padding: 11px;
            flex-direction: column;
            .profileSummonerId {
                font-family: AppleSDGothicNeo;
                font-size: 20px;
                font-weight: bold;
                letter-spacing: -0.77px;
                color: var(--charcoal);
                display: inline-flex;
                height: 24px;
                align-items: center;
            }
            .profileSummonerRankingBox {
                display: flex;
                width: 100%;
                align-items: flex-start;
                .profileSummonerRankingInfo {
                    font-family: AppleSDGothicNeo;
                    font-size: 11px;
                    letter-spacing: -0.42px;
                    color: var(--slate-grey);
                    .profileSummonerRanking {
                        font-family: Helvetica;
                        font-weight: bold;
                    }
                    .profileSummonerRankingPercent {
                        font-family: Helvetica;
                    }
                }
            }
        }
    }
`;

const SummonerInfo = ({
    previousTiers = [
        {
            name: '솔랭',
            tier: 'Iron',
            tierDivision: 'Iron',
            string: 'Iron (967LP)',
            shortString: 'I1',
            division: 'i',
            imageUrl:
                'https://opgg-static.akamaized.net/images/medals/iron_1.png',
            lp: 967,
            tierRankPoint: 488,
            season: 9,
        },
        {
            name: '솔랭',
            tier: 'Master',
            tierDivision: 'Master',
            string: 'Master (857LP)',
            shortString: 'M1',
            division: 'i',
            imageUrl:
                'https://opgg-static.akamaized.net/images/medals/master_1.png',
            lp: 857,
            tierRankPoint: 210,
            season: 8,
        },
        {
            name: '솔랭',
            tier: 'Master',
            tierDivision: 'Master',
            string: 'Master (484LP)',
            shortString: 'M1',
            division: 'i',
            imageUrl:
                'https://opgg-static.akamaized.net/images/medals/master_1.png',
            lp: 484,
            tierRankPoint: 414,
            season: 7,
        },
    ],
    profileBorderImageUrl = 'https://opgg-static.akamaized.net/images/borders2/challenger.png',
    profileImageUrl = 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg',
    level = 305,
    ladderRank = { rank: 415780, rankPercentOfTop: 32 },
    name = 'SKT T1 Faker',
}) => {
    return (
        <Container profileBorderImageUrl={profileBorderImageUrl} level={level}>
            <div className="summonerInfo">
                <ul className="previousTiers">
                    {previousTiers.map(({ tier, season }) => (
                        <li key={`S${season}`}>
                            <b>S{season}</b>&nbsp;<span>{tier}</span>
                        </li>
                    ))}
                </ul>
                <div className="profileContainer">
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profileImageUrl}
                            alt="프로필 이미지"
                        />
                        <div className="profileLevelBorder">
                            <div className="profileLevelBackground">
                                <span className="profileLevel">{level}</span>
                            </div>
                        </div>
                    </div>
                    <div className="profileInfo">
                        <span className="profileSummonerId">{name}</span>
                        <div className="profileSummonerRankingBox">
                            <div className="profileSummonerRankingInfo">
                                레더 랭킹&nbsp;
                                <span className="profileSummonerRanking">
                                    {ladderRank.rank.toLocaleString()}
                                </span>
                                위 (상위&nbsp;
                                <span className="profileSummonerRankingPercent">
                                    {ladderRank.rankPercentOfTop}%
                                </span>
                                )
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SummonerInfo;
