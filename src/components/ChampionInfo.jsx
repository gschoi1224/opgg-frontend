import React, { Fragment } from 'react';
import styled from 'styled-components';
import useNavBox from '../hooks/useNavBox';
import ChampionBox from './Champion/ChampionBox';
import RatioGraph from './Champion/RatioGraph';
import NoData from './common/NoData';

const Container = styled.div`
    width: 300px;
    margin-top: 8px;
    border-bottom: 0;
`;

const navigationTypes = ['챔피언 승률', '7일간 랭크 승률'];

const ChampionInfo = ({ champions, recentWinRate }) => {
    const { type, NavBox } = useNavBox(1);

    return (
        <Container className="grayBox">
            <NavBox navigationTypes={navigationTypes} />
            {type === 0 && (
                <div className="championBox">
                    {champions?.length > 0 ? (
                        champions.map(({ key, ...cham }) => (
                            <Fragment key={cham.rank + '_' + key}>
                                <ChampionBox {...cham} />
                            </Fragment>
                        ))
                    ) : (
                        <NoData height={200} />
                    )}
                </div>
            )}

            {type === 1 && (
                <div className="championBox">
                    {recentWinRate?.length > 0 ? (
                        recentWinRate.map(({ key, ...cham }) => (
                            <Fragment
                                key={'recentWinRank' + cham.wins + '_' + key}
                            >
                                <RatioGraph
                                    {...cham}
                                    games={cham.wins + cham.losses}
                                />
                            </Fragment>
                        ))
                    ) : (
                        <NoData height={200} />
                    )}
                </div>
            )}
        </Container>
    );
};

export default ChampionInfo;
