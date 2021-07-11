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
        subheader="Load the Entities"
        title="Load Entities"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="Keyword"
              name="Keyword"
              label="Keyword"
              fullWidth
              autoComplete="Keyword"
            />
          </Grid>
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
              <FormLabel>Category</FormLabel>
              <Select>
                <MenuItem value={0}>Mobile</MenuItem>
                <MenuItem value={1}>Electronics</MenuItem>
                <MenuItem value={2}>Goods</MenuItem>
              </Select>
            </FormControl>
          </Grid>
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
              <FormLabel>Sub-Category</FormLabel>
              <Select>
                <MenuItem value={0}>One PLus</MenuItem>
                <MenuItem value={1}>Samsung</MenuItem>
                <MenuItem value={2}>LG</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="entitycount"
              name="entitycount"
              label="Entity Count"
              fullWidth
              autoComplete="Entity Count"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="desc"
              name="desc"
              label="Description"
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
          Load
        </Button>
      </Box>
    </Card>
  </form>
);

export default SettingsNotifications;
