import React from "react";
import { Dropdown } from "react-bootstrap";
import { theme } from "../assets/Theme";

interface ResearchProps {
  theme: string[];
}

export const Research = ({ theme }: ResearchProps) => {
  console.log(theme, "theme dans composant");
  return (
    <div className='research'>
      <Dropdown>
        <Dropdown.Toggle variant='light' id='dropdown-basic'>
          Recherche par thème
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {theme.map((theme) => (
            <Dropdown.Item key={theme}>{theme}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
