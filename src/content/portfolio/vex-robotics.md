---
order: 2
title: Vex Robotics
period: 2019 - 2026
tags: [C++, Mechanical Design, Team Management]
blurb: Competitive robotics work spanning mechanical design, manufacturing, and C++ firmware in a multidisciplinary team
image: /images/vex/pb-robot.png
home: true
---

Vex Robotics isn't a singular project per se, but rather an extracurricular activity I have taken part in throughout my time at high school and university (7 years!). As part of this activity I have taken on both technical, and administrative roles at both my high school robotics club, and university robotics club.
Doing Vex Robotics gave me a space to learn CAD skills, programming skills, project and team management skills, and, a little bit of finance skills.

## Early High School
I was introduced to vex in my first year of high school, where as a member of the robotics club, I was assigned to the team 4067X (4067 - organisation code, X - team code). The leader of this team was the most experienced member of the club as a whole, and focused on the mechanical design and driving of the robot. As I had past programming experience, I was assigned as team programmer. In this position I learnt the basics of PID control systems in order to program autonomous behavior on the robot. The code was written using C++, and my biggest mistake was not modularizing my code between files.

![Tower Takeover Robot](/images/vex/tt-robot.png)

For that season, we competed at the national championships in Auckland (February 2020), where our team came out as tournament finalists. This qualified us for a spot at the International Championships, which would have taken place in Louisville Kentucky, if it weren't for the COVID-19 pandemic canceling it.

The team competed again the following year with the same members, and there isn't much interesting to say about that season, as there was no national championships due to the pandemic.

## Competing at the World Championships
In my 3rd year of high school, I was made leader of X-team. I was still lead programmer, but this season I began to take a larger role in the mechanical design of the robot, and management of the club as a whole.
This year saw us build one of the simplest, but most competitive robots ever taken to competition.
Covid was still a concern in New Zealand at the time, so the national championships took place across only one day with a small number of teams to comply with social gathering rules.
No schools in Christchurch had the intention of sending teams to the tournament, however my team had put a large amount of work into developing our robot this year, so we organised a day trip to the tournament by ourselves.

The effort put into organizing the trip was worth it, as we came out as Tournament Champions, which qualified us for the World Championships for a 2nd time. While the tournament was allowed to happen this year (taking place in Dallas, Texas), our school was not very keen on us traveling overseas given the heavy restrictions and quarantine requirements should a team member contract Covid. Despite this, we petitioned the school, and raised $20,000 in funding from sponsors: Tait Communications, and Shout Media. This experience organizing and f`ind`ing funding for an international trip taught me valuable skills in the realm of proposal writing, budgeting, and team communication/management. The trip went ahead, and we got to visit the Johnson Space Center in Houston during our free time!

![Tipping Point Worlds](/images/vex/tp-worlds.jpg)

## Advancing our engineering techniques
Up to this point, the robots built by my team have been rather primitive designs, even if they are effective. This is mostly due to the lack of any formal design process before constructing the robots.
This had to change for the 2022-2023 season, as this years game required the robot to "throw" discs into baskets.
This was a very complicated problem to solve, as it required picking up discs from the ground, and then throwing them at at the right angle, and speed, in order to land in the basket.
To aid in the design process, I taught myself to use Autodesk Inventor, a popular CAD software with good libraries for the parts we used. This season also saw our teams first use of custom manufactured plastic parts, which we made by lasercutting sheets of ABS.
Our improved design planning with CAD gave us the ability and time to customize our robot aesthetically, so we spray painted (most of) the metal parts black for a sleek look.

![Spin Up Robot](/images/vex/su-robot.png)

As well as advancing our mechanical design, we explored new techniques for programming the robot.
I tried using a Rust tooling for Vex robots I found online, however it was experimental and incomplete, so I did not end up using it for the final competition codebase.
This was the first year I implemented Odometry as a method of tracking the robots position throughout the autonomous portion of the games, as opposed to previous years where the robot tracked movement within each individual movement command. This improved the reliability of our autonomous behavior, and helped us score very highly in the national tournament. Our high ranking in qualifications allowed us to partner with the rank 1 seed for the elimination bracket, however we unfortunately lost our quarter finals match.

## University Robotics

Thoughout my time doing Vex Robotics in high school, I had been tutored by members of the University of Canterbury robotics club. These connections meant that when I finally started my Engineering Degree, I was immediately pulled into the top Vex Robotics team at the university. University Vex Robotics turned out to be an entirely different ball game to high school. Firstly, we had to build two robots and have them work together during matches, as opposed to having a random other team as an alliance partner as is the case in high school. Secondly, the UC team prefers to entirely custom manufacture our robot structure and mechanisms (as opposed to high school where we the rules state we must use parts from a kit). This means CAD is a much more important part of the design process, and is a significantly more collaborative exersize. To make collaboration easier, the UC team uses OnShape, a fully web based CAD software.

![High Stakes Robot](/images/vex/hs-robot.png)
The first robot I helped design and competed with is shown above. The most notable feature of this robot was a 3 degrees-of-freedom arm (two joints) which required inverse kinematics solvers to be implemented in code to guide the tip of the arm to the correct position throughout the game. After winning the national championship, we took this robot to Dallas Texas again for my 2nd world championships visit. This was the first season where I was not in charge of programming, but rather was involved with the mechanical design, manufacturing, and driving of the robot.
![Pushback Robot](/images/vex/pb-robot.png)
The 2nd robot I was involved with is shown above. This robot reused the chassis and intake design from the previous bot, and I was given the role of Software and Driving Lead for this season, and had little input on the mechanical design. For the software on this robot, I again implemented Odometry position tracking as I had in high school, but implemented a new motion control system called Pure Pursuit. This system allows the robot to track smooth paths, using a mix of mathematical techniques such as linear algebra, and bezier splines. This positioning and motion system gave us very reliable autonomous behavior when we competed at the national championships, and came away as Tournament Champions, Skills Champions (solo time trials), and Design award winner.