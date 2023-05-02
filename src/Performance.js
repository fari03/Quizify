// Performance component
import React from 'react';

function Performance() {
  return (
    <div>
      <h1>Performance</h1>
      <table>
        <thead>
          <tr>
            <th>Quiz Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quiz 1</td>
            <td>80%</td>
            <td>May 1, 2023</td>
          </tr>
          <tr>
            <td>Quiz 2</td>
            <td>90%</td>
            <td>May 2, 2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Performance;
