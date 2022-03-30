import React, { Fragment } from 'react';
import styled from 'styled-components';
import useNavBox from '../hooks/useNavBox';
import RatioGraph from './Champion/RatioGraph';
import NoData from './common/NoData';

const Container = styled.div`
    width: 300px;
    margin-top: 8px;
    border-bottom: 0;
`;

const navigationTypes = ['챔피언 승률', '7일간 랭크 승률'];

const WinRatioGraph = ({
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
    ],
}) => {
    const { type, NavBox } = useNavBox(1);
    return (
        <Container className="grayBox">
            <NavBox navigationTypes={navigationTypes} />
            <div className="championBox">
                {champions?.length > 0 ? (
                    champions.map(({ key, ...cham }) => (
                        <Fragment key={cham.rank + '_' + key}>
                            <RatioGraph {...cham} />
                        </Fragment>
                    ))
                ) : (
                    <NoData height={200} />
                )}
            </div>
        </Container>
    );
};

export default WinRatioGraph;
