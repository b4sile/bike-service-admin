import { MenuItem } from '@mui/material';
import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';

export const LogoutButton = forwardRef((props, ref) => {
  const logout = useLogout();
  const handleClick = () => logout();
  return (
    <MenuItem onClick={handleClick} ref={ref as React.MutableRefObject<HTMLLIElement | null>}>
			Выйти
    </MenuItem>
  );
});
