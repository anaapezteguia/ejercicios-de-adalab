import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Aprendiendo React link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprendiendo React/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if "Aprendiendo React" is a link', () => {
  // arrange
  render(<App />);
  // act
  const linkElement = screen.getByText(/aprendiendo react/i);
  console.log(linkElement.nodeName); // esto consolea A porque los links se crean con <a href="...">texto</a>
  const linkTagName = linkElement.nodeName;
  // assert
  expect(linkTagName).toBeTruthy(); //devuelve true
});

test("check if href content is 'https://reactjs.org'", () => {
  // arrange
  render(<App />);
  // act
  const hrefElement = screen.getByText("https:// reactjs.org");
  console.log(hrefElement);
  const hrefValue = hrefElement.value;
  // assert
  expect(hrefValue).stringContaining("https://reactjs.org");
});
