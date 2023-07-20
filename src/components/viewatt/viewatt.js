import React from "react";
import NavbarComponent from "../navbarst/navbarst";
import { AppContext } from "../../App";

import  { useState, useEffect, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#9999b9",
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},

	"&:last-child td, &:last-child th": {
		border: 1,
	},
}));

const useStyles = styled({
    table: {
      width: 400,
      margin: "auto"
    }
  });
  
  function createData(date,status) {
    return { date,status };
  }
  
  const rows = [
    createData( "Apple", 1),
    createData("Orange", 0),
    createData( "Grapes", 1),
    createData( "Tomato", 0 ),
    createData( "Mango", 1)
  ];

const Atendance= ()=>{
    const rec={1:'p',
                2:'p',
            3:'a'};
    const { userToken } = useContext(AppContext);
    const { userType } = useContext(AppContext);
    const [requestRows, setRequestRows] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useContext(AppContext);
    const classes = useStyles();
    return(
        <div>
            <NavbarComponent/>
            {userToken}
            <br/>
            {userType}
            <br/>
            Attendance
            <br />
            
			<TableContainer   component={Paper}>
				<Table style={{ width: 500, margin: 'auto' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='center'>DATE</StyledTableCell>
							<StyledTableCell align='center'>Status</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.date}>
								<StyledTableCell component='th' scope='row'>{row.date}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.status}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

        </div>
    )
}

export default Atendance