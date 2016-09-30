---
title: User Page
permalink: /User_Page/
---

SBGN study guide
----------------

Visit the [Documents](/Documents "wikilink") section for:

-   various [examples](/Documents/Examples "wikilink") (to get a better idea of what an actual map looks like)
-   some [tutorials](/Documents/Outreach#Tutorials_on_using_SBGN_languages "wikilink") (very accessible, but not always up-to-date)
-   [publications](/Documents/Outreach#Publications_about_SBGN "wikilink") about SBGN (a good start for a brief historical overview)
-   detailed [technical specifications](/Documents/Specifications "wikilink") (the ultimate reference documents, most up-to-date, but a steep learning curve for beginners)
-   some [Frequently Asked Questions](/Documents/FAQs "wikilink")

Please also check the [SBGN PD User Manual](http://sourceforge.net/projects/sbgn/files/SBGN%20Process%20Description%20language/Level%201%20Version%201.3/sbgn_PD-level1-Manual-v1.3.pdf/download) when you are ready to draw your own maps.

Quick overview
--------------

The Systems Biology Graphical Notation comprises three complementary languages suited to represent different types of pathways.

***<font color="#ffff00">Process Descriptions (PD)</font>*** is a language that permits the description of the processes (e.g. biochemical reactions) taking place in a biological system. PD maps are essentially bipartite graphs made up of nodes representing pools of molecular species and nodes representing processes. PD is great to represent precisely metabolic networks for which we know all the reactants and reactions, and visualize chemical kinetic models.

***<font color="#ffff00">Entity Relationships (ER)</font>*** is a language that permits the description of all the relations involving the entities of a biological system. There is mainly one type of nodes, representing the objects considered, linked by relationships. The relationships are independent, avoiding the problem of combinatorial explosion triggered by multistate entities. ER is perfect to visualize rule-based models.

***<font color="#ffff00">Activity Flows (AF)</font>*** is a language that permits the description of the flow of activity in a biological system. All nodes represent activities, linked by modulation arcs. AF is best used to represent signalling pathways or gene regulatory networks where mechanistic knowledge is missing or omitted, and to visualize logical models.

### Language reference cards

Users already familiar with the semantics and syntax of SBGN can refer to these cards as a reminder of the overall list of available glyphs for each language:

|                                                                              |                                                                              |                                                                        |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [center| thumb|200px|Process Descriptions](/Image:Refcard-PD.png "wikilink") | [center| thumb|200px|Entity Relationships](/Image:Refcard-ER.png "wikilink") | [center| thumb|200px|Activity Flows](/Image:Refcard-AF.png "wikilink") |

### SBGN Bricks dictionary

A dictionary of reusable patterns (e.g. phosphorylation, translation, catalysis, transport, etc.) commonly found in different types of biological networks is available on the [SBGN Bricks webpage](http://sourceforge.net/apps/mediawiki/sbgnbricks/index.php?title=SBGN_bricks_dictionary).

The patterns are available in all 3 SBGN languages (where applicable). They can be downloaded as SBGN-ML files, to be reused in [compatible software applications](/User_Page#Software_tools_to_handle_maps "wikilink").

Getting started
---------------

Check the following resources if you understand the general idea behind SBGN but are wondering exactly *how* you can start using it in your own maps.

### User Manual

Beginner-friendly directions are now available in the [SBGN PD User Manual](http://sbgn.svn.sourceforge.net/viewvc/sbgn/ProcessDiagram/trunk/UserManual/sbgn_PD-level1-user-public.pdf). User guides for other languages will follow as soon as possible.

### Software tools to handle maps

If you are looking for software tools designed specifically to handle SBGN maps, check our [Software](/SBGN_Software#Software_providing_support_for_SBGN "wikilink") section.

A growing number of tools supports SBGN-ML, the recommended file format to store SBGN maps. Maps saved as SBGN-ML files can be reused in any compatible tool. Each tool offers a unique set of useful features (e.g. semi-automated layouts, syntactic validation, etc.). SBGN-ML allows users to make the most of all available compatible applications.

Reusable network patterns can be downloaded as SBGN-ML files from the [SBGN Bricks dictionary](http://sourceforge.net/apps/mediawiki/sbgnbricks/index.php?title=SBGN_bricks_dictionary).

If you are reluctant to install a new piece of software on your machine, SBGN maps can also be drawn using more generic applications, such as Microsoft PowerPoint or Inkscape. Feel free to reuse one of our [templates](/Documents/Templates "wikilink") to assist you in this task.

### For developers of software tools

Tool developers eager to support SBGN should check the [LibSBGN](/SBGN_Software#Software_tool_assisting_in_supporting_SBGN "wikilink") project. This open source library allows to integrate a number of useful functionalities into third party applications: import/export of SBGNML files, check if a map is valid or not, etc.

How to cite?
------------

When referring to SBGN in any publication, please follow these [instructions](/Quote "wikilink"). Feel free to reuse one of our [logos](/Documents/Logos "wikilink") in any poster, presentation, website, etc.

Going further, getting involved
-------------------------------

SBGN is an open community project. Be it to ask a question or suggest a modification, anyone's input is welcome. Check the [Developer Page](/Developer_Page "wikilink") for more information.