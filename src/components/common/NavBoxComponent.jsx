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
const StyledNav2 = styled.ul`
    width: 100%;
    border: 0;
    display: flex;
    justify-content: space-around;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        font-family: AppleSDGothicNeo;
        font-size: 12px;
        color: var(--brownish-grey);
        cursor: pointer;
    }
    li.active {
        font-weight: bold;
        border-bottom: 0;
    }
    li + li {
        border-left: 1px solid var(--silver-three);
    }
`;
const StyledNav3 = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        font-size: 14px;
        color: rgb(156, 156, 156);
        background-color: rgb(227, 227, 227);
        cursor: pointer;
    }
    li.active {
        font-weight: bold;
        font-size: 14px;
        color: rgb(74, 74, 74);
        background-color: rgb(255, 255, 255);
    }
`;

const NavBoxComponent = ({ navigationTypes, setType, type, navType = 0 }) => {
    return (
        <Container>
            {navType === 0 && (
                <StyledNav className="whiteBox">
                    {navigationTypes.map((nav, i) => (
                        <li
                            className={type === i ? 'active' : ''}
                            onClick={() => setType(i)}
                            key={'nav' + nav}
                        >
                            {nav}
                        </li>
                    ))}
                </StyledNav>
            )}
            {navType === 1 && (
                <StyledNav2>
                    {navigationTypes.map((nav, i) => (
                        <li
                            className={
                                type === i ? 'active grayBox' : 'whiteBox'
                            }
                            onClick={() => setType(i)}
                            key={'nav' + nav}
                        >
                            {nav}
                        </li>
                    ))}
                </StyledNav2>
            )}
            {navType === 2 && (
                <StyledNav3>
                    {navigationTypes.map((nav, i) => (
                        <li
                            className={type === i ? 'active' : ''}
                            onClick={() => setType(i)}
                            key={'nav' + nav}
                        >
                            {nav}
                        </li>
                    ))}
                </StyledNav3>
            )}
        </Container>
    );
};

export default NavBoxComponent;
