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
	BooleanField,
	BooleanInput,
	DateField,
} from 'react-admin';

export const NotificationsList = () => (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
			 <ReferenceField source="userId" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <TextField source="description" />
			<BooleanField source='isReaded'/>
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);

export const NotificaitonEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
			<ReferenceInput source="userId" reference="users" >
        <SelectInput optionText="email" validate={required()}/>
      </ReferenceInput>
      <TextInput source="description" />
			<BooleanInput source='isReaded'/>
    </SimpleForm>
  </Edit>
);

export const NotificationCreate = () => (
  <Create>
    <SimpleForm>
			<ReferenceInput source="userId" reference="users" >
        <SelectInput optionText="email" validate={required()}/>
      </ReferenceInput>
      <TextInput source="description" />
			<BooleanInput source='isReaded'/>
    </SimpleForm>
  </Create>
);