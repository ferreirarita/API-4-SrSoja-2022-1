import styled from 'styled-components/native';

const TablePrimary = styled.View`
    marginTop: 20px;
    alignItems: center;
    width: 91%;
    height: 410px;
    backgroundColor: #E9E9E9;

`;
const TableHeader = styled.View`
    flex-direction: column;
    alignItems: center;
    borderBottomWidth: 1px;
`;

const TableSecondary = styled.View`
    width: 94%;
    height: 370px;
    backgroundColor: #DADADA;
`;

export { TablePrimary, TableHeader, TableSecondary};