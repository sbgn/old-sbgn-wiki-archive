---
title: Symbols stimulation (Process Descriptions)
permalink: /Symbols/stimulation_(Process_Descriptions)/
---

*by Nicolas Le Novère*

A *stimulation* affects positively the flux of a process (its speed). This stimulation can be, for instance, a catalysis or a positive allosteric regulation. In SBGN Process Description language, the stimulation of a process is represented by the *stimulation arc* (Note that *catalysis* exists as an independent symbol in SBGN PD). The target extremity of a *stimulation* carries an empty arrowhead (note that the stimulation arcs of all three SBGN languages have the same appearance). A *stimulation arc* starts from an *entity pool node* (labelled "EPN" in the figure below, representing for instance a pool of molecules) and ends on a *process node* (labelled "PN" in the figure below, representing for instance a reaction). In the drawing below, the stimulation arc is coloured in red:

<center>
{{\#icon:Symbol-stimulation.png |||| corner iradius11}}

</center>
The following generic example describes an entity C that stimulates the process transforming an entity A into an entity B.

<center>
{{\#icon:SymbolMonth-stimulation-example.png |||| corner iradius11}}

</center>
The following actual example describes calcium stimulating the conversion of inactive calmodulin into active one.

<center>
{{\#icon:SymbolMonth-stimulation-example-real.png |||| corner iradius11}}

</center>
The following actual example describes the stimulation of calcium excretion from the endoplasmic reticulum by the inositol 3 phosphate receptor.

<center>
{{\#icon:SymbolMonth-stimulation-example-real-2.png |||| corner iradius11}}

</center>
Download the stimulation arc image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-stimulation.sbgn "wikilink") \] \[ [GML](/media:Symbol-stimulation.gml "wikilink") \] \[ [GraphML](/media:Symbol-stimulation.graphml "wikilink") \] \[ [SVG](/media:Symbol-stimulation.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-stimulation.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-stimulation.ppt "wikilink") \] \[ [PDF](/media:Symbol-stimulation.pdf "wikilink") \] \[ [PNG](/media:Symbol-stimulation.png "wikilink") \]