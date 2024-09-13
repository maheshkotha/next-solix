import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import ErrorBoundary from "../../errorboundary/ErrorBoundary";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapView = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const defaultCenter = { lat: -83.987157, lng: 4492.97722 };

  return (
    <ErrorBoundary>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={5}
      >
        {users.map((user, index) => (
          <Marker
            key={index}
            position={{
              lat: user.geoCoordinates.lat,
              lng: user.geoCoordinates.lng,
            }}
            onClick={() => setSelectedUser(user)}
          />
        ))}

        {selectedUser && (
          <InfoWindow
            position={{
              lat: selectedUser.geoCoordinates.lat,
              lng: selectedUser.geoCoordinates.lng,
            }}
            onCloseClick={() => setSelectedUser(null)}
          >
            <div>
              <h4>{selectedUser.userInfo.name}</h4>
              <p>Blood Group: {selectedUser.bloodGroup}</p>
              <p>
                Address: {selectedUser.Address.line1},{" "}
                {selectedUser.Address.city}
              </p>
              <p>Treatment Purpose: {selectedUser.treatmentPurpose}</p>
              <p>No of Units: {selectedUser.noOfUnits}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </ErrorBoundary>
  );
};

export default React.memo(MapView);
