const axios = require('axios');
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
// Kestra API configuration
const KESTRA_CONFIG = {
    baseUrl: 'http://localhost:8080/api/v1',
    auth: {
        username: 'admin',
        password: 'kestra'
    }
};

// Create Kestra API client
const kestraClient = axios.create({
    baseURL: KESTRA_CONFIG.baseUrl,
    auth: KESTRA_CONFIG.auth,
    headers: {
        'Content-Type': 'application/yaml'
    }
});

async function triggerWorkflow(filePath, fileName) {
    try {
        // Read workflow YAML file
        const workflowPath = path.join(__dirname, '../config/kestra-workflows/auto-backup.yml');
        const workflowYaml = fs.readFileSync(workflowPath, 'utf8');

        // Parse YAML and add inputs
        const workflow = YAML.parse(workflowYaml);
        workflow.inputs = {
            filePath,
            fileName
        };

        // Convert back to YAML string
        const requestBody = YAML.stringify(workflow);

        const response = await kestraClient.post('/flows', requestBody);
        console.log(`Workflow triggered successfully. Execution ID: ${response.data.id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to trigger Kestra workflow:', error.message);
        if (error.response) {
            console.error('Error details:', error.response.data);
        }
        throw error;
    }
}

module.exports = { triggerWorkflow };