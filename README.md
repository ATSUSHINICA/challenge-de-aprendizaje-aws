# Grand Horizon Resort & Spa - Sitio Web de Hotel

Bienvenido al repositorio del sitio web oficial de **Grand Horizon Resort & Spa**. Este proyecto es una aplicación web estática diseñada para ofrecer una experiencia de reserva de lujo, complementada con infraestructura como código para un despliegue automatizado en AWS.

## 🚀 Características
- **Diseño Elegante y Responsivo:** Optimizado para móviles, tablets y computadoras de escritorio.
- **Interactividad Vanilla JS:** Sistema de reserva simulado, navegación suave y galerías interactivas.
- **Infraestructura Automatizada:** Configuración de Terraform para desplegar en AWS S3.

## 🛠️ Estructura del Proyecto
- `index.html`: Estructura principal del sitio.
- `css/style.css`: Estilos y diseño visual.
- `js/app.js`: Lógica y comportamiento del frontend.
- `assets/`: Imágenes, iconos y recursos gráficos.
- `main.tf`: Configuración de Terraform para la infraestructura.

## 🌐 Despliegue en AWS (Terraform)

### Requisitos Previos
1. Tener instalada la [CLI de AWS](https://aws.amazon.com/cli/) y configurada con tus credenciales.
2. Tener instalado [Terraform](https://www.terraform.io/downloads).

### Pasos para el Despliegue
1. Inicializa el directorio de Terraform:
   ```bash
   terraform init
   ```
2. Revisa el plan de ejecución:
   ```bash
   terraform plan
   ```
3. Aplica los cambios para crear la infraestructura en AWS:
   ```bash
   terraform apply
   ```

## 💻 Desarrollo Local
Para ver el sitio localmente, simplemente abre el archivo `index.html` en cualquier navegador moderno.

---
© 2026 Grand Horizon Resort & Spa. Todos los derechos reservados.
