import styled from 'styled-components';
import SearchInput from './SearchInput';

const StyledHeader = styled.header`
    width: 100%;
    height: 97px;
    margin: 0 0 15px;
    padding-top: 53px;
    background-color: var(--azure);
    display: flex;
    justify-content: center;
    .header-layout {
        width: 1000px;
        display: flex;
        justify-content: flex-end;
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
