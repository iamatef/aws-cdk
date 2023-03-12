import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as S3 from 'aws-cdk-lib/aws-s3'; // import S3 module
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'; // import dynamodb module

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // s3 bucket named "hello-cdk"
    new S3.Bucket(this, 'HelloCdkBucket', {
      bucketName: 'atefgty-cdk-first-bucket',
      versioned: true,
      encryption: S3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    // Dynamodb table named "hello-cdk"
     const table = new dynamodb.Table(this, 'HelloCdkTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      tableName: 'atefgty-cdk-first-table',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST
    });


    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
