---
title: Symbols inhibition
permalink: /Symbols/inhibition/
---

*by Nicolas Le Novère*

An *inhibition* affects negatively the flux of a process (its speed). This inhibition can be, for instance, the effect of a channel blocker or a negative allosteric regulation. In SBGN Process Description language, the inhibition of a process is represented by the *inhibition arc* (note that the inhibition arcs of all three SBGN languages have the same appearance). The target extremity of an *inhibition* carries a bar perpendicular to the end of the arc. An *inhibition arc* starts from an *entity pool node* (labelled "EPN" in the figure below, representing for instance a pool of molecules) and ends on a *process node* (labelled "PN" in the figure below, representing for instance a reaction). In the drawing below, the inhibition arc is coloured in red:

<center>
{{\#icon:Symbol-inhibition.png |||| corner iradius11}}

</center>
The following generic example describes an entity C that inhibits the process transforming an entity A into an entity B.

<center>
{{\#icon:SymbolMonth-inhibition-example.png |||| corner iradius11}}

</center>
The following actual example describes the protein Gαi inhibiting the conversion of ATP into cAMP.

<center>
{{\#icon:SymbolMonth-inhibition-example-real.png |||| corner iradius11}}

</center>
Download the inhibition arc image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-inhibition.sbgn "wikilink") \] \[ [GML](/media:Symbol-inhibition.gml "wikilink") \] \[ [GraphML](/media:Symbol-inhibition.graphml "wikilink") \] \[ [SVG](/media:Symbol-inhibition.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-inhibition.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-inhibition.ppt "wikilink") \] \[ [PDF](/media:Symbol-inhibition.pdf "wikilink") \] \[ [PNG](/media:Symbol-inhibition.png "wikilink") \]