# Interactive Pie Chart with Data Input

This React application displays an interactive pie chart using the `recharts` library. Users can input new data points, which are then dynamically added to the chart with randomly generated colors.

## Features

* Displays a pie chart visualizing data.
* Allows users to input new data entries (name and value).
* Dynamically updates the pie chart with new data.
* Assigns a random color to each new data segment.
* Includes tooltips to display data on hover.
* Includes a legend to identify the data segments.
* Styled with Tailwind CSS for a dark theme.

## Technologies Used

* React
* recharts (for creating the pie chart)
* Tailwind CSS (for styling)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project_directory>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

1.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
2.  **Open your browser** and navigate to `http://localhost:3000` (or the port specified in your terminal).

## How to Use

1.  Upon opening the application, you will see a pie chart with initial data (React, Vue, Angular, Svelte).
2.  Above the chart, there is a form with two input fields: "Name (e.g., Framework)" and "Value".
3.  Enter a name for your new data point (e.g., "Ember").
4.  Enter a corresponding numerical value for the data point (e.g., "150").
5.  Click the "Submit" button.
6.  The pie chart will update to include your new data point as a new segment with a randomly assigned color. The legend will also be updated.
7.  Hover over the segments of the pie chart to see the name and value of each data point in a tooltip.

## Code Highlights

* **`initialData`**: An array of objects defining the initial data for the pie chart. Each object has a `name` and a `value`.
* **`defaultColors`**: An array of default colors used for the initial data segments.
* **`getRandomColor()`**: A function that generates a random hexadecimal color code.
* **`useState`**: React hooks used to manage the state of the chart data (`chartData`), colors (`colors`), input name (`inputName`), and input value (`inputValue`).
* **`handleSubmit()`**: A function that handles the form submission. It prevents the default form submission, creates a new data entry object, updates the `chartData` and `colors` state, and clears the input fields.
* **`<PieChart>` and `<Pie>`**: Components from the `recharts` library used to render the pie chart.
* **`<Cell>`**: Used within the `<Pie>` component to apply different fill colors to each slice based on the `colors` state.
* **`<Tooltip>` and `<Legend>`**: Components from `recharts` that provide interactive tooltips on hover and a legend to identify the slices.
* **Tailwind CSS**: Used for styling the layout and appearance of the application with utility classes.

## Further Enhancements

* Allow users to edit or delete existing data points.
* Implement a color picker for more control over segment colors.
* Add data validation for input fields.
* Persist data using local storage or a backend.
* Explore more customization options provided by `recharts`.
