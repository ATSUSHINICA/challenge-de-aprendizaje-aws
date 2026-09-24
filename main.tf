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

# 1. Configuración de hosting estático: define index.html como documento principal
resource "aws_s3_bucket_website_configuration" "web_config" {
  bucket = aws_s3_bucket.bucket_aula.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# 2. Desbloquea el acceso público del bucket (AWS lo bloquea por defecto)
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.bucket_aula.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# 3. Política pública del bucket, referenciada desde policy.json
resource "aws_s3_bucket_policy" "public_policy" {
  bucket     = aws_s3_bucket.bucket_aula.id
  policy     = file("policy.json")
  depends_on = [aws_s3_bucket_public_access_block.public_access]
}

# Output útil para tener la URL de hosting estático a mano tras el apply
output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.web_config.website_endpoint
}
