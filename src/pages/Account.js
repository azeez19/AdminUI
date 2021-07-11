import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from 'src/components/account/AccountProfile';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Criteasy | Update Entities</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <SettingsNotifications />
      </Container>
    </Box>
  </>
);

export default SettingsView;
