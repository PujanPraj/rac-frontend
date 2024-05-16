import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "react-bootstrap";
import { REACT_URL } from "../../../constants/ReactUrl";

const MemberTable = () => {
  const [BM, setBM] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loadingMap, setLoadingMap] = useState({});

  const fetchBM = async () => {
    try {
      const response = await axios.get(`${REACT_URL}/members`);

      if (response.data.success) {
        setBM(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching member:", error);
    }
  };

  useEffect(() => {
    fetchBM();
  }, []);

  const handleDelete = async (BMID, index) => {
    try {
      setLoadingMap((prevLoadingMap) => ({
        ...prevLoadingMap,
        [index]: true,
      }));
      const response = await axios.delete(`${REACT_URL}/members/${BMID}`);
      if (response.data.success) {
        toast.success(response.data.message);
        fetchBM();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMap((prevLoadingMap) => ({
        ...prevLoadingMap,
        [index]: false,
      }));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Degination</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? BM.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : BM
            ).map((value, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <img
                    src={value.image}
                    alt={value.name}
                    style={{ width: "100px", height: "auto" }}
                  />
                </TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.post}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <NavLink
                      to={`${value._id}`}
                      style={{ width: "90px", marginRight: "10px" }}
                      className="btn btn-primary"
                    >
                      Edit
                    </NavLink>
                    <Button
                      style={{ width: "90px" }}
                      className="btn btn-danger"
                      onClick={() => handleDelete(value._id, index)}
                      disabled={loadingMap[index]}
                    >
                      {loadingMap[index] ? "Deleting..." : "Delete"}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={BM.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default MemberTable;
