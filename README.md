# minimarket

Esta aplicación se generó utilizando react-native en su versión 0.71.4, para documentación al respecto se puede ir a https://reactnative.dev/docs/getting-started

# Como correr en local

Para correr el proyecto, se debe seguir los pasos descritos en el presente link: https://reactnative.dev/docs/getting-started
En el cual, se describe las dependencias que se deben tener para su ejecución, como java o xcode, dependiendo la plataforma a usar.
Es de tener en cuenta, que para usar xcode y ejecutar una aplicación en ios, se necesita como base un sistema operativo OSX de Apple.

Al tener las herramientas listas, se debe clonar el presente proyecto y al tenerlo listo, se ingresa a la raiz del proyecto y se ejecuta el comando "npm install".
Posteriormente, para ejecutar la aplicación, se ejecuta el comando, "npx react-native run-android" o "npx react-native run-ios", dependiendo el sistema.
Si no hay un dispositivo externo que tenga habilitada su depuración, el sistema debería abrir un emulador.

# Como correr las pruebas

El  presente proyecto tiene pruebas unitarias realizadas con react-test-renderer de los componentes desarrollados.
Estas se pueden ejecutar ejecutando el comando "npm test".

# Como construir una aplicación para producción

Para ejecutar una aplicación para producción, en el caso de Android, se genera un apk yendo en la consola a la carpeta android y ejecutando el comando "gradlew assembleRelease" o
"./gradlew assembleRelease", dependiendo el sistema operativo donde se desarrolle. Es importante tener en cuenta que android utiliza una keystore para construir las aplicaciones
y la cual se utiliza para firmar la aplicación ante la tienda Play Store. Por lo cual, si se desea generar una aplicación para producción, se debe generar una keystore especificamente 
para esa aplicación a construir.

Con respecto a ios, se necesita Xcode, con el cual se genera el archivo .ipa desde su barra de herramientas y posteriormente, si la cuenta a usar se encuentra debidamente configurada 
se podrá enviar la aplicación a Apple store (inicialmente, a testflight), con ayuda de Xcode.

En el presente proyecto se adjunta un archivo apk, de la aplicación construida con el nombre "MiniMarket.apk".