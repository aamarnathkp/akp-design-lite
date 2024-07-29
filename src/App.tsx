import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./Page/Demo/DemoComponent";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <h3>AKP Design System</h3>
                <DemoComponent />
            </div>
        </ThemeProvider>
    );
}

export default App;
