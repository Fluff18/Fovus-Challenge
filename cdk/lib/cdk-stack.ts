import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3
    const bucket = new cdk.aws_s3.Bucket(this, "FovusBucket", {
      publicReadAccess: true,
      bucketName: "fovusfrontend",
      websiteIndexDocument: "index.html"
    });

    // Deployment
    new cdk.aws_s3_deployment.BucketDeployment(this, "FovusDeploymentBucket", {
      sources: [cdk.aws_s3_deployment.Source.asset("../build")],
      destinationBucket: bucket
    });
    
    // CF
    new cdk.aws_cloudfront.CloudFrontWebDistribution(this, "FovusDistribution", {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket
          },
          behaviors: [ {isDefaultBehavior: true}]
        }
      ]
    });

  }
}
