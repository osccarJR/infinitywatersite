Infinity WatersiteInfinity Watersite es una página web destinada a ofrecer soluciones para la venta, instalación y mantenimiento de sistemas de purificación de agua, con un enfoque en la tecnología de ósmosis y ultrafiltración. Además, la página está configurada para integrar servicios de mantenimiento continuo, filtros y repuestos, y soporte técnico 24/7, mejorando la calidad del agua en hogares y negocios locales. Este proyecto ha sido desarrollado utilizando tecnologías modernas como Node.js, Tailwind CSS, y Docker, entre otras.CaracterísticasVenta y Mantenimiento de Purificadores: Proveedor principal de sistemas de purificación de agua, con opciones de instalación y servicio de mantenimiento.Fácil Acceso a Repuestos: Venta de filtros y repuestos esenciales para asegurar la continuidad de los sistemas.Soporte Técnico 24/7: Servicio postventa con atención continua para cualquier consulta técnica o necesidad de mantenimiento.Próxima Tienda Online: Preparación para la implementación de un sistema de ventas online para facilitar el acceso a productos y servicios.Tecnologías UsadasNode.js: Framework backend para manejar la lógica de la aplicación.Tailwind CSS: Framework de CSS utilizado para estilizar la interfaz de usuario de manera responsiva y moderna.Docker: Contenedores para la implementación y el despliegue eficiente en ambientes aislados.Vite: Herramienta de desarrollo rápida y ligera utilizada para la compilación de proyectos frontend.Nginx: Servidor web utilizado para gestionar las solicitudes de los usuarios y la configuración de proxy.ESLint: Herramienta para la gestión de calidad de código en JavaScript.InstalaciónRequisitosAsegúrate de tener instalado lo siguiente en tu máquina:Node.js: Descargar Node.jsDocker: Descargar DockerGit: Descargar GitPasos de InstalaciónClona el repositorio a tu máquina local:git clone [https://github.com/osccarJR/infinitywatersite.git](https://github.com/osccarJR/infinitywatersite.git)
Navega al directorio del proyecto:cd infinitywatersite
Instala las dependencias necesarias para el proyecto:npm install
Crea un archivo .env si es necesario para la configuración del entorno (dependiendo de las necesidades de tu aplicación).Inicia el servidor de desarrollo:npm run dev
Para producción, puedes construir el proyecto y ejecutarlo en un contenedor Docker:docker-compose up --build
Estructura del ProyectoLa estructura del proyecto es la siguiente:infinitywatersite/
├── .gitignore          # Archivos y directorios a ignorar por Git
├── docker-compose.yml  # Configuración de Docker para el entorno de producción
├── Dockerfile          # Archivo de configuración de Docker para la app
├── public/             # Archivos estáticos (imágenes, fuentes, etc.)
├── src/                # Código fuente de la aplicación
│   ├── index.js        # Entrada principal de la aplicación
│   └── ...             # Otros archivos de lógica y componentes
├── package.json        # Dependencias y scripts del proyecto
├── README.md           # Este archivo
├── tailwind.config.js  # Configuración de Tailwind CSS
└── vite.config.js      # Configuración de Vite
ContribucionesSi deseas contribuir a este proyecto, sigue estos pasos:Haz un fork del repositorio.Crea una nueva rama (git checkout -b feature-xyz).Haz tus cambios y haz un commit (git commit -am 'Agregando nueva funcionalidad').Haz un push a tu rama (git push origin feature-xyz).Abre un pull request para que se revise y se fusione tu contribución.LicenciaEste proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
