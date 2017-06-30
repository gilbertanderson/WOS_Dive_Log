# Dive Log
This is an application created for divers to log thier dives. Capstone Project Memebers (Anastasia, Andrea, Dominique, Gilbert, Neftali)

### Goal:
Volunteer divers need access to dive log software from one or two of the computers in our volunteer lounge. I would like for each of the divers to have their own ‘account’ that they could log into to see the dives they’ve done or to log new dives. Ideally, administrators would be able to access the logged dives from their desk computers to make any necessary adjustments to the logs or diver’s accounts. They also want to run reports for each of the divers that would transfer this information into a Microsoft Excel spreadsheet.

The information they want on each log would be Date, Time, Bottom Time, Location (which we could program to correspond with a temperature and depth, but if the diver goes on a dive trip, they can type other names into this field), Temperature, Depth, Purpose, dive buddy(ies), and a comments section.

## Getting Started

```
git clone https://github.com/aedwardsxula/WOS_Dive_Log.git
```

## Deployment

To deploy the application to Predix, once logged into Cloud Foundry (Predix) on the terminal, simply travel to the project’s root folder inside the terminal and use the command
```
cf push
```
or

```
predix push
```
This will use the project’s manifest file to deploy the application to Predix with all known dependencies. After a successful deployment, the application’s URL will be listed.

## Built With

* AngularJS
* NodeJS
* Express
* Firebase

## Authors

* **Gilbert Anderson** 
* **Anastasia Aubrey** 
* **Dominque Riley** 
* **Neftali Valdez** 

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
* **Andrea Edwards**

```
git clone https://github.com/aedwardsxula/WOS_Dive_Log.git
```
