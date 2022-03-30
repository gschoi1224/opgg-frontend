import { useCallback, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import OpggIcon from '../../assets/svg/icon-gg.svg';
import FitSummoner from './FitSummoner';
import SearchHistory from './SearchHistory';

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
    position: relative;
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
    const input = useRef(null);
    const [historyShow, setHistoryShow] = useState(false);
    const [resultShow, setResultShow] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const onFocusHandler = useCallback((e) => {
        setIsFocused(true);
        if (!e.target.value) {
            setHistoryShow(true);
            setResultShow(false);
        } else {
            setHistoryShow(false);
            setResultShow(true);
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
                onChange={onFocusHandler}
                ref={input.current}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                type="text"
                placeholder="소환사명, 챔피언···"
            />
            <StyledButton>
                <img src={OpggIcon} alt="검색 아이콘" />
            </StyledButton>
            {historyShow && (
                <SearchHistory
                    setHistoryShow={setHistoryShow}
                    isFocused={isFocused}
                />
            )}
            {resultShow && (
                <FitSummoner
                    setResultShow={setResultShow}
                    isFocused={isFocused}
                />
            )}
        </Container>
    );
};

export default SearchInput;
