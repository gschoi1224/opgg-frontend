import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 37px;
`;
const StyledNav = styled.ul`
    width: 100%;
    display: flex;
    padding: 0px 16px;
    border-radius: 2px 2px 0 0;
    li {
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: NanumBarunGothicOTF;
        font-size: 12px;
        color: var(--greyish-brown);
        cursor: pointer;
        position: relative;
        top: 1px;
    }
    li.active {
        font-weight: bold;
        color: var(--bluish);
        border-bottom: 2px solid var(--bluish);
    }
    li + li {
        margin-left: 24px;
    }
`;

const NavBoxComponent = ({
    navigations = ['전체', '솔로게임', '자유랭크'],
    setType,
    type,
}) => {
    return (
        <Container>
            <StyledNav className="whiteBox">
                {navigations.map((nav, i) => (
                    <li
                        className={type === i ? 'active' : ''}
                        onClick={() => setType(i)}
                        key={'nav' + nav}
                    >
                        {nav}
                    </li>
                ))}
            </StyledNav>
        </Container>
    );
};

export default NavBoxComponent;
