import Dashboard from '../Dashboard';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react'
import { useState } from 'react'
import Upload from '../Upload';

test("Checking Everything renders on Dashboard", () => {
    render(<Dashboard />);
    expect(screen.getByTestId('search-component')).toBeInTheDocument();
    expect(screen.getByTestId('upload-component')).toBeInTheDocument();
    expect(screen.getByTestId('chatbox-component')).toBeInTheDocument();
}
);

test("uploadFile function alerts when no file is selected", () => {
    window.alert = jest.fn();
    render(<Dashboard />);
    fireEvent.submit(screen.getByRole("button", { name: "Upload" }));
    expect(window.alert).toHaveBeenCalledWith("No file selected");
});

test("Upload button is clicked", async() => {
    const mockFn = jest.fn().mockResolvedValueOnce("Success");
    render(<Upload helper3={mockFn} />);
    fireEvent.submit(screen.getByRole("button", { name: "Upload" }));
    await waitFor(()=>{
        expect(mockFn).toHaveBeenCalled();
    })
})

