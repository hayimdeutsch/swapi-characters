import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
Paper
} from "@mui/material";
import useFetch from "../hooks/useFetch";

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: character,
    loading,
    error,
  } = useFetch(`https://swapi.dev/api/people/${id}`);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {loading && <CircularProgress color="white" />}
        {error && <Typography color="error">{error}</Typography>}
        {character && (
          <>
            <Paper sx={{ padding: "20px", margin: "20px", maxWidth: "500px" }}>
                <Typography variant="h4" gutterBottom>
                  {character.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Height:</strong> {character.height} cm
                </Typography>
                <Typography variant="body1">
                  <strong>Mass:</strong> {character.mass} kg
                </Typography>
                <Typography variant="body1">
                  <strong>Hair Color:</strong> {character.hair_color}
                </Typography>
                <Typography variant="body1">
                  <strong>Skin Color:</strong> {character.skin_color}
                </Typography>
                <Typography variant="body1">
                  <strong>Eye Color:</strong> {character.eye_color}
                </Typography>
                <Typography variant="body1">
                  <strong>Birth Year:</strong> {character.birth_year}
                </Typography>
                <Typography variant="body1">
                  <strong>Gender:</strong> {character.gender}
                </Typography>
            </Paper>
          </>
        )}
      </Box>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default CharacterPage;
