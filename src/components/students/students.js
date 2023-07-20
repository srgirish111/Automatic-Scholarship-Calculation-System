import React from "react";
import NavbarComponent from "../navbargd/navbargd";
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
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
  
  function createData(id,student,appr) {
    return { id,student,appr };
  }
  
  const rows = [
    createData( 1,"Apple",1),
    createData(2,"Orange",0),
    createData( 3,"Grapes",1),
    createData( 4,"Tomato",1 ),
    createData( 5,"Mango",0)
  ];

  
const Students=()=>{
    const { userToken } = useContext(AppContext);
    const { userType } = useContext(AppContext);
    const [approval, setapproval]=useState(false);
    const handleApprove = (id) => {
        console.log("approveekmdcd");
        setapproval(!approval);
        rows.forEach((elem,idx)=>
        {
            
                console.log(rows[idx]);
        }
        )
        rows.forEach((elem,idx)=>
        {
            if(elem.id===id)
            {
                rows[idx].appr=1;
            }
        }
        )
        rows.forEach((elem,idx)=>
        {
            
                console.log(rows[idx]);
        }
        )
      };
      const handleReject = (id) => {rows.id=0};

    return (
    <div>
            <NavbarComponent/>
            {userToken}
            <br/>
            {userType}
            <br/>
            students
            <br/>

            <TableContainer   component={Paper}>
				<Table style={{ width: 700, margin: 'auto' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='center'>id</StyledTableCell>
                            <StyledTableCell align='center'>student</StyledTableCell>
							<StyledTableCell align='center'>Status</StyledTableCell>
              <StyledTableCell align='center'>Comment</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows .filter((row)=>row.appr===0) .map((row)  => (
							<StyledTableRow key={row.id}>
								<StyledTableCell align='center' component='th' scope='row'><Link>{row.id}</Link>
								</StyledTableCell>
								<StyledTableCell align='center'>{row.student} </StyledTableCell>
                                <StyledTableCell align='center'>
                                            <Button
												variant='contained'
												onClick={() => handleApprove(row.id)}
												style={{
													backgroundColor: "#018501",
													color: "#FFFFFF",
													marginRight: "10px",
												}}>
												Approve
											</Button>
											<Button
												variant='contained'
												onClick={() => handleReject(row.id)}
												style={{ backgroundColor: "#850101", color: "#FFFFFF" }}
											>
												Reject
											</Button>
                                </StyledTableCell>
                <StyledTableCell align='center'><input type="text" placeholder="comment here"></input> </StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
    </div>
    )
}

export default Students