import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
	NumberInput,
} from 'react-admin';

import { required} from 'react-admin';

export const ServicesList = () => (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="price" />
    </Datagrid>
  </List>
);

export const ServiceEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} />
      <TextInput source="description" />
      <NumberInput source="price" validate={required()}/>
    </SimpleForm>
  </Edit>
);

export const ServiceCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()}/>
      <TextInput source="description" />
      <NumberInput source="price" validate={required()}/>
    </SimpleForm>
  </Create>
);