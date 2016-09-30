---
title: Documents PD L1 Examples
permalink: /Documents/PD_L1_Examples/
---

The following are some sample maps illustrating the SBGN Process Description language.

MAPK
----

This example of an SBGN Process Description uses two kinds of *Entity Pool Nodes* (that is, nodes representing biochemically-indistinguishable entities such as molecules). One kind of Entity Pool Node (whose glyph is a rounded rectangle) represents different *macromolecules*, and the other (whose glyph is a circle) represents pools of *simple chemicals*. Most macromolecule nodes in this map are also adorned with *state variables* representing phosphorylation states. This map uses one type of process node, the *transition node*, and one kind of connecting arc, *catalysis*. Finally, some entity pool nodes have dark bands along their bottoms; these are *clone markers* indicating that the same pool nodes appear multiple times in the diagram.

<center>
{{\#icon:sample-mapk-pd.png‎ |||| corner iradius11}}

</center>
Glycolysis
----------

This example illustrates how SBGN can be used to describe metabolic pathways. The following map represents glycolysis, the process that releases energy from the catabolism of glucose. In this example, *macromolecules* are only catalysts, and the other (whose glyph is a circle) are consumed or produced. Note that some carry *clone markers*, while others, present only once, do not need to.

<center>
{{\#icon:WWWglycolysis.png‎ |||| corner iradius11}}

</center>
Insulin signaling
-----------------

Next example presents an example of signalling pathway, that examplifies the use of the *entity pool nodes* *observable*, and *state variable*, the *containers* *complex*, *compartment* and *submap*, the *process nodes* association, and the *connecting arcs* *stimulation*. Note the complex IGF and IGF receptor, located on the boundary of the compartment. This position is only for user convenience. The complex has to belong to a given compartment in SBGN Process Diagram Level 1. This example also shows how details can be hidden by using a *submap*. The submap called MAPK cascade is shown in the first example above. Note the *tags* that permit to identify the same entity in the submap and the main map.

<center>
{{\#icon:WWWinsulin.png‎ |||| corner iradius11}}

</center>
Neuro-muscular junction
-----------------------

This example introduces an SBGN Process Description that spans several compartments. Note that the compartment \[synaptic vesicle\] is not **contained** in the compartment \[synaptic button\] but **overlaps** it. The *simple chemical* \[ACh\] of the \[synaptic vesicle\] is not the same *entity pool node* than the \[ACh\] of the \[synaptic button\] and of \[synaptic cleft\]. The situation is similar with the compartments \[ER\] and \[muscle cytosol\]. The map exemplifies the use of the *process nodes* *omitted* and *dissociation*, and the *connecting arc* *Necessary activation*.

<center>
{{\#icon:WWWmuscle.png‎ |||| corner iradius11}}

</center>
And the colorful version of that map as well:

<center>
{{\#icon:WWWmuscle-color.png‎ |||| corner iradius11}}

</center>
IFN regulation
--------------

This next example involves a gene regulatory network. It also shows the use of the Entity Pool Node *source/sink* and the *logical operator* glyph for *and*.

<center>
{{\#icon:sample-ifn-gene.png‎ |||| corner iradius11}}

</center>
Repressilator
-------------

The repressilator is a circular system of three genes which products sequentially inhibit the expression of the next gene. Both the model and its in vitro realization were published by Michael Elowitz and Stanislas Leibler in 2000, in a publication that is seen as one of the milestones in the birh of Synthetic Biology.

<center>
{{\#icon:repressilator.png‎ |||| corner iradius11}}

</center>
Plant central metabolism
------------------------

The following map won the annual SBGN competition 2010, section best map.

[border|550px](/Image:MetaCrop-plant-central-metabolism-small.png "wikilink")

\[ [full size map](http://sbgn.org/images/3/35/MetaCrop-plant-central-metabolism.png) \]