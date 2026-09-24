# Evidencia de despliegue — Challenge AWS S3 + Terraform

> Nota: las credenciales y tokens de sesión de AWS Academy se han omitido intencionadamente de este documento por seguridad. Nunca deben incluirse en la evidencia ni en el repositorio.

## 1. Verificación de identidad AWS

```
$ aws sts get-caller-identity
```
```
(pegar aquí solo el JSON de salida: Account, UserId, Arn — sin tokens)
```

## 2. Inicialización de Terraform

```
$ terraform init
```
```
(pegar aquí la salida de terraform init, ej. "Terraform has been successfully initialized!")
```

## 3. Validación de la configuración

```
$ terraform validate
```
```
(pegar aquí la salida, ej. "Success! The configuration is valid.")
```

## 4. Plan de despliegue

```
$ terraform plan
```
```
(pegar aquí un resumen del plan, ej. "Plan: X to add, 0 to change, 0 to destroy.")
```

## 5. Aplicación de la infraestructura

```
$ terraform apply -auto-approve
```
```
(pegar aquí la salida final, ej. "Apply complete! Resources: X added, 0 changed, 0 destroyed.")
```

## 6. Configuración del hosting estático (S3 website)

```
$ aws s3api put-bucket-policy --bucket challenge-aws-aula --policy file://policy.json
```
```
(pegar aquí la salida, o indicar "Sin salida (comando ejecutado correctamente)")
```

## 7. Subida de los archivos web al bucket

```
$ aws s3 sync . s3://challenge-aws-aula/
```
```
(pegar aquí la lista de archivos subidos)
```

## 8. Verificación de la URL pública

```
URL de hosting estático: http://challenge-aws-aula.s3-website-<region>.amazonaws.com
```

(Añadir aquí captura o confirmación de que la web carga correctamente en el navegador)