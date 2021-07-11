import React, { useEffect } from 'react'; // import useEffect
export default function CustomPaginationActionsTable() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
      CheckListService.getList().then((response) => setRows(response.data)); // you may need to check if response.data returns an array, otherwise you will face errors.
    }, []) // passing an empty array will call this function only at component mountnw