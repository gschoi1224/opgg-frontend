import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    grid-row-gap: 6px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    .kda {
        font-family: Helvetica;
        font-size: 15px;
        letter-spacing: -0.58px;
        color: var(--warm-grey-three);
        b {
            color: var(--gunmetal);
        }
        .death {
            color: var(--scarlet);
        }
    }
    .ratio {
        font-size: 11px;
        font-weight: bold;
        letter-spacing: -0.42px;
        font-family: AppleSDGothicNeo;
        color: var(--gunmetal);
        b {
            color: var(--black);
        }
    }
    .multiKill {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        .killBadge {
            height: 18px;
            padding: 3px 5px;
            border-radius: 9px;
            border: solid 1px var(--reddish-two);
            background-color: var(--tomato);
            font-family: AppleSDGothicNeo;
            font-size: 10px;
            letter-spacing: -0.38px;
            color: var(--white-two);
        }
        .opScoreBadge {
            height: 18px;
            padding: 3px 5px;
            border-radius: 9px;
            border: solid 1px var(--warm-purple);
            background-color: var(--amethyst);
            font-family: Helvetica;
            font-size: 10px;
            color: var(--white-two);
        }
    }
`;

const getKillString = (str) => {
    switch (str.toLowerCase()) {
        case 'double':
            return '더블킬';
        case 'triple':
            return '트리플킬';
        case 'quadra':
            return '쿼드라킬';
        case 'penta':
            return '펜타킬';
        default:
            return '';
    }
};

const KDABox = ({
    kdaString,
    kill,
    death,
    assist,
    largestMultiKillString,
    opScordBadge,
}) => {
    return (
        <Container>
            <div className="kda">
                <b>{kill}</b> / <b className="death">{death}</b> /{' '}
                <b>{assist}</b>
            </div>
            <div className="ratio">
                <b
                    className={
                        Number(kdaString.split(':')[0]) >= 6
                            ? 'evaluatedGod'
                            : ''
                    }
                >
                    {kdaString}
                </b>{' '}
                평점
            </div>
            <div className="multiKill">
                {largestMultiKillString && (
                    <dlv className="killBadge">
                        {getKillString(largestMultiKillString.split(' ')[0])}
                    </dlv>
                )}
                {opScordBadge && (
                    <dlv className="opScoreBadge">
                        {opScordBadge.toUpperCase()}
                    </dlv>
                )}
            </div>
        </Container>
    );
};

export default KDABox;
