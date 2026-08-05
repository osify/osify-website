---
title: Important Java Basic Code Conventions for Readable Code
date: "2013-06-25T02:47:59"
modified: "2013-06-25T02:59:09"
author: osify
categories:
  - Java
tags:
  - Code Conventions
  - Eclipse
  - Java
  - Java Basic
  - Java Tutorials
lang: en
excerpt: "Here I would like to give some basic code conventions in Java that mostly we need in our daily programming life: Indentation Use 4 spaces for indentation. No tabs! If you are using Eclipse, you can configure this at…"
origin:
  site: ask
  id: 275
  url: https://ask.osify.com/qa/275
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/275
mergedFrom: []
mediaCount: 1
featured: false
draft: false
---

Here I would like to give some basic code conventions in Java that mostly we need in our daily programming life:

#### Indentation

Use 4 spaces for indentation. No tabs!

If you are using Eclipse, you can configure this at

- With Eclipse 3.7: *Window->Preferences->Java->Code Style->Formatter*
- Edit on one selected convention, example: Java Conventions [built-in] and go to tab: *Indentation*

#### Brackets

Easy to read, place open braces on the line after the declaration, for example:

```java
public class Foo extends Bar
{
    public static void main(String args[])
    {
        try
        {
            for (int i = 0; i < args.length; i++)
            {
                System.out.println(Integer.parseInt(args[i]));
            }
        }
        catch(NumberFormatException e)
        {
            e.printStackTrace();
        }
    }
}
```

Another popular one: Java convention (Eclipse) ~ I still like this one:

```java
/**
 * Description here
 * @author ABC
 * @version $Revision$
 */
public class Foo extends Bar {
    public static void main(String args[]) {
        try {
            for (int i = 0; i < args.length; i++) {
                System.out.println(Integer.parseInt(args[i]));
            }
        } catch(NumberFormatException e) {
            e.printStackTrace();
        }
    }
}
```

#### Line Wrapping

Wrap lines longer than 100 characters. For wrapped lines, either use an indent of 8 characters or align with the expression at the same level on the previous line.

#### Declarations

Within a class or interface, definitions should be ordered as follows:

- Class (static) variables
- Instance variables
- Constructors
- Methods

#### Imports

Do not use package imports (for example: import java.util.*;), please use full import for each class (for example: import java.util.LinkedList;)

### For Eclipse Users

You can use built-in some formatter such as: Java Conventions [built-in] (my recommendation) that already apply well enough to code:

#### [eclipse-java-conventions](https://i0.wp.com/ask.osify.com/files/2013/06/eclipse-java-conventions.png)

Some important shortcut keys:

- Reformat your code by using *Source->Format* (Ctrl+Shift+F)
- Format your import statements appropriately when you invoke *Source -> Organize Imports* (Ctrl+Shift+O)
