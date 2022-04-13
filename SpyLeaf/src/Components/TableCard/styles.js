import styled from 'styled-components/native';

const TablePrimary = styled.View`
    alignItems: center;
    width: 90%;
    height: 440px;
    marginTop: 20;
    backgroundColor: #DCDCDC;

`;
const TableHeader = styled.View`
    flex-direction: row;

`;

const TableSecondary = styled.View`
    marginTop: 30;
    width: 90%;
    height: 90%;
    backgroundColor: #C0C0C0;
`;

export { TablePrimary, TableHeader, TableSecondary };