# JavaScript Drones! 

Watch the videos:

Part 1 → <https://www.youtube.com/watch?v=JzFvGf7Ywkk>

Part 2 → <https://www.youtube.com/watch?v=ozMwRq-IT2w>

![](https://d3vv6lp55qjaqc.cloudfront.net/items/3u02271f0u461s2e2q24/Image%202018-12-05%20at%2011.11.56%20AM.png)

⚠️️️ ⚠️ ️️⚠️️️ Use the codebase as your own risk. The drone can hurt you and I'm not responsible for that. Always test commands with the props removed first. Don't be dumb. ⚠️️️ ⚠️️️ ⚠️️️

# Flying a Drone with React and Node.js

IBM is giving away 2,000 DJI Tello drones as part of a contest and I made this video to help them promote it.

* Enter the contest at [https://developer.ibm.com/contest](https://developer.ibm.com/contest/?cm_mmc=ibmdev-_-drone-_-youtube-_-wesbos) (US/ Canada Only)
* More details about the challenge at [https://developer.ibm.com/blogs/2018/11/12/win-a-drone-program-a-drone-change-the-world/](https://developer.ibm.com/blogs/2018/11/12/win-a-drone-program-a-drone-change-the-world/)


## Software Used
* React (with React Hooks!)
* Styled Components for styling
* Node.js and UDP4 sockets for communicating with drone
* Socket.io WebSockets for sending data to/from the browser
* Next.js for easy react setup

## Hardware Used
* [DJI Tello Drone](https://amzn.to/2SvzqON)
* [Extra Batteries](https://amzn.to/2SyV70J) - it comes with one and I bought two extra. For continual development I'd say you only need two — one in the charger and one in the drone. For flying away from your house you definitely need at least 3 as they only last about 10-15 mins.
* [Fast Battery Charger with 4 slots](https://amzn.to/2SAWqwb)


## Using This Code

### Frontend

1. cd `frontend`
1. `npm install`
1. `npm run dev`


### Backend
1. cd `backend`
1. `npm install`
1. connect to drone via wifi
1. `npm start`


## Troubleshooting

[Docs for Tello are available here](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)

I had to update the firmware of my drone when it came in the mail before I could use this 1.3 API. Do this via the Tello app on your phone.

If you let the drone's WIFI connection lapse, you have to restart the server by typing `rs` into the terminal. This will re-run the `command command` that puts the drone in SDK mode. If you don't do this, it will ignore any commands you send it.


## License — WTFPL

I want you to build cool stuff with this.

Please hack on it and make your own cool things.

## Examples & Resources

* [jsolderitsch/tello-nodejs](https://github.com/jsolderitsch/tello-nodejs) - very simple JavaScript examples
* [FFMpeg + Node.js Video in the browser complicated example](https://github.com/SovGVD/nodetello/)
* [Some Japanese Developer Figured out how to get video working with WebRTC](https://qiita.com/a-baba/items/d728d580f89473c5fd18)
* [Drone Keyboard for Tello](https://github.com/dnomak/drone-keyboard#drone-keyboard-for-tello)
* Link your repo here for others to learn!
