
Portfolio Site
===================
>  [visit](https://phillcheng.herokuapp.com/) my portfolio ;)

Heroku
-------------
> Use this link for [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
>

**Debugging Deployment**
>**Error:**
>Error when attempting ```heroku login``` command from terminal:
>```
>$ heroku login
>module.js:491
>throw err;
>^
>
>Error: Cannot find module 'cli-engine'
>at Function.Module._resolveFilename (module.js:489:15)
>at Function.Module._load (module.js:439:25)
>at Module.require (module.js:517:17)
>at require (internal/module.js:11:18)
>at Object.<anonymous>(/Users/userID/.local/share/heroku/client/bin/heroku.js:2:13)
>at Module._compile (module.js:573:30)
>at Object.Module._extensions..js (module.js:584:10)
>at Module.load (module.js:507:32)
>at tryModuleLoad (module.js:470:12)
>at Function.Module._load (module.js:462:3)
>```
>
>**Solution**:
>*Reinstalling ```heroku``` via ```Homebrew``` resolved the issue.*
>```brew uninstall --force heroku```
>```brew install heroku```
>

**Renaming Apps from the CLI**
>[Link to Heroku documentation](https://devcenter.heroku.com/articles/renaming-apps)
>
>Use ```heroku apps:rename``` command from you Git repo to rename the default Heroku url.
>
>```
>$ heroku apps:rename newname
>Renaming oldname to newname... done
>http://newname.herokuapp.com/ | git@herokuapp.com:newname.git
>Git remote heroku updated
>```
>
>Remember to update your **Git remotes**. The following commands will update the remote's details in other repository instances:
>
>```
>$ git remote rm heroku
>$ heroku git:remote -a newname
>```
>

HTML
-------------
> When working with a *drop-down list* there are some helpful attributes which can aid in some typical use-cases.
> ```selected``` - can be added to an option to make it appear as selected.
> ```disabled``` - will make the option non-functional.
> ```hidden``` - will make the option not visible when the list is expanded.
> *Example*:
> ```
><select>
>    <option selected disabled hidden>Choose here</option>
>    <option value="1">One</option>
>    <option value="2">Two</option>
>    <option value="3">Three</option>
>    <option value="4">Four</option>
>    <option value="5">Five</option>
></select>
> ```
> A [post](https://stackoverflow.com/questions/9447134/html-select-how-to-set-default-text-which-wont-be-shown-in-drop-down-list) that explains how to display some *placeholder/default text* that will not be shown as an option in a *drop-down list* (HTML ```select``` element).

> If you want to enable a ```horizontal scrolling``` bar when a window is a specific width, you can use the following snippet.
>
> ```
>@media (max-width: 600px) {
>    body {
>        overflow-x: auto;
>    }
>}
> ```
>
> A [post](https://stackoverflow.com/questions/41886975/allow-horizontal-scrolling-when-window-is-a-specific-width-with-overflow-xhidde) that has a snippet and explanation on how to allow ```horizontal scrolling``` with ```overflow-x``` *css property*.
