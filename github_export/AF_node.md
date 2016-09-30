---
title: AF node
permalink: /AF_node/
---

AF nodes
--------

Since the release of SBGN Activity Flow Level 1 specification, we have received some feedback, particularly about the biological activity glyph. Many of the concerns are reasonable (see details below).

In April 2009, we conducted a poll on the topic. The SBGN AF Level 1 specification was drafted based on the outcome of the poll. Unfortunately, due to a glitch in the SBGN discussion list, some of our members did not receive the message and failed to participate in the poll. As a result, we had very few people voted in the poll. Many of the feedback came after the poll was closed and even after the specification was released. We would like to re-open the discussion in order to ensure that the specification will be supported by the community. The [proposals](/Media:_AF_proposals.pdf "wikilink") were presented at the COMBINE Workshop in last October.

One consensus we have reached is that AF is about influences among the activities, therefore the nodes in AF diagram should represent activities rather than entities. The problem arises when one wants to decorate the activity node to display the type of entity that the activity comes from.

The goal is to create biological activity nodes that are

-   unambiguous
-   ontologically accurate
-   consistent with representations in all three SBGN languages

### Current specification

-   [The activity node](/Media:_Current_AN.png‎ "wikilink") is represented by a rectangle.
-   [Entity decorationuses](/Media:_Current_Dec.png‎ "wikilink") unit of information to indicate the type of entity where the activity comes.
-   Examples: [EGFR](/Media:_Current_egfr.png "wikilink"); [PPAR](/Media:_Current_PPAR.png "wikilink"); [TGF-beta](/Media:_Current_TGFbeta.png "wikilink")
-   *Advantages*: It is ontologically correct to use a unique glyph to represent biological activity, which is an occurrent.
-   *Disadvantages*: The unit of information decoration can be too small to differentiate, e.g., a macromolecule vs a nucleic acid feature or a complex. It can be useless when the node itself is small in a very large map.

### Proposal 1

-   [The biological activity node](/Media:_proposal_1_AN.png "wikilink") is represented by a rectangle.
-   [The entity decoration](/Media:_proposal_1_Dec.png "wikilink") is drawn the same way as in PD. The AN is placed on the line of the entity glyph to indicate that the activity is derived from the entity.
-   All modulation arcs (positive influence, negative influence) must be connected to the activity nodes, but not the entity decoration.
-   Examples: [EGFR](/Media:_proposal_1_egfr.png "wikilink"); [PPAR](/Media:_proposal_1_PPAR.png "wikilink"); [TGF-beta](/Media:_proposal_1_TGFbeta.png "wikilink")
-   One problem with this proposal is that the activity node looks quite similar to the unit of information in the SBGN PD.

### Proposal 2

It is similar to proposal 1, except that the [biological activity nodes](/Media:_proposal_2_AN.png "wikilink") are placed inside rather than on the edge of the [entity decoration](/Media:_proposal_2_Dec.png "wikilink").

-   [The biological activity node](/Media:_proposal_2_AN.png "wikilink")
-   [The entity decoration](/Media:_proposal_2_Dec.png "wikilink")
-   Examples: [EGFR](/Media:_proposal_2_egfr.png "wikilink"); [PPAR](/Media:_proposal_2_PPAR.png "wikilink"); [TGF-beta](/Media:_proposal_2_TGFbeta.png "wikilink")

### Proposal 3

-   [The biological activity node](/Media:_proposal_3_AN.png "wikilink") is represented by a rectangle when the entity type of the activity is not illustrated. When the entity type needs to be illustrated, glyphs same to the EPN in PD are used to indicate the type of entity the activity is from. However, here, these nodes represent biological activity but not entity per se.
-   Examples: [EGFR](/Media:_proposal_3_egfr.png "wikilink"); [PPAR](/Media:_proposal_3_PPAR.png "wikilink"); [TGF-beta](/Media:_proposal_3_TGFbeta.png "wikilink")
-   The major criticism about this proposal is that it is ontologically ambiguous.

### Proposal 4

This is similar to proposal 2 except that the [entity decoration](/Media:_proposal_4_Dec.png "wikilink") is placed inside of [biological activity nodes](/Media:_proposal_4_AN.png "wikilink").

-   [The biological activity node](/Media:_proposal_4_AN.png "wikilink")
-   [The entity decoration](/Media:_proposal_4_Dec.png "wikilink")
-   Examples: [EGFR](/Media:_proposal_4_egfr.png "wikilink"); [PPAR](/Media:_proposal_4_PPAR.png "wikilink"); [TGF-beta](/Media:_proposal_4_TGFbeta.png "wikilink")

[Click here to take survey](http://www.surveymonkey.com/s/73LP2YG)