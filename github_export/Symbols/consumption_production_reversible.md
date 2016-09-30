---
title: Symbols consumption production reversible
permalink: /Symbols/consumption_production_reversible/
---

*by Nicolas Le Novère*

A process transforms one or several physical entities into one or several others. Examples would be biochemical reactions converting chemicals into others or transport reactions moving chemicals from one compartment to another. In SBGN Process Description language, the use of reactants is represented by the *consumption arc*, a simple arc without specific ends. The generation of products is represented by the *production arc*, an arc ending by a filled arrowhead. In the drawing below, the consumption and production arcs are coloured in red:

<center>
{{\#icon:Symbol-consumption_production.png |||| corner iradius11}}

</center>
The following generic example describes an entity C that stimulates the process consuming an entity A and producing an entity B.

<center>
{{\#icon:SymbolMonth-consumption_production-example.png |||| corner iradius11}}

</center>
A reaction or a transport can be reversible. In that case, both side of the process are linked to production arcs:

<center>
{{\#icon:Symbol-reversible.png |||| corner iradius11}}

</center>
The following example describes the consumption of glucose to produce glucose 6 phosphate, stimulated by the enzyme hexokinase.

<center>
{{\#icon:SymbolMonth-consumption_production-example-real.png |||| corner iradius11}}

</center>
The following example describes the reversible conversion of the glutamate ionotropic receptor between closed and open states.

<center>
{{\#icon:SymbolMonth-reversible-example-real.png |||| corner iradius11}}

</center>
Download the consumption and production arcs images as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-consumption_production.sbgn "wikilink") \] \[ [GML](/media:Symbol-consumption_production.gml "wikilink") \] \[ [GraphML](/media:Symbol-consumption_production.graphml "wikilink") \] \[ [SVG](/media:Symbol-consumption_production.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-consumption_production.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-consumption_production.ppt "wikilink") \] \[ [PDF](/media:Symbol-consumption_production.pdf "wikilink") \] \[ [PNG](/media:Symbol-consumption_production.png "wikilink") \]