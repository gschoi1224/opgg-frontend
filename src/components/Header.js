import { useState } from 'react';
import styled from 'styled-components';
import SearchHistory from './common/SearchHistory';
import SearchInput from './SearchInput';

const StyledHeader = styled.header`
    width: 100%;
    height: 97px;
    margin: 0 0 15px;
    padding-top: 53px;
    background-color: var(--azure);
    display: flex;
    justify-content: center;
    min-width: 1000px;
    .header-layout {
        width: 1000px;
        display: flex;
        justify-content: flex-end;
        position: relative;
    }
`;

const Header = () => {
    const [historyShow, setHistoryShow] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <StyledHeader>
            <div className="header-layout">
                <SearchInput
                    setHistoryShow={setHistoryShow}
                    setIsFocused={setIsFocused}
                />
                {historyShow && (
                    <SearchHistory
                        setHistoryShow={setHistoryShow}
                        isFocused={isFocused}
                    />
                )}
            </div>
        </StyledHeader>
    );
};

export default Header;
