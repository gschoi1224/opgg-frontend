import classNames from 'classnames';
import { useMemo } from 'react';
import styledComponents from 'styled-components';
import getKDA from '../../utils/getKDA';
import mathRound from '../../utils/mathRound';
import MyPieChart from '../common/PieChart';

const StyledKDAInfo = styledComponents.section`
    width: 276px;
    height: 158px;
    border-top: 0;
    padding: 15px 24px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 0 0 0 2px;

    .chartArea {
        width: 90px;
        height: 120px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 10px;
        &:before {
            ${({ caption }) => `content : '${caption}'`};
            font-family: Helvetica;
            font-size: 12px;
            color: var(--brownish-grey-two);
            position: absolute;
            top: -10px;
            z-index: 99;
        }
        &:after {
            ${({ ratio }) => `content : '${ratio}'`};
            font-family: Helvetica;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: var(--greyish-brown);
            position: absolute;
        }
    }
    .statistics {
        padding-left: 35px;
        .kdaArea {
            font-family: Helvetica;
            font-size: 11px;
            font-weight: bold;
            text-align: center;
            color: var(--black);
            margin-bottom: 6px;
            .slash {
                font-weight: normal;
                color: var(--warm-grey-two);
            }
            .deaths {
                color: var(--reddish);
            }
        }
        .evaluation {
            font-family: Helvetica;
            font-size: 16px;
            text-align: center;
            color: var(--brownish-grey);
        }
    }
`;

const KDAGraph = ({ wins, losses, kills, deaths, assists }) => {
    const totalGames = useMemo(() => wins + losses, [wins, losses]);
    const winRatio = mathRound((wins / totalGames) * 100);
    const kda = getKDA(kills, deaths, assists);
    return (
        <StyledKDAInfo
            className="grayBox"
            caption={`${totalGames}전 ${wins > 0 ? wins + '승' : ''} ${
                losses > 0 ? losses + '패' : ''
            }`}
            ratio={winRatio + '%'}
        >
            <div className="chartArea">
                <MyPieChart
                    radius={90}
                    wins={wins}
                    weight={13}
                    loses={losses}
                />
                <span className="chartLavel"></span>
            </div>
            <div className="statistics">
                <div className="kdaArea">
                    <span>{kills / totalGames}</span>
                    <span className="slash"> / </span>
                    <span className="deaths">{deaths / totalGames}</span>
                    <span className="slash"> / </span>
                    <span>{assists / totalGames}</span>
                </div>
                <div className="evaluation">
                    <span
                        className={classNames(
                            'evaluation',
                            kda >= 5
                                ? 'kdaHigh'
                                : kda >= 4
                                ? 'kdaCommon'
                                : kda >= 3
                                ? 'kdaLow'
                                : '',
                        )}
                    >
                        <b>{kda}</b>
                        :1
                    </span>
                    &nbsp;
                    <span className={winRatio >= 60 ? 'winRatioGod' : ''}>
                        ({winRatio}%)
                    </span>
                </div>
            </div>
        </StyledKDAInfo>
    );
};

export default KDAGraph;