---
title: Symbols biological activity
permalink: /Symbols/biological_activity/
---

*by Vasundra Touré*

A biological activity is an Activity Node found in SBGN AF. It is used for representing molecular activities of all types of biological entities. The glyph has a rectangle shape and carries a label representing the activity.

The following example simply shows a biological activity: Conductance activity.

<center>
{{\#icon:Symbol-biological-activity.png |||| corner iradius11}}

</center>
A biological activity can also carry an unit of information that provides information on the nature of the entity from which the activity comes from (e.g. simple chemical, macromolecule, etc.).

The following example illustrates the binding activity (biological activity) of the macromolecule IFNG (unit of information).

<center>
{{\#icon:Symbol-IFNG-binding.png |||| corner iradius11}}

</center>
It should be noted that the biological activity is not equivalent to a biological entity in itself. A biological activity can come from one biological entity, a part of an entity, or a combination of them. It is up to the users to determine how to represent it in their diagram.

The following example represents the EGF protein kinase receptor. This receptor has two activities, the binding activity that allows the extracellular part of the receptor to bind to the ligand, and the kinase activity capable of phosphorylating the downstream protein and initiating the intracellular signaling. It is possible to represent each activity in two separate nodes or to represent both activities in a single node.

<center>
{{\#icon:Symbol-EGFR-activity.png |||| corner iradius11}}

</center>
The following example is based on the Figure 7E of Pan et al \[1\]. It depicts the effects of nutrients and metabolic signals (shown as a perturbation) on Brown fat metabolism through PPARδ. It shows that the Twist-1, induced by the PPARδ, serves as a negative feedback regulator of PGC-1α in Brown fat metabolism. Please note the different units of information on Twist-1 activity nodes that indicate the activity from different biological materials (gene and protein).

<center>
{{\#icon:Symbol-Brown.png |||| corner iradius11}}

</center>
Download the biological activity node image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-biological-activity.sbgn "wikilink") \] \[ [GML](/media:Symbol-ba.gml "wikilink") \] \[ [GraphML](/media:Symbol-biological-activity.graphml "wikilink") \] \[ [SVG](/media:Symbol-biological-activity.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-biological-activity.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-ba.ppt "wikilink") \] \[ [PDF](/media:Symbol-biological-activity.pdf "wikilink") \] \[ [PNG](/media:Symbol-biological-activity.png "wikilink") \]

\[1\] D. Pan, M. Fujimoto, A. Lopes, and Y.-X. Wang, “Twist-1 Is a PPARδ-Inducible, Negative-Feedback Regulator of PGC-1α in Brown Fat Metabolism,” Cell, vol. 137, no. 1, pp. 73–86, Apr. 2009.