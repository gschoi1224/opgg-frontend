import { useMemo } from 'react';
import styled from 'styled-components';
import useNavBox from '../hooks/useNavBox';
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

const GameHistory = ({
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
        wins: 6,
        losses: 14,
        kills: 36,
        deaths: 48,
        assists: 27,
    },
    games = [
        {
            mmr: null,
            champion: {
                imageUrl:
                    'https://opgg-static.akamaized.net/images/lol/champion/Galio.png',
                level: 20,
            },
            spells: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png',
                },
            ],
            items: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3020.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3364.png',
                },
            ],
            needRenew: false,
            gameId: '229197447',
            createDate: 1648561828,
            gameLength: 222,
            gameType: '일반',
            summonerId: '43458064',
            summonerName: 'Hide on bush',
            tierRankShort: 'C1',
            stats: {
                general: {
                    kill: 0,
                    death: 0,
                    assist: 0,
                    kdaString: '0.00:1',
                    cs: 142,
                    csPerMin: 7.5,
                    contributionForKillRate: '5%',
                    goldEarned: 4345,
                    totalDamageDealtToChampions: 3241,
                    largestMultiKillString: 'Double Kill',
                    opScoreBadge: '',
                },
                ward: {
                    sightWardsBought: 0,
                    visionWardsBought: 2,
                },
            },
            mapInfo: null,
            peak: [
                'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
                'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png',
            ],
            isWin: false,
        },
        {
            mmr: 3005,
            champion: {
                imageUrl:
                    'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
                level: 31,
            },
            spells: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png',
                },
            ],
            items: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/1026.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3364.png',
                },
            ],
            needRenew: false,
            gameId: '240402357',
            createDate: 1648558531,
            gameLength: 2367,
            gameType: '일반',
            summonerId: '43458064',
            summonerName: 'Hide on bush',
            tierRankShort: 'C1',
            stats: {
                general: {
                    kill: 7,
                    death: 3,
                    assist: 4,
                    kdaString: '3.67:1',
                    cs: 139,
                    csPerMin: 7.5,
                    contributionForKillRate: '23%',
                    goldEarned: 473,
                    totalDamageDealtToChampions: 4823,
                    largestMultiKillString: 'Double Kill',
                    opScoreBadge: '',
                },
                ward: {
                    sightWardsBought: 0,
                    visionWardsBought: 2,
                },
            },
            mapInfo: null,
            peak: [
                'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
                'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png',
            ],
            isWin: false,
        },
        {
            mmr: 552,
            champion: {
                imageUrl:
                    'https://opgg-static.akamaized.net/images/lol/champion/Galio.png',
                level: 20,
            },
            spells: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png',
                },
            ],
            items: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3198.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/2031.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/1026.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3198.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3364.png',
                },
            ],
            needRenew: false,
            gameId: '105767169',
            createDate: 1648555935,
            gameLength: 1411,
            gameType: '자유 5:5 랭크',
            summonerId: '43458064',
            summonerName: 'Hide on bush',
            tierRankShort: 'C1',
            stats: {
                general: {
                    kill: 3,
                    death: 6,
                    assist: 4,
                    kdaString: '1.17:1',
                    cs: 104,
                    csPerMin: 7.5,
                    contributionForKillRate: '60%',
                    goldEarned: 43,
                    totalDamageDealtToChampions: 2047,
                    largestMultiKillString: '',
                    opScoreBadge: '',
                },
                ward: {
                    sightWardsBought: 0,
                    visionWardsBought: 2,
                },
            },
            mapInfo: null,
            peak: [
                'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
                'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png',
            ],
            isWin: false,
        },
        {
            mmr: 927,
            champion: {
                imageUrl:
                    'https://opgg-static.akamaized.net/images/lol/champion/Jayce.png',
                level: 12,
            },
            spells: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png',
                },
            ],
            items: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/1026.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3340.png',
                },
            ],
            needRenew: false,
            gameId: '131089761',
            createDate: 1648552903,
            gameLength: 3525,
            gameType: '일반',
            summonerId: '43458064',
            summonerName: 'Hide on bush',
            tierRankShort: 'C1',
            stats: {
                general: {
                    kill: 10,
                    death: 8,
                    assist: 4,
                    kdaString: '1.75:1',
                    cs: 174,
                    csPerMin: 7.5,
                    contributionForKillRate: '1%',
                    goldEarned: 3464,
                    totalDamageDealtToChampions: 2865,
                    largestMultiKillString: 'Double Kill',
                    opScoreBadge: '',
                },
                ward: {
                    sightWardsBought: 0,
                    visionWardsBought: 2,
                },
            },
            mapInfo: null,
            peak: [
                'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
                'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png',
            ],
            isWin: true,
        },
        {
            mmr: 2756,
            champion: {
                imageUrl:
                    'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
                level: 11,
            },
            spells: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png',
                },
            ],
            items: [
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3113.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/1056.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3113.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/1056.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3020.png',
                },
                {
                    imageUrl:
                        'https://opgg-static.akamaized.net/images/lol/item/3364.png',
                },
            ],
            needRenew: false,
            gameId: '35951770',
            createDate: 1648551043,
            gameLength: 1462,
            gameType: '솔랭',
            summonerId: '43458064',
            summonerName: 'Hide on bush',
            tierRankShort: 'C1',
            stats: {
                general: {
                    kill: 3,
                    death: 4,
                    assist: 1,
                    kdaString: '1.00:1',
                    cs: 152,
                    csPerMin: 7.5,
                    contributionForKillRate: '33%',
                    goldEarned: 3575,
                    totalDamageDealtToChampions: 3299,
                    largestMultiKillString: 'Double Kill',
                    opScoreBadge: 'ACE',
                },
                ward: {
                    sightWardsBought: 0,
                    visionWardsBought: 2,
                },
            },
            mapInfo: null,
            peak: [
                'https://opgg-static.akamaized.net/images/lol/perk/8229.png',
                'https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png',
            ],
            isWin: true,
        },
    ],
}) => {
    const { type, NavBox } = useNavBox(0);
    const totalGames = useMemo(
        () => (!summary ? 0 : summary?.wins + summary?.losses),
        [summary],
    );
    return (
        <Container>
            <NavBox navigationTypes={rankTypes} />
            {totalGames ? (
                <>
                    {summary && <KDAGraph {...summary} />}
                    <MostChampionBox champions={champions} />
                    <PreferPositionBox
                        positions={positions}
                        totalGames={totalGames}
                    />
                </>
            ) : (
                <NoData height={300} className="whiteBox" />
            )}
            {games?.length > 0 && <GameResultList games={games} />}
        </Container>
    );
};
export default GameHistory;
