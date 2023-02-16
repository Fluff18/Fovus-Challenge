import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDynamodbCreationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const inputTable = new cdk.aws_dynamodb.Table(this, 'InputTable', { 
      partitionKey: { name: 'id', type: cdk.aws_dynamodb.AttributeType.NUMBER }, 
      tableName: 'input-Table' 
    });

    const outputTable = new cdk.aws_dynamodb.Table(this, 'OutputTable', { 
      partitionKey: { name: 'id', type: cdk.aws_dynamodb.AttributeType.NUMBER }, 
      tableName: 'output-Table' 
    });
  }
}
