import React from "react";
import classes from "./Map.module.scss";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import GoogleMapStyles from "../../utils/helpers/googleMap.json";
import markerSvg from "../../assets/img/svg/marker.svg";

export const Map = (): React.ReactElement => {
  const { isLoaded }: { readonly isLoaded: boolean } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const mapContainerStyle: {
    readonly width: string;
    readonly height: string;
  } = {
    width: "100%",
    height: "400px",
  };

  const center: { readonly lat: number; readonly lng: number } = {
    lat: 55.7522,
    lng: 37.6156,
  };

  const options: {
    readonly style: object;
    readonly disableDefaultUI: boolean;
    readonly zoomControl: boolean;
  } = {
    style: GoogleMapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <div id="map" className={classes.map}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
        >
          <Marker position={center} icon={markerSvg} />
        </GoogleMap>
      )}
    </div>
  );
};
