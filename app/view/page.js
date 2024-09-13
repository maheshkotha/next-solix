"use client";
import React, { Suspense, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ViewContext } from "../../providers/view.provider";
import { getUsers } from "../../store/userSlice";
// import ListView from "../../components/feature/listview/ListView";
// import MapView from "../../components/feature/mapview/MapView";
import ErrorBoundary from "../../components/errorboundary/ErrorBoundary";

const ListView = React.lazy(() => import("../../components/feature/listview/ListView"));
const MapView = React.lazy(() => import("../../components/feature/mapview/MapView"));


const UserView = () => {
  const { view, setView } = useContext(ViewContext);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleChange = (_, newAlignment) => {
    newAlignment === "map" ? setView("map") : setView("list");
  };

  // Define columns for DataGrid
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'bloodGroup', headerName: 'Blood Group', width: 120 },
    { field: 'noOfUnits', headerName: 'Units', width: 100 },
    { field: 'treatmentPurpose', headerName: 'Treatment Purpose', width: 180 },
    {
      field: 'Address',
      headerName: 'Address',
      flex: 1,
      width: 250,
      valueGetter: (params) =>`${params?.line1}, ${params?.city}, ${params?.state}`
    },
  ];


  // Prepare rows from users data
  const rows = data?.map((user, index) => ({
    id: index, 
    name: user.userInfo.name,
    age: user.userInfo.age,
    bloodGroup: user.bloodGroup,
    noOfUnits: user.noOfUnits,
    treatmentPurpose: user.treatmentPurpose,
    Address: user.Address,
  }));

  return (
    <ErrorBoundary>
    <div>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        padding="0 5% 8px"
      >
        <h3>Users</h3>
        <ToggleButtonGroup
          color="primary"
          value={view}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="map">Map View</ToggleButton>
          <ToggleButton value="list">List View</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Suspense fallback={<CircularProgress />}>
          {view === "map" ? (
            <MapView users={data} />
          ) : (
            <div className="listview">
              <ListView columns={columns} rows={rows} />
            </div>
          )}
        </Suspense>
    </div>
    </ErrorBoundary>
  );
};

export default UserView;
