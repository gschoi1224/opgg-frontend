import styled from 'styled-components';
import positionName from '../../utils/positionName';
import positionImage from '../../utils/positionImage';
import Partition from '../common/Partition';

const Container = styled.div`
    column-count: 2;
    display: grid;
    grid-template-columns: 28px auto;
    grid-column-gap: 8px;
    grid-row-gap: 3px;
    width: 100%;
    align-items: center;
    .imgBox {
        grid-row: span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .name {
        font-family: NanumBarunGothicOTF;
        font-size: 14px;
        color: var(--black);
    }
    .ratio {
        .roleRatio {
            font-family: Helvetica;
            font-size: 11px;
            color: var(--bluish);
        }
        .winRatio {
            font-family: Helvetica;
            font-size: 11px;
            color: var(--brownish-grey-two);
            .rate {
                color: var(--black);
            }
        }
    }
`;

const PreferPosition = ({ games, wins, position, totalGames }) => {
    return (
        <Container>
            <div className="imgBox">
                <img src={positionImage(position)} alt={'icon_' + position} />
            </div>
            <div className="name">
                <span>{positionName(position)}</span>
            </div>
            <div className="ratio">
                <span className="roleRatio">
                    <b>{Math.round((games / totalGames) * 100)}</b>%
                </span>
                <Partition />
                <span className="winRatio">
                    승률{' '}
                    <span className="rate">
                        <b>{Math.round((wins / games) * 100)}</b>%
                    </span>
                </span>
            </div>
        </Container>
    );
};

export default PreferPosition;
