---
title: Symbols process
permalink: /Symbols/process/
---

*by Nicolas Le Novère*

A *process* is something that happens, involving one or more physical entities, and modifies the structure, location or free energy of at least one of the participants. Examples would be biochemical reactions or transports. In SBGN Process Description language, a process is represented by the *process node*, an unlabelled square. A process node is connected to the entity participating (*entity pool node*, labelled "EPN" in the figure below), via arcs representing consumption, production or modulation. In the drawing below, the process node is coloured in red:

<center>
{{\#icon:SymbolMonth-process.png |||| corner iradius11}}

</center>
The following generic example describes an entity C that stimulates the process transforming an entity A into an entity B.

<center>
{{\#icon:SymbolMonth-process-example.png |||| corner iradius11}}

</center>
The following example describes the conversion of glucose into glucose 6 phosphate, stimulated by the enzyme hexokinase.

<center>
{{\#icon:SymbolMonth-process-example-real.png |||| corner iradius11}}

</center>
The following example describes the transport of messenger RNA from the nucleus to the cytoplasm. Note that in SBGN, the containing compartment is part of the identity of an EPN. Therefore one does not need to differentiate the two mRNA pools via their labels (e.g. mRNA_nuc and mRNA_cyt).

<center>
{{\#icon:SymbolMonth-process-example-real-2.png |||| corner iradius11}}

</center>
The following example describes the reversible conversion of the glutamate ionotropic receptor between closed and open states.

<center>
{{\#icon:SymbolMonth-process-example-real-3.png |||| corner iradius11}}

</center>
Download the process node image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:SymbolMonth-process.sbgn "wikilink") \] \[ [GML](/media:SymbolMonth-process.gml "wikilink") \] \[ [GraphML](/media:SymbolMonth-process.graphml "wikilink") \] \[ [SVG](/media:SymbolMonth-process.svg "wikilink") \] \[ [Open Document Format](/media:SymbolMonth-process.odp "wikilink") \] \[ [PowerPoint](/media:SymbolMonth-process.ppt "wikilink") \] \[ [PDF](/media:SymbolMonth-process.pdf "wikilink") \] \[ [PNG](/media:SymbolMonth-process.png "wikilink") \]