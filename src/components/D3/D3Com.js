import React from "react";

export default function D3Com() {
  return (
    <div>
      D3.js overview D3.js stands for Data-Driven Documents. It is a low-level
      library that allows you to manipulate the DOM (Document Object Model)
      based on data. You can use D3.js to create custom charts, maps, graphs,
      and animations using SVG, Canvas, or HTML elements. D3.js is very powerful
      and flexible, but also requires more code and learning than other
      libraries.
      <br />
      Chart.js overview Chart.js is a high-level library that provides a simple
      and intuitive API for creating responsive and interactive charts. You can
      use Chart.js to create common chart types, such as bar, line, pie,
      doughnut, radar, and polar area charts, using Canvas elements. Chart.js is
      very easy to use and customize, but also has some limitations and
      dependencies.
      <br />
      One of the main differences between D3.js and Chart.js is the level of
      abstraction they offer. D3.js offers more control, but requires more code
      and knowledge, while Chart.js simplifies the process and reduces the
      amount of code. Data binding is an example of this difference, as D3.js
      uses a data join method while Chart.js uses a data object to define data
      and labels for each chart. Interactivity also differs between the two
      libraries, as D3.js offers event listeners, transitions, animations, and
      tooltips, while Chart.js has hover effects, zooming, panning, and legend
      toggling capabilities. Additionally, D3.js allows more customization
      options such as axes, scales, colors, shapes, labels, layout animation and
      interaction than Chart.js does with its title, legend, tooltips and
      plugins options. Lastly, D3.js can handle large and complex data sets but
      consumes more memory and CPU resources than Chart.js which renders charts
      faster and more efficiently but has some limitations on data size and
      complexity.
      <br />
      d3.js - great for interactive visualizations <br />
      chart.js - great for quick and simple
      <br />
      chart.js It uses html5 canvas tag which is pixel dependent ,so when you
      resize the chart.js generated graph you loose clarity It is declarative,
      means you have to just declare required inputs to generate graph Learning
      curve is less Types of charts generated are predefined and limited
      <br />
      d3.js It uses svg which is resolution independent,so when you resize the
      d3 generated graph you will not loose clarity It is imperative, means you
      have to write some logic to generate charts Steep learning curve Types of
      charts generated are not predefined and you can create any chart you want
    </div>
  );
}
