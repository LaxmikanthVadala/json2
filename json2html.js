// json2html.js
export default function json2html(data) {
    // Extract unique keys (columns) from the data
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML table
    let html = `<table data-user="laxmikanthvadala@gmail.com">\n`;
    
    // Create the header row
    html += `  <thead>\n    <tr>`;
    columns.forEach(col => html += `<th>${col}</th>`);
    html += `</tr>\n  </thead>\n`;
  
    // Create the body rows
    html += `  <tbody>\n`;
    data.forEach(row => {
      html += `    <tr>`;
      columns.forEach(col => html += `<td>${row[col] || ''}</td>`);
      html += `</tr>\n`;
    });
    html += `  </tbody>\n</table>`;
  
    return html;
  }
  