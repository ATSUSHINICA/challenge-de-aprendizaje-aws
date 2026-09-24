$ export AWS_ACCESS_KEY_ID="***** (revocado)"
$ export AWS_SECRET_ACCESS_KEY="***** (revocado)"
$ export AWS_SESSION_TOKEN="***** (revocado)"

$ aws sts get-caller-identity

$ git init
$ git branch -M main
$ git remote add origin https://github.com/ATSUSHINICA/challenge-de-aprendizaje-aws.git

$ terraform init

$ git add .
$ git commit -am "Primer commit"
$ git push origin main

$ terraform apply

$ aws s3 ls

$ aws s3 website s3://challenge-aws-aula/ --index-document index.html

$ aws s3api put-public-access-block \
  --bucket challenge-aws-aula \
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

$ cat <<EOF > policy.json
(contenido del policy.json)
EOF

$ aws s3api put-bucket-policy \
  --bucket challenge-aws-aula \
  --policy file://policy.json

$ aws s3 sync . s3://challenge-aws-aula/