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
  useEditController,
} from 'react-admin';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const requestStatuses = {
  Accepted: 'Принята',
  Pending: 'В ожидании',
  Declined: 'Отклонена',
  Canceled: 'Отменена',
};

const statusChoices = [
  { id: 'Accepted', name: 'Принята' },
  { id: 'Pending', name: 'В ожидании' },
  { id: 'Declined', name: 'Отклонена' },
  { id: 'Canceled', name: 'Отменена' },
];

type RequestStatusType = keyof typeof requestStatuses;

interface Request {
  id: number;
  userId: number;
  status: RequestStatusType;
  description: string;
  isOuterRequest: boolean;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
}

export const RequestsList = () => (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="email" />
      </ReferenceField>
      <TextField source="description" />
      <TextField source="phone" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const RequestEdit = () => {
  const { id } = useParams();
  const { record } = useEditController<Request>({
    resource: 'requests',
    id: Number(id),
  });

  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="email" validate={required()} />
        </ReferenceInput>
        <SelectInput
          source="status"
          validate={required()}
          choices={statusChoices}
        />
        <TextInput source="phone" validate={required()} />
        <TextInput source="description" />
        {record?.isOuterRequest && record.latitude && record.longitude && (
          <YMaps>
            <Map
              width={'100%'}
              height={'500px'}
              defaultState={{
                center: [record.latitude, record.longitude],
                zoom: 18,
              }}
            >
              <Placemark
                defaultGeometry={[record.latitude, record.longitude]}
              />
            </Map>
          </YMaps>
        )}
      </SimpleForm>
    </Edit>
  );
};

export const RequestCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="email" validate={required()} />
      </ReferenceInput>
      <SelectInput
        source="status"
        validate={required()}
        choices={statusChoices}
      />
      <TextInput source="phone" validate={required()} />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
