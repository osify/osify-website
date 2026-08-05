---
title: Oracle PLSQL – Function to Spelling Number to other language automatic
date: "2012-05-15T14:42:30"
modified: "2012-05-15T14:42:30"
author: osify
categories:
  - Database
  - Tips
tags:
  - Oracle
  - PLSQL
lang: en
excerpt: You might face the same issue to me when you want to spell number to text in different language than English. Here is the solution I asked in StackOverflow and made together with the one who initialized this idea, it’s…
origin:
  site: osify
  id: 79
  url: https://osify.com/2012/05/oracle-plsql-function-to-spelling-number-to-other-language-automatic/
  host: osify.com
legacyUrls:
  - https://osify.com/2012/05/oracle-plsql-function-to-spelling-number-to-other-language-automatic/
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

You might face the same issue to me when you want to spell number to text in different language than English.

Here is the solution I asked in StackOverflow and made together with the one who initialized this idea, it’s kind of a great idea you may want this experience.

We used Yahoo Babelfish translation service to translate our converted English spelling number to Italian and you can try this kind of method for any other language that exists in babelfish, check it out from here:

```sql
CREATE OR REPLACE FUNCTION Currency_conversion(currency IN NUMBER)
RETURN VARCHAR2 IS
    txt varchar2(4000);
    tlum  varchar2(4000);
    babelTxt varchar(32000);
    req   utl_http.req;
    resp  utl_http.resp;
    webtext VARCHAR2(4000);
    webextract VARCHAR2(4000);
BEGIN
      tlum:=NULL;--used for multiple execution in the same session
    -- This is used to convert number to words in english
    SELECT CAST( to_char( to_timestamp( lpad(currency,9,'0'), 'FF9' ), 'FFSP' ) AS VARCHAR2(100) )
    into txt from dual;

    -- FFSP is used to spell Fraction second in words for example HH24SP
    -- can be used to spell hours from 0 to 23,i used FFSP to get max range
    txt:=translate(txt,'x-','x ');

    -- The below logic is taken from
    -- https://forums.oracle.com/forums/thread.jspa?threadID=1122273(and)start=15(and)    tstart=0
    --need to test once
    -- request that exceptions are raised for error status codes
    utl_http.set_response_error_check(enable => TRUE);
    -- allow testing for exceptions like Utl_Http.Http_Server_Error
    utl_http.set_detailed_excp_support(enable => TRUE);

    txt:=utl_url.escape(txt);

    babelTxt := 'http://babelfish.yahoo.com/translate_txt?doit=done' || '&'   || 'lp=en_it' || '&' || 'intl=1' || '&' || 'ei=utf8' || '&' || 'trtext=' || txt;
    req:=utl_http.begin_request(url => babelTxt, method => 'GET');
    resp := utl_http.get_response(r => req);
    BEGIN
        LOOP
            --utl_http.read_text(r => resp, data => webtext, len => 32767);
                utl_http.read_line(r => resp , data => webtext);

            webextract := regexp_substr(webtext,'<div id="result"><div style="padding:0.6em;">(.+)</div></div>');

            if webextract is not null
            then
                select regexp_replace(webextract,'<div id="result"><div style="padding:0.6em;">(.+)</div></div>','\1')
                into tlum FROM dual;
            end if;

            exit when tlum is not null;

            END LOOP;
    EXCEPTION
     WHEN utl_http.end_of_body THEN
     NULL;
    END;

    utl_http.end_response(r => resp);

    return tlum;

    EXCEPTION
        WHEN OTHERS THEN
        dbms_output.put_line(SQLERRM);
        return '';
END;
/
exit;
```

If you want to adopt it to other language, please change this line:

```actionscript
babelTxt := 'http://babelfish.yahoo.com/translate_txt?doit=done' || '&'   || 'lp=en_it' || '&' || 'intl=1' || '&' || 'ei=utf8' || '&' || 'trtext=' || txt;

Example: English to French, changes: lp=en_fr
```

Check detail to our discussion at [StackOverflow](http://stackoverflow.com/questions/9904994/plsql-to-spell-number-currency-to-italian-currency-without-hardcoded-the-trans)
