# AgriTech Startups App - AWS App Runner Deployment

This document contains instructions for deploying the South African AgriTech Startups web app to AWS App Runner as a containerized application.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [AWS CLI](https://aws.amazon.com/cli/) installed and configured with appropriate credentials
- An AWS account with permissions for:
  - Amazon ECR (Elastic Container Registry)
  - AWS App Runner
  - IAM (Identity and Access Management)

## Deployment Steps

1. **Build and test locally:**

   ```bash
   # Build the Docker image
   docker build -t agritech-app .
   
   # Run locally to test
   docker run -p 3000:3000 agritech-app
   ```

   Open http://localhost:3000 in your browser to verify the app works correctly.

2. **Deploy to AWS:**

   Use the provided deploy script which automates the process:

   ```bash
   ./deploy.sh
   ```

   The script will:
   - Build the Docker image
   - Create an ECR repository if needed
   - Push the image to ECR
   - Create the necessary IAM role if it doesn't exist
   - Deploy or update the App Runner service

3. **Monitor Deployment:**

   After running the script, check the AWS App Runner console to monitor the deployment status. Once complete, you'll receive a URL to access your deployed application.

## Updating the Application

When you make changes to your application:

1. Update your code
2. Run the `./deploy.sh` script again to build and deploy the new version

## Cleaning Up Resources

To avoid incurring charges for unused resources:

```bash
# Delete the App Runner service
aws apprunner delete-service --service-arn <your-service-arn>

# Delete the ECR repository (optional)
aws ecr delete-repository --repository-name agritech-app --force
```

## Troubleshooting

- **Image Push Failures**: Make sure your AWS CLI is properly configured and you have permissions to push to ECR.
- **Deployment Failures**: Check the App Runner logs in the AWS console for specific error messages.
- **Application Errors**: View the App Runner service logs to debug runtime issues.
