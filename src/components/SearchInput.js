import styled from 'styled-components';
import OpggIcon from '../assets/svg/icon-gg.svg';

const Container = styled.form`
    width: 260px;
    height: 32px;
    border-radius: 2px;
    background-color: var(--white-two);
    padding: 9px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
`;

const StyledInput = styled.input`
    width: 75%;
    height: 100%;
    font-size: 12px;
    font-family: AppleSDGothicNeo;
    color: var(--warm-grey);
`;

const StyledButton = styled.button`
    width: 20%;
    background-color: inherit;
    border: 0;
    img {
        width: 100%;
    }
    cursor: pointer;
`;

const SearchInput = () => {
    return (
        <Container>
            <StyledInput type="text" placeholder="소환사명, 챔피언···" />
            <StyledButton>
                <img src={OpggIcon} />
            </StyledButton>
        </Container>
    );
};

export default SearchInput;
