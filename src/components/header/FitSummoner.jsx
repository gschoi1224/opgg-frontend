import { useMemo } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import toTierString from '../../utils/toTierString';

const Container = styled.div`
    width: 260px;
    background: pink;
    position: absolute;
    top: 33px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
    overflow: hidden;
    left: 0;
`;

const StyledList = styled.ul`
    width: 100%;
    color: var(--charcoal);
    font-size: 12px;
    line-height: 15px;
    padding: 8px 0;
    align-items: center;
    li {
        width: 100%;
        display: flex;
        padding: 6px 16px;
        cursor: pointer;
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-right: 14px;
        }
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
    }
    li:hover {
        background-color: var(--light-blue-grey);
    }
`;

const FitSummoner = ({ summoner, isFocused, setResultShow }) => {
    const tier = useMemo(() => {
        if (
            summoner.leagues[0]?.hasResults &&
            summoner.leagues[0]?.tierRank.name === '솔랭'
        ) {
            return `${toTierString(
                summoner.leagues[0].tierRank.shortString,
            )} - ${Number(summoner.leagues[0].tierRank.lp).toLocaleString()}LP`;
        } else {
            return `Level ${summoner.level}`;
        }
    }, [summoner]);
    return (
        <Container>
            <OutsideClickHandler
                onOutsideClick={() => !isFocused && setResultShow(false)}
            >
                <StyledList>
                    {summoner && (
                        <li>
                            <img
                                src={summoner.profileImageUrl}
                                alt={summoner.name}
                            />
                            <div className="championInfo">
                                <div>
                                    <span className="chamName">
                                        {summoner.name}
                                    </span>
                                </div>
                                <div className="historyContainer">{tier}</div>
                            </div>
                        </li>
                    )}
                </StyledList>
            </OutsideClickHandler>
        </Container>
    );
};

export default FitSummoner;
