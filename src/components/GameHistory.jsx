import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useNavBox from '../hooks/useNavBox';
import { getMatchDetail } from '../lib/api';
import NoData from './common/NoData';
import GameResultList from './GameResult/GameResultList';
import KDAGraph from './Position/KDAGraph';
import MostChampionBox from './Position/MostChampionBox';
import PreferPositionBox from './Position/PreferPositionBox';

const Container = styled.div`
    width: 690px;
    display: flex;
    flex-wrap: wrap;
`;

const rankTypes = ['전체', '솔로게임', '자유랭크'];

const GameHistory = ({ games }) => {
    const [detailLoading, setDetailLoading] = useState(false);
    const [calculating, setCalculating] = useState(true);

    useEffect(() => {
        executeMatchDetailAPI();
        // eslint-disable-next-line
    }, []);

    const executeMatchDetailAPI = useCallback(async () => {
        setDetailLoading(true);
        const promises = games.map(async (game) => {
            const res = await getMatchDetail(game.summonerName, game.gameId);
            return res.data;
        });
        const detail = await Promise.all(promises);
        setDetails(detail);
        setViewDetails(detail);
        setDetailLoading(false);
    }, [games]);
    const [viewChampions, setViewChampions] = useState(null);
    const [viewPositions, setViewPositions] = useState(null);
    const [viewSummary, setViewSummary] = useState(null);
    const [viewGames, setViewGames] = useState(games);
    const [details, setDetails] = useState(null);
    const [viewDetails, setViewDetails] = useState(details);
    const { type, NavBox } = useNavBox(0);
    useEffect(() => {
        setCalculating(true);
        if (details?.length > 0) {
            const index = [];
            const newGames = [];
            const newDetails = [];
            const newSummary = {
                games: 0,
                wins: 0,
                losses: 0,
                kills: 0,
                deaths: 0,
                assists: 0,
                killParticipantion: 0,
            };
            const newChampions = {};
            const newPositions = Array.from(
                { length: 5, 0: 'TOP', 1: 'MID', 2: 'JNG', 3: 'ADC', 4: 'SUP' },
                (position) => ({
                    position,
                    games: 0,
                    wins: 0,
                    losses: 0,
                }),
            );
            switch (type) {
                case 0:
                    for (let i = 0; i < games.length; i++) {
                        index.push(i);
                    }
                    break;
                case 1:
                    for (let i = 0; i < games.length; i++) {
                        if (games[i].gameType === '솔랭') {
                            index.push(i);
                        }
                    }
                    break;
                case 2:
                    for (let i = 0; i < games.length; i++) {
                        if (games[i].gameType === '자유 5:5 랭크') {
                            index.push(i);
                        }
                    }
                    break;
                default:
                    break;
            }
            index.forEach((i) => {
                const game = games[i];
                if (newChampions[game.champion.key]) {
                    newChampions[game.champion.key].games++;
                    if (game.isWin) {
                        newChampions[game.champion.key].wins++;
                    } else {
                        newChampions[game.champion.key].losses++;
                    }
                    newChampions[game.champion.key].kills +=
                        game.stats.general.kill;
                    newChampions[game.champion.key].deaths +=
                        game.stats.general.death;
                    newChampions[game.champion.key].assists +=
                        game.stats.general.assist;
                } else {
                    const obj = {
                        games: 1,
                        wins: 0,
                        losses: 0,
                        kills: game.stats.general.kill,
                        assists: game.stats.general.assist,
                        deaths: game.stats.general.death,
                        imageUrl: game.champion.imageUrl,
                        name: game.champion.name,
                        key: game.champion.key,
                    };
                    if (game.isWin) {
                        obj.wins++;
                    } else {
                        obj.losses++;
                    }
                    newChampions[game.champion.key] = obj;
                }
                newSummary.games++;
                if (game.isWin) {
                    newSummary.wins++;
                } else {
                    newSummary.losses++;
                }
                newSummary.kills += game.stats.general.kill;
                newSummary.deaths += game.stats.general.death;
                newSummary.assists += game.stats.general.assist;
                newSummary.killParticipantion += Number(
                    game.stats.general.contributionForKillRate.split('%')[0],
                );
                const detail = details[i];
                let positionIndex = -1;
                for (let j = 0; j < detail.teams.length; j++) {
                    const team = detail.teams[j].players;
                    for (let k = 0; k < team.length; k++) {
                        if (team[k].summonerName === game.summonerName) {
                            positionIndex = k;
                        }
                    }
                    if (positionIndex !== -1) {
                        break;
                    }
                }
                newPositions[positionIndex].games++;
                if (game.isWin) {
                    newPositions[positionIndex].wins++;
                } else {
                    newPositions[positionIndex].losses++;
                }

                newGames.push(game);
                newDetails.push(detail);
            });
            const arrCham = [];
            for (const cham of Object.values(newChampions)) {
                arrCham.push(cham);
            }
            arrCham.sort((a, b) => {
                if (a.games !== b.games) {
                    return b.games - a.games;
                }
                return b.wins - a.wins;
            });
            newPositions.sort((a, b) => b.games - a.games);

            setViewChampions(arrCham.slice(0, 3));
            setViewGames(newGames);
            setViewDetails(newDetails);
            setViewSummary(newSummary);
            setViewPositions(
                newPositions.filter((p, i) => i < 2 && p.games > 0),
            );
            setCalculating(false);
        }
    }, [type, games, details]);
    return (
        <Container>
            <NavBox navigationTypes={rankTypes} />
            {!calculating && viewSummary?.games > 0 ? (
                <>
                    {viewSummary && <KDAGraph {...viewSummary} />}
                    <MostChampionBox champions={viewChampions} />
                    <PreferPositionBox
                        positions={viewPositions}
                        totalGames={viewSummary.games}
                    />
                </>
            ) : (
                !calculating && <NoData height={300} className="whiteBox" />
            )}
            {!calculating &&
                viewGames?.length > 0 &&
                viewDetails?.length > 0 &&
                !detailLoading && (
                    <GameResultList games={viewGames} details={viewDetails} />
                )}
        </Container>
    );
};
export default GameHistory;
