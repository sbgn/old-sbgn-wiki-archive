---
title: LibSBGN Developer Tutorial
permalink: /LibSBGN/Developer_Tutorial/
---

This tutorial is intended for developers who want to read from or write to the SBGN-ML file format. Currently, LibSBGN handles reading, writing and validation of SBGN-ML files. Rendering and conversion to various formats is planned for the future.

LibSBGN for Java developers
===========================

Preparation
-----------

To use this tutorial, you'll need to obtain LibSBGN. There are three ways to do so:

1.  Obtain a release from [1](https://sourceforge.net/projects/libsbgn/files/)
2.  [Developer Tutorial Ant](/LibSBGN/Developer_Tutorial_Ant "wikilink"): compile it from source (using Ant)
3.  [Developer Tutorial Eclipse](/LibSBGN/Developer_Tutorial_Eclipse "wikilink"): compile it from source (using Eclipse)

Reading SBGN-ML files in Java
-----------------------------

Here follows a snippet of Java code that shows how to read an SBGN-ML file. This uses the file "adh.sbgn" as input file, which you can download here: [adh.sbgn](https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk/test-files/adh.sbgn)

`// our sbgn-ml file goes in "f"`
`File f = new File ("../test-files/adh.sbgn");`
`               `
`// Now read from "f" and put the result in "sbgn"`
`Sbgn sbgn = SbgnUtil.readFromFile(f);`
`// map is a container for the glyphs and arcs `
`Map map = sbgn.getMap();`
`// we can get a list of glyphs (nodes) in this map with getGlyph()`
`for (Glyph g : map.getGlyph())`
`{`
`   // print the sbgn class of this glyph`
`   System.out.print (" Glyph with class " + g.getId());`
`           `
`   // if there is a label, print it as well`
`   if (g.getLabel() != null)`
`       System.out.println (", and label " + g.getLabel().getText());`
`   else`
`       System.out.println (", without label");`
`}`
`// we can get a list of arcs (edges) in this map with getArc()`
`for (Arc a : map.getArc())`
`{`
`   // print the class of this arc`
`   System.out.println (" Arc with class " + a.getClazz());`
`}`

(See [ReadExample.java](https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk/org.sbgn/examples/org/sbgn/ReadExample.java))

This will produce the following output:

`Begin of Map`
` Glyph with class glyph1, and label Ethanol`
` Glyph with class glyph_ethanal, and label Ethanal`
` Glyph with class glyph_adh1, and label ADH1`
` Glyph with class glyph_h, and label H+`
` Glyph with class glyph_nad, and label NAD+`
` Glyph with class glyph_nadh, and label NADH`
` Glyph with class pn1, without label`
` Arc with class consumption`
` Arc with class production`
` Arc with class catalysis`
` Arc with class production`
` Arc with class production`
` Arc with class consumption`

Writing SBGN-ML files in Java
-----------------------------

Example code for writing an SBGN file:

`File f = new File ("test-output.sbgn");`
`Sbgn sbgn = new Sbgn();        `
`Map map = new Map();`
`sbgn.setMap(map);`
`   `
`// create a glyph with an id and class "macromolecule"`
`Glyph g1 = new Glyph();`
`g1.setId("glyph1");`
`g1.setClazz("macromolecule");`
`// add the glyph to the map`
`map.getGlyph().add (g1);`
`// define the bounding box of the glyph`
`Bbox bbox1 = new Bbox();`
`bbox1.setX(125);`
`bbox1.setY(60);`
`bbox1.setW(100);`
`bbox1.setH(40);`
`g1.setBbox(bbox1);`
`       `
`// define a label for this glyph`
`Label label1 = new Label();`
`label1.setText("P53");`
`// now write everything to disk`
`SbgnUtil.writeToFile(sbgn, f);`

(See [WriteExample.java](https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk/org.sbgn/examples/org/sbgn/WriteExample.java))

This will produce an SBGN-ML document called "test-output.sbgn", containing a single Glyph. In XML it look like this:

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sbgn ns="http://sbgn.org/libsbgn/pd/0.1">
`    `<map>
`        `<glyph class="macromolecule" id="glyph1">
`            `<bbox w="100.0" h="40.0" x="125.0" y="60.0"/>
`        `</glyph>
`    `</map>
</sbgn>

Validating SBGN-ML files in Java
--------------------------------

Validating a file is very simple, see the snippet below. To run this, you need to download a copy of [SBGN.xsd](https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk/resources/SBGN.xsd)

Note that this validation is not comprehensive: it checks only for certain kinds of errors, but a passed validation does not guarantee that your diagram is fully SBGN compliant.

`File xsd = new File ("SBGN.xsd");`
`File f = new File ("adh.sbgn");`
`   `
`boolean isValid = SbgnUtil.isValid(f, xsd);`
`if (isValid)`
`   System.out.println ("Validation succeeded");`
`else`
`   System.out.println ("Validation failed");`

If validation didn't succeed, the method isValid() will return false and an error message will be printed to the standard error stream. See also: [ValidationExample.java](https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk/org.sbgn/examples/org/sbgn/ValidationExample.java)

LibSBGN for C++ developers
==========================

A tutorial for C++ developers can be found [here](/LibSBGN/Developer_Tutorial_C++ "wikilink").

Writing extensions
==================

For information about how to extend LibSBGN for arbitrary data, please see [SBGN-ML Extensions](/LibSBGN/SBGN-ML_Extensions "wikilink").

Where to go from here
=====================

If you have further questions after reading this, you can always contact the mailinglist at sbgn-libsbgn@lists.sourceforge.net