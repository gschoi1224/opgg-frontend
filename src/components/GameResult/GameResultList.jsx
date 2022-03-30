import styled from 'styled-components';
import GameResultBox from './GameResultBox';

const Container = styled.ul`
    width: 690px;
    display: grid;
    grid-row-gap: 8px;
    flex-wrap: wrap;
    margin-top: 16px;
`;

const GameResultList = ({ games, details }) => {
    return (
        <Container>
            {games?.length > 0 &&
                games.map((game, i) => (
                    <GameResultBox
                        {...game}
                        key={game.gameId}
                        detail={details[i]}
                    />
                ))}
        </Container>
    );
};

export default GameResultList;
