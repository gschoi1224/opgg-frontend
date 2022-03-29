import styled from 'styled-components';

const StyledPartition = styled.div`
    width: 1px;
    height: 11px;
    background-color: var(--silver-three);
    display: inline-block;
    margin: 0px 6px;
`;

const Partition = () => {
    return <StyledPartition />;
};

export default Partition;
