import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkBucketsCreationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Output bucket S3
    new cdk.aws_s3.Bucket(this, "FovusOutputBucket", {
      objectOwnership: cdk.aws_s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      bucketName: "fovus-output-bucket"
    });
    // Policy for bucket
    // let outputPolicy = new cdk.aws_iam.PolicyStatement({
    //   actions: ['s3:Get*', 's3:List*', 's3:Put*'],
    //   resources: [outputBucket.arnForObjects('*')],
    //   principals: [new cdk.aws_iam.AnyPrincipal()]
    // });

    // outputBucket.addToResourcePolicy(outputPolicy);

    // Input bucket S3
      new cdk.aws_s3.Bucket(this, "FovusInputBucket", {
      objectOwnership: cdk.aws_s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      bucketName: "fovus-input-bucket"
    });
    // Policy for bucket
    // let inputPolicy = new cdk.aws_iam.PolicyStatement({
    //   actions: ['s3:Get*', 's3:List*', 's3:Put*'],
    //   resources: [inputBucket.arnForObjects('*')],
    //   principals: [new cdk.aws_iam.AnyPrincipal()]
    // });

    // inputBucket.addToResourcePolicy(inputPolicy);
  
    // Script bucket S3
      new cdk.aws_s3.Bucket(this, "FovusScriptBucket", {
      objectOwnership: cdk.aws_s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      bucketName: "fovus-script-bucket"
    });
  }
}
