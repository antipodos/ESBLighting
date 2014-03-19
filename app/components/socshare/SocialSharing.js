




<!DOCTYPE html>
<html class=" ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>SocialSharing-PhoneGap-Plugin/www/SocialSharing.js at master · EddyVerbruggen/SocialSharing-PhoneGap-Plugin</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="EddyVerbruggen/SocialSharing-PhoneGap-Plugin" name="twitter:title" /><meta content="SocialSharing-PhoneGap-Plugin - This PhoneGap plugin allows you to share text, an image, or a URL (or all three) via the native sharing widget of your device." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1426370?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1426370?s=400" property="og:image" /><meta content="EddyVerbruggen/SocialSharing-PhoneGap-Plugin" property="og:title" /><meta content="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" property="og:url" /><meta content="SocialSharing-PhoneGap-Plugin - This PhoneGap plugin allows you to share text, an image, or a URL (or all three) via the native sharing widget of your device." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="6C23298B:1343:6DEA69:53292189" name="octolytics-dimension-request_id" /><meta content="6990585" name="octolytics-actor-id" /><meta content="antipodos" name="octolytics-actor-login" /><meta content="1be3f67b17121b91c404d996936ed4f8508848e5035c69753935896bd31aabfc" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="5UXsIyUnuBA6jJYVsSZiAyz82j7C4wV4xIL34zvirJ0=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-9c0ec1654aa17ac751c2c3274ab0aa3cb4cc75ea.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-43c85266b41a94cc6a086312256ffbb8b0340a48.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-40c107d5f9c17b1c5a24d77604a4722218ebdadd.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-89b9199ca02fab50d04e2b75e73f353f67d10085.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="d8c4e1da03a853359fc64e7b4f1b9984">

        <link data-pjax-transient rel='permalink' href='/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/78b4ee7bbd75b36149f9803f899b2bb0aa6ee548/www/SocialSharing.js'>

  <meta name="description" content="SocialSharing-PhoneGap-Plugin - This PhoneGap plugin allows you to share text, an image, or a URL (or all three) via the native sharing widget of your device." />

  <meta content="1426370" name="octolytics-dimension-user_id" /><meta content="EddyVerbruggen" name="octolytics-dimension-user_login" /><meta content="12791945" name="octolytics-dimension-repository_id" /><meta content="EddyVerbruggen/SocialSharing-PhoneGap-Plugin" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12791945" name="octolytics-dimension-repository_network_root_id" /><meta content="EddyVerbruggen/SocialSharing-PhoneGap-Plugin" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/commits/master.atom" rel="alternate" title="Recent Commits to SocialSharing-PhoneGap-Plugin:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="antipodos"
      data-repo="EddyVerbruggen/SocialSharing-PhoneGap-Plugin"
      data-branch="master"
      data-sha="5a416b2abf4174d4a9a743a782abc0a1d7202178"
  >

    <input type="hidden" name="nwo" value="EddyVerbruggen/SocialSharing-PhoneGap-Plugin" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/antipodos" class="name">
        <img alt="antipodos" class=" js-avatar" data-user="6990585" height="20" src="https://avatars2.githubusercontent.com/u/6990585?s=140" width="20" /> antipodos
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="EddyVerbruggen/SocialSharing-PhoneGap-Plugin">This repository</span>
    </li>
      <li>
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="5UXsIyUnuBA6jJYVsSZiAyz82j7C4wV4xIL34zvirJ0=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="12791945" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/watchers">
        16
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar EddyVerbruggen/SocialSharing-PhoneGap-Plugin" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star EddyVerbruggen/SocialSharing-PhoneGap-Plugin" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/stargazers">
        122
      </a>
  </div>

  </li>


        <li>
          <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of EddyVerbruggen/SocialSharing-PhoneGap-Plugin to your account" aria-label="Fork your own copy of EddyVerbruggen/SocialSharing-PhoneGap-Plugin to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/network" class="social-count">47</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/EddyVerbruggen" class="url fn" itemprop="url" rel="author"><span itemprop="title">EddyVerbruggen</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" class="js-current-repository js-repo-home-link">SocialSharing-PhoneGap-Plugin</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /EddyVerbruggen/SocialSharing-PhoneGap-Plugin">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /EddyVerbruggen/SocialSharing-PhoneGap-Plugin/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /EddyVerbruggen/SocialSharing-PhoneGap-Plugin/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /EddyVerbruggen/SocialSharing-PhoneGap-Plugin/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /EddyVerbruggen/SocialSharing-PhoneGap-Plugin/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /EddyVerbruggen/SocialSharing-PhoneGap-Plugin/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /EddyVerbruggen/SocialSharing-PhoneGap-Plugin/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" class="minibutton sidebar-button" title="Save EddyVerbruggen/SocialSharing-PhoneGap-Plugin to your computer and use it in GitHub Desktop." aria-label="Save EddyVerbruggen/SocialSharing-PhoneGap-Plugin to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download EddyVerbruggen/SocialSharing-PhoneGap-Plugin as a zip file"
                   title="Download EddyVerbruggen/SocialSharing-PhoneGap-Plugin as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:0ad5a26a48ab841c84aab8efcf53d7a1 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/www/SocialSharing.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/phonegap-2.x/www/SocialSharing.js"
                 data-name="phonegap-2.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="phonegap-2.x">phonegap-2.x</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">SocialSharing-PhoneGap-Plugin</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/tree/master/www" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">SocialSharing.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="www/SocialSharing.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Eddy Verbruggen" class="main-avatar js-avatar" data-user="1426370" height="24" src="https://avatars.githubusercontent.com/u/1426370" width="24" />
    <span class="author"><a href="/EddyVerbruggen" rel="author">EddyVerbruggen</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-02-12T13:20:56-08:00" title="2014-02-12 13:20:56">February 12, 2014</time>
    <div class="commit-title">
        <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/commit/c0bc2c17ddf067124bc0f1fb42521f5a87228879" class="message" data-pjax="true" title="shareViaSMS now accepts telephone numbers for you to optionally prefill">shareViaSMS now accepts telephone numbers for you to optionally prefill</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Eddy Verbruggen" class=" js-avatar" data-user="1426370" height="24" src="https://avatars.githubusercontent.com/u/1426370" width="24" />
            <a href="/EddyVerbruggen">EddyVerbruggen</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>47 lines (36 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.018 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin?branch=master&amp;filepath=www%2FSocialSharing.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/edit/master/www/SocialSharing.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/raw/master/www/SocialSharing.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blame/master/www/SocialSharing.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/commits/master/www/SocialSharing.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/delete/master/www/SocialSharing.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="kd">function</span> <span class="nx">SocialSharing</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'><span class="p">}</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">available</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">avail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">avail</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="p">},</span> <span class="kc">null</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;available&quot;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC8'><span class="p">};</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">share</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">subject</span><span class="p">,</span> <span class="nx">file</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;share&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="nx">subject</span><span class="p">,</span> <span class="nx">file</span><span class="p">,</span> <span class="nx">url</span><span class="p">]);</span></div><div class='line' id='LC12'><span class="p">};</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shareViaTwitter</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;shareViaTwitter&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">]);</span></div><div class='line' id='LC16'><span class="p">};</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shareViaFacebook</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;shareViaFacebook&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">]);</span></div><div class='line' id='LC20'><span class="p">};</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shareViaWhatsApp</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;shareViaWhatsApp&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">]);</span></div><div class='line' id='LC24'><span class="p">};</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shareViaSMS</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">message</span><span class="p">,</span> <span class="nx">phonenumbers</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;shareViaSMS&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="nx">phonenumbers</span><span class="p">]);</span></div><div class='line' id='LC28'><span class="p">};</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">canShareVia</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">via</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">subject</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;canShareVia&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="nx">subject</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">via</span><span class="p">]);</span></div><div class='line' id='LC32'><span class="p">};</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">shareVia</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">via</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">subject</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">errorCallback</span><span class="p">,</span> <span class="s2">&quot;SocialSharing&quot;</span><span class="p">,</span> <span class="s2">&quot;shareVia&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">message</span><span class="p">,</span> <span class="nx">subject</span><span class="p">,</span> <span class="nx">image</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">via</span><span class="p">]);</span></div><div class='line' id='LC36'><span class="p">};</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">install</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">socialsharing</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">SocialSharing</span><span class="p">();</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="k">return</span> <span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">socialsharing</span><span class="p">;</span></div><div class='line' id='LC45'><span class="p">};</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'><span class="nx">cordova</span><span class="p">.</span><span class="nx">addConstructor</span><span class="p">(</span><span class="nx">SocialSharing</span><span class="p">.</span><span class="nx">install</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04645s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

