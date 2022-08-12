import { Datagrid, EmailField, List, ReferenceManyField, TextField } from 'react-admin';

import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField sx={{ color: 'red' }} source="id" />
            <TextField source="name" />
            <TextField source="username" />
            {/* <EmailField source="email" /> */}
            <TextField source="address.street" />
            <TextField source="phone" />
            {/* <TextField source="website" /> */}
            <TextField source="company.name" />
        </Datagrid>
    </List>
);



export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
        {/* posty uzytkownika */}
        <ReferenceManyField reference="posts" target="userId">
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
                {/* <EditButton /> */}
            </Datagrid>
        </ReferenceManyField>
    </Edit>
);
