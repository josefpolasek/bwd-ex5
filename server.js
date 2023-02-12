/* CONSTANTS */
const express = require("express");
const app = express();
const port = 3000;
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/* error handling - redirecting to correct paths */
app.get("/", (req, res) => {
  res.send(`
    Please redirect to http://localhost:3000/json, 
    http://localhost:3000/html, http://localhost:3000/html/0
  `);
});

/* Getting json file */
app.get("/json", (req, res) => {
  // set style to json format
  res.set({ "Content-Type": "application/json" });

  // sends the json file
  res.send({
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
  });
});

/* Generating html week */
app.get("/html", (req, res) => {
  // set style to html format
  res.set({ "Content-Type": "text/html" });

  // sending the html file
  res.send(`
    <html>
    <head>
      <title>Days of the Week</title>

      <style>
        * {
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          display: flex;
          justify-content: center;
          background-color: lightblue;
        }

        h1 {
          background-color: rgb(159, 206, 222);
          padding: 10px;
          margin-bottom: 10px;
        }

        table {
          width: 100%;
          background-color: aliceblue;
        }

        tr {
          display: flex;
          justify-content: space-between;

          font-size: larger;
          margin-bottom: 5px;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Days of the Week</h1>
        <table>
          <tr>
            <td>Monday</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>6</td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `);
});

/* Generating only a specified day of the week */
app.get("/html/:dayIndex", (req, res) => {
  // getting day and index from the array of days
  const dayIndex = req.params.dayIndex;
  const day = days[dayIndex];

  // set style to html format
  res.set({ "Content-Type": "text/html" });

  // sending the html file
  res.send(`
    <html>
      <head>
        <title>Days of the Week</title>
        <style>
          * {
            font-family: Arial, Helvetica, sans-serif;
          }
    
          body {
            display: flex;
            justify-content: center;
            background-color: lightblue;
          }
    
          h1 {
            background-color: rgb(159, 206, 222);
            padding: 10px;
            margin-bottom: 10px;
          }
    
          table {
            width: 100%;
            background-color: aliceblue;
          }
    
          tr {
            display: flex;
            justify-content: space-between;
    
            font-size: larger;
            margin-bot: 5px;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>Days of the Week</h1>
          <table>
            <tr>
              <td>${day}</td>
              <td>${dayIndex}</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `);
});

/* Running it */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
