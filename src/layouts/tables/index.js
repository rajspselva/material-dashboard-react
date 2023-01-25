/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

function Tables() {
  const [answer, setAnswer] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const handleAnswerChange = (event) => {
    const regex = /^[0-9\b]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setAnswer(event.target.value);
    }
  };
  const restNumbers = () => {
    setNumber1(getRandomNumber(0, 9));
    setNumber2(getRandomNumber(0, 9));
  };
  const handleSubmit = () => {
    const expected = number1 + number2;
    const actual = parseInt(answer, 10);
    if (expected === actual) {
      console.log("Correct answer");
    }
    restNumbers();
    setAnswer("");
  };

  useEffect(() => {
    restNumbers();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Addition
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <Grid container spacing={5} pt={5} px={5} py={5}>
                  <Grid item xs={2} pt={5}>
                    {number1}
                  </Grid>
                  <Grid item xs={2}>
                    +
                  </Grid>
                  <Grid item xs={2}>
                    {number2}
                  </Grid>
                  <Grid item xs={2}>
                    =
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-basic"
                      label="Answer"
                      variant="outlined"
                      type="number"
                      onChange={handleAnswerChange}
                      value={answer === 0 ? "" : answer}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained" onClick={handleSubmit}>
                      <div style={{ color: "white" }}>Submit</div>
                    </Button>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Additons Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
