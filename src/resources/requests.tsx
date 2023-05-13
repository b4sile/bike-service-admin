import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
	ReferenceInput,
	SelectInput,
	ReferenceField,
	required,
} from 'react-admin';

export const RequestsList = () => (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
			 <ReferenceField source="userId" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <TextField source="description" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const RequestEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
			<ReferenceInput source="userId" reference="users" >
        <SelectInput optionText="email" validate={required()}/>
      </ReferenceInput>
      <TextInput source="status" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const RequestCreate = () => (
  <Create>
    <SimpleForm>
			<ReferenceInput source="userId" reference="users" >
        <SelectInput optionText="email" validate={required()}/>
      </ReferenceInput>
      <TextInput source="status" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);