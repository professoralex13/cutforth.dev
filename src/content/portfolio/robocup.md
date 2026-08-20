---
order: 1
title: Robocup
period: April 2026 - Present
tags: [C++, Robotics, LIDAR, Pathfinding]
blurb: Advanced autonomous robot software, LIDAR based navigation, object detection, and pathfinding
image: /images/robocup-telemetry.png
source: https://github.com/professoralex13/robocup
home: true
---

Robocup is a project undertaken by 3rd year Mechatronics Engineers at UC as part of the course ENMT301.
For Robocup, teams of 3 build and program robots to compete in a timed competition which involves picking up objects from around an arena, and depositing them at a home base.
This portfolio entry logs the state of the project at 17/08/2026, and at this stage the project is still ongoing.

My role in the team is Software Lead, so I am in charge of developing the firmware which controls all aspects of the robots behavior during competition matches.
As well as developing the robot firmware (which is written in C++), I also developed tools used to improve the development process for the firmware, such as a telemetry rendering program (which is written in Rust).

![The Robot](/images/robocup/chassis.jpg)

## Telemetry

To make development of firmware for the robot easier and faster, I put a raspberry pi on the robot to provide a wireless bridge for transmission of telemetry back my laptop.
Using a websocket over wifi through the PI provided a significantly higher bitrate than using the Bluetooth modules provided with the robot kit.
With the robot's heavy reliance on LIDAR data, the telemetry program allows significantly easier analysis of what the robot is seeing while operating.
I wrote the telemetry program in Rust using the graphics library [raylib](https://docs.rs/raylib/latest/raylib/).
It displays key information about the current state of the robot on the left, and a rendering of the field box on the right, with the robot’s current position and LIDAR readings rendered on the field.

![Telemetry](/images/robocup/telemetry.png)

## LIDAR/Object Detection
The robot has a single sensor for spatial awareness, and that is a spinning LIDAR (Light Detection and Ranging) mounted on the front of the robot.
This sensor is used for detecting field obstacles such as perimeter walls and dynamic elements like pillars for the sake of navigation/postioning, and for detecting the weights to be picked up.
The LIDAR sensor provides a new pointcloud based on what it can see roughly 10 times per second. This point cloud is then passed into an object detection algorithm which follows the following rough process:

- Create coarse clusters of points by checking the cartesian distance between each adjacent point (adjacent in terms of beam angle)
- Apply line and circle fits to each cluster. For each fit, if the furthest point in each cluster is above some threshold, split the clusters across this point, and repeat for each sub cluster.
- At this point we have a set of detected line and circle objects. These can then be classified as either perimeter walls, dynamic field objects, or weights, based on the intensity (a property of each point), shape, and size properties of the objects.

## Localization
Localisation refers to how the robot keeps track of where it is relative to a field datum. This allows the robot to reliably return to where it started (home base) at the end of the match. 
In past robotics competitions (mostly Vex Robotics) I have used encoders in the chassis motors to measure rotation, and then estimate the motion of the robot based on how the wheels have moved.
This system alone can be accurate at the beginning, but begins to diverge from the actual position due to wheel slip and estimation error.
For Robocup, a key aspect of our overall strategy was the ability for the robot to find its way back to home base at the end.
For this to be possible, the robot's estimated position must not drift from its actual position.

To counter this drift, I used an algorithm known as [Monte-Carlo localisation](https://en.wikipedia.org/wiki/Monte_Carlo_localization), which determines the accuracy of its position estimate by comparing what the LIDAR sees, to what the LIDAR expects to see based on a position estimate.
Monte-Carlo localisation uses a technique known as particle filtering, where a large number of possible results or "particles" are generated using expected position noise.
Each particle is then given a score, and the filter output is taken as the score weighted average of all the particles.
The low scoring particles are then disposed of, and high scoring particles are duplicated, reinforcing the estimate for the next pass (this is known as "resampling").
In Monte-Carlo localisation, the particles have their values updated based on estimated movement from wheel odometry, and then the Particle filter reinforces the particles in more "correct" positions, based on what the LIDAR sees.

## Motion Control
Motion control refers to the system which translates information about robot position from the localisation system, and target positions from the weight detection system into commands for the chassis motors.
The motion model I implemented is called Pure Pursuit, and it operates by finding the point on the desired path that is some distance ahead of the robot (as shown in the figure below).
The robot then tries to point towards, and drive towards this point at all times, and this movement then results in the look-ahead point moving providing a dynamic target. This look ahead distance allows tuning of how aggressively the robot tracks the path.
Two PID loops are used, one based on the heading error, and one based on the distance error.
The heading error PID is relevant at all times in order to keep the robot facing in the correct direction.
The distance error PID only becomes important when the robot is on final approach to the target position.

![Pure Pursuit Diagram](/images/robocup/pure_pursuit_tracking.png)