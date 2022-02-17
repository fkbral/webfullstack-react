import React from 'react';
import { useSettings } from '../../hooks/settings';
import { Container, MenuItem } from './styles';

export default function Menu() {
  const { settings } = useSettings();
  const showDashboardMenuItem = settings.find(
    (x) => x.name === 'enableDashboard'
  )?.value;

  return (
    <Container>
      <MenuItem to="/home">Home</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      {showDashboardMenuItem === 'true' && (
        <MenuItem to="/dashboard">Dashboard</MenuItem>
      )}
      <MenuItem to="/peopleList">People</MenuItem>
      <MenuItem to="/gitHubProfile">Github Profile</MenuItem>
      <MenuItem to="/classList">Class list</MenuItem>
    </Container>
  );
}

// export default class Menu extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           fontSize: 19,
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <MenuItem
//           to="/"
//           style={{
//             marginRight: 15,
//           }}
//         >
//           Home
//         </MenuItem>
//         <MenuItem to="/about">About</MenuItem>
//       </div>
//     );
//   }
// }
