# Welcome to your CDK TypeScript project

This project demonestrates how to use CDK to deply a simple web application to AWS.

1. Install the CDK CLI if you haven't already:

`npm install -g aws-cdk`

then run `cdk --version` to verify the installation.

2. Create a new folder for the app named `cdk-app`

3. cd to the folder cdk-app and run `cdk init app --language typescript` to create a new CDK app.

this will create a new CDK Type Script app in the folder cdk-app.

4. Modify the stack file `cdk-app/lib/cdk-app-stack.ts` to create a new S3 bucket and a new DynamoDB table.

this file is where you add your CDK code for the resources you want to create.

5. Run `cdk synth` to synthesize the CloudFormation template for the stack.

this will create a CF template in the folder cdk-app/cdk.out which will be deployed to AWS as a stack.

6. Run `cdk deploy` to deploy the stack to AWS.

this will deploy the stack to AWS and create the resources defined in the stack.

7. Run `cdk destroy` to destroy the stack.