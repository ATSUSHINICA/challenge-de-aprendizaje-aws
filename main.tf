terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "bucket_aula" {
  bucket = "challenge-aws-aula" # Los nombres de buckets deben ser globales y únicos

  tags = {
    Name = "terraform-s3-aula"
  }
}