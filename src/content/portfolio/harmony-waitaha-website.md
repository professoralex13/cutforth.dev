---
order: 5
title: Harmony Waitaha Website
period: Aug 2023 - Present
tags: [React, TypeScript, CMS]
blurb: Collaborated to develop a public-facing website with a lightweight custom CMS
image: /images/hw-website/figma.png
source: https://github.com/baritone-designs/harmony-waitaha-website
---

For this project, I was tasked with developing a marketing website for the organization that the Barbershop Chorus I sing in is a part of. I worked in a team with my friend, [Joran](https://www.linkedin.com/in/joran-le-quellec/) who designed the website, where we used React with NextJS to implement the website with a lightweight CMS, allowing members of the organisation to edit content on the website on the fly. This project was one of my first experiences taking a public website project from client requirements to production in a team environment.

## Initial Planning

We were first approached about this project by Harmony Waitaha board member Lynn Humphrey with a set of goals/requirements for the website. These included:
- Replace the old Canterbury-Plainsmen website with a new custom designed website with improved and more aesthetic marketing material.
- The website should provide information about upcoming concerts, and details on how to contact the organisation, or become a member.
- Each chorus within the organisation should have its own page with aesthetics matching that choruses branding and target demographic.
- The content (text and media) of the website should be modifiable by administrators through an easy to use user-interface.

The design prototype for the website was created using Figma.

![Design Prototype in Figma](/images/hw-website/figma.png)

## Tech Stack
The technologies we decided to use for the website were:
- React as the front-end Javascript library
- TailwindCSS for styling
- NextJS as the fullstack application framework
- Postgres and PrismaORM for the database
- Google cloud buckets for media storage
- tRPC for typesafe communication between the frontend and backend
- MaterialUI for internal editing components

## CMS
CMS stands for Content Management System, and it is a system implemented into websites allowing administrator users to modify the content of the website without having to edit the source code.
This usually means the actual content for the website is stored on a database, then rendered to HTML upon request, or periodically.
For this website, we decided to build our own primitive custom CMS rather than use an existing system such as wordpress.
The internal pages allow editing of fixed paragraph and image slots on each page, as well as modifying dynamic lists such as upcoming events, important people, or quartet listings.
When a user saves an edit, the changes are uploaded to the database and/or media bucket, then a trigger is sent to the NextJS server to rebuild the HTML for the public facing pages.
This is known as Static Site Generation, where the webite is regenerated based on information from a database, but not based upon user specific requests, which is known as Server-Side Rendering (this naming conventino is a bit confusing, since Static Site Generation is still rendering happening server-side).

![Edit Page Example](/images/hw-website/cms.png)