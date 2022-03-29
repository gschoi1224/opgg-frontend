import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    text-align: center;
    font-family: AppleSDGothicNeo;
    font-size: 11px;
    letter-spacing: -0.42px;
    color: var(--gunmetal);
    grid-row-gap: 6px;
    padding: 13px 0px;
    .killAttend {
        color: var(--scarlet);
    }
`;

const StatsBox = ({ level, cs, csPerMin, contributionForKillRate }) => {
    return (
        <Container>
            <span>레벨 {level}</span>
            <span>
                {cs} ({csPerMin}) CS
            </span>
            <span className="killAttend">킬관여 {contributionForKillRate}</span>
        </Container>
    );
};

export default StatsBox;
