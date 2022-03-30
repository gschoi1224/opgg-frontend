import styled from 'styled-components';
import SearchInput from './header/SearchInput';

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
    return (
        <StyledHeader>
            <div className="header-layout">
                <SearchInput />
            </div>
        </StyledHeader>
    );
};

export default Header;
