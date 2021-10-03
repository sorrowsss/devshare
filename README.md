# Devshare
A Real-time collaborative Code editor With Video chat and normal Chat text

This Web Application was made for my final year project in Algeria at The "Insfp Sidi lahcen" "Bekoucha Amir Zoubir institut"

It is not hosted online uet But it can work On LAN or WAN ( if port forwarding is used)

> How does it work ? 

You create an Account, you start a new Task, you Give the URL Links to your friend or friends and by that you can All code together

The video chat work like  the ZOOM Meeting Application, it is self explanatory

The Text Chat don't carry the user's name because of Technical Problems, so i made to give random numbers everytime

> Installation : How to start the server and how to connect ? 

1. You just need to install Nodejs on the comptuer that would be running the server

2. Secondly you will open the folder that you put the web application in it in CMD or Direct to it 

3. You run this command :
   ```
   npm install
   ```
4. when it's done installing all node modules you run this command
   ```
   npm start
   ```
6. The Web App runs on Port "80", you can change it in "www" file or if you don't want to Modify the file, For exemple Run :
   ```
   npm start port --8000
   ```
   
 That's All, The Web app run on all network interfaces that are enabled on your pc At the same time , that means it will run on Localhost(127.0.0.1) and Lan (Ethernet Cable or wireless) And WAN
 
 
 To know All the Adresses of  ALL Your Network Interfaces , Open Cmd than Type :
    ```
   ipconfig
     ```
     
 For using this Web app outside of Local network, you need to portforward the Private ip address of the computer you are using with the correct Port on your router than Connect to the server by Typing your Public Ip address And Port
 
