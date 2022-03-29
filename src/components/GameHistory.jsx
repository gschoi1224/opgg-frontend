import styled from 'styled-components';
import useNavBox from '../hooks/useNavBox';
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
        wins: 5,
        losses: 15,
        kills: 31,
        deaths: 12,
        assists: 22,
    },
}) => {
    const { type, NavBox } = useNavBox(0);
    return (
        <Container>
            <NavBox navigationTypes={rankTypes} />
            {summary && <KDAGraph {...summary} />}
            <MostChampionBox champions={champions} />
            <PreferPositionBox
                positions={positions}
                totalGames={summary.wins + summary.losses}
            />
        </Container>
    );
};
export default GameHistory;
