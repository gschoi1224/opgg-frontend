import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    div + div {
        margin-top: 8px;
    }
`;

const StyledArticle = styled.article`
    height: ${({ isSolo }) => `${isSolo ? '124px' : '98px'}`};
    padding: 10px 8px;
    display: flex;
    align-items: center;
    ${({ index }) => index === 1 && 'margin-top : 8px'};
    .rankImage {
        width: 104px;
        height: ${({ isSolo }) => `${isSolo ? '104px' : '64px'}`};
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: ${({ isSolo }) => `${isSolo ? '104px' : '64px'}`};
            height: ${({ isSolo }) => `${isSolo ? '104px' : '64px'}`};
        }
    }
    .rankInfo {
        height: ${({ isSolo }) => `${isSolo ? '104px' : '78px'}`};
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: column;
        .rankType {
            font-family: AppleSDGothicNeo;
            font-size: 11px;
            color: var(--cool-grey);
        }
        .positionInfo {
            font-family: AppleSDGothicNeo;
            font-size: 12px;
            color: #353a3a;

            .playCount {
                font-family: Helvetica;
            }
        }
        .tierInfo {
            font-family: Helvetica;
            font-size: ${({ isSolo }) => `${isSolo ? '15px' : '13px'}`};
            font-weight: bold;
            color: ${({ hasResults }) =>
                hasResults ? 'var(--bluish)' : 'var(--cool-grey)'};
        }
        .lp {
            font-family: Helvetica;
            font-size: 12px;
            font-weight: bold;
            color: var(--gunmetal);
        }
        .record {
            font-family: Helvetica;
            font-size: 12px;
            color: var(--cool-grey);
        }
        .winRate {
            font-family: Helvetica;
            font-size: 12px;
            color: var(--cool-grey);
        }

        span + span {
            margin-top: 4px;
        }
    }
`;

const RankInfo = ({ leagues }) => {
    return (
        <Container>
            {leagues?.length > 0 &&
                leagues.map(({ hasResults, wins, losses, tierRank }, i) => (
                    <StyledArticle
                        className="whiteBox"
                        isSolo={tierRank.name === '??????'}
                        index={i}
                        key={tierRank.name}
                        hasResults={hasResults}
                    >
                        {hasResults ? (
                            <>
                                <div className="rankImage">
                                    <img
                                        alt={tierRank.shortString}
                                        src={tierRank.imageUrl}
                                    />
                                </div>
                                <div className="rankInfo">
                                    <span className="rankType">
                                        {tierRank.name.replace(
                                            '??????',
                                            '?????? ??????',
                                        )}
                                    </span>
                                    {/* <span className="positionInfo">
                                        <b>???</b> (???{' '}
                                        <span className="playCount">27</span>
                                        ??????)
                                    </span> */}
                                    <span className="tierInfo">
                                        {tierRank.tier}{' '}
                                        {tierRank.shortString.slice(-1)}
                                    </span>
                                    <span className="recordInfo">
                                        <span className="lp">
                                            {tierRank.lp} LP
                                        </span>
                                        <span className="record">
                                            {' '}
                                            / {wins}??? {losses}???
                                        </span>
                                    </span>
                                    <span className="winRate">
                                        ??????{' '}
                                        {Math.round(
                                            (wins / (wins + losses)) * 100,
                                        )}
                                        %
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="rankImage">
                                    <img
                                        alt="?????? ?????????"
                                        src={
                                            tierRank.name === '??????'
                                                ? '/assets/images/unranked@2x.png'
                                                : '/assets/images/unranked.png'
                                        }
                                    />
                                </div>
                                <div className="rankInfo">
                                    <span className="rankType">
                                        {tierRank.name.replace(
                                            '??????',
                                            '?????? ??????',
                                        )}
                                    </span>
                                    <span className="tierInfo">Unranked</span>
                                </div>
                            </>
                        )}
                    </StyledArticle>
                ))}
        </Container>
    );
};

export default RankInfo;
