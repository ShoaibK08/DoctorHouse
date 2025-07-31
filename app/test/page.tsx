'use client';
import { useEffect, useState } from "react";
import Map from "./components/Map";

interface Location {
    latitude: number;
    longitude: number;
}

export default function MapPage() {
    const [location, setLocation] = useState<Location | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const checkLocationPermission = async () => {
            if ("permissions" in navigator) {
                try {
                    const permission = await navigator.permissions.query({ name: "geolocation" as PermissionName });
                    if (permission.state === "granted") {
                        getUserLocation();
                    } else if (permission.state === "prompt") {
                        requestLocationAccess();
                    } else {
                        setError("Location access is denied. Please enable it in your browser settings.");
                    }
                } catch (err) {
                    console.error("Error checking location permission:", err);
                }
            } else {
                requestLocationAccess(); // Fallback for older browsers
            }
        };

        checkLocationPermission();
    }, []);

    const requestLocationAccess = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err: GeolocationPositionError) => {
                    setError("Failed to retrieve location. Please enable location services.");
                    console.error(err.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    const getUserLocation = () => {
        requestLocationAccess();
    };

    return (
        <div>
            <h1>Map App</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {location ? (
                <p>
                    Location: Latitude {location.latitude}, Longitude {location.longitude}
                </p>
            ) : (
                <button onClick={getUserLocation}>Enable Location</button>
            )}
            {location && <Map latitude={location.latitude} longitude={location.longitude} />}
        </div>
    );
}
