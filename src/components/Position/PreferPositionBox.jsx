import styled from 'styled-components';

import PreferPosition from './PreferPosition';

const Container = styled.section`
    width: 184px;
    height: 158px;
    border-top: 0;
    border-left: 0;
    padding: 16px;
    border-radius: 0 0 2px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .partition {
        width: 100%;
        display: flex;
        align-items: center;
        .title {
            font-family: NanumBarunGothicOTF;
            font-size: 12px;
            color: var(--brownish-grey-two);
        }
    }
`;

const PreferPositionBox = ({ positions, totalGames }) => {
    return (
        <Container className="grayBox">
            <div className="partition">
                <span className="title">선호 포지션 (랭크)</span>
            </div>
            {positions?.length &&
                positions.map((position) => (
                    <PreferPosition
                        {...position}
                        key={position.positionName + position.games}
                        totalGames={totalGames}
                    />
                ))}
        </Container>
    );
};

export default PreferPositionBox;
