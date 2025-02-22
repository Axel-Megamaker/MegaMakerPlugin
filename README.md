# MegaMaker Plugin för Duet Web Control

Öppna upp en terminal och gå till mappen där du vill installera DWC
1. git clone https://github.com/Duet3D/DuetWebControl.git
2. npm install   |  För att installera dependencies.
3. cd DuetWebControl\src\plugins | för att komma till mappen plugins
4. git clone https://github.com/MegaMakerPrinters/MegaMakerPlugin.git
5. cd ../..      |  För att komma tillbak till mappen DuetWebControl
6. npm run serve |  För att bygga Duet Web Control och starta development server
7. Gå in på (http://localhost:8080/). Pluginet MegaMaker ska då synas i listan över plugins och det går att köra

