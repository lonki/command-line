<!doctype html>
<html lang="en">
  <head>
    <!-- The first thing in any HTML file should be the charset -->
    <meta charset="utf-8">
    <!-- Make the page mobile compatible -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="description" content="Sample ReactJS Application">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <!-- Display a message if JS has been disabled on the browser. -->
    <noscript>If you're seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>, please <strong>enable JS</strong> to make this app work.</noscript>

    <div id="app"></div>
  </body>
</html>