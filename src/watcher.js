const chokidar = require('chokidar');
const axios = require('axios');
const path = require('path');
const { triggerWorkflow } = require('./kestra');

const folderToWatch = path.join(__dirname, '../watched-folder');


// Initialize the watcher
const watcher = chokidar.watch(folderToWatch, { persistent: true });

watcher.on('add', async (filePath) => {
    const fileName = path.basename(filePath);
    console.log(`New file detected: ${fileName}`);

    try {
        await triggerWorkflow(filePath, fileName);
        console.log(`Backup workflow triggered for ${fileName}`);
    } catch (error) {
        console.error(`Failed to process ${fileName}: ${error.message}`);
    }
});
