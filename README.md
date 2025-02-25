# **🌩️ AWS Cloud Resume - shaynadev.me**

This repository contains my implementation of the **Cloud Resume Challenge**, a project designed to showcase hands-on AWS cloud skills. My website, [shaynadev.me](https://shaynadev.me), is built using AWS services with a serverless architecture and a CI/CD pipeline.

---

## **Architecture Overview**  
The project follows a **serverless architecture** on AWS:  

- **Frontend:** Hosted on an S3 bucket and served through CloudFront.  
- **Backend:** A combination of API Gateway, Lambda, and DynamoDB to track visitor count.  
- **Infrastructure as Code (IaC):** CloudFormation for automating AWS resource provisioning.  
- **CI/CD:** GitHub Actions for automating frontend and backend deployments.  

## **Tech Stack** 
**Frontend:**
- HTML, CSS, JavaScript
- Hosted on Amazon S3
- Delivered via AWS CloudFront

**Backend:**
- AWS Lambda (Python) – Handles API requests
- Amazon API Gateway – Lambda function as a REST API
- Amazon DynamoDB – Stores visitor count

**CI/CD Pipeline:**
- GitHub Actions – Automates deployments for frontend and backend

## **Step-by-Step Implementation**
**Step 1: Static Website (Frontend)**
- First created my site using HTML, CSS, and JavaScript.
- Stored the files in a S3 bucket with public access.
- Configured AWS CloudFront to serve the website globally.
- Used Amazon Route53 to register a domain name (shaynadev.me) and pointed it to the CloudFront distribution .

**Step 2: API for Visitor Counter (Backend)**
- Built a JavaScript file to display visitor count to website.
- Built a Python AWS Lambda function to update and retrieve visitor count.
- Created a DynamoDB table to store visitor counts.
- Used Amazon API Gateway to expose the Lambda function as an API endpoint.

**Step 3: Infrastructure as Code (CloudFormation)**
- Created a cloudformation.yaml file to define AWS resources.
- Used AWS CLI to deploy the CloudFormation stack.

**Step 4: CI/CD Pipeline for Backend**
- Set up GitHub Actions to automatically deploy backend updates to AWS Lambda.
- Workflow triggers when backend code is pushed to main
- Github Action deploys the lastest version of Lambda function

**Step 5: CI/CD Pipeline for Frontend**
- Set up a GitHub Actions workflow to upload new frontend changes to S3.
- CloudFront cache is invalidated to reflect changes immediately.

## **Live Website**
  **🔗 Visit my live resume website: [shaynadev.me](https://shaynadev.me)**
