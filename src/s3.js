import aws from 'aws-sdk'
import crypto, { randomBytes } from 'crypto'
import { promisify } from "util"
import dotenv from "dotenv"

dotenv.config()

const region = "us-west-1"
const bucketName = "fovus-input"
const acccesKeyId = "AKIAZKFTDZ5E75OIJGGK"
const secretAccessKey = "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"

const s3 = new aws.S3({
    region, 
    acccesKeyId,
    secretAccessKey,
    signatureVersion: '4'
})

export async function generateUploadURL() {
    const rawBytes = await randomBytes(16)
    const fileName = rawBytes.toString('hex')
    
    const params = ({
        Bucket: bucketName,
        Key: fileName,
        Expires: 60*60*5
    })

    const uploadURL = await S3.getSignedUrlPromise('putObject', params)
    return uploadURL
}