import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  // Checkbox,
  Divider,
  FormControl,
  Grid,
  TextField,
  MenuItem,
  Select,
  // InputLabel,
  FormLabel
  // Typography
} from '@material-ui/core';

const SettingsNotifications = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="Refresh the Entities"
        title="Refresh Entities"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl
              required
              id="Entity"
              name="Entity"
              fullWidth
              // label="Entity"
              variant="outlined"
              // InputLabel="Entity"
            >
              <FormLabel>Create DB</FormLabel>
              <Select>
                <MenuItem value={0}>Yes</MenuItem>
                <MenuItem value={1}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="desc"
              name="desc"
              label="Description"
              multiline
              rows={5}
              fullWidth
              autoComplete="Description"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Refresh
        </Button>
      </Box>
    </Card>
  </form>
);

export default SettingsNotifications;
