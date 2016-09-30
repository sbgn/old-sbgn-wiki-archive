---
title: Help
permalink: /Help/
---

<html>
<style type='text/css'>
/\*/\*/ /\*<![CDATA[*/
td, th {  padding: 8px; }
table { width: 100% }
/*]]>\*/ /\* \*/

</style>
</html>
This help page serves as a quick reference for common editing commands and features of this installation of MediaWiki. You may find more detailed information about MediaWiki at [MediaWiki's help pages](http://meta.wikimedia.org/wiki/Help:Editing).

This installation of MediaWiki on SBGN.org features numerous extensions and enhancements by the SBGN Team. Please see the section later on this page summarizing these enhancements.

How to edit
-----------

To start editing a page, first log in using the **Log in** button on the bottom of the page. Once you are logged in, you will be able to see an **Edit** button on the bottom of each page (including this one) as well as links titled \[**edit**\] next to each section heading. Clicking on the **Edit** button on the bottom of a page lets you edit the whole page in one go; clicking on the \[**edit**\] link next to a section heading lets you edit just that one section.

During editing, the page in your browser will be replaced with a text box where you can edit the page (or section) contents directly. You can just type and delete text directly. You can also embellish your text with formatting, links, tables, images and other things. The rest of this page summarizes how.

When you have finished editing, click on the **Show preview** button under the editing box to see how your changes will look **before** you make them permanent. Repeat the edit/preview process until you are satisfied, then click the **Save page** button and your changes will be immediately applied to the article. Sometimes it is helpful to save in between.

How to format text ("wiki markup")
----------------------------------

Here are the most frequently used types of wiki markup. Please refer to [MediaWiki's help pages](http://meta.wikimedia.org/wiki/Help:Editing) for more comprehensive information about formatting. (The possibilities are much greater than what this short summary shows!)

### Basic text formatting and organization

<center>
| What it looks like                                                                                                                  | What you type                                         |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| You can *italicize text* by putting 2 apostrophes on each side.

 3 apostrophes will embolden **the text**.

 5 apostrophes will embolden and italicize ***the text***.

 (4 apostrophes don't do anything special -- there's just **'one left over**'.)                                                       | You can ''italicize text'' by putting 2
                                                                                                                                           apostrophes on each side.

                                                                                                                                           3 apostrophes will embolden '''the text'''.

                                                                                                                                           5 apostrophes will embolden and italicize
                                                                                                                                           '''''the text'''''.

                                                                                                                                           (4 apostrophes don't do anything
                                                                                                                                           special -- there's just ''''one left
                                                                                                                                           over''''.)                                         |
| Put text in a fixed-width typewriter font, often used for `
 literal text` and `computer code samples`.                                                                                           | Put text in a fixed-width
                                                                                                                                           typewriter font, often used for <code>
                                                                                                                                           literal text</code> and
                                                                                                                                           <code>computer code samples</code>.                |
| ~~Strike out~~ or <u>underline</u> text, or write it <span style=
 "font-variant:small-caps"> in small caps</span>.                                                                                     | <strike>Strike out</strike>
                                                                                                                                           or <u>underline</u> text,
                                                                                                                                           or write it <span style=
                                                                                                                                           "font-variant:small-caps">
                                                                                                                                           in small caps</span>.                              |
| Superscripts and subscripts: X<sup>2</sup>, H<sub>2</sub>O                                                                          | Superscripts and subscripts:
                                                                                                                                           X<sup>2</sup>, H<sub>2</sub>O                      |
| The **blockquote** command formats block quotations, typically by surrounding them with whitespace and a slightly different font.   | <blockquote>
                                                                                                                                           The '''blockquote''' command formats block
                                                                                                                                           quotations, typically by surrounding them
                                                                                                                                           with whitespace and a slightly different font.
                                                                                                                                           </blockquote>                                      |
| <div style="font-size:150%; font-weight: bold">
 Section headings

 </div>
 *Headings* organize your writing into sections. The Wiki software can automatically generate a table of contents from them.

 <div style="font-size:140%;font-weight:bold; margin-top: 1em;">
 Subsection

 </div>
 Using more equals signs creates a subsection.

 <div style="font-size:120%;font-weight:bold; margin-top: 0.75em">
 A smaller subsection

 </div>
 Don't skip levels, like from two to four equals signs.

 Start with 2 equals signs, not 1, because 1 creates H1 tags and those should be reserved for page titles.                            | == Section headings ==

                                                                                                                                           ''Headings'' organize your writing into sections.
                                                                                                                                           The Wiki software can automatically generate
                                                                                                                                           a table of contents from them.

                                                                                                                                           === Subsection ===

                                                                                                                                           Using more equals signs creates a subsection.

                                                                                                                                           ==== A smaller subsection ====

                                                                                                                                           Don't skip levels,
                                                                                                                                           such as from two to four equals signs.

                                                                                                                                           Start with 2 equals signs, not 1,
                                                                                                                                           because 1 creates H1 tags
                                                                                                                                           and those should be reserved for page titles.      |
| -   *Unordered lists* are easy to do:
     -   Start every line with a star.
         -   More stars indicate a deeper level.


     Previous item continues.

     -   A new line
 -   in a list

 marks the end of the list.

 -   Of course you can start again.                                                                                                   | * ''Unordered lists'' are easy to do:
                                                                                                                                           ** Start every line with a star.
                                                                                                                                           *** More stars indicate a deeper level.
                                                                                                                                           *: Previous item continues.
                                                                                                                                           ** A new line
                                                                                                                                           * in a list
                                                                                                                                           marks the end of the list.
                                                                                                                                           * Of course you can start again.                   |
| 1.  *Numbered lists* are:
     1.  Very organized
     2.  Easy to follow

 A new line marks the end of the list.

 1.  New numbering starts with 1.                                                                                                     | # ''Numbered lists'' are:
                                                                                                                                           ## Very organized
                                                                                                                                           ## Easy to follow
                                                                                                                                           A new line marks the end of the list.
                                                                                                                                           # New numbering starts with 1.                     |
|
 A colon (:) indents a line or paragraph.

 A newline starts a new paragraph.
 : We use 1 colon to indent once.



 We use 2 colons to indent twice.


 3 colons to indent 3 times, and so on.                                                                                               | : A colon (:) indents a line or paragraph.
                                                                                                                                           A newline starts a new paragraph. <br>
                                                                                                                                           Often used for discussion on talk pages.
                                                                                                                                           : We use 1 colon to indent once.
                                                                                                                                           :: We use 2 colons to indent twice.
                                                                                                                                           ::: 3 colons to indent 3 times, and so on.         |
|
 A semicolon (;) starts a definition list, like this:

 Definition
 Text item 1

 Text item 2                                                                                                                          | ;Definition
                                                                                                                                           :Text item 1
                                                                                                                                           :Text item 2                                       |
| An explicit horizontal rule is obtained using four dashes (-'s).

 ------------------------------------------------------------------------                                                             | ----                                                  |

</center>
### Avoiding formatting ("just show what I typed!")

Sometimes you will want to show literal text, without interpretation and reformatting by the wiki engine. Here are some ways of doing that.

<center>
| What it looks like                                                                                                                                          | What you type                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| The nowiki tag ignores \[\[/Wiki|Wiki\]\] ''markup''. It reformats text by removing newlines and multiple spaces. It still interprets special characters: → | <nowiki>
                                                                                                                                                                   The nowiki tag ignores
                                                                                                                                                                   [[/Wiki|Wiki]] ''markup''.
                                                                                                                                                                   It reformats text by
                                                                                                                                                                   removing
                                                                                                                                                                   newlines    and multiple
                                                                                                                                                                    spaces.
                                                                                                                                                                   It still interprets special
                                                                                                                                                                   characters: &rarr;
                                                                                                                                                                   </nowiki>                           |
| The pre tag ignores [[/Wiki|Wiki]]
      ''markup''.
     It also doesn't     reformat
      text.
     It still interprets special
     characters: →                                                                                                                                            | <pre>
                                                                                                                                                                   The pre tag ignores [[/Wiki|Wiki]]
                                                                                                                                                                    ''markup''.
                                                                                                                                                                   It also doesn't     reformat
                                                                                                                                                                    text.
                                                                                                                                                                   It still interprets special
                                                                                                                                                                   characters: &rarr;

                                                                                                                                                               </pre>                                  |
| Leading spaces are another way to preserve formatting.

 `Putting a space at the`
 `beginning of each`
 `line stops the text   `
 `from being`
 `reformatted.  It still `
 `interprets `[`Wiki`](/Wiki "wikilink")
 *`markup`*` and special`
 `characters: →`                                                                                                                                              | Leading spaces are another way
                                                                                                                                                                   to preserve formatting.

                                                                                                                                                                    Putting a space at the
                                                                                                                                                                    beginning of each
                                                                                                                                                                    line stops the text
                                                                                                                                                                    from being
                                                                                                                                                                    reformatted.  It still
                                                                                                                                                                    interprets [[/Wiki|Wiki]]
                                                                                                                                                                    ''markup'' and special
                                                                                                                                                                    characters: &rarr;                 |

</center>
How to make links
-----------------

In wiki parlance, a "wikilink" is an internal link to another page or a page-section within the same site (such as this one). The wiki system automatically checks if the target of a wikilink exists. If the page doesn't exist, the link leads instead to an editing screen. Such links are nicknamed "red links" because they are colored red to indicate the status of the page (i.e., not created). In MediaWiki, a wikilink is enclosed in two inward-facing square brackets: "\[\[/"_and_"|" and "\]\]".

The other kind of link is an external link, which goes to another website altogether, whether that site is another wiki or not and whether the page is text, graphics, or other. External links in MediaWiki syntax can be either plain URLs, or a URL followed by text all enclosed in single inward-facing square brackets: "\[" and "\]". An external link can take many forms:

-   *target*: http://meta.wikimedia.org/ is rendered as <http://meta.wikimedia.org/>
-   \[ *target* *label* \], with a blank space in between: \[http://meta.wikimedia.org/ wikimedia\] gives [wikimedia](http://meta.wikimedia.org/)
-   \[ *target* \] - these are automatically labelled with serial numbers 1, 2, 3, ...: \[http://meta.wikimedia.org/\] gives [1](http://meta.wikimedia.org/)

All told, there are four sorts of links in MediaWiki:

1.  internal links to other pages in the wiki
2.  external links to websites
3.  inter-wiki (links to other wikis)
4.  inter-language links to other language versions of the same wiki

The first letter of the target page is automatically capitalized and spaces are represented as underscores (typing an underscore in the link will have a similar effect as typing a space, but is not recommended, since the underscore will also be shown in the text).

<center>
| Description                 | You type                                                        | You get                                                |
|-----------------------------|-----------------------------------------------------------------|--------------------------------------------------------|
| Internal link               | `<nowiki>[[/Main_Page|Main Page]]</nowiki>`                     | [Main Page](/Main_Page "wikilink")                     |
| Category link               | `<nowiki>[[/:Category:Help|:Category:Help]]</nowiki>`           | [:Category:Help](/:Category:Help "wikilink")           |
| Piped link                  | `<nowiki>[[/Main_Page|different text]]</nowiki>`                | [different text](/Main_Page "wikilink")                |
| Anchor link                 | `<nowiki>[[/#External_links|Anchor link]]</nowiki>`             | [Anchor link](/#External_links "wikilink")             |
| External link               | `<nowiki>http://mediawiki.org</nowiki>`                         | <http://mediawiki.org>                                 |
| Internal link to image file | `<nowiki>[[/media:example.jpg|media:example.jpg]]</nowiki>`     | [media:example.jpg](/media:example.jpg "wikilink")     |
| External link,
 different title              | `<nowiki>[http://mediawiki.org MediaWiki]</nowiki>`             | [MediaWiki](http://mediawiki.org)                      |
| External link,
 unnamed                      | `<nowiki>[http://mediawiki.org]</nowiki>`                       | [2](http://mediawiki.org)                              |
| External link,
 same host unnamed            | `<nowiki>[http://{{SERVERNAME}}/pagename]</nowiki>`             | [3](http://%7B%7BSERVERNAME%7D%7D/pagename)            |
| Interwiki link              | `<nowiki>[[/Wikipedia:MediaWiki|Wikipedia:MediaWiki]]</nowiki>` | [Wikipedia:MediaWiki](/Wikipedia:MediaWiki "wikilink") |
| mailto                      | `<nowiki>mailto:info@example.org</nowiki>`                      | [mailto:info@example.org](mailto:info@example.org)     |
| mailto unnamed              | `<nowiki>[mailto:info@example.org]</nowiki>`                    | [4](mailto:info@example.org)                           |
| mailto named                | `<nowiki>[mailto:info@example.org info]</nowiki>`               | [info](mailto:info@example.org)                        |
| redirect                    | `<nowiki>#REDIRECT [[/Main_Page|Main Page]]</nowiki>`           | → [Main Page](/Main_Page "wikilink")                   |

</center>
How to use math in TeX/LaTeX format
-----------------------------------

This MediaWiki installation supports typing mathematical formulas in TeX/LaTeX syntax. Math markup goes inside `<nowiki><math> ... </math></nowiki>`. Here is an example:

<center>
| What it looks like                   | What you type                                     |
|--------------------------------------|---------------------------------------------------|
| \(\sum_{n=0}^\infty \frac{x^n}{n!}\) | <nowiki>
                                            <math>\sum_{n=0}^\infty \frac{x^n}{n!}</math>
                                            </nowiki>                                      |

</center>
The editing toolbar provide with the edit box (when you click to edit a wiki page) has a button for inserting the math tags. Your TeX code has to be put literally; MediaWiki templates, predefined templates, and parameters cannot be used within math tags—pairs of double braces are ignored and "\#" gives an error message.

There is a general [MediaWiki help page on using TeX markup](http://meta.wikimedia.org/wiki/Help:Formula) that provides a lot of examples and information about using TeX/LaTeX math in wiki pages.

How to upload and reference images
----------------------------------

First, you need to **upload an image file** to the wiki (using the **Upload file** link at the bottom of the page) *before* you use the following wiki text to place the image on an article. You can also reference images on an external page (see further below for a description of the different syntax), but uploading images is preferrable. Uploaded images get their own revision histories and descriptions, and the image syntax provides more control.

The full syntax for displaying an uploaded image is:

`<nowiki>[[/Image:{name}|{options}]]</nowiki>`

Where options can be zero or more of the following, separated by pipes:

-   `thumb`, `thumbnail`, or `frame`: Controls how the image is formatted.
-   `left`, `right`, `center`, `none`: Controls the alignment of the image on the page.
-   `{width}px`: Resizes the image to the given width in pixels. (Note: the "px" must be present.)
-   `{caption text}`

The options can be given in any order. Some are mutually exclusive, and then the last specified wins. The last unrecognized option is used as the caption for framed images or together with thumbnails. (In other words, if a given option does not match any of the other possibilities, it is assumed to be the caption text.) It's also used as the **alt** description text, i.e. the text shown when you hover a cursor over the image. Caption text can contain wiki links or other formatting.

The following are some examples.

<center>
| **Description**                                                                                 | **You type**                                                  | **You get**                                               |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------|-----------------------------------------------------------|
| Embed image
  (with alt text)                                                                                 | `<nowiki>[[/Image:Example.jpg|Lilly]]</nowiki>`               | [Lilly](/Image:Example.jpg "wikilink")                    |
| Link to description page                                                                        | `<nowiki>[[/:Image:Example.jpg|:Image:Example.jpg]]</nowiki>`
                                                                                                   `<nowiki>[[/:Image:Example.jpg|Lilly]]</nowiki>`               | [:Image:Example.jpg](/:Image:Example.jpg "wikilink")
                                                                                                                                                                   [Lilly](/:Image:Example.jpg "wikilink")                    |
| Link directly to file                                                                           | `<nowiki>[[/Media:Example.jpg|Media:Example.jpg]]</nowiki>`
                                                                                                   `<nowiki>[[/Media:Example.jpg|Lilly]]</nowiki>`                | [Media:Example.jpg](/Media:Example.jpg "wikilink")
                                                                                                                                                                   [Lilly](/Media:Example.jpg "wikilink")                     |
| Thumbnail
  (centered, 100 pixels
  wide, with caption)                                                                             | `<nowiki>[[Image:Example.jpg|center|
                                                                                                   thumb|100px|Lilly]]</nowiki>`                                  | [center|thumb|100px|Lilly](/Image:Example.jpg "wikilink") |
| Border
  (100 pixels)
  Results in a very small gray border                                                             | `<nowiki>[[/Image:Example.jpg|border|100px]]</nowiki>`        | [border|100px](/Image:Example.jpg "wikilink")             |
| Frameless
 Like thumbnail, respect user preferences for image width but without border and no right float.  | `<nowiki>[[/Image:Example.jpg|frameless]]</nowiki>`           | [frameless](/Image:Example.jpg "wikilink")                |

</center>
### External image files

You can link to an external file using the same syntax used for linking to an external web page.

-   `<nowiki>[http://url.for/some/image.png]</nowiki>`

Or with different text:

-   `<nowiki>[http://url.for/some/image.png link text here]</nowiki>`

### Gallery of images

It's easy to make a gallery of thumbnails with the `<nowiki><gallery></nowiki>` tag. The syntax is:

    <gallery>
    Image:{filename}|{caption}
    Image:{filename}|{caption}
    {...}
    </gallery>

Captions are optional, and may contain wiki links or other formatting.

for example:

    <gallery>
    Image:Example.jpg|Item 1
    Image:Example.jpg|a link to [[/Help|Help]]
    Image:Example.jpg
    Image:Example.jpg
    Image:Example.jpg|''italic caption''
    </gallery>

is formatted as:

Image:Example.jpg|Item 1 Image:Example.jpg|a link to [Help](/Help "wikilink") Image:Example.jpg Image:Example.jpg Image:Example.jpg|*italic caption*

How to create tables
--------------------

Tables may be authored in wiki pages using either HTML table elements directly, or using wikicode formatting to define the table. The benefit of wikicode is that the table is constructed of character symbols which tend to make it easier to perceive the table structure in the article editing view compared to HTML table elements.

A good general rule of thumb is to avoid using a table unless you need to. Table markup often complicates page editing.

### Wiki table markup summary

|     |                                                                                                                             |
|-----|-----------------------------------------------------------------------------------------------------------------------------|
| {|  | start **table**                                                                                                             |
| |+  | table **caption,** *optional;* only one per table and between table start and first row                                     |
| |-  | **table row,** *optional on first row* -- wiki engine assumes the first row                                                 |
| !   | **table header** cell, *optional.* Consecutive table headers may be added on same line separated by double marks (          |
| |   | **table data** cell, *required!* Consecutive table data cells may be added on same line separated by double marks (<nowiki> |
| |}  | end **table**                                                                                                               |

-   The above marks must **start on a new line** except the double || and !! for optionally adding consecutive cells to a line.
-   **XHTML attributes.** Each mark, except table end, optionally accepts one or more XHTML attributes. Attributes must be on the same line as the mark. Separate attributes from each other with a single space.
    -   Cells and caption (| or ||, ! or !!, and |+) hold content. So separate any attributes from content with a single pipe (|). Cell content may follow on same line or on following lines.
    -   Table and row marks ({| and |-) do not directly hold content. Do *not* add pipe (|) after their optional attributes. If you erroneously add a pipe after attributes for the table mark or row mark the parser will delete it *and* your final attribute if it was touching the erroneous pipe!
-   **Content** may (a) follow its cell mark on the same line after any optional XHTML attributes or (b) on lines below the cell mark. Content that uses wiki markup that itself needs to start on a new line, such as lists, headers, or nested tables, must of course be on its own new line.

***Warning***:Negative value minus sign can break your table (it may display missing some values) if you start a cell on a new line with a negative number or a parameter that evaluates to a negative number (|-6) because that is the wiki markup for table row, not table cell. To avoid this, insert a space before the value (| -6) or use in-line cell markup (||-6).

### Simple table

The following table lacks borders and good spacing but shows the simplest wiki markup table structure.

<center>
| What it looks like     | What you type   |
|------------------------|-----------------|
| |        |           |
 |--------|-----------|
 | Orange | Apple     |
 | Bread  | Pie       |
 | Butter | Ice cream |  | {|
                              |Orange
                              |Apple
                              |-
                              |Bread
                              |Pie
                              |-
                              |Butter
                              |Ice cream
                              |}           |

</center>
For more table-ish looking wiki markup cells can be listed on one line separated by ||. This does not scale well for longer cell content such as paragraphs. It works well for short bits of content however, such as our example table.

Extra spaces within cells in the wiki markup can be added, as I have done in the wiki markup below, to make the wiki markup itself look better but they do not affect the actual table rendering.

HTML attributes can be added to tables on this page but have been left out of the following example for simplicity.

<center>
| What it looks like                | What you type                              |
|-----------------------------------|--------------------------------------------|
| |        |           |          |
 |--------|-----------|----------|
 | Orange | Apple     | more     |
 | Bread  | Pie       | more     |
 | Butter | Ice cream | and more |  | {|
                                         |  Orange    ||   Apple   ||   more
                                         |-
                                         |   Bread    ||   Pie     ||   more
                                         |-
                                         |   Butter   || Ice cream ||  and more
                                         |}                                      |

</center>
### Table with TH headings

TH (HTML table headings) can be created by using ! instead of |. Headings usually show up bold and centered by default.

<center>
| What it looks like     | What you type   |
|------------------------|-----------------|
| | Yummy  | Yummier   |
 |--------|-----------|
 | Orange | Apple     |
 | Bread  | Pie       |
 | Butter | Ice cream |  | {|
                              !Yummy
                              !Yummier
                              |-
                              |Orange
                              |Apple
                              |-
                              |Bread
                              |Pie
                              |-
                              |Butter
                              |Ice cream
                              |}           |

</center>
They can appear on the side:

<center>
| What it looks like                  | What you type   |
|-------------------------------------|-----------------|
| | Fruit      | Orange | Apple     |
 |------------|--------|-----------|
 | Dish       | Bread  | Pie       |
 | Complement | Butter | Ice cream |  | {|
                                           !Fruit
                                           |Orange
                                           |Apple
                                           |-
                                           !Dish
                                           |Bread
                                           |Pie
                                           |-
                                           !Complement
                                           |Butter
                                           |Ice cream
                                           |}           |

</center>
Right justified side headings can be done as follows:

<center>
| What it looks like                  | What you type                  |
|-------------------------------------|--------------------------------|
| |       Fruit| Orange | Apple     |
 |-----------:|--------|-----------|
 |        Dish| Bread  | Pie       |
 |  Complement| Butter | Ice cream |  | {|
                                           !align="right" |Fruit
                                           |Orange
                                           |Apple
                                           |-
                                           !align="right" |Dish
                                           |Bread
                                           |Pie
                                           |-
                                           !align="right" |Complement
                                           |Butter
                                           |Ice cream
                                           |}                          |

</center>
### Caption

A **table caption** can be added to the top of any table as follows:

<center>
| What it looks like     | What you type          |
|------------------------|------------------------|
| |        |           |
 |--------|-----------|
 | Orange | Apple     |
 | Bread  | Pie       |
 | Butter | Ice cream |  | {|
                              |+Food complements
                              |-
                              |Orange
                              |Apple
                              |-
                              |Bread
                              |Pie
                              |-
                              |Butter
                              |Ice cream
                              |}                  |

</center>
**Attributes** can be added to the caption as follows:

<center>
| What it looks like     | What you type                                                    |
|------------------------|------------------------------------------------------------------|
| |        |           |
 |--------|-----------|
 | Orange | Apple     |
 | Bread  | Pie       |
 | Butter | Ice cream |  | {|
                              |+align="bottom" style="color:#e76700;"|''Food complements''
                              |-
                              |Orange
                              |Apple
                              |-
                              |Bread
                              |Pie
                              |-
                              |Butter
                              |Ice cream
                              |}                                                            |

</center>

How to color text
-----------------

It is very simple to color a selection of text: simply use the standard HTML markup as shown in the following example:

      <font color="COLOR">some text...</font>

COLOR is a color expressed either as a [recognized HTML color names](http://en.wikipedia.org/wiki/Web_colors) or [hexadecimal color codes](http://en.wikipedia.org/wiki/Web_colors). <font color="green">For example, if you wanted this phrase to appear colored green on your monitor</font>, you would use the word "green" as the value of COLOR.

Note that it is a very good idea to avoid shades of blue and red as colors, because they have special meaning on this site. (Dark blue is the color of unvisited hyperlinks, lighter blue is the color of visited hyperlinks, and red is the color of hyperlinks to wiki pages that do not yet exist.)

How to use "magic" words
------------------------

MediaWiki's "magic words" are symbols recognized by the system and associated with particular actions or dynamic textual substitutions. Here is a summary of some particularly useful magic words. A more extensive list is [available at MediaWiki.org](http://meta.wikimedia.org/wiki/Help:Magic_words).

### Global time

The time is reported in [UTC](http://en.wikipedia.org/wiki/UTC). Note that caching may affect the time displayed. If the page was displayed by the same user and has not changed (has not been edited) since the last time it was displayed, it is possible that the page may be cached (by the user's browser) and the displayed time or date may not change. Also, if a heavily used page, rather than freshly rendered by the software each time it is generated, is instead being retrieved from a caching system (such as the main page on Wikipedia) the date or time may not change from the last time the page was originally retrieved by the caching hardware or software.

| Word                   | Example                  | Explanation                                                                                                               |
|------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------|
| {{CURRENTDAY}}         | `{{CURRENTDAY}}`         | Displays the current day in numeric form.                                                                                 |
| {{CURRENTDAY2}}        | `{{CURRENTDAY2}}`        | **\[MW1.6+\]** Same as {{CURRENTDAY}}, but with leading zero (01 .. 31).                                                  |
| {{CURRENTDAYNAME}}     | `{{CURRENTDAYNAME}}`     | Name of the day in the language of the project or English.                                                                |
| {{CURRENTDOW}}         | `{{CURRENTDOW}}`         | Same as {{CURRENTDAYNAME}}, but as a number (0=Sunday, 1=Monday...).                                                      |
| {{CURRENTMONTH}}       | `{{CURRENTMONTH}}`       | The number 01 .. 12 of the month.                                                                                         |
| {{CURRENTMONTHABBREV}} | `{{CURRENTMONTHABBREV}}` | **\[MW1.5+\]** Same as {{CURRENTMONTH}}, but in abbreviated form (Jan .. Dec).                                            |
| {{CURRENTMONTHNAME}}   | `{{CURRENTMONTHNAME}}`   | Same as {{CURRENTMONTH}}, but in named form (January .. December).                                                        |
| {{CURRENTTIME}}        | `{{CURRENTTIME}}`        | The current time (00:00 .. 23:59).                                                                                        |
| {{CURRENTHOUR}}        | `{{CURRENTHOUR}}`        | The current hour (00 .. 23).                                                                                              |
| {{CURRENTWEEK}}        | `{{CURRENTWEEK}}`        | Number of the current week (1-53) according to [ISO 8601](http://en.wikipedia.org/wiki/en:ISO_8601) with no leading zero. |
| {{CURRENTYEAR}}        | `{{CURRENTYEAR}}`        | Returns the current year.                                                                                                 |
| {{CURRENTTIMESTAMP}}   | `{{CURRENTTIMESTAMP}}`   | **\[MW1.7+\]** [ISO 8601](http://en.wikipedia.org/wiki/en:ISO_8601) time stamp.                                           |

### Local time

The time depending on the local timezone of the wiki (*not* depending on the timezone in the user's preference settings).

| Word                 | Example                | Explanation                                                                                                             |
|----------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------|
| {{LOCALDAY}}         | `{{LOCALDAY}}`         | Displays the local day of the month in numeric form.                                                                    |
| {{LOCALDAY2}}        | `{{LOCALDAY2}}`        | Same as {{LOCALDAY}}, but with a leading zero (01 .. 31).                                                               |
| {{LOCALDAYNAME}}     | `{{LOCALDAYNAME}}`     | Name of the day in the language of the project or English.                                                              |
| {{LOCALDOW}}         | `{{LOCALDOW}}`         | Same as {{LOCALDAYNAME}}, but as a number (0=Sunday, 1=Monday...).                                                      |
| {{LOCALMONTH}}       | `{{LOCALMONTH}}`       | The number 01 .. 12 of the month.                                                                                       |
| {{LOCALMONTHABBREV}} | `{{LOCALMONTHABBREV}}` | Same as {{LOCALMONTH}}, but in abbreviated form as Jan .. Dec.                                                          |
| {{LOCALMONTHNAME}}   | `{{LOCALMONTHNAME}}`   | Same as {{LOCALMONTH}}, but in named form as January .. December.                                                       |
| {{LOCALTIME}}        | `{{LOCALTIME}}`        | The local time (00:00 .. 23:59).                                                                                        |
| {{LOCALHOUR}}        | `{{LOCALHOUR}}`        | The local hour (00 .. 23).                                                                                              |
| {{LOCALWEEK}}        | `{{LOCALWEEK}}`        | Number of the local week (1-53) according to [ISO 8601](http://en.wikipedia.org/wiki/en:ISO_8601) with no leading zero. |
| {{LOCALYEAR}}        | `{{LOCALYEAR}}`        | Returns the local year.                                                                                                 |
| {{LOCALTIMESTAMP}}   | `{{LOCALTIMESTAMP}}`   | [ISO 8601](http://en.wikipedia.org/wiki/en:ISO_8601) time stamp.                                                        |

### Page names and related info

| Word                  | Example                    | Explanation                                                                                                              |
|-----------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------|
| {{PAGENAME}}          | `Some Page Name`           | Returns the name of the current page, including all levels (Title/Subtitle).                                             |
| {{PAGENAMEE}}         | `Some_Page_Name`           | More URL-friendly, with special characters percent-encoded. (Useful for using an articlename in an external link.)       |
| {{SUBPAGENAME}}
 {{SUBPAGENAMEE}}       | `Page Name<br />Page_Name` | Name of the current page, excluding parent pages ("Page Name" on "One/Two/Page Name") in namespaces supporting subpages. |
| {{BASEPAGENAME}}
 {{BASEPAGENAME}}       | `One/Two<br />One/Two`     | The basename of a subpage ("One/Two" on "One/Two/Page Name").                                                            |
| {{REVISIONID}}        | `{{REVISIONID}}`           | The unique identifying number of a page. Note that when editing a page, this value is null.                              |
| {{REVISIONDAY}}       | `{{REVISIONDAY}}`          | The day on which the page was last modified.                                                                             |
| {{REVISIONDAY2}}      | `{{REVISIONDAY2}}`         | The day on which the page was last modified, but with a leading zero (01 .. 31).                                         |
| {{REVISIONMONTH}}     | `{{REVISIONMONTH}}`        | The month in which the page was last modified.                                                                           |
| {{REVISIONYEAR}}      | `{{REVISIONYEAR}}`         | The year in which the page was last modified.                                                                            |
| {{REVISIONTIMESTAMP}} | `{{REVISIONTIMESTAMP}}`    | [ISO 8601](http://en.wikipedia.org/wiki/en:ISO_8601) time stamp, indicating when the page was last modified.             |
| {{SITENAME}}          | `{{SITENAME}}`             | Value of .                                                                                                               |
| {{SERVER}}            | <small></small>            | Value of                                                                                                                 |
| {{SERVERNAME}}        | `{{SERVERNAME}}`           |                                                                                                                          |
||

Special features of the SBML.org wiki system
--------------------------------------------

This site includes several extensions and customizations added by the SBML Team. These features are not standard in basic MediaWiki sites, although versions of them are available as [extensions to MediaWiki](/http://www.mediawiki.org/wiki/Extension_Matrix "wikilink").

### Using images as icons

This wiki implements a modified version of the [MediaWiki "Icon" extension](http://www.mediawiki.org/wiki/Extension:Icon). The extension provides a means of inserting an image into a page such that the image is *not* turned into a link to the image file description (which is what the standard MediaWiki `<nowiki>[[/Image|Image]]</nowiki>` markup does). The syntax of the new function provided by this extension is the following:

     {{#icon: file name | alt text | width | page to link to | CSS classes }}

Only the file name is required; the remaining arguments are optional. Most of the arguments are hopefully self-explanatory, except for the last one: the "CSS classes" is text added to the value of the `<nowiki>class</nowiki>` attribute of the `<nowiki><img src="..."/></nowiki>` element used to place the image on the rendered page. The `#icon` function always adds `<nowiki>class="icon"</nowiki>` to the `img` element, but the additional argument allows you to append more class attribute values. This is useful for changing the appearance of the image.

The following are some examples of use:

-   `<nowiki>{{#icon: Image.jpg | Info }}</nowiki>` will display file Image.jpg in its default size, with alt text "Info"
-   `<nowiki>{{#icon: Image.jpg | Info | 24 }}</nowiki>` same as above, but the width of the image is set to 24 pixels
-   `<nowiki>{{#icon: Image.jpg | Info | 24 | News }}</nowiki>` same as above, and the image is made into a link to page [News](/News "wikilink")
-   `<nowiki>{{#icon: Image.jpg | | | | corner iradius15 }}</nowiki>` adds "corner iradius15" to the class

### Rounded image corners

### Collapsible tables

### Conditional/tests in wiki markup

### Site icons

The SBGN.org site uses custom icons designed by Caltech's [Jessica Stephens](http://directory.caltech.edu/cgi-bin/search.cgi?uid=jas). The following is list of the icons. Beware that **nearly all are already used somewhere on this site**, so do not simply use them again without carefully thinking about the implications for content identity, overloading of meaning, and user confusion. As a general rule, avoid reusing icons that already appear in top-level pages (e.g., [Documents](/Documents "wikilink")). Icons that are used in the [Forums](http://sbgn.org/Forums) area (especially those that show up only after a user is logged in to the Forums system) can probably be reused elsewhere without causing too much confusion.

| Icon                             | Text                             | Places used on site                                                          |
|----------------------------------|----------------------------------|------------------------------------------------------------------------------|
| {{\#icon:icon-download.gif}}     | {{\#icon:icon-download.gif}}     |                                                                              |
| {{\#icon:icon-newpost.gif}}      | {{\#icon:icon-newpost.gif}}      | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-nopost.gif}}       | {{\#icon:icon-nopost.gif}}       | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-register.gif}}     | {{\#icon:icon-register.gif}}     | [Forums](http://sbgn.org/Forums), various [Events](/Events "wikilink") pages |
| {{\#icon:icon-search.gif}}       | {{\#icon:icon-search.gif}}       | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-publications.gif}} | {{\#icon:icon-publications.gif}} | [Documents](/Documents "wikilink")                                           |
| {{\#icon:icon-faq.gif}}          | {{\#icon:icon-faq.gif}}          | [Documents](/Documents "wikilink"), [Forums](http://sbgn.org/Forums)         |
| {{\#icon:icon-bestpractice.gif}} | {{\#icon:icon-bestpractice.gif}} | [Documents](/Documents "wikilink")                                           |
| {{\#icon:icon-samples.gif}}      | {{\#icon:icon-samples.gif}}      | [Documents](/Documents "wikilink"), [Community](/Community "wikilink")       |
| {{\#icon:icon-editors.gif}}      | {{\#icon:icon-editors.gif}}      | [About](/About "wikilink")                                                   |
| {{\#icon:icon-queries.gif}}      | {{\#icon:icon-qureies.gif}}      | [About](/About "wikilink")                                                   |
| {{\#icon:icon-flatview.gif}}     | {{\#icon:icon-flatview.gif}}     | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-login.gif}}        | {{\#icon:icon-login.gif}}        | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-logout.gif}}       | {{\#icon:icon-logout.gif}}       | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-members.gif}}      | {{\#icon:icon-members.gif}}      | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-newtopic.gif}}     | {{\#icon:icon-newtopic.gif}}     | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-profile.gif}}      | {{\#icon:icon-profile.gif}}      | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-post.gif}}         | {{\#icon:icon-post.gif}}         | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-tree.gif}}         | {{\#icon:icon-tree.gif}}         | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-funding2.gif}}     | {{\#icon:icon-funding2.gif}}     |                                                                              |
| {{\#icon:icon-funding-gift.gif}} | {{\#icon:icon-funding-gift.gif}} | [About](/About "wikilink")                                                   |
| {{\#icon:icon-events.gif}}       | {{\#icon:icon-events.gif}}       |                                                                              |
| {{\#icon:icon-forum.gif}}        | {{\#icon:icon-forum.gif}}        |                                                                              |
| {{\#icon:icon-home.gif}}         | {{\#icon:icon-home.gif}}         | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-rss.gif}}          | {{\#icon:icon-rss.gif}}          | [Forums](http://sbgn.org/Forums)                                             |
| {{\#icon:icon-software.gif}}     | {{\#icon:icon-software.gif}}     | [Community](/Community "wikilink"), [Forums](http://sbgn.org/Forums)         |
||

