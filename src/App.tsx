import React from 'react';
import { Admin, AppBar, Layout, LayoutProps, Resource, UserMenu } from 'react-admin';
import { UserCreate, UserEdit, UserList } from './resources/users';
import { dataProvider } from './providers/dataProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import ru from 'ra-language-russian';
import { LoginPage } from './components/LoginPage';
import { authProvider } from './providers/authProvider';
import { LogoutButton } from './components/LogoutButton';
import { ServiceCreate, ServiceEdit, ServicesList } from './resources/services';
import { RequestCreate, RequestEdit, RequestsList } from './resources/requests';
import { NotificaitonEdit, NotificationCreate, NotificationsList } from './resources/notifications';

export const i18nProvider = polyglotI18nProvider(
    () => ru,
    'ru',
		{ allowMissing: true, }
);

const MyUserMenu = () => <UserMenu><LogoutButton /></UserMenu>;

const MyAppBar = () => <AppBar userMenu={<MyUserMenu />} />;

const MyLayout = (props: LayoutProps) => <Layout {...props} appBar={MyAppBar} />;

function App() {
  return (
		<Admin disableTelemetry dataProvider={dataProvider} i18nProvider={i18nProvider} loginPage={LoginPage} authProvider={authProvider} layout={MyLayout}>
			<Resource name='users' options={{ label: 'Пользователи' }} list={UserList} create={UserCreate} edit={UserEdit} />
			<Resource name='services' options={{ label: 'Услуги' }} list={ServicesList} create={ServiceCreate} edit={ServiceEdit} />
			<Resource name='requests' options={{ label: 'Заявки' }} list={RequestsList} create={RequestCreate} edit={RequestEdit} />
			<Resource name='notifications' options={{ label: 'Уведомления' }} list={NotificationsList} create={NotificationCreate} edit={NotificaitonEdit} />
		</Admin>
  );
}

export default App;
