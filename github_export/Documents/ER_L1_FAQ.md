---
title: Documents ER L1 FAQ
permalink: /Documents/ER_L1_FAQ/
---

-   [How should-I represent dephosphorylation?](/#How_should-I_represent_dephosphorylation? "wikilink")
-   [How can I represent that an interaction activates an interactor?](/#How_can_I_represent_that_an_interaction_activates_an_interactor? "wikilink")
-   [How to represent assignment of different values to a variable?](/#How_to_represent_assignment_of_different_values_to_a_variable? "wikilink")
-   [Can-I represent modified and non modified entities?](/#Can-I_represent_modified_and_non_modified_entities? "wikilink")

How should-I represent dephosphorylation?
-----------------------------------------

Dephosphorylation is the removal of a phosphate group attached to another molecule, such as a protein or a lipid. This dephosphorylation is often catalysed by a phosphatase. Representing dephosphorylation may be a challenge in a map where phosphorylations are also represented. The left drawings are misleadings. On the top, the value *P* is **assigned** to the variable "threonine" and dephosphorylation is different from the inhibition of the phosphorylation. But it is true that a probabilistic interpretation of the map would probably consider that as a lowering of the probability to be phosphorylated. A solution is to create another value for it, *noP*, which assignment is stimulated by the phosphatase. On the right the situation with both phosphorylation and dephosphorylation are represented. An alternative representation is to explicitly turned the map into a boolean logic model, with variable true and false assigned to the variable "phosphorylated on threonine".

{{\#icon:Dephosphorylation_ER.png | Two correct and two slightly misleading ways to represent dephosphorylation in SBGN ER | 500 || corner iradius11}}

How can I represent that an interaction activates an interactor
---------------------------------------------------------------

It is often the case that a protein is activated by the binding of another entity. In order to represent this in SBGN ER, we create an interaction between the two entities (Calmodulin - CaM - and CaMKII in the example). To represent the activation of the protein, we create a state variable "state", and assign a value "active" to it. We then create an outcome of the interaction (its realisation), that stimulate the assignment.

{{\#icon:Interaction-activation.png | CaMKII is activated when bound to Calmodulin | 500 || corner iradius11}}

How to represent assignment of different values to a variable?
--------------------------------------------------------------

A variable can only have one value at a time, therefore only one assignment arc connect to the state variable glyph. All arcs linking values to this arc should meet in one point, where there is an implicit XOR.

{{\#icon:Assignment_ER.png | One correct and two incorrect ways of assigning alternative values to a state variable | 500 || corner iradius11}}

Can-I represent modified and non modified entities?
---------------------------------------------------

Yes. In some cases, it may be necessary to represent explicitly a modified entity rather than implicitly through a state variable representing the modification. The example below represents on the left the effect of a kinase on the existence of a phosphorylated and non-phosphorylated protein. On the right, the more classical view of a phosphorylation as a variable assignment. Both representation are correct, and unambiguous. However, the left representation does not relate the two entities prot-P and prot-nP and is therefore less precise.

{{\#icon:FAQKinase.png | Two ways of representing phosphorylated and non-phosphorylated states of a proteim | 500 || corner iradius11}}