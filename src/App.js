import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from '@mui/material';

function App() {
    return (
        <div>
            <h1>Create New Domain</h1>

            <table>
                <tr>
                    <td>
                        <label>
                            Domain Name:
                            <input type="text" name="name" placeholder="name" />
                        </label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>
                            Description:
                            <textarea className="desc_box" placeholder="enter description" />
                        </label>
                     </td>
                </tr>

                <tr>
                    <td>
                    <Button className="btn_style" variant="contained"
                        >Submit</Button>
                    </td>
                </tr>

            </table>
        </div>

        
  );
}

export default App;
