import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  BooleanField,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Create,
} from 'react-admin';

import { required, minLength, email } from 'react-admin';

const validateEmail = [required(), email()];
const validateField = [required(), minLength(4)];

export const UserList = () => (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="surname" />
      <TextField source="lastname" />
      <BooleanField source="isAdmin" />
      <EmailField source="email" />
      <TextField source="phone" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="surname" />
      <TextInput source="lastname" />
      <TextInput source="phone" />
      <TextInput source="email" type="email" validate={validateEmail} />
      <BooleanInput source="isAdmin" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="surname" />
      <TextInput source="phone" />
      <TextInput source="email" type="email" validate={validateEmail} />
      <TextInput source="password" validate={validateField} />
      <BooleanInput source="isAdmin" />
    </SimpleForm>
  </Create>
);
