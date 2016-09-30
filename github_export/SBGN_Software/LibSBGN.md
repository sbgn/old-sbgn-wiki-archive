---
title: SBGN Software LibSBGN
permalink: /SBGN_Software/LibSBGN/
---

The main goal of the LibSBGN project is to provide a standard electronic implementation for the Systems Biology Graphical Notation (SBGN). The project develops both:

-   a standard exchange format: SBGN-ML and
-   software libraries for reading SBGN-ML documents

On this page you will find information about:

-   SBGN-ML files
-   Software supporting SBGN-ML

#### SBGN-ML files

For SBGN-ML we decided on using a basic XML representation of glyphs and connecting arcs.

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <sbgn ns="http://sbgn.org/libsbgn/0.2">
        <map language="process description">
            <glyph id="glyph9" class="macromolecule">
                <label text="hexokinase"/>
                <bbox y="40.0" x="170.0" h="60.0" w="120.0"/>
            </glyph>
            <glyph id="glyph0" class="simple chemical">
                <label text="glucose"/>
                <bbox y="140.0" x="90.0" h="60.0" w="60.0"/>
            </glyph>
            ...
            <arc target="glyph8" source="glyph9" class="catalysis">
                <start y="100.0" x="230.0"/>
                <end y="160.0" x="230.0"/>
            </arc>
            <arc target="glyph8.1" source="glyph0" class="consumption">
                <start y="170.0" x="150.0"/>
                <end y="170.0" x="210.0"/>
            </arc>
        </map>
    </sbgn>

Example files are available on source forge:

<http://libsbgn.svn.sourceforge.net/viewvc/libsbgn/trunk/example-files/>

each file is stored with an accompanying image.

#### Software supporting SBGN-ML

Software support for SBGN-ML is steadily growing. The libSBGN project provides a Java and a C++ library based on code generation from the SBGN-ML schema. The Java library is used by:

Image:Libsbgn-pathvisio.png|PathVisio <http://www.pathvisio.org/wiki/SbgnPluginHelp>

Image:Libsbgn-vanted.png|VANTED (SBGN-ED) <http://vanted.ipk-gatersleben.de/addons/sbgn-ed/>

Another implementation is available through [SBMLLayout](http://sbmllayout.sf.net), and is available for use with the Systems Biology Workbench or [online](http://sysbioapps.dyndns.org/RenderComparison).

Image:Libsgbn-sbmllayout.png|Systems Biology Workbench <http://sf.net/projects/sbw/files> Image:Libsbgn-sysbioapps.png|Render Comparison <http://sysbioapps.dyndns.org/RenderComparison>

#### More information

For further information see also the libSBGN development page at sourceforge: <http://libsbgn.sf.net>