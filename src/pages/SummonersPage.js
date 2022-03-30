import Header from '../components/Header';
import Main from '../components/Main';
import RankInfo from '../components/RankInfo';
import SummonerInfo from '../components/SummonerInfo';
import GridContainer from '../components/GridContainer';
import ChampionInfo from '../components/ChampionInfo';
import GameHistory from '../components/GameHistory';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import executeAPI from '../utils/executeAPI';
import { getSummoner, getMostInfo, getMatches } from '../lib/api';
import { useCallback } from 'react';
import { useState } from 'react';

const SummonersPage = () => {
    const [getSummonerLoading, setGetSummonerLoading] = useState(false);
    const [getMostInfoLoading, setGetMostInfoLoading] = useState(false);
    const [getMatchesLoading, setGetMatchesLoading] = useState(false);

    const [summoner, setSummoner] = useState(null);
    const [champions, setChampions] = useState(null);
    const [recentWinRate, setRecentWinRate] = useState(null);
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        const dic = localStorage.getItem('championDic')
            ? JSON.parse(localStorage.getItem('championDic'))
            : {};
        if (champions?.length > 0) {
            for (let i = 0; i < champions.length; i++) {
                const cham = champions[i];
                dic[cham.key] = cham.name;
            }
        }
        if (recentWinRate?.length > 0) {
            for (let i = 0; i < recentWinRate.length; i++) {
                const cham = recentWinRate[i];
                dic[cham.key] = cham.name;
            }
        }
        localStorage.setItem('championDic', JSON.stringify(dic));
    }, [champions, recentWinRate]);

    const params = useParams();
    useEffect(() => {
        executeGetSummonerAPI();
        executeGetMostInfoAPI();
        executeGetMatchesAPI();
        // eslint-disable-next-line
    }, []);
    const executeGetSummonerAPI = useCallback(async () => {
        const summonerResult = await executeAPI(
            () => getSummoner(params.id),
            (e) => {
                console.error(e);
            },
            () => setGetSummonerLoading(true),
            () => setGetSummonerLoading(false),
        );
        setSummoner(summonerResult.summoner);
        // eslint-disable-next-line
    }, []);

    const executeGetMostInfoAPI = useCallback(async () => {
        const mostResult = await executeAPI(
            () => getMostInfo(params.id),
            (e) => {
                console.error(e);
            },
            () => setGetMostInfoLoading(true),
            () => setGetMostInfoLoading(false),
        );
        const { champions, recentWinRate } = mostResult;
        champions.sort((a, b) => b.games - a.games);
        recentWinRate.sort((a, b) => b.wins + b.losses - (a.wins + a.losses));
        setChampions(champions);
        setRecentWinRate(recentWinRate);
        // eslint-disable-next-line
    }, []);

    const executeGetMatchesAPI = useCallback(async () => {
        let matchesResult = await executeAPI(
            () => getMatches(params.id),
            (e) => {
                console.error(e);
            },
            () => setGetMatchesLoading(true),
            () => setGetMatchesLoading(false),
        );
        const dic = localStorage.getItem('championDic')
            ? JSON.parse(localStorage.getItem('championDic'))
            : {};
        const games = matchesResult.games.map(({ champion, ...game }) => {
            const key = champion.imageUrl.split('/').slice(-1)[0].split('.')[0];
            const name = dic[key] || '';
            return { champion: { key, name, ...champion }, ...game };
        });
        matchesResult.games = games;
        setMatches(matchesResult);
        // eslint-disable-next-line
    }, []);
    return (
        !getSummonerLoading &&
        !getMatchesLoading &&
        !getMostInfoLoading && (
            <>
                <Header />
                <Main>
                    <SummonerInfo {...summoner} />
                    <GridContainer
                        leftChild={
                            <>
                                <RankInfo {...summoner} />
                                <ChampionInfo
                                    champions={champions}
                                    recentWinRate={recentWinRate}
                                />
                            </>
                        }
                        rightChild={matches && <GameHistory {...matches} />}
                    ></GridContainer>
                </Main>
            </>
        )
    );
};

export default SummonersPage;
