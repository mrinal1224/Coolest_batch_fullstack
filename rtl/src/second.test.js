import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Image Attr Testing", () => {
    test("Check for Hello and Image Title", () => {
      render(<App />);
  
      const imageTitle = screen.getByTitle(/Scenery/i);
  
      expect(imageTitle).toBeInTheDocument();
    });
  
    test("Check for 2nd Image", () => {
      render(<App />);
      const imageTitle2 = screen.getByTitle(/flowers/i);
      expect(imageTitle2).toBeInTheDocument();
    });
  });