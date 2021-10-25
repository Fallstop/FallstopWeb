import canvas from "canvas"
import fs from "fs"

let { registerFont, createCanvas } = canvas
export default function generateOpenGraphImage (dest, title, date) {
    const height = 630;
    const width = 1200;
    const padding = 80;
    
    // Initialize
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    // add font
    registerFont('./openGraph/fonts/josefin-sans-all-300-normal.ttf', { family: 'Josefin Sans' });
    registerFont('./openGraph/fonts/open-sans-all-400-normal.ttf', { family: 'Open Sans'});
  

  
    function wrapText(context, text, x, y, line_width, line_height) {
      var line = '';
      var paragraphs = text.split('\n');
      for (var i = 0; i < paragraphs.length; i++) {
        var words = paragraphs[i].split(' ');
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > line_width && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += line_height;
          } else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
        y += line_height;
        line = '';
      }
  
      return y;
    }
  
    context.fillStyle = '#f9f9fa';
    context.fillRect(0, 0, width, height);
  
    // 0 2px 2px 0 rgba(0,0,0,.14)
    context.fillStyle = '#fff';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = 'rgba(0, 0, 0, 0.14)';
    context.fillRect(40, 40, width - padding, height - padding);
  
    // 0 3px 1px -2px rgba(0,0,0,.2)
    context.fillStyle = '#fff';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 3;
    context.shadowBlur = -2;
    context.shadowColor = 'rgba(0, 0, 0, 0.2)';
    context.fillRect(40, 40, width - padding, height - padding);
  
    // 0 1px 5px 0 rgba(0,0,0,.12);
    context.fillStyle = '#fff';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 1;
    context.shadowBlur = 5;
    context.shadowColor = 'rgba(0, 0, 0, 0.12)';
    context.fillRect(40, 40, width - padding, height - padding);
  
    context.font = '100pt "Josefin Sans"';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#000';
    const y = wrapText(context, title, padding, padding, 900, padding);
  
    context.fillStyle = '#ff5722';
    context.fillRect(padding, y + padding, 200, 4);
  
    const subtitle = date
      ? `${date} · HTTPS://JMW.NZ`
      : 'HTTPS://JMW.NZ';
    context.font = '24pt "Open Sans"';
    context.textAlign = 'left';
    context.textBaseline = 'bottom';
    context.fillStyle = '#000';
    context.fillText(subtitle, padding, height - padding);

    const buffer = canvas.toBuffer('image/jpeg', { quality: 1 });
    console.log("Finished Gen")
    fs.writeFileSync(dest, buffer);
  };
  