---
title: Symbols compartment
permalink: /Symbols/compartment/
---

*by Vasundra Touré*

A compartment is a container node found in SBGN PD and SBGN AF. It is a logical or physical structure that contains entity pool nodes (EPNs). One EPN belongs to one compartment. Thus, two "same" entities located in two different compartments are actually two different pools. The compartment has its own symbol: it is an enclosed structure with thick borders that can have any geometry. It should carry a label to characterise the compartment's name.

<center>
{{\#icon:Symbol-compartment.png |||| corner iradius11}}

</center>
The following example represents the consumption of phosphoenolpyruvate (PEP) to produce pyruvate in the cytosol compartment. The reaction is stimulated by the enzyme pyruvate kinase and produces a molecule of energy ATP.

<center>
{{\#icon:Symbol-compartment_exampleGlycolysis.png |||| corner iradius11}}

</center>
Compartments can overlap but that does not always imply that the overlapped compartment contains the overlapping one. Also, the overlapped part of a compartment should not contain any object which could be covered by an overlapping compartment. The following example shows the transport of pyruvate from the cytosol to the mitochondrion. Here, the cytosol is overlapped by the mitochondrion / the mitochondrion is overlapping the cytosol.

<center>
{{\#icon:Symbol-compartment_examplePyruvate.png |||| corner iradius11}}

</center>
Finally, compartments can hold units of information that will for instance give additional information about the physical environment of the compartment (pH, temperature, voltage, etc.). The following example represents the lysosome compartment with a pH of 4,8 and the cytosol compartment with a pH of 7,2. These units of information show that the lysosome is more acidic than the cytosol.

<center>
{{\#icon:Symbol-compartment_exampleUnitOfInfo.png |||| corner iradius11}}

</center>
Download the compartment node image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-compartment.sbgn "wikilink") \] \[ [GML](/media:Symbol-compartment.gml "wikilink") \] \[ [GraphML](/media:Symbol-compartment.graphml "wikilink") \] \[ [SVG](/media:Symbol-compartment.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-compartment.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-compartment.ppt "wikilink") \] \[ [PDF](/media:Symbol-compartment.pdf "wikilink") \] \[ [PNG](/media:Symbol-compartment.png "wikilink") \]