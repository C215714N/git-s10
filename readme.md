# Git Desarrollo Colaborativo

Esto es una guia creada con la finalidad de facilitar el entendimiento y aplicacion de la herramienta conocida como GIT, que se utiliza para el control de versiones de nuestros proyectos. Aqui veremos como configurar la misma, asi como tambien, cada una de su opciones.

## Configuracion Inicial

Cuando inicializamos un repositorio por primera vez, podemos establecer el nombre de usuario y correo electronico, para identificarnos dentro del historial de cambios.

Cuando queremos definir una configuracion de manera general, debemos utilizar el parametro *--global* para indicar que dicha configuracion debe almacenarse en la carpeta del usuario y no en la carpeta *.git/* del repositorio.

* **git init**: Inicializa un repositorio de git.
* **git config --global user.name** `username`: Define el nombre de usuario para el control de cambios.
* **git config --global user.email** `email`: Establece el correo electronico para las confirmaciones.

## Gestion del proyecto

Para sincronizar los cambios realizados en el proyecto debemos tener en cuenta que si creamos en nuestra computadora el mismo utilizando el comando *git init*, vamos a tener que crearlo tambien en nuestro servidor remoto, como por ejemplo [GitHub](https://github.com).

En caso que ya exista un repositorio remoto, simplemente debemos descargar el historial de cambios del mismo, pero indistintamente de como hayamos empezamos, lo principal es estar pendiente de los cambios realizados en el servidor de GIT.

### Acceso por primera vez

Cuando clonamos un respositorio remoto debemos tener en cuenta que no exista en la ruta actual ninguna carpeta con el mismo nombre que dicho respositorio, o cualquier nombre que querramos ponerle. Esto se debe a que GIT, por cuestiones de seguridad, evitara sobreescribir archivos existentes. Si realizamos esta tarea con exito, se agregara una direccion remota con el nombre **origin**.

* **git clone `remote` `folder`**: Crea una carpeta en donde se descargara el contenido del respositorio.
* **cd `folder`**: Abre la carpeta creada utilizando el comando git clone.

### Sincronizacion de cambios

Una vez clonado un proyecto debemos tener en cuenta que sus cambios no se sincronizan automaticamente, sino que debemos enviar y descargar los mismos periodicamente; ya que de lo contrario estariamos trabajando en un proyecto que se encuentra desactualizado, y si bien podemos seguir integrando dichos cambios, se dificultaria esta tarea.

* **git fetch `remote`**: Descarga el historial de cambios del respositorio.
* **git pull `remote` `branch`**: Descarga los cambios y los integra a la rama actual.
* **git push `remote` `branch`**: Envia los cambios locales al respositorio remoto.
