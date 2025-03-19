import React, { useState, useEffect } from "react";
import { usePagination } from "../context/PaginationContext";
import CharacterListItem from "../components/CharacterListItem";
import useFetch from "../hooks/useFetch";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const CharacterTable = () => {
  const { page, setPage } = usePagination();
  const [url, setUrl] = useState(`https://swapi.dev/api/people/?page=${page}`);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading, error } = useFetch(url);
  const [characters, setCharacters] = useState([]);
  const speciesCache = {};

  useEffect(() => {
    if (data) {
      const fetchSpecies = async () => {
        const updatedCharacters = await Promise.all(
          data.results.map(async (character) => {
            let speciesName = "Unknown";
            if (character.species.length > 0) {
              const speciesUrl = character.species[0];
              if (speciesCache[speciesUrl]) {
                speciesName = speciesCache[speciesUrl];
              } else {
                try {
                  const response = await axios.get(speciesUrl);
                  const speciesData = response.data;
                  speciesName = speciesData.name;
                  speciesCache[speciesUrl] = speciesName;
                } catch (error) {
                  console.error("Failed to fetch species:", error);
                }
              }
            }
            return { ...character, speciesName };
          })
        );
        setCharacters(updatedCharacters);
      };
      fetchSpecies();
      console.log(speciesCache);
    }
  }, [data]);

  useEffect(() => {
    if (page !== 1) {
      setSearchParams({ page });
    } else {
      setSearchParams({});
    }
    setUrl(`https://swapi.dev/api/people/?page=${page}`);
  }, [page, searchParams]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2" gutterBottom>
        Star Wars Characters
      </Typography>
      <Box
        sx={{
          minHeight: "50vh",
          minWidth: { xs: 350, md: 650 },
          alignContent: "center",
        }}
      >
        {loading && <CircularProgress color="white" />}
        {error && <Typography color="error">{error}</Typography>}
        {!loading && (
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Birth Year</TableCell>
                <TableCell>Species</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map((character) => (
                <CharacterListItem
                  key={character.name}
                  character={character}
                  speciesName={character.speciesName}
                />
              ))}
            </TableBody>
          </Table>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button
            variant={data?.previous ? "contained" : "outlined"}
            color="secondary"
            disabled={!data?.previous}
            onClick={() => setPage((prevPage) => prevPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant={data?.next ? "contained" : "outlined"}
            color="secondary"
            disabled={!data?.next}
            onClick={() => setPage((prevPage) => prevPage + 1)}
            style={{ marginLeft: "10px" }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterTable;
