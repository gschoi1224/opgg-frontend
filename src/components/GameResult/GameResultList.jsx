import styled from 'styled-components';
import GameResultBox from './GameResultBox';

const Container = styled.ul`
    width: 690px;
    display: grid;
    grid-row-gap: 8px;
    flex-wrap: wrap;
    margin-top: 16px;
`;

const GameResultList = ({ games }) => {
    return (
        <Container>
            {games.map((game) => (
                <GameResultBox {...game} key={game.gameId} />
            ))}
        </Container>
    );
};

export default GameResultList;
