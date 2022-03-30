import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 80px);
    grid-column-gap: 3px;
    justify-content: center;
`;

const StyledTeam = styled.ul`
    display: grid;
    grid-row-gap: 2px;
    li {
        font-family: AppleSDGothicNeo;
        font-size: 11px;
        letter-spacing: -0.42px;
        color: var(--greyish-brown);
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        height: 16px;
        cursor: pointer;

        .face {
            width: 16px;
            height: 16px;
            border: solid 1px #0d0819;
            margin-right: 2px;
        }
        .name {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 50px;
            white-space: nowrap;
        }
    }
`;

const ParticipantsBox = ({ teams }) => {
    return (
        <Container>
            {teams.map((team) => (
                <StyledTeam key={'team' + team.teamId}>
                    {team.players.map((player) => (
                        <li
                            key={'team' + team.teamId + player.summonerId}
                            onClick={() => {
                                window.location.href = `/summoners/${player.summonerName}`;
                            }}
                        >
                            <img
                                className="face"
                                src={player.champion.imageUrl}
                                alt="챔피언사진"
                            />
                            <div className="name">{player.summonerName}</div>
                        </li>
                    ))}
                </StyledTeam>
            ))}
        </Container>
    );
};

export default ParticipantsBox;
