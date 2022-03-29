import React from 'react';
import styled from 'styled-components';
import useNavBox from '../hooks/useNavBox';
import ChampionBox from './Champion/ChampionBox';

const Container = styled.div`
    width: 300px;
    margin-top: 8px;
    border-bottom: 0;
`;

const StyledEmptyBox = styled.div`
    height: 200px;
    border-bottom: 1px solid var(--silver-three);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .exclamation {
        width: 70px;
        height: 70px;
        border: 1px solid #555e5e;
        color: #555e5e;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .noData {
        font-family: Helvetica;
        text-align: center;
        font-size: 16px;
        color: #555e5e;
    }
`;

const navigationTypes = ['챔피언 승률', '7일간 랭크 승률'];

const ChampionInfo = ({
    champions = [
        {
            id: 90,
            key: 'Malzahar',
            name: '말자하',
            imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png?image=w_30&v=1',
            games: 27,
            kills: 40,
            deaths: 75,
            assists: 294,
            wins: 25,
            losses: 2,
            cs: 187,
            rank: 1,
        },
        {
            id: 106,
            key: 'Volibear',
            name: '볼리베어',
            imageUrl:
                '//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841',
            games: 13,
            kills: 274,
            deaths: 120,
            assists: 20,
            wins: 6,
            losses: 7,
            cs: 52,
            rank: 2,
        },
        {
            id: 82,
            key: 'Mordekaiser',
            name: '모데카이저',
            imageUrl:
                'https:///opgg-static.akamaized.net/images/lol/champion/Mordekaiser.png?image=q_auto&v=1591083841',
            games: 16,
            kills: 277,
            deaths: 59,
            assists: 270,
            wins: 1,
            losses: 15,
            cs: 59,
            rank: 3,
        },
        {
            id: 18,
            key: 'Tristana',
            name: '트리스타나',
            imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png?image=w_30&v=1',
            games: 59,
            kills: 221,
            deaths: 300,
            assists: 1,
            wins: 53,
            losses: 6,
            cs: 59,
            rank: 4,
        },
        {
            id: 82,
            key: 'Mordekaiser',
            name: '모데카이저',
            imageUrl:
                'https:///opgg-static.akamaized.net/images/lol/champion/Mordekaiser.png?image=q_auto&v=1591083841',
            games: 27,
            kills: 272,
            deaths: 86,
            assists: 29,
            wins: 8,
            losses: 19,
            cs: 118,
            rank: 5,
        },
        {
            id: 80,
            key: 'Pantheon',
            name: '판테온',
            imageUrl:
                '//opgg-static.akamaized.net/images/lol/champion/Pantheon.png?image=q_auto&v=1591083841',
            games: 13,
            kills: 202,
            deaths: 16,
            assists: 192,
            wins: 1,
            losses: 12,
            cs: 152,
            rank: 6,
        },
        {
            id: 45,
            key: 'Veigar',
            name: '베이가',
            imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Veigar.png?image=q_auto&v=1591083841',
            games: 91,
            kills: 293,
            deaths: 243,
            assists: 107,
            wins: 42,
            losses: 49,
            cs: 168,
            rank: 7,
        },
        {
            id: 266,
            key: 'Aatrox',
            name: '아트록스',
            imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=q_auto&v=1591083841',
            games: 78,
            kills: 214,
            deaths: 200,
            assists: 116,
            wins: 19,
            losses: 59,
            cs: 171,
            rank: 8,
        },
        {
            id: 106,
            key: 'Volibear',
            name: '볼리베어',
            imageUrl:
                '//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841',
            games: 94,
            kills: 114,
            deaths: 79,
            assists: 66,
            wins: 35,
            losses: 59,
            cs: 60,
            rank: 9,
        },
    ],
}) => {
    const { type, NavBox } = useNavBox(1);
    return (
        <Container className="grayBox">
            <NavBox navigationTypes={navigationTypes} />
            <div className="championBox">
                {champions?.length > 0 ? (
                    champions.map((cham) => <ChampionBox {...cham} />)
                ) : (
                    <StyledEmptyBox>
                        <div className="exclamation">!</div>
                        <div className="noData">기록된 전적이 없습니다.</div>
                    </StyledEmptyBox>
                )}
            </div>
        </Container>
    );
};

export default ChampionInfo;
