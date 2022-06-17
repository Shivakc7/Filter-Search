import { useEffect, useState } from "react";
import styled from "styled-components";
import TableComp from "./table";
import { Data } from "./users";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  /* text-transform: capitalize; */
`;
const List = styled.ul`
  list-style: none;
  text-align: center;
`;
const ListItem = styled.li`
  font-size: 18px;
  margin: 15px 0;
`;
function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `https://dummyjson.com/users/search?q=${query}`
      );
      const data = await response.data;

      setUsers(data.users);
    };
    fetchPosts();
  }, [query]);

  // const keys = ["firstName", "lastName", "email", "gender"]
  // const search = (data) => {
  //   return data.filter(
  //     (user) =>
  //     keys.some((key) => user[key].toLowerCase().includes(query)));
  // };

  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <TableComp data={users} />
        {/* <List>
          {Data.filter((user) =>
            user.firstName.toLowerCase().includes(query)
          ).map((user) => {
            return <ListItem key={user.id}>{user.firstName}</ListItem>;
          })}
        </List> */}
      </Wrapper>
    </Container>
  );
}

export default App;
