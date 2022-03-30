import { useMemo } from 'react';
import styled from 'styled-components';
import MostChampion from './MostChampion';

const Container = styled.section`
    width: 230px;
    height: 158px;
    border-top: 0;
    border-left: 0;
    padding: 16px;
    border-radius: 0;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        img {
            border-radius: 50%;
            width: 34px;
            height: 34px;
        }
        .blankList {
            width: 100%;
            height: 34px;
            display: flex;
        }
        .blankText {
            display: flex;
            margin-left: 8px;
            align-items: center;
            font-family: NanumBarunGothicOTF;
            font-size: 11px;
            color: var(--warm-grey-two);
            width: calc(100% - 40px);
            height: 34px;
            display: flex;
        }
    }
`;

const MostChampionBox = ({ champions }) => {
    const blankChampions = useMemo(
        () => Array.from({ length: 3 - champions.length }),
        [champions],
    );
    return (
        <Container className="grayBox">
            <ul>
                {champions.map((cham) => (
                    <MostChampion {...cham} key={'most_' + cham.key} />
                ))}
                {blankChampions?.length > 0 &&
                    blankChampions.map((_, i) => (
                        <li key={'blankChampion' + i} className="blankList">
                            <img
                                src={'/assets/images/group.png'}
                                alt={'없는 챔피언'}
                            />
                            <div className="blankText">
                                <span>챔피언 정보가 없습니다.</span>
                            </div>
                        </li>
                    ))}
            </ul>
        </Container>
    );
};

export default MostChampionBox;
