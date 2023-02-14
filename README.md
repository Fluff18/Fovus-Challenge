# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and TailWindCSS.

# Hosting
The website is hosted using Amplify. 
Run the following commands
npm install -g aws-cdk
mkdir amplify-infra
cd amplify-infra
cdk init --language typescript
npm install @aws-cdk/aws-github @aws-cdk/aws-amplify

# Static Website - Sorry for the low quality image used. That was all I could find with the company logo

#TODO: check hosting for security and also cloucfront? Also

# Script 
The script is stored in a bucket called fovus-script
The script takes the file row of data related to the uploaded file from a DynamoDB table called "InputFileTable".
Then the file uploaded is fetched from "fovus-input-bucket" and modified.
This modified file is uploaded to another bucket called "fovus-output-bucket" and the stored location along with the id is stored in a DynamoDB table called "OutputFileTable".
After which the EC2 instance is automatically terminated by fetching the instance id