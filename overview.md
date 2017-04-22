# React Native Overview

In the past, many front-end developers have been excluded from creating great mobile applications, either due to the necessity of learning Java, Objective-C or Swift, because of the lack of powerful frameworks that they can quickly get to grips with.

That has all changed when Facebook released React Native. A powerful and quick to learn framework. It allows anyone with some JavaScript knowledge to jump in and create mobile apps, that are indistinguishable from apps crafted in the native app languages.

Rob Walker from Papertrail.io will take you through his journey from native to React Native apps, with some pointers to help you get started with React Native.

## About me

Background
Development experience
CTO Papertrail
What Papertrail does

## Intro to RN

Built on top of React. A javascript library for creating user interfaces. Quick primer
 - Uses a shadow DOM for speed
 - A rendered component is the result of a stateless function
 - Components accept props and state.
 - You use JSX (recommended) to create the HTML in JS
 - Example
 - CSS can all be written in JS
 - Example

React native is a framework for building native apps using React
Designed as a Learn Once, Write Everywhere, rather than Write Once, Run Anywhere
In reality we found you can share a large percentage of code between iOS and Android
There is no DOM, so RN has some primitative Components
i.e. Rather than using <div> there is <View>, <p> = <Text>, <img> = <Image>, <input> = <TextInput> etc. (screenshot)  
RN also exposes and abstracts many native API such as CameraRoll, Vibration, NetInfo etc. (screenshot)
Ability to simple access other native API/modules
Good CLI tools, live reload, hot reload, debugging
Support for Apple TV, Windows, Web, Desktop all available at various stages of stability.

## What can you build
Some example ideas
Screenshots/logos of RN apps https://facebook.github.io/react-native/showcase.html
Watch apps
iOS widgets

## What we built
iOS/Android app with
 - Offline syncing/caching ability
 - Camera/barcode scanning
 - Camera roll
 - Native tooling (Fastlane, cocoa pods)
 - Native tools - Fabric, Crashlitics etc
 iOS took 6 month including learning React and RN + normal CTO duties etc.
 Android took 2 weeks!

## Mobile development options with Positives/Negatives

Native
+ Excellent performance
+ Full native API access
- Need to learn language (different on each platform)
- need different app for each platform

Cordova (web view)
+ Cross-platform
+ Simple to develop
- Limited device API access
- Poor performance (Uncanny valley)

React Native
+ Full native API access (open-source modules of build your own (see native))
+ Only need to learn Javascript(React) + app store basics
+ Developer experience
- Performance not always as good as native

## Demo of creating a project
 react-native init
 react-native run-ios
 Enable live reload
 Make some changes

## Where to find resources
 Docs are good and link to some live demos
 awesome-react-native
 Google!
