---
title: Symbols macromolecule
permalink: /Symbols/macromolecule/
---

*by Nicolas Le Novère*

Many biological processes involve macromolecules: biochemical substances that are built up from the covalent linking of pseudo-identical units. Examples of macromolecules include proteins, nucleic acids (RNA, DNA), and polysaccharides (glycogen, cellulose, starch, etc.). Attempting to define a separate glyph for all of these different molecules would lead to an explosion of symbols in SBGN, so instead, SBGN Process Description Level 1 defines only one glyph for all macromolecules. The same glyph is to be used for a protein, a nucleic acid, a complex sugar, and so on. The exact nature of a particular macromolecule in a map is then clarified using its label and decorations. A macromolecule is represented by a rectangular container with rounded corners.

<center>
{{\#icon:Symbol-macromolecule.png |||| corner iradius11}}

</center>
The following example describes the conversion of glucose into glucose 6 phosphate, stimulated by the enzyme hexokinase, represented as a macromolecule.

<center>
{{\#icon:Symbol-macromolecule-example-real-1.png |||| corner iradius11}}

</center>
The following example describes the transport of messenger RNA from the nucleus to the cytoplasm. One does not need to differentiate the two mRNA pools via their labels (e.g. mRNA_nuc and mRNA_cyt) since in SBGN, the containing compartment is part of the identity of a pool of entities.

<center>
{{\#icon:Symbol-macromolecule-example-real-2.png |||| corner iradius11}}

</center>
Macromolecules can be decorated by state variables or unit of information, as we will present in future symbols of the month. For now, let's just say that the state of a macromolecule (that is the values of all its state variables) is part of its identity. The following example describes the reversible conversion of the glutamate ionotropic receptor between closed and open states.

<center>
{{\#icon:Symbol-macromolecule-example-real-3.png |||| corner iradius11}}

</center>
Download the macromolecule node image as (from the more semantic to the more generic):

\[ [SBGN-ML](/media:Symbol-macromolecule.sbgn "wikilink") \] \[ [GML](/media:Symbol-macromolecule.gml "wikilink") \] \[ [GraphML](/media:Symbol-macromolecule.graphml "wikilink") \] \[ [SVG](/media:Symbol-macromolecule.svg "wikilink") \] \[ [Open Document Format](/media:Symbol-macromolecule.odp "wikilink") \] \[ [PowerPoint](/media:Symbol-macromolecule.ppt "wikilink") \] \[ [PDF](/media:Symbol-macromolecule.pdf "wikilink") \] \[ [PNG](/media:Symbol-macromolecule.png "wikilink") \]