const figlet = require('figlet');
const fonts = [
    'avatar',
    'big',
    'bulbhead',
    'chunky',
    'epic',
    'isometric3',
    'ogre',
    'slant',
    'star wars',
    'three point',
    'tinker-toy',
    'weird',
];

const string = process.argv[2];

if (!string) {
    console.error('Please provide a song title');
    process.exit(1);
}

async function slowLoop() {
    for (const font of fonts) {
        console.log(figlet.textSync('good son', { font }));
        console.log(figlet.textSync(string, { font }));
        process.stdout.write('/n');
        // process.stdout.write('\x1b[A\x1b[K'); // Move cursor up and clear line for cleaner animation
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

slowLoop();

console.log(figlet.textSync(string));
