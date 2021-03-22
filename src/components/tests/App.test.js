import React from 'react';
import { render, screen, userEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from '../../App';

test('target dropdown', async ()=>{
    render(<App/>);

    const pressToGetShowButton = screen.queryByRole("button", /Press to Get Show Data/i);

    userEvent.click(pressToGetShowButton);

    await waitFor(()=>{
        const selectASeasonLabel = screen.findByLabelText(/Select A Season/i);
        
        expect(selectASeasonLabel).toBeInTheDocument();
    });
    
});