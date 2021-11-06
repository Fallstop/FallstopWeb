import canvas from "canvas"
import fs from "fs"
import roundedRect from "./roundedRectangle.mjs"

let { registerFont, createCanvas,loadImage } = canvas
export default async function generateOpenGraphImage (dest, title, date) {
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
	
		// context.fillStyle = '#f9f9fa';
		// context.fillRect(0, 0, width, height);
		const backgroundSlate = await loadImage('./openGraph/background_slate.png')
		context.drawImage(backgroundSlate, 0, 0);

		context.font = '100pt "Josefin Sans"';
		context.textAlign = 'left';
		context.textBaseline = 'top';
		context.fillStyle = "#f5f5f5";
		const y = wrapText(context, title, padding, padding, 600, 140);
		
		context.lineWidth = "4";
		context.beginPath();
		context.fillStyle = "rgba(0,0,0,0.5)";
		context.strokeStyle = "#f5f5f5";
		roundedRect(context,padding-10, padding-15, 600+50, y-padding,25,true)
		context.stroke();

		context.font = '100pt "Josefin Sans"';
		context.textAlign = 'left';
		context.textBaseline = 'top';
		context.fillStyle = "#f5f5f5";
		wrapText(context, title, padding, padding, 600, 140);
	
		const subtitle = date
			? `${date} · HTTPS://JMW.NZ`
			: 'HTTPS://JMW.NZ';
		context.font = '32pt "Open Sans"';
		context.textAlign = 'left';
		context.textBaseline = 'bottom';
		context.fillStyle = '#f5f5f5';
		context.fillText(subtitle, padding, height - padding);

		const buffer = canvas.toBuffer('image/jpeg', { quality: 1 });
		fs.writeFileSync(dest, buffer);
	};
	