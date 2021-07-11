/* eslint-disable eol-last */
import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  // Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  // Checkbox,
  Divider,
  // FormControl,
  // Grid,
  TextField,
  // MenuItem,
  // Select,
  // InputLabel,
  // FormLabel
  // Typography
} from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TableFooter from '@material-ui/core/TableFooter';

function TablePaginationActions(props) {
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onPageChange
  } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(entid, ename, rating, reviewcount, category, subcategory, CategoryMapping, SubcategoryMapping, imageurl) {
  return {
    entid,
    ename,
    rating,
    reviewcount,
    category,
    subcategory,
    CategoryMapping,
    SubcategoryMapping,
    imageurl,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.entid}
        </TableCell>
        <TableCell align="right">{row.ename}</TableCell>
        <TableCell align="right">{row.rating}</TableCell>
        <TableCell align="right">{row.reviewcount}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.subcategory}</TableCell>
        {/* <TableCell align="right">{row.CategoryMapping}</TableCell>
        <TableCell align="right">{row.SubcategoryMapping}</TableCell>
        <TableCell align="right">{row.imageurl}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Card style={{ backgroundColor: 'snow' }}>
                <CardHeader
                  // subheader="Select an Entity and Update Details"
                  title="Update Details For the Selected Entity"
                />
                <Divider />
                <CardContent>
                  <Table size="small" aria-label="Update">
                    {/* <TableHead>
                      <TableRow>
                        <TableCell>Availability</TableCell>
                        <TableCell>Deals / Discounts</TableCell>
                      </TableRow>
                    </TableHead> */}
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <TextField
                            required
                            id="availability"
                            name="availability"
                            label="Availability (in HTML)"
                            fullWidth
                            autoComplete="availability"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <TextField
                            required
                            id="deals"
                            name="deals"
                            label="Deals / Discounts (in HTML)"
                            fullWidth
                            autoComplete="deals"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                          >
                            <Button
                              color="primary"
                              variant="contained"
                            >
                              Update Data
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                      {/* {row.history.map((historyRow) => (
                        <TableRow key={historyRow.date}>
                          <TableCell component="th" scope="row">
                            {historyRow.date}
                          </TableCell>
                          <TableCell>{historyRow.customerId}</TableCell>
                          <TableCell align="right">{historyRow.amount}</TableCell>
                          <TableCell align="right">
                            {Math.round(historyRow.amount * row.price * 100) / 100}
                          </TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    entid: PropTypes.string.isRequired,
    ename: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewcount: PropTypes.number.isRequired,
    category: PropTypes.number.isRequired,
    subcategory: PropTypes.number.isRequired,
    CategoryMapping: PropTypes.number.isRequired,
    SubcategoryMapping: PropTypes.number.isRequired,
    imageurl: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'xiaomi redmi 9 prime', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 9 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'One Plus 6T', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'Apple 12s', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'Oppo', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 10 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 11 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 12 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 13 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 14 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 15 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'xiaomi redmi 9 prime', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 9 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'One Plus 6T', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'Apple 12s', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'Oppo', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 10 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 11 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
  createData('370b24fb-f5e7-43fd-880a-c8413e01bd7c', 'redmi note 12 pro max', 4.8, 86680, 'Electronics', 'Mobiles', 'electronics', 'mobiles', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs'),
];

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <CardHeader
        subheader="Select an Entity and Update Details"
        title="Update Entities"
      />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Ent-ID</TableCell>
                <TableCell align="right">E-Name</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">ReviewCount</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">SubCategory</TableCell>
                {/* <TableCell align="right">CategoryMapping</TableCell>
                <TableCell align="right">SubcategoryMapping</TableCell>
                <TableCell align="right">imageurl</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                /* <TableCell component="th" scope="row">
                  {rows.map((row) => ( */
                <Row key={row} row={row} />
                // ))}
                /* </TableCell> */
              ))}
              {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </CardContent>
      <Divider />
    </Card>
  );
}