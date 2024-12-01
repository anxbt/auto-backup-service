# Auto Backup Service

## Overview
The Auto Backup Service is a reliable and efficient solution designed to automate the process of backing up important files and data. This service ensures that your data is securely stored and easily recoverable in case of any unforeseen events.

## Features
- **Automated Backups**: Schedule backups at regular intervals without manual intervention.
- **Secure Storage**: Encrypts data to ensure security during storage and transfer.
- **Easy Recovery**: Simple and quick data recovery process.
- **Customizable Settings**: Configure backup frequency, storage location, and file types.
- **Notifications**: Receive alerts on backup status and any issues encountered.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/anxbt/auto-backup-service
    ```
2. Navigate to the project directory:
    ```bash
    cd auto-backup-service
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Configure the backup settings in the `config.json` file.
2. Start the backup service:
    ```bash
    npm start
    ```


    ## Watched Folder
    The Auto Backup Service monitors a specified folder for any changes. When a new file is added or an existing file is modified, the service automatically includes it in the next scheduled backup.

    ### Configuration
    To set the folder to be watched, update the `config.json` file with the path to the desired folder:
    ```json
    {
        "watchedFolder": "/path/to/your/folder"
    }
    ```

    Ensure that the specified folder path is accessible and has the necessary read permissions for the service to function correctly.