import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Table = styled.table``;
const Tbody = styled.tbody``;
const TableRow = styled.tr``;
const TableHead = styled.th`
  padding-left: 20px;
`;
const TableData = styled.td`
  padding-left: 20px;
`;

const TableComp = ({ data }) => {
    
  return (
    <Container>
      <Table>
        <Tbody>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>SurName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Gender</TableHead>
          </TableRow>
          {data.map((user) => {
            const { firstName, lastName, id, email, gender } = user;
            return (
              <TableRow key={id}>
                <TableData>{firstName} </TableData>
                <TableData>{lastName}</TableData>
                <TableData>{email}</TableData>
                <TableData>{gender}</TableData>
              </TableRow>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default TableComp;
