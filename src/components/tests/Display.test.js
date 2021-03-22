import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "../Display";
import Show from "../Show";

const mockShow = {
    name: "testShow",
    image: "",
    seasons: [
      {
        id: "",
        name: "testSeason",
        episodes: [
            {
                name: "testEpisode1",
                id: 1,
            },
            {
                name: "testEpisode2",
                id: 2,
            }
        ],
      }
    ],
    summary: "",
  }


const mockDisplayFunction = jest.fn();

const mockHandleSelectFunction = jest.fn();

test("Display component renders without props without error", ()=>{
    render(<Display />)
})


test("Display component renders with props without error", ()=>{
    render(<Display displayFun={mockDisplayFunction}/>)
})



test("Show component renders without props without error", ()=>{
    render(<Display displayFun={mockDisplayFunction}/>)

    const pressToGetShowButton = screen.queryByRole("button", /Press to Get Show Data/i);

    userEvent.click(pressToGetShowButton);

    render(<Show />)
})


test("Show component renders with props without error", async()=>{
    render(<Display displayFun={mockDisplayFunction}/>)

    const pressToGetShowButton = screen.queryByRole("button", /Press to Get Show Data/i);

    userEvent.click(pressToGetShowButton);

    await waitFor(()=>{
        render(<Show show={mockShow} selectedSeason={mockShow.seasons[0]} handleSelect={mockHandleSelectFunction} />)
    })
    
})







///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.