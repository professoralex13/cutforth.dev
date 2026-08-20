---
order: 6
title: Synaptic Simulations A220
period: 2021 - 2023
tags: [TypeScript, React, SVG, Rust]
blurb: Avionics GUI components, ARINC 424 flight planning, and a canvas-based aircraft map for a high-fidelity Airbus A220 simulation
image: /images/synaptic-airport-map.webp
home: true
---

The Synaptic A220 is an addon for Microsoft Flight Simulator which I was involved with the development of a few years before it released.
This was my first real experience with collaborative team programming projects, and was the project that triggered me to learn Rust.

## Context

I have been an avid Flight Simmer for most of my life. I inherited this interest from my dad, who as an airline pilot, would practice flying while off-duty.
When Microsoft Flight Simulator 2020 was released during Covid lockdown, the course of my programming journey shifted.
Up until this point, almost all of my programming experience had been with C# in the Unity Game Engine.

What triggered my interest in developing addons for MSFS was discovering [flybywiresim](https://flybywiresim.com/), an Open Source project developing a high difelity A320neo.
I unfortunately was not able to contribute at first, as I had no experience with JavaScript, or open source projects in general.
However this drove me to start learning, and as the project tech stack evolved into Typescript and React, that is what I learnt.

## Getting involved with the A220
I bounced around a few freeware projects in their early stage where I practiced my Typescript and React skills, and eventually I was invited by a fellow contributor of some other project, to join the Synaptic team, which at the time was developing a freeware A220.
This was the first project where I wasn't the only active programmer, so it was really helpful having others to guide me and provide assistance.
The first tech stack was pure Typescript React with HTML as the rendering format.
My speciality throughout my time working on this aircraft was the Flight Management System, this is the system on the plane that deals with aircraft performance management, and routing/navigation.
An early version of the FMS (with an early untextured cockpit model) is shown in the image below.

![Early FMS](/images/a220/early-fms.png)
After working for a while using HTML, we realised that given the use case, SVG was actually a better graphic system to use.
Many web developers don't realise that you can directly embed SVG in an HTML document rather than importing it as an image.
This allows the developer to add interaction behavior and state logic to it like it were a regular web-app.
SVG made sense for this use case as the displays were not resizable, so there was no need for any HTML box model behavior, and the majority of the content on the displays did not follow a normal document like structure, so even in HTML, every element was positioned using absolute coordinates, which SVG is much more suited for (and has much nicer looking code when using absolute positioning).

## Writing an FMS

Developing a Flight Management System from scratch required extensive research and reference material.
I was able to use a Pilot Training manual as reference for the general behavior of the system, and as a visual reference for implementing the graphical user interface.
The underlying data used in an FMS is called Navigation Data, and it follows a standard known as [ARINC424](https://en.wikipedia.org/wiki/ARINC_424).
I spent a fair amount of time studying the documentation for the data, especially the sections relating too procedure leg encoding.
Procedure legs refer to how complicated departure and arrival patterns at airports are represented in data.

![Procedure Legs](/images/a220/procedure-legs.png)

I spent a significant amount of time testing complicated procedures, and implementing all the edge cases gave me experience working with geographic mathematics.

## Map Rendering

Another major feature I implemented for the A220 was the Map Rendering system.
This was a rather math and algorithm heavy feature, as the real A220 map uses the [Azimuthal equidistant projection](https://en.wikipedia.org/wiki/Azimuthal_equidistant_projection).
The challenge with this projection is it cannot be linearly translated, all visible elements have to be reprojected each time the map center changes (it can be linearly zoomed however).
The projection math turned out to be a bottleneck, so I had to write a scheduling system to stagger the reprojection of different elements across multiple frames.
Interestingly, the real aircraft actually encounters the same bottleneck, so the real aircraft allows the map to be linearly translated when being dragged, but once stationary, the elements reproject to the new map center.
Over small distances linear translation approximately matches the projection, so for complicated low scale features such as airport maps, projection only occurs once.