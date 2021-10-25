import fs from "fs"
import matter from'gray-matter';
import path from 'path';
import { fileURLToPath } from 'url';
import generateOpenGraphImage from "./generateImage.mjs"
const __dirname = path.dirname(fileURLToPath(import.meta.url));


function getMDFiles(source) {
    console.log("Getting MD posts")
    let directories = fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    let fileCandidates = directories.map(dirName => fs.readdirSync(path.join(source,dirName)).filter(file => path.extname(file).toLowerCase() == ".md"));
    let projectsMDFiles = fileCandidates.map((files,i) => {
        if (files.length == 1) {
            return files[0]
        } else {
            console.log("Wrong number of markdown files in project folder:",files.length)
            fileCandidates.splice(i,1)
        }
    })
    let fullPaths = projectsMDFiles.map((mdFile,i)=>[path.join(source,directories[i],mdFile),mdFile])
    console.log("Found", fullPaths.length, "posts");
    return fullPaths
}



function openGraphImage(src, dest) {

    const srcDir = path.join(__dirname, '..', src);
    const imagePath = path.join(__dirname, '..', dest);

    // check if destination directory exists
    if (!fs.existsSync(imagePath)) {
        console.log("generating dir",imagePath)
        fs.mkdirSync(imagePath);
    }

    const files = getMDFiles(srcDir);
    console.log(files)
    files.map(([fullPath,fileName]) => {
            // Strips MD extension
            const post = fileName
                .split('.')
                .slice(0, -1)
                .join('.');
            const image = path.join(imagePath, post) + '.jpg';
            console.log("image:",image)
            // check if the image file already exists
            // if (fs.existsSync(image)) {
            //     console.log("Not regenerating, file already exists")
            //     return;
            // }

            const markdown = matter(fs.readFileSync(fullPath));

            // check frontmatter title
            if (!markdown.data.hasOwnProperty('title')) {
                console.log("No Title")
                return;
            }
            if (!markdown.data.hasOwnProperty('date')) {
                console.log("No Date")
                return;
            }

            process.stdout.write(`Generating open graph image for: ${image}\n`);

            // fetch a new banner image
            generateOpenGraphImage(image, markdown.data.title, markdown.data.date);
        });
};

openGraphImage('./content/projects', './static/ogimages');

