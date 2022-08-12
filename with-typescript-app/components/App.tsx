// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserEdit, UserList } from "./users";
import { PostEdit, PostList } from "./posts";
import PostIcon from "@mui/icons-material/Book"
import UserIcon from "@mui/icons-material/Group"
import Dashboard from "./Dashboard";
// import authProvider from "./AuthProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} icon={PostIcon} />
  </Admin>
);
export default App;
