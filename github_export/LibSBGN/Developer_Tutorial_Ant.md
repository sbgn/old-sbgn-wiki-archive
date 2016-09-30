---
title: LibSBGN Developer Tutorial Ant
permalink: /LibSBGN/Developer_Tutorial_Ant/
---

Compiling from source (using ant)
=================================

Preparation
-----------

You'll need

-   Java
-   Apache ant [ant installation instructions](http://ant.apache.org/manual/install.html)
-   Subversion [installation instructions](http://svnbook.red-bean.com/en/1.1/ch01s05.html) (Windows users prefer the user-friendly [TortoiseSVN](http://tortoisesvn.net/))

First check out the source code from subversion with the following command:

`svn checkout `[`https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk`](https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk)` libsbgn`

(Or if you're using TortoiseSVN, right-click in a directory and choose svn-checkout. Then enter the repository URL <https://libsbgn.svn.sourceforge.net/svnroot/libsbgn/trunk>)

Change to the directory that was just created

`cd libsbgn`

If ant is set up correctly, you only need the following command:

`ant`

If all goes well, you can find a jar file named org.sbgn.jar in the "dist" directory, which you should include in your project.