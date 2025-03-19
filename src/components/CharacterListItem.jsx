import React from "react";
import { TableRow, TableCell, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CharacterListItem = ({ character, speciesName }) => {
  const characterId = character.url.split("/").filter(Boolean).pop();

  return (
    <TableRow>
      <TableCell>
        <Link
          to={`/character/${characterId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {character.name}
        </Link>
      </TableCell>
      <TableCell>{character.birth_year}</TableCell>
      <TableCell>{speciesName || "Unknown"}</TableCell>
    </TableRow>
  );
};

export default CharacterListItem;
