import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';
import PhoneAndroidSharpIcon from '@material-ui/icons/PhoneAndroidSharp';
import { red } from '@material-ui/core/colors';

const Budget = (props) => (
  <Card
    sx={{ height: '400' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Category-Electronics
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            Sub-Category-Mobiles
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <PhoneAndroidSharpIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon sx={{ color: red[900] }} />
        {/* <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12
        </Typography> */}
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Click Here to Update Details of an Entity
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Budget;
