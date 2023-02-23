import React from "react";
import { Dropdown } from "react-bootstrap";

interface ResearchProps {
  themes: string[];
}

export const Research = ({ themes }: ResearchProps) => {
  return (
    <div className='research'>
      <Dropdown>
        <Dropdown.Toggle variant='light' id='dropdown-basic'>
          Recherche par thème
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {themes.map((theme) => (
            <Dropdown.Item key={theme}>{theme}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
