# README #
TheMeddlinProject (TMP) is a collaborative penetration testing tool.

Having multiple reports and various output files from multiple analysis tools can make performing reconnaissance on a target pretty difficult. TMP is being built to alleviate that problem, and designed with teamwork in mind. Using Meteor's reactive design TMP will be able to support multiple users simultaneously working on the same set of data, and show those uploads and data calculations in real-time.

Initially, we will have a reconnaissance/social engineering be focusing on data retrieved from nmap, metagoofil, and recon-ng. We hope to have a modular design which will allow other pen-testing/analysis tools to be easily used with TMP in the future.

### How do I get set up? ###
TMP is still in the initial phases of development. This document will be updated later to instruct on how to download and configure it for first-time use and later deployments. Currently this document will discuss configurations and implementations are already known or actively being developed.

###Dependencies###
Currently, TMP must be run on either OSX or a Linux platform. Using Meteor on Windows is currently unofficially supported, although we may develop for Windows later.