---
title: Symbols clone marker
permalink: /Symbols/clone_marker/
---

*by Vasundra Touré*

A clone marker is an auxiliary unit found in SBGN PD that can be hold by Entity Pool Nodes (EPNs). It informs that the entity has been duplicated: a visual indication shows that at least one other occurrence of the EPN can be found in the map. A glyph is marked by a clone marker when it is filled in it's lower part. There are two types of clone markers: the simple clone marker (unlabeled) and the labeled clone marker.

The following example shows a simple chemical ATP with a simple clone marker.

<center>
{{\#icon:Symbol-clone-marker.png |||| corner iradius11}}

</center>
The labeled clone marker carries a label for identifying equivalent clones present elsewhere in the map. It is used for stateful EPNs to facilitate the identification when a large number of state variables are displayed making it difficult to visually identify equivalent clones. The following example represent a multimer macromolecule X that is phosphorylated (state variable P@S100) and is a dimer (unit of information N:2). The multimer X holds a labeled clone marker summarizing those information.

<center>
{{\#icon:Symbol-clone-marker_Labeled.png |||| corner iradius11}}

</center>
The following example shows the first three reactions that occur during the glycolysis. First, the glucose is consumed to produce glucose-6-phosphate. This reaction is catalyzed by the hexokinase enzyme and uses an ATP energy to produce ADP. The second reaction, shows the production of fructose-6-phosphate from the glucose-6-phosphate. It is catalyzed by the glucose-6-phosphate isomerase enzyme. Third, stimulated by the phosphofructokinase enzyme, the fructose-6-phosphate produces the fructose-1,6-phosphate by using an ATP that releases an ADP.

ATP and ADP are found two times in this pathway, thus both are identified by a clone marker.

<center>
{{\#icon:Symbol-clone-marker_exampleGlc.png |||| corner iradius11}}

</center>
Download the clone marker node image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-clone-marker.sbgn "wikilink") \] \[ [GML](/media:Symbol-clone-marker.gml "wikilink") \] \[ [GraphML](/media:Symbol-clone-marker.graphml "wikilink") \] \[ [SVG](/media:Symbol-clone-marker.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-clone-marker.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-clone-marker.ppt "wikilink") \] \[ [PDF](/media:Symbol-clone-marker.pdf "wikilink") \] \[ [PNG](/media:Symbol-clone-marker.png "wikilink") \]