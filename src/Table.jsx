import { Tab } from 'bootstrap';
import React from 'react'
import ReactDOM from 'react-dom';

export default function table() {
    return (
                    <div className="table ms-5">
                    <thead className="" >
                        <tr >
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position Number</th>
                        <th scope="col">Salary</th>
                        <th scope="col">KPI</th>
                        <th scope="col">Holidays</th>
                        <th scope="col">Bank Accoount</th>
                        <th scope="col">Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        
                        </tr>
                    </tbody>
                </div>
            
               
    )
}
