import React from "react";
import styles from "./EvaluateFinalizedMasterProcurementPlan.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SideNavBar from "../../../components/SideNavigationBar/SideNavBar";
import SelectDropDown from "../../../components/SelectDropDown/SelectDropDown";
import SearchNoFilter from "../../../components/Search/Search";
import {
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VendorDetails from "../../../components/Popups/VendorDetails/VendorDetails";
import DonePopup from "../../../components/Popups/DonePopup/DonePopup";
import SetPreBidMeetingDate from "../../../components/Popups/SetPreBidMeetingDate/SetPreBidMeetingDate";
import Approve from "../../../images/Approve.png";
import Reject from "../../../images/Reject.png";
import ApprovePopup from "../../../components/Popups/DonePopup/ApprovePopup";
import RejectPopup from "../../../components/Popups/DonePopup/RejectPopup";
import { Link as Routerlink } from "react-router-dom";
//===============Applicable for table data===================================

const columns = [
  { id: "ItemID", label: "Item ID", Width: 300, align: "center" },
  { id: "ItemName", label: "Item Name", Width: 300, align: "center" },
  { id: "Qty", label: "Quantity", Width: 300, align: "center" },
  { id: "Spe", label: "Specification", Width: 300, align: "center" },
  { id: "Division", label: "Division", Width: 300, align: "center" },
  { id: "Vendor", label: "Vendor", Width: 300, align: "center" },
  {
    id: "EDdate",
    label: "Expected Delivery date",
    Width: 300,
    align: "center",
  },
  {
    id: "AuditReview",
    label: "Inernal Auditors Review",
    Width: 300,
    align: "center",
  },
  { id: "Action", label: "Action", Width: 300, align: "center" },
];

function createData(
  ItemID,
  ItemName,
  Qty,
  Spe,
  Division,
  Vendor,
  EDdate,
  AuditReview,
  Action
) {
  return {
    ItemID,
    ItemName,
    Qty,
    Spe,
    Division,
    Vendor,
    EDdate,
    AuditReview,
    Action,
  };
}

//   const ApproveRejctButton = (
//     <>
//       <IconButton><img src={Approve}/></IconButton>
//       <IconButton><img src={Reject}/></IconButton>
//     </>
//   )

const auditApproved = (
  <>
    <Typography sx={{ color: "#227C70", "&:hover": { cursor: "pointer" } }}>
      Approved
    </Typography>
  </>
);

const auditRejected = (
  <>
    <Typography sx={{ color: "#9C254D", "&:hover": { cursor: "pointer" } }}>
      Rejected
    </Typography>
  </>
);

const auditPending = (
  <>
    <Typography sx={{ color: "#D29D04", "&:hover": { cursor: "pointer" } }}>
      Pending
    </Typography>
  </>
);

const rows = [
  createData(
    "I0014",
    "A4 Papers",
    "500",
    "loerm",
    "IT Department",
    <VendorDetails />,
    "2023/01/01",
    auditApproved,
    <div className={styles.efmpp_ActionButonsContainer}>
      <ApprovePopup />
      {/* <RejectPopup /> */}
    </div>
  ),
  createData(
    "I0028",
    "Ruler",
    "10",
    "loerm",
    "IT Department",
    <VendorDetails />,
    "2023/01/01",
    auditRejected,
    <div className={styles.efmpp_ActionButonsContainer}>
      <ApprovePopup />
      {/* <RejectPopup /> */}
    </div>
  ),
  
];

//===========================================================================

// Here in class names, efmmp=EvaluateFinalizedMasterProcurementPlan

function EvaluateFinalizedMasterProcurementPlan() {

  //=======values for 'SelectDropDown.js' as an array=======

  const list = ["MPPI10000", "MPPI10001", "MPPI10002", "MPPI10003"];

  //========================================================

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className={styles.efmpp_mainBody}>
        <div className={styles.efmpp_heading}>
          <Routerlink to={-1}>
          <IconButton sx={{ pl: "15px", height: "34px", width: "34px" }}>
            <ArrowBackIosIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          </Routerlink>
          Items to Evaluate
        </div>
        <div className={styles.efmpp_title_search}>
          <div className={styles.efmpp_title}>
            <label>MASTER PROCUREMENT PLAN ID*</label>
            <SelectDropDown list={list} />
          </div>
          <div className={styles.efmpp_search}>
            <SearchNoFilter />
          </div>
        </div>

        {/* Add table data */}

        <div className={styles.efmpp_table}>
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: 5,
              scrollBehavior: "smooth",
            }}
          >
            <TableContainer sx={{ maxHeight: "100%" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead className={styles.TableHeaders0}>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ maxWidth: column.Width }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
        <div className={styles.efmpp_button}>
          <DonePopup
            text={"Successfully informed Procurement Officer"}
            title={"Permission For Raising PO"}
            styles={{
              position: "absolute",
              right: "0",
              bgcolor: "#205295",
              borderRadius: 5,
              height: 60,
              width: 350,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EvaluateFinalizedMasterProcurementPlan;
