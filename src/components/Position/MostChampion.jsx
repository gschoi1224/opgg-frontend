import classNames from 'classnames';
import { useMemo } from 'react';
import styled from 'styled-components';
import getKDA from '../../utils/getKDA';
import Partition from '../common/Partition';

const Container = styled.li`
    width: 100%;
    height: 34px;
    display: flex;
    .championInfo {
        margin-left: 8px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .historyContainer {
            display: flex;
            align-items: center;
        }
        .chamName {
            font-family: NanumBarunGothicOTF;
            font-size: 14px;
            color: var(--black);
        }
        .rate {
            font-size: 11px;
            color: var(--reddish);
            font-family: Helvetica;
        }
        .record {
            font-family: Helvetica;
            font-size: 11px;
            color: var(--greyish-brown);
            span {
                font-family: AppleSDGothicNeo;
            }
        }

        .score {
            font-family: Helvetica;
            font-size: 11px;
            font-weight: bold;
            color: var(--greyish-brown);
        }
    }
`;

const MostChampion = ({
    name,
    imageUrl,
    games,
    kills,
    deaths,
    assists,
    wins,
    losses,
}) => {
    const evaluation = useMemo(
        () => getKDA(kills, deaths, assists),
        [kills, deaths, assists],
    );
    const winRate = useMemo(
        () => Math.round((wins / games) * 100),
        [wins, games],
    );
    return (
        <Container>
            <img src={imageUrl} alt={name} />
            <div className="championInfo">
                <div>
                    <span className="chamName">{name}</span>
                </div>
                <div className="historyContainer">
                    <span
                        className={classNames('rate', {
                            oddsGod: winRate >= 60,
                        })}
                    >
                        <b>{winRate}</b>%
                    </span>
                    &nbsp;
                    <span className="record">
                        ({wins}
                        <span>승</span> {losses}
                        <span>패</span>)
                    </span>
                    <Partition />
                    <span
                        className={classNames('score', {
                            evaluatedGod: evaluation >= 6,
                        })}
                    >
                        {evaluation} 평점
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default MostChampion;
