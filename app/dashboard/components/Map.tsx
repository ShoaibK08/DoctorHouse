'use client'
 import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Alert } from '@mui/material';

interface MapProps {
  latitude: number;
  longitude: number;
}

export default function Map({ latitude, longitude }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    // Temporarily disabled Mapbox functionality
    //setMapError("Map functionality is temporarily disabled. Please configure Mapbox access token to enable maps.");
    
    const accessToken = process.env.NEXT_PUBLIC_APP_MAP_BOX_ACCESS_TOKEN;
    
    if (!accessToken) {
      setMapError("Mapbox access token not configured. Please add NEXT_PUBLIC_APP_MAP_BOX_ACCESS_TOKEN to your .env file.");
      return;
    }

    if (!latitude || !longitude) {
      setMapError("Invalid coordinates provided");
      return;
    }

    if (mapContainer.current) {
      try {
        mapboxgl.accessToken = accessToken;
        
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [longitude, latitude],
          zoom: 14,
        });

        // Create a custom HTML marker for the user's location
        const locationMarker = document.createElement("div");
        locationMarker.style.width = "20px";
        locationMarker.style.height = "20px";
        locationMarker.style.backgroundColor = "#007AFF";
        locationMarker.style.borderRadius = "50%";
        locationMarker.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        locationMarker.style.border = "2px solid white";

        // Add the custom marker to the map
        new mapboxgl.Marker({ element: locationMarker })
          .setLngLat([longitude, latitude])
          .addTo(map);

        return () => map.remove(); // Cleanup map instance
      } catch (error) {
        console.error("Map initialization error:", error);
        setMapError("Failed to initialize map. Please check your Mapbox configuration.");
      }
    } else {
      setMapError("Map container is not available.");
    }
  }, [latitude, longitude]);

  if (mapError) {
    return (
      <Box 
        sx={{ 
          width: "100%", 
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5"
        }}
      >
        <Alert severity="info" sx={{ maxWidth: 400 }}>
          <Typography variant="body1">
            {mapError}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            To enable maps, create a .env.local file and add:
            <br />
            <code>NEXT_PUBLIC_APP_MAP_BOX_ACCESS_TOKEN=your_mapbox_token_here</code>
          </Typography>
        </Alert>
      </Box>
    );
  }

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh",}} />;
}
