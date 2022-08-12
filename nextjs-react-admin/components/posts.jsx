import { Datagrid, EditButton, List, ReferenceField, ReferenceManyField, TextField } from 'react-admin';

import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            {/* <EditButton /> */}
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            {/* <TextInput source="id" /> */}
            <TextInput source="title" label="Tytuł" />
            <TextInput source="body" />
        </SimpleForm>
        <ReferenceField source="userId" reference="users">
            <TextField source="name" />
        </ReferenceField>

    </Edit>
);