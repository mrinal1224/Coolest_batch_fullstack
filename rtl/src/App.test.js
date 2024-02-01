import { render, screen , fireEvent } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Check for Hello and Image Title' , ()=>{
//   render(<App/>)
//   const HelloElement = screen.getByText(/hello/i)
//   const imageTitle = screen.getByTitle(/Scenery/i)

//   expect(HelloElement).toBeInTheDocument()
//   expect(imageTitle).toBeInTheDocument()

// })

// test('Check for 2nd Image' , ()=>{
//   render(<App/>)
//   const imageTitle2 = screen.getByTitle(/flowers/i)
//   expect(imageTitle2).toBeInTheDocument()
// })

// test for Input Field



describe("UI Input field", () => {
  test("Check for Input box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    let checkPlaceholder = screen.getByPlaceholderText("Enter UserName");
    expect(checkInput).toBeInTheDocument();
    expect(checkPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "userName");
    expect(checkInput).toHaveAttribute("value", "Adam123");
    expect(checkInput).toHaveAttribute("id", "userID");
  });
});
