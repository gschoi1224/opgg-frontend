import { useCallback } from 'react';
import { useRef } from 'react';
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

const SearchInput = ({ setHistoryShow, setIsFocused }) => {
    const input = useRef(null);
    const onFocusHandler = useCallback((e) => {
        if (!e.target.value) {
            setIsFocused(true);
            setHistoryShow(true);
        }
        // eslint-disable-next-line
    }, []);
    const onBlurHandler = useCallback(() => {
        setIsFocused(false);
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <StyledInput
                onInput={(e) => console.log(e.target.value)}
                ref={input.current}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                type="text"
                placeholder="소환사명, 챔피언···"
            />
            <StyledButton>
                <img src={OpggIcon} alt="검색 아이콘" />
            </StyledButton>
        </Container>
    );
};

export default SearchInput;
