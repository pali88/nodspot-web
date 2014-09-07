




<!DOCTYPE html>
<html class=" ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bower-angular-resource/angular-resource.js at master · angular/bower-angular-resource · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/bower-angular-resource" name="twitter:title" /><meta content="bower-angular-resource - angular-resource bower repo" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/139426?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/139426?s=400" property="og:image" /><meta content="angular/bower-angular-resource" property="og:title" /><meta content="https://github.com/angular/bower-angular-resource" property="og:url" /><meta content="bower-angular-resource - angular-resource bower repo" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D42A0874:5AA0:38FE73D:532E0034" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ZSDW0rNgQZcmlpS91WhaRtOcfqmGJlWT1US4yVkhu1Q=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-dd2e4ab77e94896e4418f4dd1d11ce1efb595fd1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-f14002c8b8c821aeaeaf37b52de1d6c4d29dc214.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-1fdcfaa86258d75070622ace871ef84ed6e72cf0.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-7e1a088b2bca0ded37a4fba91c2691508dc734bb.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="0778df758767b5af5f882e3e85af2587">

        <link data-pjax-transient rel='permalink' href='/angular/bower-angular-resource/blob/e8283f5dd9952a89e468ffba579301a6a34bd537/angular-resource.js'>

  <meta name="description" content="bower-angular-resource - angular-resource bower repo" />

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="7805516" name="octolytics-dimension-repository_id" /><meta content="angular/bower-angular-resource" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7805516" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/bower-angular-resource" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular/bower-angular-resource/commits/master.atom" rel="alternate" title="Recent Commits to bower-angular-resource:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fangular%2Fbower-angular-resource%2Fblob%2Fmaster%2Fangular-resource.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="angular/bower-angular-resource"
      data-branch="master"
      data-sha="035a3a8d1ff01e326fa66c0e58dd08ac88f9e97e"
  >

    <input type="hidden" name="nwo" value="angular/bower-angular-resource" />

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
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fangular%2Fbower-angular-resource"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/angular/bower-angular-resource/stargazers">
      7
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-resource"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/angular/bower-angular-resource/network" class="social-count">
        52
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/angular" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/angular/bower-angular-resource" class="js-current-repository js-repo-home-link">bower-angular-resource</a></strong>

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
        <a href="/angular/bower-angular-resource" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /angular/bower-angular-resource">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/angular/bower-angular-resource/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /angular/bower-angular-resource/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/angular/bower-angular-resource/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /angular/bower-angular-resource/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/angular/bower-angular-resource/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular/bower-angular-resource/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/angular/bower-angular-resource/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /angular/bower-angular-resource/network">
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
           value="https://github.com/angular/bower-angular-resource.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/bower-angular-resource.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/angular/bower-angular-resource" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/bower-angular-resource" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save angular/bower-angular-resource to your computer and use it in GitHub Desktop." aria-label="Save angular/bower-angular-resource to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/angular/bower-angular-resource/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download angular/bower-angular-resource as a zip file"
                   title="Download angular/bower-angular-resource as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:aa904872b10912a241273b80beb1d402 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/angular/bower-angular-resource/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

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
              <a href="/angular/bower-angular-resource/blob/master/angular-resource.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/blob/unstable/angular-resource.js"
                 data-name="unstable"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="unstable">unstable</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2491+sha.635cdaa/angular-resource.js"
                 data-name="v1.3.0-build.2491+sha.635cdaa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2491+sha.635cdaa">v1.3.0-build.2491+sha.635cdaa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2490+sha.c7a49b3/angular-resource.js"
                 data-name="v1.3.0-build.2490+sha.c7a49b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2490+sha.c7a49b3">v1.3.0-build.2490+sha.c7a49b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2489+sha.408d958/angular-resource.js"
                 data-name="v1.3.0-build.2489+sha.408d958"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2489+sha.408d958">v1.3.0-build.2489+sha.408d958</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2488+sha.3f2d756/angular-resource.js"
                 data-name="v1.3.0-build.2488+sha.3f2d756"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2488+sha.3f2d756">v1.3.0-build.2488+sha.3f2d756</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2487+sha.6011145/angular-resource.js"
                 data-name="v1.3.0-build.2487+sha.6011145"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2487+sha.6011145">v1.3.0-build.2487+sha.6011145</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2486+sha.b26fc23/angular-resource.js"
                 data-name="v1.3.0-build.2486+sha.b26fc23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2486+sha.b26fc23">v1.3.0-build.2486+sha.b26fc23</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2485+sha.0c930a1/angular-resource.js"
                 data-name="v1.3.0-build.2485+sha.0c930a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2485+sha.0c930a1">v1.3.0-build.2485+sha.0c930a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2484+sha.2f61b2f/angular-resource.js"
                 data-name="v1.3.0-build.2484+sha.2f61b2f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2484+sha.2f61b2f">v1.3.0-build.2484+sha.2f61b2f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2483+sha.64363af/angular-resource.js"
                 data-name="v1.3.0-build.2483+sha.64363af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2483+sha.64363af">v1.3.0-build.2483+sha.64363af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2482+sha.4d4da55/angular-resource.js"
                 data-name="v1.3.0-build.2482+sha.4d4da55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2482+sha.4d4da55">v1.3.0-build.2482+sha.4d4da55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2481+sha.58f5da8/angular-resource.js"
                 data-name="v1.3.0-build.2481+sha.58f5da8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2481+sha.58f5da8">v1.3.0-build.2481+sha.58f5da8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2480+sha.fb6062f/angular-resource.js"
                 data-name="v1.3.0-build.2480+sha.fb6062f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2480+sha.fb6062f">v1.3.0-build.2480+sha.fb6062f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2479+sha.0c65f1a/angular-resource.js"
                 data-name="v1.3.0-build.2479+sha.0c65f1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2479+sha.0c65f1a">v1.3.0-build.2479+sha.0c65f1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2478+sha.f40f54c/angular-resource.js"
                 data-name="v1.3.0-build.2478+sha.f40f54c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2478+sha.f40f54c">v1.3.0-build.2478+sha.f40f54c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2477+sha.37bc5ef/angular-resource.js"
                 data-name="v1.3.0-build.2477+sha.37bc5ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2477+sha.37bc5ef">v1.3.0-build.2477+sha.37bc5ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2476+sha.bc42950/angular-resource.js"
                 data-name="v1.3.0-build.2476+sha.bc42950"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2476+sha.bc42950">v1.3.0-build.2476+sha.bc42950</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2475+sha.6680b7b/angular-resource.js"
                 data-name="v1.3.0-build.2475+sha.6680b7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2475+sha.6680b7b">v1.3.0-build.2475+sha.6680b7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2474+sha.c839f78/angular-resource.js"
                 data-name="v1.3.0-build.2474+sha.c839f78"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2474+sha.c839f78">v1.3.0-build.2474+sha.c839f78</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2473+sha.f7ce415/angular-resource.js"
                 data-name="v1.3.0-build.2473+sha.f7ce415"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2473+sha.f7ce415">v1.3.0-build.2473+sha.f7ce415</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2472+sha.4cf2adf/angular-resource.js"
                 data-name="v1.3.0-build.2472+sha.4cf2adf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2472+sha.4cf2adf">v1.3.0-build.2472+sha.4cf2adf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2471+sha.2b84f43/angular-resource.js"
                 data-name="v1.3.0-build.2471+sha.2b84f43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2471+sha.2b84f43">v1.3.0-build.2471+sha.2b84f43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2469+sha.299b220/angular-resource.js"
                 data-name="v1.3.0-build.2469+sha.299b220"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2469+sha.299b220">v1.3.0-build.2469+sha.299b220</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2468+sha.78057a9/angular-resource.js"
                 data-name="v1.3.0-build.2468+sha.78057a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2468+sha.78057a9">v1.3.0-build.2468+sha.78057a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2467+sha.748a6c8/angular-resource.js"
                 data-name="v1.3.0-build.2467+sha.748a6c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2467+sha.748a6c8">v1.3.0-build.2467+sha.748a6c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2466+sha.ed4cd6c/angular-resource.js"
                 data-name="v1.3.0-build.2466+sha.ed4cd6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2466+sha.ed4cd6c">v1.3.0-build.2466+sha.ed4cd6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2465+sha.4cc00e7/angular-resource.js"
                 data-name="v1.3.0-build.2465+sha.4cc00e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2465+sha.4cc00e7">v1.3.0-build.2465+sha.4cc00e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2464+sha.f7b3684/angular-resource.js"
                 data-name="v1.3.0-build.2464+sha.f7b3684"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2464+sha.f7b3684">v1.3.0-build.2464+sha.f7b3684</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2463+sha.f8f97f8/angular-resource.js"
                 data-name="v1.3.0-build.2463+sha.f8f97f8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2463+sha.f8f97f8">v1.3.0-build.2463+sha.f8f97f8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2460+sha.547871e/angular-resource.js"
                 data-name="v1.3.0-build.2460+sha.547871e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2460+sha.547871e">v1.3.0-build.2460+sha.547871e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2459+sha.a4b70cf/angular-resource.js"
                 data-name="v1.3.0-build.2459+sha.a4b70cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2459+sha.a4b70cf">v1.3.0-build.2459+sha.a4b70cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2458+sha.c9fbb47/angular-resource.js"
                 data-name="v1.3.0-build.2458+sha.c9fbb47"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2458+sha.c9fbb47">v1.3.0-build.2458+sha.c9fbb47</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2457+sha.ed22869/angular-resource.js"
                 data-name="v1.3.0-build.2457+sha.ed22869"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2457+sha.ed22869">v1.3.0-build.2457+sha.ed22869</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2456+sha.e381c4d/angular-resource.js"
                 data-name="v1.3.0-build.2456+sha.e381c4d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2456+sha.e381c4d">v1.3.0-build.2456+sha.e381c4d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2455+sha.68e84ac/angular-resource.js"
                 data-name="v1.3.0-build.2455+sha.68e84ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2455+sha.68e84ac">v1.3.0-build.2455+sha.68e84ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2454+sha.e118a8b/angular-resource.js"
                 data-name="v1.3.0-build.2454+sha.e118a8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2454+sha.e118a8b">v1.3.0-build.2454+sha.e118a8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2453+sha.e118a8b/angular-resource.js"
                 data-name="v1.3.0-build.2453+sha.e118a8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2453+sha.e118a8b">v1.3.0-build.2453+sha.e118a8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2452+sha.9202767/angular-resource.js"
                 data-name="v1.3.0-build.2452+sha.9202767"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2452+sha.9202767">v1.3.0-build.2452+sha.9202767</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2451+sha.c995b09/angular-resource.js"
                 data-name="v1.3.0-build.2451+sha.c995b09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2451+sha.c995b09">v1.3.0-build.2451+sha.c995b09</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2450+sha.8a96f31/angular-resource.js"
                 data-name="v1.3.0-build.2450+sha.8a96f31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2450+sha.8a96f31">v1.3.0-build.2450+sha.8a96f31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2449+sha.d3aa14b/angular-resource.js"
                 data-name="v1.3.0-build.2449+sha.d3aa14b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2449+sha.d3aa14b">v1.3.0-build.2449+sha.d3aa14b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2448+sha.cd49876/angular-resource.js"
                 data-name="v1.3.0-build.2448+sha.cd49876"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2448+sha.cd49876">v1.3.0-build.2448+sha.cd49876</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2447+sha.55a0bc4/angular-resource.js"
                 data-name="v1.3.0-build.2447+sha.55a0bc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2447+sha.55a0bc4">v1.3.0-build.2447+sha.55a0bc4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2446+sha.2daaf3e/angular-resource.js"
                 data-name="v1.3.0-build.2446+sha.2daaf3e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2446+sha.2daaf3e">v1.3.0-build.2446+sha.2daaf3e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2445+sha.e1484cd/angular-resource.js"
                 data-name="v1.3.0-build.2445+sha.e1484cd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2445+sha.e1484cd">v1.3.0-build.2445+sha.e1484cd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2444+sha.d0781eb/angular-resource.js"
                 data-name="v1.3.0-build.2444+sha.d0781eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2444+sha.d0781eb">v1.3.0-build.2444+sha.d0781eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2443+sha.d09056d/angular-resource.js"
                 data-name="v1.3.0-build.2443+sha.d09056d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2443+sha.d09056d">v1.3.0-build.2443+sha.d09056d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2442+sha.849e447/angular-resource.js"
                 data-name="v1.3.0-build.2442+sha.849e447"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2442+sha.849e447">v1.3.0-build.2442+sha.849e447</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2441+sha.f55278f/angular-resource.js"
                 data-name="v1.3.0-build.2441+sha.f55278f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2441+sha.f55278f">v1.3.0-build.2441+sha.f55278f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2440+sha.df56241/angular-resource.js"
                 data-name="v1.3.0-build.2440+sha.df56241"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2440+sha.df56241">v1.3.0-build.2440+sha.df56241</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2439+sha.91e6d1d/angular-resource.js"
                 data-name="v1.3.0-build.2439+sha.91e6d1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2439+sha.91e6d1d">v1.3.0-build.2439+sha.91e6d1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2438+sha.b8cc71d/angular-resource.js"
                 data-name="v1.3.0-build.2438+sha.b8cc71d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2438+sha.b8cc71d">v1.3.0-build.2438+sha.b8cc71d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2437+sha.511422a/angular-resource.js"
                 data-name="v1.3.0-build.2437+sha.511422a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2437+sha.511422a">v1.3.0-build.2437+sha.511422a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2436+sha.a15d9cb/angular-resource.js"
                 data-name="v1.3.0-build.2436+sha.a15d9cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2436+sha.a15d9cb">v1.3.0-build.2436+sha.a15d9cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2435+sha.9bfbb16/angular-resource.js"
                 data-name="v1.3.0-build.2435+sha.9bfbb16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2435+sha.9bfbb16">v1.3.0-build.2435+sha.9bfbb16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2434+sha.2b741dc/angular-resource.js"
                 data-name="v1.3.0-build.2434+sha.2b741dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2434+sha.2b741dc">v1.3.0-build.2434+sha.2b741dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2433+sha.e888dde/angular-resource.js"
                 data-name="v1.3.0-build.2433+sha.e888dde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2433+sha.e888dde">v1.3.0-build.2433+sha.e888dde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2432+sha.d5294eb/angular-resource.js"
                 data-name="v1.3.0-build.2432+sha.d5294eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2432+sha.d5294eb">v1.3.0-build.2432+sha.d5294eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2431+sha.44b940e/angular-resource.js"
                 data-name="v1.3.0-build.2431+sha.44b940e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2431+sha.44b940e">v1.3.0-build.2431+sha.44b940e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2430+sha.56e73ea/angular-resource.js"
                 data-name="v1.3.0-build.2430+sha.56e73ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2430+sha.56e73ea">v1.3.0-build.2430+sha.56e73ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2429+sha.bfb6af7/angular-resource.js"
                 data-name="v1.3.0-build.2429+sha.bfb6af7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2429+sha.bfb6af7">v1.3.0-build.2429+sha.bfb6af7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2428+sha.d7be958/angular-resource.js"
                 data-name="v1.3.0-build.2428+sha.d7be958"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2428+sha.d7be958">v1.3.0-build.2428+sha.d7be958</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2427+sha.53e4da8/angular-resource.js"
                 data-name="v1.3.0-build.2427+sha.53e4da8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2427+sha.53e4da8">v1.3.0-build.2427+sha.53e4da8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2426+sha.7b5e019/angular-resource.js"
                 data-name="v1.3.0-build.2426+sha.7b5e019"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2426+sha.7b5e019">v1.3.0-build.2426+sha.7b5e019</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2425+sha.3cc02e7/angular-resource.js"
                 data-name="v1.3.0-build.2425+sha.3cc02e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2425+sha.3cc02e7">v1.3.0-build.2425+sha.3cc02e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2424+sha.79592ce/angular-resource.js"
                 data-name="v1.3.0-build.2424+sha.79592ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2424+sha.79592ce">v1.3.0-build.2424+sha.79592ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2423+sha.a9a38d8/angular-resource.js"
                 data-name="v1.3.0-build.2423+sha.a9a38d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2423+sha.a9a38d8">v1.3.0-build.2423+sha.a9a38d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2422+sha.cea44b3/angular-resource.js"
                 data-name="v1.3.0-build.2422+sha.cea44b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2422+sha.cea44b3">v1.3.0-build.2422+sha.cea44b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2421+sha.e8c6b9b/angular-resource.js"
                 data-name="v1.3.0-build.2421+sha.e8c6b9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2421+sha.e8c6b9b">v1.3.0-build.2421+sha.e8c6b9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2420+sha.5412372/angular-resource.js"
                 data-name="v1.3.0-build.2420+sha.5412372"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2420+sha.5412372">v1.3.0-build.2420+sha.5412372</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2419+sha.fe0e434/angular-resource.js"
                 data-name="v1.3.0-build.2419+sha.fe0e434"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2419+sha.fe0e434">v1.3.0-build.2419+sha.fe0e434</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2418+sha.edad4e6/angular-resource.js"
                 data-name="v1.3.0-build.2418+sha.edad4e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2418+sha.edad4e6">v1.3.0-build.2418+sha.edad4e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2417+sha.f684cb0/angular-resource.js"
                 data-name="v1.3.0-build.2417+sha.f684cb0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2417+sha.f684cb0">v1.3.0-build.2417+sha.f684cb0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2416+sha.d7717d9/angular-resource.js"
                 data-name="v1.3.0-build.2416+sha.d7717d9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2416+sha.d7717d9">v1.3.0-build.2416+sha.d7717d9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2415+sha.247ec19/angular-resource.js"
                 data-name="v1.3.0-build.2415+sha.247ec19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2415+sha.247ec19">v1.3.0-build.2415+sha.247ec19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2414+sha.78165c2/angular-resource.js"
                 data-name="v1.3.0-build.2414+sha.78165c2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2414+sha.78165c2">v1.3.0-build.2414+sha.78165c2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.2413+sha.d1214af/angular-resource.js"
                 data-name="v1.3.0-build.2413+sha.d1214af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2413+sha.d1214af">v1.3.0-build.2413+sha.d1214af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-build.51+sha.e888dde/angular-resource.js"
                 data-name="v1.3.0-build.51+sha.e888dde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.51+sha.e888dde">v1.3.0-build.51+sha.e888dde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.3/angular-resource.js"
                 data-name="v1.3.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.3">v1.3.0-beta.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2412+sha.d6419d0/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2412+sha.d6419d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2412+sha.d6419d0">v1.3.0-beta.2-build.2412+sha.d6419d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2411+sha.0f13f24/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2411+sha.0f13f24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2411+sha.0f13f24">v1.3.0-beta.2-build.2411+sha.0f13f24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2410+sha.0d8de2d/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2410+sha.0d8de2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2410+sha.0d8de2d">v1.3.0-beta.2-build.2410+sha.0d8de2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2409+sha.7833ce0/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2409+sha.7833ce0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2409+sha.7833ce0">v1.3.0-beta.2-build.2409+sha.7833ce0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2408+sha.47ab8df/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2408+sha.47ab8df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2408+sha.47ab8df">v1.3.0-beta.2-build.2408+sha.47ab8df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2407+sha.b700282/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2407+sha.b700282"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2407+sha.b700282">v1.3.0-beta.2-build.2407+sha.b700282</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2406+sha.1b9395e/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2406+sha.1b9395e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2406+sha.1b9395e">v1.3.0-beta.2-build.2406+sha.1b9395e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2405+sha.1b9395e/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2405+sha.1b9395e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2405+sha.1b9395e">v1.3.0-beta.2-build.2405+sha.1b9395e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2404+sha.44d160e/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2404+sha.44d160e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2404+sha.44d160e">v1.3.0-beta.2-build.2404+sha.44d160e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2403+sha.4f90c9b/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2403+sha.4f90c9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2403+sha.4f90c9b">v1.3.0-beta.2-build.2403+sha.4f90c9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2402+sha.11aceac/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2402+sha.11aceac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2402+sha.11aceac">v1.3.0-beta.2-build.2402+sha.11aceac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2-build.2401+sha.f08bf6f/angular-resource.js"
                 data-name="v1.3.0-beta.2-build.2401+sha.f08bf6f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2401+sha.f08bf6f">v1.3.0-beta.2-build.2401+sha.f08bf6f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.2/angular-resource.js"
                 data-name="v1.3.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2">v1.3.0-beta.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.3.0-beta.1/angular-resource.js"
                 data-name="v1.3.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.1">v1.3.0-beta.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2399+sha.ca4ddfa/angular-resource.js"
                 data-name="v1.2.15-build.2399+sha.ca4ddfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2399+sha.ca4ddfa">v1.2.15-build.2399+sha.ca4ddfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2398+sha.4bab3d8/angular-resource.js"
                 data-name="v1.2.15-build.2398+sha.4bab3d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2398+sha.4bab3d8">v1.2.15-build.2398+sha.4bab3d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2397+sha.9c353b4/angular-resource.js"
                 data-name="v1.2.15-build.2397+sha.9c353b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2397+sha.9c353b4">v1.2.15-build.2397+sha.9c353b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2396+sha.21243d6/angular-resource.js"
                 data-name="v1.2.15-build.2396+sha.21243d6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2396+sha.21243d6">v1.2.15-build.2396+sha.21243d6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2395+sha.ad309b1/angular-resource.js"
                 data-name="v1.2.15-build.2395+sha.ad309b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2395+sha.ad309b1">v1.2.15-build.2395+sha.ad309b1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2394+sha.7a75356/angular-resource.js"
                 data-name="v1.2.15-build.2394+sha.7a75356"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2394+sha.7a75356">v1.2.15-build.2394+sha.7a75356</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2393+sha.dc57fe9/angular-resource.js"
                 data-name="v1.2.15-build.2393+sha.dc57fe9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2393+sha.dc57fe9">v1.2.15-build.2393+sha.dc57fe9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2392+sha.dc57fe9/angular-resource.js"
                 data-name="v1.2.15-build.2392+sha.dc57fe9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2392+sha.dc57fe9">v1.2.15-build.2392+sha.dc57fe9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2391+sha.53ec5e1/angular-resource.js"
                 data-name="v1.2.15-build.2391+sha.53ec5e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2391+sha.53ec5e1">v1.2.15-build.2391+sha.53ec5e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2390+sha.235731d/angular-resource.js"
                 data-name="v1.2.15-build.2390+sha.235731d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2390+sha.235731d">v1.2.15-build.2390+sha.235731d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2389+sha.c5f2f58/angular-resource.js"
                 data-name="v1.2.15-build.2389+sha.c5f2f58"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2389+sha.c5f2f58">v1.2.15-build.2389+sha.c5f2f58</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2388+sha.186a68f/angular-resource.js"
                 data-name="v1.2.15-build.2388+sha.186a68f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2388+sha.186a68f">v1.2.15-build.2388+sha.186a68f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2387+sha.46bd6dc/angular-resource.js"
                 data-name="v1.2.15-build.2387+sha.46bd6dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2387+sha.46bd6dc">v1.2.15-build.2387+sha.46bd6dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2386+sha.80451f5/angular-resource.js"
                 data-name="v1.2.15-build.2386+sha.80451f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2386+sha.80451f5">v1.2.15-build.2386+sha.80451f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2385+sha.0609453/angular-resource.js"
                 data-name="v1.2.15-build.2385+sha.0609453"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2385+sha.0609453">v1.2.15-build.2385+sha.0609453</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2384+sha.7682e57/angular-resource.js"
                 data-name="v1.2.15-build.2384+sha.7682e57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2384+sha.7682e57">v1.2.15-build.2384+sha.7682e57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2378+sha.9335378/angular-resource.js"
                 data-name="v1.2.15-build.2378+sha.9335378"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2378+sha.9335378">v1.2.15-build.2378+sha.9335378</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2377+sha.de2ecb8/angular-resource.js"
                 data-name="v1.2.15-build.2377+sha.de2ecb8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2377+sha.de2ecb8">v1.2.15-build.2377+sha.de2ecb8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2376+sha.66fdc03/angular-resource.js"
                 data-name="v1.2.15-build.2376+sha.66fdc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2376+sha.66fdc03">v1.2.15-build.2376+sha.66fdc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2375+sha.66fdc03/angular-resource.js"
                 data-name="v1.2.15-build.2375+sha.66fdc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2375+sha.66fdc03">v1.2.15-build.2375+sha.66fdc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2374+sha.8e2e9ad/angular-resource.js"
                 data-name="v1.2.15-build.2374+sha.8e2e9ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2374+sha.8e2e9ad">v1.2.15-build.2374+sha.8e2e9ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2373+sha.7d60497/angular-resource.js"
                 data-name="v1.2.15-build.2373+sha.7d60497"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2373+sha.7d60497">v1.2.15-build.2373+sha.7d60497</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2372+sha.02075dc/angular-resource.js"
                 data-name="v1.2.15-build.2372+sha.02075dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2372+sha.02075dc">v1.2.15-build.2372+sha.02075dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2371+sha.7c73bc9/angular-resource.js"
                 data-name="v1.2.15-build.2371+sha.7c73bc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2371+sha.7c73bc9">v1.2.15-build.2371+sha.7c73bc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2370+sha.2036fb1/angular-resource.js"
                 data-name="v1.2.15-build.2370+sha.2036fb1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2370+sha.2036fb1">v1.2.15-build.2370+sha.2036fb1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2369+sha.d07101d/angular-resource.js"
                 data-name="v1.2.15-build.2369+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2369+sha.d07101d">v1.2.15-build.2369+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2368+sha.d07101d/angular-resource.js"
                 data-name="v1.2.15-build.2368+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2368+sha.d07101d">v1.2.15-build.2368+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2365+sha.d07101d/angular-resource.js"
                 data-name="v1.2.15-build.2365+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2365+sha.d07101d">v1.2.15-build.2365+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2364+sha.7c34e1f/angular-resource.js"
                 data-name="v1.2.15-build.2364+sha.7c34e1f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2364+sha.7c34e1f">v1.2.15-build.2364+sha.7c34e1f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2363+sha.bf82c8a/angular-resource.js"
                 data-name="v1.2.15-build.2363+sha.bf82c8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2363+sha.bf82c8a">v1.2.15-build.2363+sha.bf82c8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2362+sha.d5f2084/angular-resource.js"
                 data-name="v1.2.15-build.2362+sha.d5f2084"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2362+sha.d5f2084">v1.2.15-build.2362+sha.d5f2084</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2361+sha.9bffccd/angular-resource.js"
                 data-name="v1.2.15-build.2361+sha.9bffccd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2361+sha.9bffccd">v1.2.15-build.2361+sha.9bffccd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2360+sha.6b18a56/angular-resource.js"
                 data-name="v1.2.15-build.2360+sha.6b18a56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2360+sha.6b18a56">v1.2.15-build.2360+sha.6b18a56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2359+sha.27b7fa3/angular-resource.js"
                 data-name="v1.2.15-build.2359+sha.27b7fa3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2359+sha.27b7fa3">v1.2.15-build.2359+sha.27b7fa3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2358+sha.d7ecab7/angular-resource.js"
                 data-name="v1.2.15-build.2358+sha.d7ecab7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2358+sha.d7ecab7">v1.2.15-build.2358+sha.d7ecab7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.2357+sha.2616907/angular-resource.js"
                 data-name="v1.2.15-build.2357+sha.2616907"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2357+sha.2616907">v1.2.15-build.2357+sha.2616907</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.26+sha.a9b5a10/angular-resource.js"
                 data-name="v1.2.15-build.26+sha.a9b5a10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.26+sha.a9b5a10">v1.2.15-build.26+sha.a9b5a10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.25+sha.ad128e0/angular-resource.js"
                 data-name="v1.2.15-build.25+sha.ad128e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.25+sha.ad128e0">v1.2.15-build.25+sha.ad128e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.24+sha.dc5ada4/angular-resource.js"
                 data-name="v1.2.15-build.24+sha.dc5ada4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.24+sha.dc5ada4">v1.2.15-build.24+sha.dc5ada4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.23+sha.86ab885/angular-resource.js"
                 data-name="v1.2.15-build.23+sha.86ab885"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.23+sha.86ab885">v1.2.15-build.23+sha.86ab885</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.22+sha.320f6d1/angular-resource.js"
                 data-name="v1.2.15-build.22+sha.320f6d1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.22+sha.320f6d1">v1.2.15-build.22+sha.320f6d1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.21+sha.83f37d7/angular-resource.js"
                 data-name="v1.2.15-build.21+sha.83f37d7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.21+sha.83f37d7">v1.2.15-build.21+sha.83f37d7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15-build.20+sha.d4ac254/angular-resource.js"
                 data-name="v1.2.15-build.20+sha.d4ac254"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.20+sha.d4ac254">v1.2.15-build.20+sha.d4ac254</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.15/angular-resource.js"
                 data-name="v1.2.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15">v1.2.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2348+sha.0d034a9/angular-resource.js"
                 data-name="v1.2.14-build.2348+sha.0d034a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2348+sha.0d034a9">v1.2.14-build.2348+sha.0d034a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2347+sha.0c8a88b/angular-resource.js"
                 data-name="v1.2.14-build.2347+sha.0c8a88b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2347+sha.0c8a88b">v1.2.14-build.2347+sha.0c8a88b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2346+sha.6b5baad/angular-resource.js"
                 data-name="v1.2.14-build.2346+sha.6b5baad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2346+sha.6b5baad">v1.2.14-build.2346+sha.6b5baad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2345+sha.9aab5bf/angular-resource.js"
                 data-name="v1.2.14-build.2345+sha.9aab5bf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2345+sha.9aab5bf">v1.2.14-build.2345+sha.9aab5bf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2344+sha.18c41af/angular-resource.js"
                 data-name="v1.2.14-build.2344+sha.18c41af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2344+sha.18c41af">v1.2.14-build.2344+sha.18c41af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2343+sha.3344396/angular-resource.js"
                 data-name="v1.2.14-build.2343+sha.3344396"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2343+sha.3344396">v1.2.14-build.2343+sha.3344396</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2342+sha.8794a17/angular-resource.js"
                 data-name="v1.2.14-build.2342+sha.8794a17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2342+sha.8794a17">v1.2.14-build.2342+sha.8794a17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2341+sha.41e648a/angular-resource.js"
                 data-name="v1.2.14-build.2341+sha.41e648a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2341+sha.41e648a">v1.2.14-build.2341+sha.41e648a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2340+sha.5d9d6a5/angular-resource.js"
                 data-name="v1.2.14-build.2340+sha.5d9d6a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2340+sha.5d9d6a5">v1.2.14-build.2340+sha.5d9d6a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2339+sha.4e73c80/angular-resource.js"
                 data-name="v1.2.14-build.2339+sha.4e73c80"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2339+sha.4e73c80">v1.2.14-build.2339+sha.4e73c80</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2338+sha.27873ac/angular-resource.js"
                 data-name="v1.2.14-build.2338+sha.27873ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2338+sha.27873ac">v1.2.14-build.2338+sha.27873ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2337+sha.214c65d/angular-resource.js"
                 data-name="v1.2.14-build.2337+sha.214c65d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2337+sha.214c65d">v1.2.14-build.2337+sha.214c65d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2336+sha.b3750e5/angular-resource.js"
                 data-name="v1.2.14-build.2336+sha.b3750e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2336+sha.b3750e5">v1.2.14-build.2336+sha.b3750e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2335+sha.4aac37e/angular-resource.js"
                 data-name="v1.2.14-build.2335+sha.4aac37e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2335+sha.4aac37e">v1.2.14-build.2335+sha.4aac37e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2334+sha.fd09586/angular-resource.js"
                 data-name="v1.2.14-build.2334+sha.fd09586"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2334+sha.fd09586">v1.2.14-build.2334+sha.fd09586</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2333+sha.713f975/angular-resource.js"
                 data-name="v1.2.14-build.2333+sha.713f975"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2333+sha.713f975">v1.2.14-build.2333+sha.713f975</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2332+sha.794e5e6/angular-resource.js"
                 data-name="v1.2.14-build.2332+sha.794e5e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2332+sha.794e5e6">v1.2.14-build.2332+sha.794e5e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2331+sha.f4f1f43/angular-resource.js"
                 data-name="v1.2.14-build.2331+sha.f4f1f43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2331+sha.f4f1f43">v1.2.14-build.2331+sha.f4f1f43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2330+sha.e71e7b6/angular-resource.js"
                 data-name="v1.2.14-build.2330+sha.e71e7b6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2330+sha.e71e7b6">v1.2.14-build.2330+sha.e71e7b6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2329+sha.c914cd9/angular-resource.js"
                 data-name="v1.2.14-build.2329+sha.c914cd9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2329+sha.c914cd9">v1.2.14-build.2329+sha.c914cd9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2328+sha.e988199/angular-resource.js"
                 data-name="v1.2.14-build.2328+sha.e988199"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2328+sha.e988199">v1.2.14-build.2328+sha.e988199</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2327+sha.c9245cf/angular-resource.js"
                 data-name="v1.2.14-build.2327+sha.c9245cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2327+sha.c9245cf">v1.2.14-build.2327+sha.c9245cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2326+sha.332e935/angular-resource.js"
                 data-name="v1.2.14-build.2326+sha.332e935"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2326+sha.332e935">v1.2.14-build.2326+sha.332e935</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2325+sha.3d6dff4/angular-resource.js"
                 data-name="v1.2.14-build.2325+sha.3d6dff4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2325+sha.3d6dff4">v1.2.14-build.2325+sha.3d6dff4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2324+sha.6b049c7/angular-resource.js"
                 data-name="v1.2.14-build.2324+sha.6b049c7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2324+sha.6b049c7">v1.2.14-build.2324+sha.6b049c7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2323+sha.c99dd22/angular-resource.js"
                 data-name="v1.2.14-build.2323+sha.c99dd22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2323+sha.c99dd22">v1.2.14-build.2323+sha.c99dd22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2322+sha.1b1413a/angular-resource.js"
                 data-name="v1.2.14-build.2322+sha.1b1413a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2322+sha.1b1413a">v1.2.14-build.2322+sha.1b1413a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2320+sha.1b1413a/angular-resource.js"
                 data-name="v1.2.14-build.2320+sha.1b1413a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2320+sha.1b1413a">v1.2.14-build.2320+sha.1b1413a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2319+sha.4c4537e/angular-resource.js"
                 data-name="v1.2.14-build.2319+sha.4c4537e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2319+sha.4c4537e">v1.2.14-build.2319+sha.4c4537e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2318+sha.2cd87db/angular-resource.js"
                 data-name="v1.2.14-build.2318+sha.2cd87db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2318+sha.2cd87db">v1.2.14-build.2318+sha.2cd87db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2317+sha.348a771/angular-resource.js"
                 data-name="v1.2.14-build.2317+sha.348a771"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2317+sha.348a771">v1.2.14-build.2317+sha.348a771</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2316+sha.24fe163/angular-resource.js"
                 data-name="v1.2.14-build.2316+sha.24fe163"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2316+sha.24fe163">v1.2.14-build.2316+sha.24fe163</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2315+sha.832be41/angular-resource.js"
                 data-name="v1.2.14-build.2315+sha.832be41"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2315+sha.832be41">v1.2.14-build.2315+sha.832be41</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2314+sha.ffe5115/angular-resource.js"
                 data-name="v1.2.14-build.2314+sha.ffe5115"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2314+sha.ffe5115">v1.2.14-build.2314+sha.ffe5115</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2313+sha.61b2515/angular-resource.js"
                 data-name="v1.2.14-build.2313+sha.61b2515"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2313+sha.61b2515">v1.2.14-build.2313+sha.61b2515</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2312+sha.f296e2e/angular-resource.js"
                 data-name="v1.2.14-build.2312+sha.f296e2e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2312+sha.f296e2e">v1.2.14-build.2312+sha.f296e2e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2311+sha.f4a121f/angular-resource.js"
                 data-name="v1.2.14-build.2311+sha.f4a121f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2311+sha.f4a121f">v1.2.14-build.2311+sha.f4a121f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2307+sha.1293cc8/angular-resource.js"
                 data-name="v1.2.14-build.2307+sha.1293cc8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2307+sha.1293cc8">v1.2.14-build.2307+sha.1293cc8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2306+sha.c2d447e/angular-resource.js"
                 data-name="v1.2.14-build.2306+sha.c2d447e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2306+sha.c2d447e">v1.2.14-build.2306+sha.c2d447e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2305+sha.c8e03e3/angular-resource.js"
                 data-name="v1.2.14-build.2305+sha.c8e03e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2305+sha.c8e03e3">v1.2.14-build.2305+sha.c8e03e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2304+sha.2f45133/angular-resource.js"
                 data-name="v1.2.14-build.2304+sha.2f45133"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2304+sha.2f45133">v1.2.14-build.2304+sha.2f45133</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2303+sha.0c9abc3/angular-resource.js"
                 data-name="v1.2.14-build.2303+sha.0c9abc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2303+sha.0c9abc3">v1.2.14-build.2303+sha.0c9abc3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2302+sha.f827d64/angular-resource.js"
                 data-name="v1.2.14-build.2302+sha.f827d64"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2302+sha.f827d64">v1.2.14-build.2302+sha.f827d64</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2301+sha.4d7e1ce/angular-resource.js"
                 data-name="v1.2.14-build.2301+sha.4d7e1ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2301+sha.4d7e1ce">v1.2.14-build.2301+sha.4d7e1ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2300+sha.58b01fa/angular-resource.js"
                 data-name="v1.2.14-build.2300+sha.58b01fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2300+sha.58b01fa">v1.2.14-build.2300+sha.58b01fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2299+sha.84ad0a0/angular-resource.js"
                 data-name="v1.2.14-build.2299+sha.84ad0a0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2299+sha.84ad0a0">v1.2.14-build.2299+sha.84ad0a0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2298+sha.2a37690/angular-resource.js"
                 data-name="v1.2.14-build.2298+sha.2a37690"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2298+sha.2a37690">v1.2.14-build.2298+sha.2a37690</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2297+sha.45304a9/angular-resource.js"
                 data-name="v1.2.14-build.2297+sha.45304a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2297+sha.45304a9">v1.2.14-build.2297+sha.45304a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2296+sha.0478bb4/angular-resource.js"
                 data-name="v1.2.14-build.2296+sha.0478bb4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2296+sha.0478bb4">v1.2.14-build.2296+sha.0478bb4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2295+sha.3193a3a/angular-resource.js"
                 data-name="v1.2.14-build.2295+sha.3193a3a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2295+sha.3193a3a">v1.2.14-build.2295+sha.3193a3a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2294+sha.6082e2a/angular-resource.js"
                 data-name="v1.2.14-build.2294+sha.6082e2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2294+sha.6082e2a">v1.2.14-build.2294+sha.6082e2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2293+sha.39bae62/angular-resource.js"
                 data-name="v1.2.14-build.2293+sha.39bae62"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2293+sha.39bae62">v1.2.14-build.2293+sha.39bae62</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2292+sha.d7a73e4/angular-resource.js"
                 data-name="v1.2.14-build.2292+sha.d7a73e4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2292+sha.d7a73e4">v1.2.14-build.2292+sha.d7a73e4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2291+sha.e6c35e1/angular-resource.js"
                 data-name="v1.2.14-build.2291+sha.e6c35e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2291+sha.e6c35e1">v1.2.14-build.2291+sha.e6c35e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2290+sha.0b6ba9c/angular-resource.js"
                 data-name="v1.2.14-build.2290+sha.0b6ba9c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2290+sha.0b6ba9c">v1.2.14-build.2290+sha.0b6ba9c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2289+sha.cc1f753/angular-resource.js"
                 data-name="v1.2.14-build.2289+sha.cc1f753"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2289+sha.cc1f753">v1.2.14-build.2289+sha.cc1f753</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2288+sha.9ca685b/angular-resource.js"
                 data-name="v1.2.14-build.2288+sha.9ca685b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2288+sha.9ca685b">v1.2.14-build.2288+sha.9ca685b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2287+sha.1b74e5e/angular-resource.js"
                 data-name="v1.2.14-build.2287+sha.1b74e5e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2287+sha.1b74e5e">v1.2.14-build.2287+sha.1b74e5e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2286+sha.3fbc257/angular-resource.js"
                 data-name="v1.2.14-build.2286+sha.3fbc257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2286+sha.3fbc257">v1.2.14-build.2286+sha.3fbc257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2285+sha.b488bbf/angular-resource.js"
                 data-name="v1.2.14-build.2285+sha.b488bbf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2285+sha.b488bbf">v1.2.14-build.2285+sha.b488bbf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2284+sha.696928d/angular-resource.js"
                 data-name="v1.2.14-build.2284+sha.696928d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2284+sha.696928d">v1.2.14-build.2284+sha.696928d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2283+sha.cbcfaa2/angular-resource.js"
                 data-name="v1.2.14-build.2283+sha.cbcfaa2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2283+sha.cbcfaa2">v1.2.14-build.2283+sha.cbcfaa2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2282+sha.1523fc7/angular-resource.js"
                 data-name="v1.2.14-build.2282+sha.1523fc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2282+sha.1523fc7">v1.2.14-build.2282+sha.1523fc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2281+sha.a3f7017/angular-resource.js"
                 data-name="v1.2.14-build.2281+sha.a3f7017"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2281+sha.a3f7017">v1.2.14-build.2281+sha.a3f7017</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2280+sha.868a2c4/angular-resource.js"
                 data-name="v1.2.14-build.2280+sha.868a2c4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2280+sha.868a2c4">v1.2.14-build.2280+sha.868a2c4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2278+sha.21dac2a/angular-resource.js"
                 data-name="v1.2.14-build.2278+sha.21dac2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2278+sha.21dac2a">v1.2.14-build.2278+sha.21dac2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2277+sha.481508d/angular-resource.js"
                 data-name="v1.2.14-build.2277+sha.481508d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2277+sha.481508d">v1.2.14-build.2277+sha.481508d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2276+sha.12e4d3a/angular-resource.js"
                 data-name="v1.2.14-build.2276+sha.12e4d3a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2276+sha.12e4d3a">v1.2.14-build.2276+sha.12e4d3a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2275+sha.4f937bd/angular-resource.js"
                 data-name="v1.2.14-build.2275+sha.4f937bd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2275+sha.4f937bd">v1.2.14-build.2275+sha.4f937bd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2273+sha.666137d/angular-resource.js"
                 data-name="v1.2.14-build.2273+sha.666137d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2273+sha.666137d">v1.2.14-build.2273+sha.666137d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2272+sha.846ebb4/angular-resource.js"
                 data-name="v1.2.14-build.2272+sha.846ebb4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2272+sha.846ebb4">v1.2.14-build.2272+sha.846ebb4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2271+sha.e23a6a3/angular-resource.js"
                 data-name="v1.2.14-build.2271+sha.e23a6a3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2271+sha.e23a6a3">v1.2.14-build.2271+sha.e23a6a3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2270+sha.47ec6f5/angular-resource.js"
                 data-name="v1.2.14-build.2270+sha.47ec6f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2270+sha.47ec6f5">v1.2.14-build.2270+sha.47ec6f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2269+sha.47ec6f5/angular-resource.js"
                 data-name="v1.2.14-build.2269+sha.47ec6f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2269+sha.47ec6f5">v1.2.14-build.2269+sha.47ec6f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2268+sha.1fb47e0/angular-resource.js"
                 data-name="v1.2.14-build.2268+sha.1fb47e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2268+sha.1fb47e0">v1.2.14-build.2268+sha.1fb47e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2267+sha.cceb455/angular-resource.js"
                 data-name="v1.2.14-build.2267+sha.cceb455"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2267+sha.cceb455">v1.2.14-build.2267+sha.cceb455</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14-build.2266+sha.3018ff7/angular-resource.js"
                 data-name="v1.2.14-build.2266+sha.3018ff7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2266+sha.3018ff7">v1.2.14-build.2266+sha.3018ff7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.14/angular-resource.js"
                 data-name="v1.2.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14">v1.2.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2265+sha.c086f83/angular-resource.js"
                 data-name="v1.2.13-build.2265+sha.c086f83"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2265+sha.c086f83">v1.2.13-build.2265+sha.c086f83</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2263+sha.31c450b/angular-resource.js"
                 data-name="v1.2.13-build.2263+sha.31c450b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2263+sha.31c450b">v1.2.13-build.2263+sha.31c450b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2262+sha.a9fcb0d/angular-resource.js"
                 data-name="v1.2.13-build.2262+sha.a9fcb0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2262+sha.a9fcb0d">v1.2.13-build.2262+sha.a9fcb0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2261+sha.a3846ab/angular-resource.js"
                 data-name="v1.2.13-build.2261+sha.a3846ab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2261+sha.a3846ab">v1.2.13-build.2261+sha.a3846ab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2260+sha.2b73027/angular-resource.js"
                 data-name="v1.2.13-build.2260+sha.2b73027"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2260+sha.2b73027">v1.2.13-build.2260+sha.2b73027</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2259+sha.1079105/angular-resource.js"
                 data-name="v1.2.13-build.2259+sha.1079105"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2259+sha.1079105">v1.2.13-build.2259+sha.1079105</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2258+sha.d119e36/angular-resource.js"
                 data-name="v1.2.13-build.2258+sha.d119e36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2258+sha.d119e36">v1.2.13-build.2258+sha.d119e36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2257+sha.98b2f8e/angular-resource.js"
                 data-name="v1.2.13-build.2257+sha.98b2f8e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2257+sha.98b2f8e">v1.2.13-build.2257+sha.98b2f8e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2256+sha.e7ab857/angular-resource.js"
                 data-name="v1.2.13-build.2256+sha.e7ab857"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2256+sha.e7ab857">v1.2.13-build.2256+sha.e7ab857</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2255+sha.72894f0/angular-resource.js"
                 data-name="v1.2.13-build.2255+sha.72894f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2255+sha.72894f0">v1.2.13-build.2255+sha.72894f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2254+sha.760f49d/angular-resource.js"
                 data-name="v1.2.13-build.2254+sha.760f49d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2254+sha.760f49d">v1.2.13-build.2254+sha.760f49d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2253+sha.686b13b/angular-resource.js"
                 data-name="v1.2.13-build.2253+sha.686b13b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2253+sha.686b13b">v1.2.13-build.2253+sha.686b13b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2252+sha.56cc7bc/angular-resource.js"
                 data-name="v1.2.13-build.2252+sha.56cc7bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2252+sha.56cc7bc">v1.2.13-build.2252+sha.56cc7bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2251+sha.b4eed8a/angular-resource.js"
                 data-name="v1.2.13-build.2251+sha.b4eed8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2251+sha.b4eed8a">v1.2.13-build.2251+sha.b4eed8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2250+sha.08793a6/angular-resource.js"
                 data-name="v1.2.13-build.2250+sha.08793a6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2250+sha.08793a6">v1.2.13-build.2250+sha.08793a6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2249+sha.ef4bf8c/angular-resource.js"
                 data-name="v1.2.13-build.2249+sha.ef4bf8c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2249+sha.ef4bf8c">v1.2.13-build.2249+sha.ef4bf8c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2248+sha.b6ab826/angular-resource.js"
                 data-name="v1.2.13-build.2248+sha.b6ab826"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2248+sha.b6ab826">v1.2.13-build.2248+sha.b6ab826</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2247+sha.a686244/angular-resource.js"
                 data-name="v1.2.13-build.2247+sha.a686244"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2247+sha.a686244">v1.2.13-build.2247+sha.a686244</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2246+sha.945fc1a/angular-resource.js"
                 data-name="v1.2.13-build.2246+sha.945fc1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2246+sha.945fc1a">v1.2.13-build.2246+sha.945fc1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2245+sha.f99fe79/angular-resource.js"
                 data-name="v1.2.13-build.2245+sha.f99fe79"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2245+sha.f99fe79">v1.2.13-build.2245+sha.f99fe79</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2244+sha.2dfbc08/angular-resource.js"
                 data-name="v1.2.13-build.2244+sha.2dfbc08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2244+sha.2dfbc08">v1.2.13-build.2244+sha.2dfbc08</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2243+sha.27613fd/angular-resource.js"
                 data-name="v1.2.13-build.2243+sha.27613fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2243+sha.27613fd">v1.2.13-build.2243+sha.27613fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2242+sha.e645f7c/angular-resource.js"
                 data-name="v1.2.13-build.2242+sha.e645f7c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2242+sha.e645f7c">v1.2.13-build.2242+sha.e645f7c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2241+sha.600e621/angular-resource.js"
                 data-name="v1.2.13-build.2241+sha.600e621"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2241+sha.600e621">v1.2.13-build.2241+sha.600e621</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13-build.2240+sha.5218c7b/angular-resource.js"
                 data-name="v1.2.13-build.2240+sha.5218c7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2240+sha.5218c7b">v1.2.13-build.2240+sha.5218c7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.13/angular-resource.js"
                 data-name="v1.2.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13">v1.2.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2237+sha.d5c7ef0/angular-resource.js"
                 data-name="v1.2.12-build.2237+sha.d5c7ef0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2237+sha.d5c7ef0">v1.2.12-build.2237+sha.d5c7ef0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2236+sha.84fd3a1/angular-resource.js"
                 data-name="v1.2.12-build.2236+sha.84fd3a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2236+sha.84fd3a1">v1.2.12-build.2236+sha.84fd3a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2235+sha.fcf4393/angular-resource.js"
                 data-name="v1.2.12-build.2235+sha.fcf4393"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2235+sha.fcf4393">v1.2.12-build.2235+sha.fcf4393</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2233+sha.16301be/angular-resource.js"
                 data-name="v1.2.12-build.2233+sha.16301be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2233+sha.16301be">v1.2.12-build.2233+sha.16301be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2232+sha.95be253/angular-resource.js"
                 data-name="v1.2.12-build.2232+sha.95be253"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2232+sha.95be253">v1.2.12-build.2232+sha.95be253</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2230+sha.bf4b0db/angular-resource.js"
                 data-name="v1.2.12-build.2230+sha.bf4b0db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2230+sha.bf4b0db">v1.2.12-build.2230+sha.bf4b0db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2229+sha.95d119e/angular-resource.js"
                 data-name="v1.2.12-build.2229+sha.95d119e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2229+sha.95d119e">v1.2.12-build.2229+sha.95d119e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2226+sha.a8c1d9c/angular-resource.js"
                 data-name="v1.2.12-build.2226+sha.a8c1d9c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2226+sha.a8c1d9c">v1.2.12-build.2226+sha.a8c1d9c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2225+sha.8829a2a/angular-resource.js"
                 data-name="v1.2.12-build.2225+sha.8829a2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2225+sha.8829a2a">v1.2.12-build.2225+sha.8829a2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2223+sha.95522cc/angular-resource.js"
                 data-name="v1.2.12-build.2223+sha.95522cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2223+sha.95522cc">v1.2.12-build.2223+sha.95522cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2222+sha.c5f69e3/angular-resource.js"
                 data-name="v1.2.12-build.2222+sha.c5f69e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2222+sha.c5f69e3">v1.2.12-build.2222+sha.c5f69e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2219+sha.058842a/angular-resource.js"
                 data-name="v1.2.12-build.2219+sha.058842a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2219+sha.058842a">v1.2.12-build.2219+sha.058842a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2217+sha.5850e61/angular-resource.js"
                 data-name="v1.2.12-build.2217+sha.5850e61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2217+sha.5850e61">v1.2.12-build.2217+sha.5850e61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2216+sha.5850e61/angular-resource.js"
                 data-name="v1.2.12-build.2216+sha.5850e61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2216+sha.5850e61">v1.2.12-build.2216+sha.5850e61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2215+sha.0da6cc9/angular-resource.js"
                 data-name="v1.2.12-build.2215+sha.0da6cc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2215+sha.0da6cc9">v1.2.12-build.2215+sha.0da6cc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2214+sha.0da6cc9/angular-resource.js"
                 data-name="v1.2.12-build.2214+sha.0da6cc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2214+sha.0da6cc9">v1.2.12-build.2214+sha.0da6cc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2213+sha.cc60ba1/angular-resource.js"
                 data-name="v1.2.12-build.2213+sha.cc60ba1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2213+sha.cc60ba1">v1.2.12-build.2213+sha.cc60ba1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2212+sha.64d58a5/angular-resource.js"
                 data-name="v1.2.12-build.2212+sha.64d58a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2212+sha.64d58a5">v1.2.12-build.2212+sha.64d58a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2211+sha.3bf4390/angular-resource.js"
                 data-name="v1.2.12-build.2211+sha.3bf4390"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2211+sha.3bf4390">v1.2.12-build.2211+sha.3bf4390</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2210+sha.e7ac7aa/angular-resource.js"
                 data-name="v1.2.12-build.2210+sha.e7ac7aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2210+sha.e7ac7aa">v1.2.12-build.2210+sha.e7ac7aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2209+sha.37781ed/angular-resource.js"
                 data-name="v1.2.12-build.2209+sha.37781ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2209+sha.37781ed">v1.2.12-build.2209+sha.37781ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2208+sha.19ba651/angular-resource.js"
                 data-name="v1.2.12-build.2208+sha.19ba651"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2208+sha.19ba651">v1.2.12-build.2208+sha.19ba651</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2207+sha.bc5ceee/angular-resource.js"
                 data-name="v1.2.12-build.2207+sha.bc5ceee"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2207+sha.bc5ceee">v1.2.12-build.2207+sha.bc5ceee</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12-build.2206+sha.106af49/angular-resource.js"
                 data-name="v1.2.12-build.2206+sha.106af49"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2206+sha.106af49">v1.2.12-build.2206+sha.106af49</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.12/angular-resource.js"
                 data-name="v1.2.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12">v1.2.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2205+sha.ce1f1f9/angular-resource.js"
                 data-name="v1.2.11-build.2205+sha.ce1f1f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2205+sha.ce1f1f9">v1.2.11-build.2205+sha.ce1f1f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2204+sha.8205158/angular-resource.js"
                 data-name="v1.2.11-build.2204+sha.8205158"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2204+sha.8205158">v1.2.11-build.2204+sha.8205158</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2203+sha.8205158/angular-resource.js"
                 data-name="v1.2.11-build.2203+sha.8205158"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2203+sha.8205158">v1.2.11-build.2203+sha.8205158</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2202+sha.6609e3d/angular-resource.js"
                 data-name="v1.2.11-build.2202+sha.6609e3d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2202+sha.6609e3d">v1.2.11-build.2202+sha.6609e3d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2200+sha.fd61e22/angular-resource.js"
                 data-name="v1.2.11-build.2200+sha.fd61e22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2200+sha.fd61e22">v1.2.11-build.2200+sha.fd61e22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2199+sha.074b067/angular-resource.js"
                 data-name="v1.2.11-build.2199+sha.074b067"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2199+sha.074b067">v1.2.11-build.2199+sha.074b067</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2198+sha.5ed721b/angular-resource.js"
                 data-name="v1.2.11-build.2198+sha.5ed721b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2198+sha.5ed721b">v1.2.11-build.2198+sha.5ed721b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2197+sha.c22ab5d/angular-resource.js"
                 data-name="v1.2.11-build.2197+sha.c22ab5d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2197+sha.c22ab5d">v1.2.11-build.2197+sha.c22ab5d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2196+sha.339a165/angular-resource.js"
                 data-name="v1.2.11-build.2196+sha.339a165"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2196+sha.339a165">v1.2.11-build.2196+sha.339a165</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2195+sha.29432ff/angular-resource.js"
                 data-name="v1.2.11-build.2195+sha.29432ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2195+sha.29432ff">v1.2.11-build.2195+sha.29432ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2194+sha.caed2df/angular-resource.js"
                 data-name="v1.2.11-build.2194+sha.caed2df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2194+sha.caed2df">v1.2.11-build.2194+sha.caed2df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2193+sha.7f4edaf/angular-resource.js"
                 data-name="v1.2.11-build.2193+sha.7f4edaf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2193+sha.7f4edaf">v1.2.11-build.2193+sha.7f4edaf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2192+sha.e2173f9/angular-resource.js"
                 data-name="v1.2.11-build.2192+sha.e2173f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2192+sha.e2173f9">v1.2.11-build.2192+sha.e2173f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2191+sha.7a78aed/angular-resource.js"
                 data-name="v1.2.11-build.2191+sha.7a78aed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2191+sha.7a78aed">v1.2.11-build.2191+sha.7a78aed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2190+sha.7aef2d5/angular-resource.js"
                 data-name="v1.2.11-build.2190+sha.7aef2d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2190+sha.7aef2d5">v1.2.11-build.2190+sha.7aef2d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2189+sha.95f0bf9/angular-resource.js"
                 data-name="v1.2.11-build.2189+sha.95f0bf9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2189+sha.95f0bf9">v1.2.11-build.2189+sha.95f0bf9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2188+sha.8a0be35/angular-resource.js"
                 data-name="v1.2.11-build.2188+sha.8a0be35"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2188+sha.8a0be35">v1.2.11-build.2188+sha.8a0be35</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2187+sha.f54f0f9/angular-resource.js"
                 data-name="v1.2.11-build.2187+sha.f54f0f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2187+sha.f54f0f9">v1.2.11-build.2187+sha.f54f0f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2186+sha.766b3d5/angular-resource.js"
                 data-name="v1.2.11-build.2186+sha.766b3d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2186+sha.766b3d5">v1.2.11-build.2186+sha.766b3d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2185+sha.4f735b0/angular-resource.js"
                 data-name="v1.2.11-build.2185+sha.4f735b0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2185+sha.4f735b0">v1.2.11-build.2185+sha.4f735b0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2184+sha.319dd1a/angular-resource.js"
                 data-name="v1.2.11-build.2184+sha.319dd1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2184+sha.319dd1a">v1.2.11-build.2184+sha.319dd1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11-build.2182+sha.88a14b4/angular-resource.js"
                 data-name="v1.2.11-build.2182+sha.88a14b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2182+sha.88a14b4">v1.2.11-build.2182+sha.88a14b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.11/angular-resource.js"
                 data-name="v1.2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11">v1.2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2181+sha.4f827f5/angular-resource.js"
                 data-name="v1.2.10-build.2181+sha.4f827f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2181+sha.4f827f5">v1.2.10-build.2181+sha.4f827f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2180+sha.131410b/angular-resource.js"
                 data-name="v1.2.10-build.2180+sha.131410b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2180+sha.131410b">v1.2.10-build.2180+sha.131410b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2179+sha.ca6b7d0/angular-resource.js"
                 data-name="v1.2.10-build.2179+sha.ca6b7d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2179+sha.ca6b7d0">v1.2.10-build.2179+sha.ca6b7d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2178+sha.40dc806/angular-resource.js"
                 data-name="v1.2.10-build.2178+sha.40dc806"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2178+sha.40dc806">v1.2.10-build.2178+sha.40dc806</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2177+sha.5e9835b/angular-resource.js"
                 data-name="v1.2.10-build.2177+sha.5e9835b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2177+sha.5e9835b">v1.2.10-build.2177+sha.5e9835b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2176+sha.e020916/angular-resource.js"
                 data-name="v1.2.10-build.2176+sha.e020916"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2176+sha.e020916">v1.2.10-build.2176+sha.e020916</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2175+sha.c3b5e16/angular-resource.js"
                 data-name="v1.2.10-build.2175+sha.c3b5e16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2175+sha.c3b5e16">v1.2.10-build.2175+sha.c3b5e16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2174+sha.486bdf2/angular-resource.js"
                 data-name="v1.2.10-build.2174+sha.486bdf2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2174+sha.486bdf2">v1.2.10-build.2174+sha.486bdf2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2173+sha.82213ef/angular-resource.js"
                 data-name="v1.2.10-build.2173+sha.82213ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2173+sha.82213ef">v1.2.10-build.2173+sha.82213ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2172+sha.ec59be6/angular-resource.js"
                 data-name="v1.2.10-build.2172+sha.ec59be6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2172+sha.ec59be6">v1.2.10-build.2172+sha.ec59be6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2171+sha.79e519f/angular-resource.js"
                 data-name="v1.2.10-build.2171+sha.79e519f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2171+sha.79e519f">v1.2.10-build.2171+sha.79e519f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2170+sha.7cf5544/angular-resource.js"
                 data-name="v1.2.10-build.2170+sha.7cf5544"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2170+sha.7cf5544">v1.2.10-build.2170+sha.7cf5544</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2169+sha.7cf5544/angular-resource.js"
                 data-name="v1.2.10-build.2169+sha.7cf5544"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2169+sha.7cf5544">v1.2.10-build.2169+sha.7cf5544</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2168+sha.310f129/angular-resource.js"
                 data-name="v1.2.10-build.2168+sha.310f129"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2168+sha.310f129">v1.2.10-build.2168+sha.310f129</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2167+sha.6d525f0/angular-resource.js"
                 data-name="v1.2.10-build.2167+sha.6d525f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2167+sha.6d525f0">v1.2.10-build.2167+sha.6d525f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2166+sha.5b9ff6c/angular-resource.js"
                 data-name="v1.2.10-build.2166+sha.5b9ff6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2166+sha.5b9ff6c">v1.2.10-build.2166+sha.5b9ff6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2165+sha.2068d76/angular-resource.js"
                 data-name="v1.2.10-build.2165+sha.2068d76"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2165+sha.2068d76">v1.2.10-build.2165+sha.2068d76</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2164+sha.8b395ff/angular-resource.js"
                 data-name="v1.2.10-build.2164+sha.8b395ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2164+sha.8b395ff">v1.2.10-build.2164+sha.8b395ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2163+sha.6c9131e/angular-resource.js"
                 data-name="v1.2.10-build.2163+sha.6c9131e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2163+sha.6c9131e">v1.2.10-build.2163+sha.6c9131e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2162+sha.99c5027/angular-resource.js"
                 data-name="v1.2.10-build.2162+sha.99c5027"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2162+sha.99c5027">v1.2.10-build.2162+sha.99c5027</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2161+sha.90e60d2/angular-resource.js"
                 data-name="v1.2.10-build.2161+sha.90e60d2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2161+sha.90e60d2">v1.2.10-build.2161+sha.90e60d2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2160+sha.928d000/angular-resource.js"
                 data-name="v1.2.10-build.2160+sha.928d000"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2160+sha.928d000">v1.2.10-build.2160+sha.928d000</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2159+sha.190c4f9/angular-resource.js"
                 data-name="v1.2.10-build.2159+sha.190c4f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2159+sha.190c4f9">v1.2.10-build.2159+sha.190c4f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2158+sha.42ec95e/angular-resource.js"
                 data-name="v1.2.10-build.2158+sha.42ec95e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2158+sha.42ec95e">v1.2.10-build.2158+sha.42ec95e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2157+sha.42ec95e/angular-resource.js"
                 data-name="v1.2.10-build.2157+sha.42ec95e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2157+sha.42ec95e">v1.2.10-build.2157+sha.42ec95e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2156+sha.1028cfa/angular-resource.js"
                 data-name="v1.2.10-build.2156+sha.1028cfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2156+sha.1028cfa">v1.2.10-build.2156+sha.1028cfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2155+sha.756c52d/angular-resource.js"
                 data-name="v1.2.10-build.2155+sha.756c52d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2155+sha.756c52d">v1.2.10-build.2155+sha.756c52d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2154+sha.c3e1a41/angular-resource.js"
                 data-name="v1.2.10-build.2154+sha.c3e1a41"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2154+sha.c3e1a41">v1.2.10-build.2154+sha.c3e1a41</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2153+sha.8dd4f14/angular-resource.js"
                 data-name="v1.2.10-build.2153+sha.8dd4f14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2153+sha.8dd4f14">v1.2.10-build.2153+sha.8dd4f14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2152+sha.7ba30fd/angular-resource.js"
                 data-name="v1.2.10-build.2152+sha.7ba30fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2152+sha.7ba30fd">v1.2.10-build.2152+sha.7ba30fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2151+sha.5adea0b/angular-resource.js"
                 data-name="v1.2.10-build.2151+sha.5adea0b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2151+sha.5adea0b">v1.2.10-build.2151+sha.5adea0b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2150+sha.2262ca6/angular-resource.js"
                 data-name="v1.2.10-build.2150+sha.2262ca6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2150+sha.2262ca6">v1.2.10-build.2150+sha.2262ca6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2149+sha.cd74f74/angular-resource.js"
                 data-name="v1.2.10-build.2149+sha.cd74f74"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2149+sha.cd74f74">v1.2.10-build.2149+sha.cd74f74</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2148+sha.fced1c0/angular-resource.js"
                 data-name="v1.2.10-build.2148+sha.fced1c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2148+sha.fced1c0">v1.2.10-build.2148+sha.fced1c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2147+sha.1cdcddb/angular-resource.js"
                 data-name="v1.2.10-build.2147+sha.1cdcddb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2147+sha.1cdcddb">v1.2.10-build.2147+sha.1cdcddb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2146+sha.0e4d7ca/angular-resource.js"
                 data-name="v1.2.10-build.2146+sha.0e4d7ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2146+sha.0e4d7ca">v1.2.10-build.2146+sha.0e4d7ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2145+sha.6a9ccac/angular-resource.js"
                 data-name="v1.2.10-build.2145+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2145+sha.6a9ccac">v1.2.10-build.2145+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2144+sha.6a9ccac/angular-resource.js"
                 data-name="v1.2.10-build.2144+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2144+sha.6a9ccac">v1.2.10-build.2144+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2142+sha.e591ddc/angular-resource.js"
                 data-name="v1.2.10-build.2142+sha.e591ddc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2142+sha.e591ddc">v1.2.10-build.2142+sha.e591ddc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2141+sha.cd0af8a/angular-resource.js"
                 data-name="v1.2.10-build.2141+sha.cd0af8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2141+sha.cd0af8a">v1.2.10-build.2141+sha.cd0af8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2140+sha.51a7f9d/angular-resource.js"
                 data-name="v1.2.10-build.2140+sha.51a7f9d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2140+sha.51a7f9d">v1.2.10-build.2140+sha.51a7f9d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2139+sha.61eb426/angular-resource.js"
                 data-name="v1.2.10-build.2139+sha.61eb426"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2139+sha.61eb426">v1.2.10-build.2139+sha.61eb426</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10-build.2136+sha.8ea8da4/angular-resource.js"
                 data-name="v1.2.10-build.2136+sha.8ea8da4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2136+sha.8ea8da4">v1.2.10-build.2136+sha.8ea8da4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.10/angular-resource.js"
                 data-name="v1.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10">v1.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2134+sha.1413328/angular-resource.js"
                 data-name="v1.2.9-build.2134+sha.1413328"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2134+sha.1413328">v1.2.9-build.2134+sha.1413328</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2133+sha.dde1b29/angular-resource.js"
                 data-name="v1.2.9-build.2133+sha.dde1b29"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2133+sha.dde1b29">v1.2.9-build.2133+sha.dde1b29</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2130+sha.02a4582/angular-resource.js"
                 data-name="v1.2.9-build.2130+sha.02a4582"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2130+sha.02a4582">v1.2.9-build.2130+sha.02a4582</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2129+sha.e324c14/angular-resource.js"
                 data-name="v1.2.9-build.2129+sha.e324c14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2129+sha.e324c14">v1.2.9-build.2129+sha.e324c14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2128+sha.e1cfb19/angular-resource.js"
                 data-name="v1.2.9-build.2128+sha.e1cfb19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2128+sha.e1cfb19">v1.2.9-build.2128+sha.e1cfb19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2127+sha.2a35863/angular-resource.js"
                 data-name="v1.2.9-build.2127+sha.2a35863"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2127+sha.2a35863">v1.2.9-build.2127+sha.2a35863</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2126+sha.834d316/angular-resource.js"
                 data-name="v1.2.9-build.2126+sha.834d316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2126+sha.834d316">v1.2.9-build.2126+sha.834d316</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2125+sha.b3acdde/angular-resource.js"
                 data-name="v1.2.9-build.2125+sha.b3acdde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2125+sha.b3acdde">v1.2.9-build.2125+sha.b3acdde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2124+sha.3085987/angular-resource.js"
                 data-name="v1.2.9-build.2124+sha.3085987"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2124+sha.3085987">v1.2.9-build.2124+sha.3085987</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2123+sha.2cd09c9/angular-resource.js"
                 data-name="v1.2.9-build.2123+sha.2cd09c9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2123+sha.2cd09c9">v1.2.9-build.2123+sha.2cd09c9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2122+sha.34fee06/angular-resource.js"
                 data-name="v1.2.9-build.2122+sha.34fee06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2122+sha.34fee06">v1.2.9-build.2122+sha.34fee06</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2121+sha.c7a46d4/angular-resource.js"
                 data-name="v1.2.9-build.2121+sha.c7a46d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2121+sha.c7a46d4">v1.2.9-build.2121+sha.c7a46d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2119+sha.c3ab915/angular-resource.js"
                 data-name="v1.2.9-build.2119+sha.c3ab915"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2119+sha.c3ab915">v1.2.9-build.2119+sha.c3ab915</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2118+sha.f4a4f42/angular-resource.js"
                 data-name="v1.2.9-build.2118+sha.f4a4f42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2118+sha.f4a4f42">v1.2.9-build.2118+sha.f4a4f42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2117+sha.b2c84cc/angular-resource.js"
                 data-name="v1.2.9-build.2117+sha.b2c84cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2117+sha.b2c84cc">v1.2.9-build.2117+sha.b2c84cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2116+sha.cde840f/angular-resource.js"
                 data-name="v1.2.9-build.2116+sha.cde840f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2116+sha.cde840f">v1.2.9-build.2116+sha.cde840f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2115+sha.63150d8/angular-resource.js"
                 data-name="v1.2.9-build.2115+sha.63150d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2115+sha.63150d8">v1.2.9-build.2115+sha.63150d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2114+sha.f9656da/angular-resource.js"
                 data-name="v1.2.9-build.2114+sha.f9656da"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2114+sha.f9656da">v1.2.9-build.2114+sha.f9656da</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2113+sha.a0d759c/angular-resource.js"
                 data-name="v1.2.9-build.2113+sha.a0d759c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2113+sha.a0d759c">v1.2.9-build.2113+sha.a0d759c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2112+sha.0d421f0/angular-resource.js"
                 data-name="v1.2.9-build.2112+sha.0d421f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2112+sha.0d421f0">v1.2.9-build.2112+sha.0d421f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9-build.2111+sha.5f937e5/angular-resource.js"
                 data-name="v1.2.9-build.2111+sha.5f937e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2111+sha.5f937e5">v1.2.9-build.2111+sha.5f937e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.9/angular-resource.js"
                 data-name="v1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9">v1.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2110+sha.ece7854/angular-resource.js"
                 data-name="v1.2.8-build.2110+sha.ece7854"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2110+sha.ece7854">v1.2.8-build.2110+sha.ece7854</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2109+sha.8ace807/angular-resource.js"
                 data-name="v1.2.8-build.2109+sha.8ace807"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2109+sha.8ace807">v1.2.8-build.2109+sha.8ace807</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2108+sha.a9cccbe/angular-resource.js"
                 data-name="v1.2.8-build.2108+sha.a9cccbe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2108+sha.a9cccbe">v1.2.8-build.2108+sha.a9cccbe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2107+sha.36c9e42/angular-resource.js"
                 data-name="v1.2.8-build.2107+sha.36c9e42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2107+sha.36c9e42">v1.2.8-build.2107+sha.36c9e42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2106+sha.9f566db/angular-resource.js"
                 data-name="v1.2.8-build.2106+sha.9f566db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2106+sha.9f566db">v1.2.8-build.2106+sha.9f566db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2105+sha.c77b2bc/angular-resource.js"
                 data-name="v1.2.8-build.2105+sha.c77b2bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2105+sha.c77b2bc">v1.2.8-build.2105+sha.c77b2bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2104+sha.5a4145f/angular-resource.js"
                 data-name="v1.2.8-build.2104+sha.5a4145f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2104+sha.5a4145f">v1.2.8-build.2104+sha.5a4145f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2102+sha.5a9cb8b/angular-resource.js"
                 data-name="v1.2.8-build.2102+sha.5a9cb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2102+sha.5a9cb8b">v1.2.8-build.2102+sha.5a9cb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2101+sha.69452fa/angular-resource.js"
                 data-name="v1.2.8-build.2101+sha.69452fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2101+sha.69452fa">v1.2.8-build.2101+sha.69452fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2100+sha.1d2a388/angular-resource.js"
                 data-name="v1.2.8-build.2100+sha.1d2a388"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2100+sha.1d2a388">v1.2.8-build.2100+sha.1d2a388</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2099+sha.ac05276/angular-resource.js"
                 data-name="v1.2.8-build.2099+sha.ac05276"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2099+sha.ac05276">v1.2.8-build.2099+sha.ac05276</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2098+sha.cb9c0f2/angular-resource.js"
                 data-name="v1.2.8-build.2098+sha.cb9c0f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2098+sha.cb9c0f2">v1.2.8-build.2098+sha.cb9c0f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2097+sha.b1d676b/angular-resource.js"
                 data-name="v1.2.8-build.2097+sha.b1d676b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2097+sha.b1d676b">v1.2.8-build.2097+sha.b1d676b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2096+sha.9ddef84/angular-resource.js"
                 data-name="v1.2.8-build.2096+sha.9ddef84"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2096+sha.9ddef84">v1.2.8-build.2096+sha.9ddef84</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2095+sha.28fc80b/angular-resource.js"
                 data-name="v1.2.8-build.2095+sha.28fc80b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2095+sha.28fc80b">v1.2.8-build.2095+sha.28fc80b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2094+sha.b6c42d5/angular-resource.js"
                 data-name="v1.2.8-build.2094+sha.b6c42d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2094+sha.b6c42d5">v1.2.8-build.2094+sha.b6c42d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2093+sha.1c045f1/angular-resource.js"
                 data-name="v1.2.8-build.2093+sha.1c045f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2093+sha.1c045f1">v1.2.8-build.2093+sha.1c045f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2092+sha.95e1b2d/angular-resource.js"
                 data-name="v1.2.8-build.2092+sha.95e1b2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2092+sha.95e1b2d">v1.2.8-build.2092+sha.95e1b2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2091+sha.75345e3/angular-resource.js"
                 data-name="v1.2.8-build.2091+sha.75345e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2091+sha.75345e3">v1.2.8-build.2091+sha.75345e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2090+sha.e115342/angular-resource.js"
                 data-name="v1.2.8-build.2090+sha.e115342"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2090+sha.e115342">v1.2.8-build.2090+sha.e115342</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2089+sha.e89150c/angular-resource.js"
                 data-name="v1.2.8-build.2089+sha.e89150c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2089+sha.e89150c">v1.2.8-build.2089+sha.e89150c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2088+sha.9693a42/angular-resource.js"
                 data-name="v1.2.8-build.2088+sha.9693a42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2088+sha.9693a42">v1.2.8-build.2088+sha.9693a42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2087+sha.affcbad/angular-resource.js"
                 data-name="v1.2.8-build.2087+sha.affcbad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2087+sha.affcbad">v1.2.8-build.2087+sha.affcbad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2085+sha.1b0718b/angular-resource.js"
                 data-name="v1.2.8-build.2085+sha.1b0718b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2085+sha.1b0718b">v1.2.8-build.2085+sha.1b0718b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2084+sha.53fd24f/angular-resource.js"
                 data-name="v1.2.8-build.2084+sha.53fd24f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2084+sha.53fd24f">v1.2.8-build.2084+sha.53fd24f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2083+sha.28cfd96/angular-resource.js"
                 data-name="v1.2.8-build.2083+sha.28cfd96"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2083+sha.28cfd96">v1.2.8-build.2083+sha.28cfd96</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2082+sha.99d5def/angular-resource.js"
                 data-name="v1.2.8-build.2082+sha.99d5def"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2082+sha.99d5def">v1.2.8-build.2082+sha.99d5def</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2081+sha.efbc242/angular-resource.js"
                 data-name="v1.2.8-build.2081+sha.efbc242"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2081+sha.efbc242">v1.2.8-build.2081+sha.efbc242</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2080+sha.d4d58f2/angular-resource.js"
                 data-name="v1.2.8-build.2080+sha.d4d58f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2080+sha.d4d58f2">v1.2.8-build.2080+sha.d4d58f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2079+sha.dc89db3/angular-resource.js"
                 data-name="v1.2.8-build.2079+sha.dc89db3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2079+sha.dc89db3">v1.2.8-build.2079+sha.dc89db3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2078+sha.5dc2795/angular-resource.js"
                 data-name="v1.2.8-build.2078+sha.5dc2795"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2078+sha.5dc2795">v1.2.8-build.2078+sha.5dc2795</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2077+sha.4c21355/angular-resource.js"
                 data-name="v1.2.8-build.2077+sha.4c21355"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2077+sha.4c21355">v1.2.8-build.2077+sha.4c21355</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2076+sha.6f6cb5c/angular-resource.js"
                 data-name="v1.2.8-build.2076+sha.6f6cb5c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2076+sha.6f6cb5c">v1.2.8-build.2076+sha.6f6cb5c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2074+sha.821ed31/angular-resource.js"
                 data-name="v1.2.8-build.2074+sha.821ed31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2074+sha.821ed31">v1.2.8-build.2074+sha.821ed31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2073+sha.a7aa4cc/angular-resource.js"
                 data-name="v1.2.8-build.2073+sha.a7aa4cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2073+sha.a7aa4cc">v1.2.8-build.2073+sha.a7aa4cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2072+sha.e0ce9ed/angular-resource.js"
                 data-name="v1.2.8-build.2072+sha.e0ce9ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2072+sha.e0ce9ed">v1.2.8-build.2072+sha.e0ce9ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2071+sha.caeb740/angular-resource.js"
                 data-name="v1.2.8-build.2071+sha.caeb740"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2071+sha.caeb740">v1.2.8-build.2071+sha.caeb740</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2070+sha.1bb33cc/angular-resource.js"
                 data-name="v1.2.8-build.2070+sha.1bb33cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2070+sha.1bb33cc">v1.2.8-build.2070+sha.1bb33cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2069+sha.1bb33cc/angular-resource.js"
                 data-name="v1.2.8-build.2069+sha.1bb33cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2069+sha.1bb33cc">v1.2.8-build.2069+sha.1bb33cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2068+sha.d9ed9c5/angular-resource.js"
                 data-name="v1.2.8-build.2068+sha.d9ed9c5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2068+sha.d9ed9c5">v1.2.8-build.2068+sha.d9ed9c5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2067+sha.00cac6e/angular-resource.js"
                 data-name="v1.2.8-build.2067+sha.00cac6e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2067+sha.00cac6e">v1.2.8-build.2067+sha.00cac6e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2066+sha.2e9d7cc/angular-resource.js"
                 data-name="v1.2.8-build.2066+sha.2e9d7cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2066+sha.2e9d7cc">v1.2.8-build.2066+sha.2e9d7cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2065+sha.32cc6cb/angular-resource.js"
                 data-name="v1.2.8-build.2065+sha.32cc6cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2065+sha.32cc6cb">v1.2.8-build.2065+sha.32cc6cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2064+sha.3b1a4fe/angular-resource.js"
                 data-name="v1.2.8-build.2064+sha.3b1a4fe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2064+sha.3b1a4fe">v1.2.8-build.2064+sha.3b1a4fe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2063+sha.9569778/angular-resource.js"
                 data-name="v1.2.8-build.2063+sha.9569778"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2063+sha.9569778">v1.2.8-build.2063+sha.9569778</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2062+sha.0f61316/angular-resource.js"
                 data-name="v1.2.8-build.2062+sha.0f61316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2062+sha.0f61316">v1.2.8-build.2062+sha.0f61316</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2061+sha.86151b0/angular-resource.js"
                 data-name="v1.2.8-build.2061+sha.86151b0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2061+sha.86151b0">v1.2.8-build.2061+sha.86151b0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2060+sha.1b7a6c6/angular-resource.js"
                 data-name="v1.2.8-build.2060+sha.1b7a6c6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2060+sha.1b7a6c6">v1.2.8-build.2060+sha.1b7a6c6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8-build.2059+sha.0ef76dd/angular-resource.js"
                 data-name="v1.2.8-build.2059+sha.0ef76dd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2059+sha.0ef76dd">v1.2.8-build.2059+sha.0ef76dd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.8/angular-resource.js"
                 data-name="v1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8">v1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2057+sha.3d38fff/angular-resource.js"
                 data-name="v1.2.7-build.2057+sha.3d38fff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2057+sha.3d38fff">v1.2.7-build.2057+sha.3d38fff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2045+sha.6a6f71f/angular-resource.js"
                 data-name="v1.2.7-build.2045+sha.6a6f71f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2045+sha.6a6f71f">v1.2.7-build.2045+sha.6a6f71f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2044+sha.cf68628/angular-resource.js"
                 data-name="v1.2.7-build.2044+sha.cf68628"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2044+sha.cf68628">v1.2.7-build.2044+sha.cf68628</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2043+sha.760f2fb/angular-resource.js"
                 data-name="v1.2.7-build.2043+sha.760f2fb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2043+sha.760f2fb">v1.2.7-build.2043+sha.760f2fb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2042+sha.c9705b7/angular-resource.js"
                 data-name="v1.2.7-build.2042+sha.c9705b7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2042+sha.c9705b7">v1.2.7-build.2042+sha.c9705b7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2041+sha.53ec33f/angular-resource.js"
                 data-name="v1.2.7-build.2041+sha.53ec33f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2041+sha.53ec33f">v1.2.7-build.2041+sha.53ec33f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2040+sha.884ef0d/angular-resource.js"
                 data-name="v1.2.7-build.2040+sha.884ef0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2040+sha.884ef0d">v1.2.7-build.2040+sha.884ef0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2039+sha.4f57236/angular-resource.js"
                 data-name="v1.2.7-build.2039+sha.4f57236"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2039+sha.4f57236">v1.2.7-build.2039+sha.4f57236</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2038+sha.50bf029/angular-resource.js"
                 data-name="v1.2.7-build.2038+sha.50bf029"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2038+sha.50bf029">v1.2.7-build.2038+sha.50bf029</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2036+sha.e415e91/angular-resource.js"
                 data-name="v1.2.7-build.2036+sha.e415e91"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2036+sha.e415e91">v1.2.7-build.2036+sha.e415e91</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2029+sha.80e7a45/angular-resource.js"
                 data-name="v1.2.7-build.2029+sha.80e7a45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2029+sha.80e7a45">v1.2.7-build.2029+sha.80e7a45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2028+sha.498365f/angular-resource.js"
                 data-name="v1.2.7-build.2028+sha.498365f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2028+sha.498365f">v1.2.7-build.2028+sha.498365f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2027+sha.056c849/angular-resource.js"
                 data-name="v1.2.7-build.2027+sha.056c849"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2027+sha.056c849">v1.2.7-build.2027+sha.056c849</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2026+sha.7d6e5a2/angular-resource.js"
                 data-name="v1.2.7-build.2026+sha.7d6e5a2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2026+sha.7d6e5a2">v1.2.7-build.2026+sha.7d6e5a2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2025+sha.d1c4766/angular-resource.js"
                 data-name="v1.2.7-build.2025+sha.d1c4766"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2025+sha.d1c4766">v1.2.7-build.2025+sha.d1c4766</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2024+sha.9847383/angular-resource.js"
                 data-name="v1.2.7-build.2024+sha.9847383"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2024+sha.9847383">v1.2.7-build.2024+sha.9847383</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2023+sha.870232b/angular-resource.js"
                 data-name="v1.2.7-build.2023+sha.870232b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2023+sha.870232b">v1.2.7-build.2023+sha.870232b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2022+sha.c31df32/angular-resource.js"
                 data-name="v1.2.7-build.2022+sha.c31df32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2022+sha.c31df32">v1.2.7-build.2022+sha.c31df32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2021+sha.df2b88e/angular-resource.js"
                 data-name="v1.2.7-build.2021+sha.df2b88e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2021+sha.df2b88e">v1.2.7-build.2021+sha.df2b88e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7-build.2020+sha.af7203e/angular-resource.js"
                 data-name="v1.2.7-build.2020+sha.af7203e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2020+sha.af7203e">v1.2.7-build.2020+sha.af7203e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.7/angular-resource.js"
                 data-name="v1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7">v1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2018+sha.fe7decd/angular-resource.js"
                 data-name="v1.2.6-build.2018+sha.fe7decd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2018+sha.fe7decd">v1.2.6-build.2018+sha.fe7decd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2017+sha.cef084a/angular-resource.js"
                 data-name="v1.2.6-build.2017+sha.cef084a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2017+sha.cef084a">v1.2.6-build.2017+sha.cef084a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2016+sha.937caab/angular-resource.js"
                 data-name="v1.2.6-build.2016+sha.937caab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2016+sha.937caab">v1.2.6-build.2016+sha.937caab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2015+sha.3fc8017/angular-resource.js"
                 data-name="v1.2.6-build.2015+sha.3fc8017"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2015+sha.3fc8017">v1.2.6-build.2015+sha.3fc8017</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2014+sha.277a5ea/angular-resource.js"
                 data-name="v1.2.6-build.2014+sha.277a5ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2014+sha.277a5ea">v1.2.6-build.2014+sha.277a5ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2013+sha.efba473/angular-resource.js"
                 data-name="v1.2.6-build.2013+sha.efba473"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2013+sha.efba473">v1.2.6-build.2013+sha.efba473</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2012+sha.14d3e55/angular-resource.js"
                 data-name="v1.2.6-build.2012+sha.14d3e55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2012+sha.14d3e55">v1.2.6-build.2012+sha.14d3e55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2011+sha.3d156a7/angular-resource.js"
                 data-name="v1.2.6-build.2011+sha.3d156a7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2011+sha.3d156a7">v1.2.6-build.2011+sha.3d156a7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2010+sha.c7a1d1a/angular-resource.js"
                 data-name="v1.2.6-build.2010+sha.c7a1d1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2010+sha.c7a1d1a">v1.2.6-build.2010+sha.c7a1d1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2009+sha.26d43ca/angular-resource.js"
                 data-name="v1.2.6-build.2009+sha.26d43ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2009+sha.26d43ca">v1.2.6-build.2009+sha.26d43ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2008+sha.4f5758e/angular-resource.js"
                 data-name="v1.2.6-build.2008+sha.4f5758e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2008+sha.4f5758e">v1.2.6-build.2008+sha.4f5758e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2007+sha.f0e3dfd/angular-resource.js"
                 data-name="v1.2.6-build.2007+sha.f0e3dfd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2007+sha.f0e3dfd">v1.2.6-build.2007+sha.f0e3dfd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2006+sha.bc3ff2c/angular-resource.js"
                 data-name="v1.2.6-build.2006+sha.bc3ff2c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2006+sha.bc3ff2c">v1.2.6-build.2006+sha.bc3ff2c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2005+sha.8f329ff/angular-resource.js"
                 data-name="v1.2.6-build.2005+sha.8f329ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2005+sha.8f329ff">v1.2.6-build.2005+sha.8f329ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2004+sha.864b259/angular-resource.js"
                 data-name="v1.2.6-build.2004+sha.864b259"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2004+sha.864b259">v1.2.6-build.2004+sha.864b259</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2003+sha.f3a796e/angular-resource.js"
                 data-name="v1.2.6-build.2003+sha.f3a796e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2003+sha.f3a796e">v1.2.6-build.2003+sha.f3a796e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2002+sha.09f8962/angular-resource.js"
                 data-name="v1.2.6-build.2002+sha.09f8962"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2002+sha.09f8962">v1.2.6-build.2002+sha.09f8962</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2001+sha.3dc1803/angular-resource.js"
                 data-name="v1.2.6-build.2001+sha.3dc1803"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2001+sha.3dc1803">v1.2.6-build.2001+sha.3dc1803</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.2000+sha.73c6671/angular-resource.js"
                 data-name="v1.2.6-build.2000+sha.73c6671"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2000+sha.73c6671">v1.2.6-build.2000+sha.73c6671</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1999+sha.cb29632/angular-resource.js"
                 data-name="v1.2.6-build.1999+sha.cb29632"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1999+sha.cb29632">v1.2.6-build.1999+sha.cb29632</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1998+sha.5c97731/angular-resource.js"
                 data-name="v1.2.6-build.1998+sha.5c97731"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1998+sha.5c97731">v1.2.6-build.1998+sha.5c97731</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1997+sha.b2e472e/angular-resource.js"
                 data-name="v1.2.6-build.1997+sha.b2e472e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1997+sha.b2e472e">v1.2.6-build.1997+sha.b2e472e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1996+sha.6ac773f/angular-resource.js"
                 data-name="v1.2.6-build.1996+sha.6ac773f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1996+sha.6ac773f">v1.2.6-build.1996+sha.6ac773f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1994+sha.4f72433/angular-resource.js"
                 data-name="v1.2.6-build.1994+sha.4f72433"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1994+sha.4f72433">v1.2.6-build.1994+sha.4f72433</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1993+sha.2f91cfd/angular-resource.js"
                 data-name="v1.2.6-build.1993+sha.2f91cfd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1993+sha.2f91cfd">v1.2.6-build.1993+sha.2f91cfd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1992+sha.d5c5e2b/angular-resource.js"
                 data-name="v1.2.6-build.1992+sha.d5c5e2b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1992+sha.d5c5e2b">v1.2.6-build.1992+sha.d5c5e2b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1991+sha.cbb3ce2/angular-resource.js"
                 data-name="v1.2.6-build.1991+sha.cbb3ce2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1991+sha.cbb3ce2">v1.2.6-build.1991+sha.cbb3ce2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1990+sha.45af02d/angular-resource.js"
                 data-name="v1.2.6-build.1990+sha.45af02d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1990+sha.45af02d">v1.2.6-build.1990+sha.45af02d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1989+sha.b0474cb/angular-resource.js"
                 data-name="v1.2.6-build.1989+sha.b0474cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1989+sha.b0474cb">v1.2.6-build.1989+sha.b0474cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6-build.1988+sha.b0474cb/angular-resource.js"
                 data-name="v1.2.6-build.1988+sha.b0474cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1988+sha.b0474cb">v1.2.6-build.1988+sha.b0474cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.6/angular-resource.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.5/angular-resource.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.4/angular-resource.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.3/angular-resource.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.2/angular-resource.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.1/angular-resource.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.0-rc.3/angular-resource.js"
                 data-name="v1.2.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.3">v1.2.0-rc.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.0-rc.2/angular-resource.js"
                 data-name="v1.2.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.2">v1.2.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.0-rc.1/angular-resource.js"
                 data-name="v1.2.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.1">v1.2.0-rc.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.2.0/angular-resource.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.0.8/angular-resource.js"
                 data-name="v1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.8">v1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.0.7/angular-resource.js"
                 data-name="v1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.7">v1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.0.6/angular-resource.js"
                 data-name="v1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.6">v1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.0.5/angular-resource.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-resource/tree/v1.0.4/angular-resource.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/bower-angular-resource" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bower-angular-resource</span></a></span></span><span class="separator"> / </span><strong class="final-path">angular-resource.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="angular-resource.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="NgDashboard" class="main-avatar js-avatar" data-user="6013193" height="24" src="https://avatars1.githubusercontent.com/u/6013193?s=140" width="24" />
    <span class="author"><a href="/NgDashboard" rel="author">NgDashboard</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-03-22T13:25:57-07:00" title="2014-03-22 20:25:57">March 22, 2014</time>
    <div class="commit-title">
        <a href="/angular/bower-angular-resource/commit/e8283f5dd9952a89e468ffba579301a6a34bd537" class="message" data-pjax="true" title="v1.3.0-build.2491+sha.635cdaa">v1.3.0-build.2491+sha.635cdaa</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="NgDashboard" href="/angular/bower-angular-resource/commits/master/angular-resource.js?author=NgDashboard"><img alt="NgDashboard" class=" js-avatar" data-user="6013193" height="20" src="https://avatars1.githubusercontent.com/u/6013193?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="btford" href="/angular/bower-angular-resource/commits/master/angular-resource.js?author=btford"><img alt="Brian Ford" class=" js-avatar" data-user="474988" height="20" src="https://avatars1.githubusercontent.com/u/474988?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jeffbcross" href="/angular/bower-angular-resource/commits/master/angular-resource.js?author=jeffbcross"><img alt="Jeff Cross" class=" js-avatar" data-user="463703" height="20" src="https://avatars1.githubusercontent.com/u/463703?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tbosch" href="/angular/bower-angular-resource/commits/master/angular-resource.js?author=tbosch"><img alt="Tobias Bosch" class=" js-avatar" data-user="690815" height="20" src="https://avatars2.githubusercontent.com/u/690815?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/bower-angular-resource/commits/master/angular-resource.js?author=vojtajina"><img alt="Vojta Jina" class=" js-avatar" data-user="46647" height="20" src="https://avatars2.githubusercontent.com/u/46647?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="NgDashboard" class=" js-avatar" data-user="6013193" height="24" src="https://avatars1.githubusercontent.com/u/6013193?s=140" width="24" />
            <a href="/NgDashboard">NgDashboard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brian Ford" class=" js-avatar" data-user="474988" height="24" src="https://avatars1.githubusercontent.com/u/474988?s=140" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Cross" class=" js-avatar" data-user="463703" height="24" src="https://avatars1.githubusercontent.com/u/463703?s=140" width="24" />
            <a href="/jeffbcross">jeffbcross</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tobias Bosch" class=" js-avatar" data-user="690815" height="24" src="https://avatars2.githubusercontent.com/u/690815?s=140" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vojta Jina" class=" js-avatar" data-user="46647" height="24" src="https://avatars2.githubusercontent.com/u/46647?s=140" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>608 lines (549 sloc)</span>
          <span class="meta-divider"></span>
        <span>23.722 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/angular/bower-angular-resource/raw/master/angular-resource.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/angular/bower-angular-resource/blame/master/angular-resource.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/angular/bower-angular-resource/commits/master/angular-resource.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
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
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @license AngularJS v1.3.0-build.2491+sha.635cdaa</span></div><div class='line' id='LC3'><span class="cm"> * (c) 2010-2014 Google, Inc. http://angularjs.org</span></div><div class='line' id='LC4'><span class="cm"> * License: MIT</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nx">angular</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="kd">var</span> <span class="nx">$resourceMinErr</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">$$minErr</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">);</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="c1">// Helper functions and regex to lookup a dotted path on an object</span></div><div class='line' id='LC11'><span class="c1">// stopping at undefined/null.  The path must be composed of ASCII</span></div><div class='line' id='LC12'><span class="c1">// identifiers (just like $parse)</span></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">MEMBER_NAME_REGEX</span> <span class="o">=</span> <span class="sr">/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/</span><span class="p">;</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="kd">function</span> <span class="nx">isValidDottedPath</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">path</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">path</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">path</span> <span class="o">!==</span> <span class="s1">&#39;hasOwnProperty&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">MEMBER_NAME_REGEX</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">path</span><span class="p">));</span></div><div class='line' id='LC18'><span class="p">}</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="kd">function</span> <span class="nx">lookupDottedPath</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isValidDottedPath</span><span class="p">(</span><span class="nx">path</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badmember&#39;</span><span class="p">,</span> <span class="s1">&#39;Dotted member path &quot;@{0}&quot; is invalid.&#39;</span><span class="p">,</span> <span class="nx">path</span><span class="p">);</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">);</span></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span> <span class="o">=</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC30'><span class="p">}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="cm">/**</span></div><div class='line' id='LC33'><span class="cm"> * Create a shallow copy of an object and clear other fields from the destination</span></div><div class='line' id='LC34'><span class="cm"> */</span></div><div class='line' id='LC35'><span class="kd">function</span> <span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">dst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;<span class="nx">dst</span> <span class="o">=</span> <span class="nx">dst</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">dst</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">src</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">dst</span><span class="p">;</span></div><div class='line' id='LC49'><span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'><span class="cm">/**</span></div><div class='line' id='LC52'><span class="cm"> * @ngdoc module</span></div><div class='line' id='LC53'><span class="cm"> * @name ngResource</span></div><div class='line' id='LC54'><span class="cm"> * @description</span></div><div class='line' id='LC55'><span class="cm"> *</span></div><div class='line' id='LC56'><span class="cm"> * # ngResource</span></div><div class='line' id='LC57'><span class="cm"> *</span></div><div class='line' id='LC58'><span class="cm"> * The `ngResource` module provides interaction support with RESTful services</span></div><div class='line' id='LC59'><span class="cm"> * via the $resource service.</span></div><div class='line' id='LC60'><span class="cm"> *</span></div><div class='line' id='LC61'><span class="cm"> *</span></div><div class='line' id='LC62'><span class="cm"> * &lt;div doc-module-components=&quot;ngResource&quot;&gt;&lt;/div&gt;</span></div><div class='line' id='LC63'><span class="cm"> *</span></div><div class='line' id='LC64'><span class="cm"> * See {@link ngResource.$resource `$resource`} for usage.</span></div><div class='line' id='LC65'><span class="cm"> */</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'><span class="cm">/**</span></div><div class='line' id='LC68'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC69'><span class="cm"> * @name $resource</span></div><div class='line' id='LC70'><span class="cm"> * @requires $http</span></div><div class='line' id='LC71'><span class="cm"> *</span></div><div class='line' id='LC72'><span class="cm"> * @description</span></div><div class='line' id='LC73'><span class="cm"> * A factory which creates a resource object that lets you interact with</span></div><div class='line' id='LC74'><span class="cm"> * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.</span></div><div class='line' id='LC75'><span class="cm"> *</span></div><div class='line' id='LC76'><span class="cm"> * The returned resource object has action methods which provide high-level behaviors without</span></div><div class='line' id='LC77'><span class="cm"> * the need to interact with the low level {@link ng.$http $http} service.</span></div><div class='line' id='LC78'><span class="cm"> *</span></div><div class='line' id='LC79'><span class="cm"> * Requires the {@link ngResource `ngResource`} module to be installed.</span></div><div class='line' id='LC80'><span class="cm"> *</span></div><div class='line' id='LC81'><span class="cm"> * @param {string} url A parametrized URL template with parameters prefixed by `:` as in</span></div><div class='line' id='LC82'><span class="cm"> *   `/user/:username`. If you are using a URL with a port number (e.g.</span></div><div class='line' id='LC83'><span class="cm"> *   `http://example.com:8080/api`), it will be respected.</span></div><div class='line' id='LC84'><span class="cm"> *</span></div><div class='line' id='LC85'><span class="cm"> *   If you are using a url with a suffix, just add the suffix, like this:</span></div><div class='line' id='LC86'><span class="cm"> *   `$resource(&#39;http://example.com/resource.json&#39;)` or `$resource(&#39;http://example.com/:id.json&#39;)`</span></div><div class='line' id='LC87'><span class="cm"> *   or even `$resource(&#39;http://example.com/resource/:resource_id.:format&#39;)`</span></div><div class='line' id='LC88'><span class="cm"> *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be</span></div><div class='line' id='LC89'><span class="cm"> *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you</span></div><div class='line' id='LC90'><span class="cm"> *   can escape it with `/\.`.</span></div><div class='line' id='LC91'><span class="cm"> *</span></div><div class='line' id='LC92'><span class="cm"> * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in</span></div><div class='line' id='LC93'><span class="cm"> *   `actions` methods. If any of the parameter value is a function, it will be executed every time</span></div><div class='line' id='LC94'><span class="cm"> *   when a param value needs to be obtained for a request (unless the param was overridden).</span></div><div class='line' id='LC95'><span class="cm"> *</span></div><div class='line' id='LC96'><span class="cm"> *   Each key value in the parameter object is first bound to url template if present and then any</span></div><div class='line' id='LC97'><span class="cm"> *   excess keys are appended to the url search query after the `?`.</span></div><div class='line' id='LC98'><span class="cm"> *</span></div><div class='line' id='LC99'><span class="cm"> *   Given a template `/path/:verb` and parameter `{verb:&#39;greet&#39;, salutation:&#39;Hello&#39;}` results in</span></div><div class='line' id='LC100'><span class="cm"> *   URL `/path/greet?salutation=Hello`.</span></div><div class='line' id='LC101'><span class="cm"> *</span></div><div class='line' id='LC102'><span class="cm"> *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from</span></div><div class='line' id='LC103'><span class="cm"> *   the data object (useful for non-GET operations).</span></div><div class='line' id='LC104'><span class="cm"> *</span></div><div class='line' id='LC105'><span class="cm"> * @param {Object.&lt;Object&gt;=} actions Hash with declaration of custom action that should extend</span></div><div class='line' id='LC106'><span class="cm"> *   the default set of resource actions. The declaration should be created in the format of {@link</span></div><div class='line' id='LC107'><span class="cm"> *   ng.$http#usage_parameters $http.config}:</span></div><div class='line' id='LC108'><span class="cm"> *</span></div><div class='line' id='LC109'><span class="cm"> *       {action1: {method:?, params:?, isArray:?, headers:?, ...},</span></div><div class='line' id='LC110'><span class="cm"> *        action2: {method:?, params:?, isArray:?, headers:?, ...},</span></div><div class='line' id='LC111'><span class="cm"> *        ...}</span></div><div class='line' id='LC112'><span class="cm"> *</span></div><div class='line' id='LC113'><span class="cm"> *   Where:</span></div><div class='line' id='LC114'><span class="cm"> *</span></div><div class='line' id='LC115'><span class="cm"> *   - **`action`** – {string} – The name of action. This name becomes the name of the method on</span></div><div class='line' id='LC116'><span class="cm"> *     your resource object.</span></div><div class='line' id='LC117'><span class="cm"> *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`,</span></div><div class='line' id='LC118'><span class="cm"> *     `DELETE`, and `JSONP`.</span></div><div class='line' id='LC119'><span class="cm"> *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of</span></div><div class='line' id='LC120'><span class="cm"> *     the parameter value is a function, it will be executed every time when a param value needs to</span></div><div class='line' id='LC121'><span class="cm"> *     be obtained for a request (unless the param was overridden).</span></div><div class='line' id='LC122'><span class="cm"> *   - **`url`** – {string} – action specific `url` override. The url templating is supported just</span></div><div class='line' id='LC123'><span class="cm"> *     like for the resource-level urls.</span></div><div class='line' id='LC124'><span class="cm"> *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,</span></div><div class='line' id='LC125'><span class="cm"> *     see `returns` section.</span></div><div class='line' id='LC126'><span class="cm"> *   - **`transformRequest`** –</span></div><div class='line' id='LC127'><span class="cm"> *     `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></div><div class='line' id='LC128'><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></div><div class='line' id='LC129'><span class="cm"> *     request body and headers and returns its transformed (typically serialized) version.</span></div><div class='line' id='LC130'><span class="cm"> *   - **`transformResponse`** –</span></div><div class='line' id='LC131'><span class="cm"> *     `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></div><div class='line' id='LC132'><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></div><div class='line' id='LC133'><span class="cm"> *     response body and headers and returns its transformed (typically deserialized) version.</span></div><div class='line' id='LC134'><span class="cm"> *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the</span></div><div class='line' id='LC135'><span class="cm"> *     GET request, otherwise if a cache instance built with</span></div><div class='line' id='LC136'><span class="cm"> *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for</span></div><div class='line' id='LC137'><span class="cm"> *     caching.</span></div><div class='line' id='LC138'><span class="cm"> *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that</span></div><div class='line' id='LC139'><span class="cm"> *     should abort the request when resolved.</span></div><div class='line' id='LC140'><span class="cm"> *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the</span></div><div class='line' id='LC141'><span class="cm"> *     XHR object. See</span></div><div class='line' id='LC142'><span class="cm"> *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)</span></div><div class='line' id='LC143'><span class="cm"> *     for more information.</span></div><div class='line' id='LC144'><span class="cm"> *   - **`responseType`** - `{string}` - see</span></div><div class='line' id='LC145'><span class="cm"> *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).</span></div><div class='line' id='LC146'><span class="cm"> *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -</span></div><div class='line' id='LC147'><span class="cm"> *     `response` and `responseError`. Both `response` and `responseError` interceptors get called</span></div><div class='line' id='LC148'><span class="cm"> *     with `http response` object. See {@link ng.$http $http interceptors}.</span></div><div class='line' id='LC149'><span class="cm"> *</span></div><div class='line' id='LC150'><span class="cm"> * @returns {Object} A resource &quot;class&quot; object with methods for the default set of resource actions</span></div><div class='line' id='LC151'><span class="cm"> *   optionally extended with custom `actions`. The default set contains these actions:</span></div><div class='line' id='LC152'><span class="cm"> *   ```js</span></div><div class='line' id='LC153'><span class="cm"> *   { &#39;get&#39;:    {method:&#39;GET&#39;},</span></div><div class='line' id='LC154'><span class="cm"> *     &#39;save&#39;:   {method:&#39;POST&#39;},</span></div><div class='line' id='LC155'><span class="cm"> *     &#39;query&#39;:  {method:&#39;GET&#39;, isArray:true},</span></div><div class='line' id='LC156'><span class="cm"> *     &#39;remove&#39;: {method:&#39;DELETE&#39;},</span></div><div class='line' id='LC157'><span class="cm"> *     &#39;delete&#39;: {method:&#39;DELETE&#39;} };</span></div><div class='line' id='LC158'><span class="cm"> *   ```</span></div><div class='line' id='LC159'><span class="cm"> *</span></div><div class='line' id='LC160'><span class="cm"> *   Calling these methods invoke an {@link ng.$http} with the specified http method,</span></div><div class='line' id='LC161'><span class="cm"> *   destination and parameters. When the data is returned from the server then the object is an</span></div><div class='line' id='LC162'><span class="cm"> *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it</span></div><div class='line' id='LC163'><span class="cm"> *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,</span></div><div class='line' id='LC164'><span class="cm"> *   read, update, delete) on server-side data like this:</span></div><div class='line' id='LC165'><span class="cm"> *   ```js</span></div><div class='line' id='LC166'><span class="cm"> *   var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC167'><span class="cm"> *   var user = User.get({userId:123}, function() {</span></div><div class='line' id='LC168'><span class="cm"> *     user.abc = true;</span></div><div class='line' id='LC169'><span class="cm"> *     user.$save();</span></div><div class='line' id='LC170'><span class="cm"> *   });</span></div><div class='line' id='LC171'><span class="cm"> *   ```</span></div><div class='line' id='LC172'><span class="cm"> *</span></div><div class='line' id='LC173'><span class="cm"> *   It is important to realize that invoking a $resource object method immediately returns an</span></div><div class='line' id='LC174'><span class="cm"> *   empty reference (object or array depending on `isArray`). Once the data is returned from the</span></div><div class='line' id='LC175'><span class="cm"> *   server the existing reference is populated with the actual data. This is a useful trick since</span></div><div class='line' id='LC176'><span class="cm"> *   usually the resource is assigned to a model which is then rendered by the view. Having an empty</span></div><div class='line' id='LC177'><span class="cm"> *   object results in no rendering, once the data arrives from the server then the object is</span></div><div class='line' id='LC178'><span class="cm"> *   populated with the data and the view automatically re-renders itself showing the new data. This</span></div><div class='line' id='LC179'><span class="cm"> *   means that in most cases one never has to write a callback function for the action methods.</span></div><div class='line' id='LC180'><span class="cm"> *</span></div><div class='line' id='LC181'><span class="cm"> *   The action methods on the class object or instance object can be invoked with the following</span></div><div class='line' id='LC182'><span class="cm"> *   parameters:</span></div><div class='line' id='LC183'><span class="cm"> *</span></div><div class='line' id='LC184'><span class="cm"> *   - HTTP GET &quot;class&quot; actions: `Resource.action([parameters], [success], [error])`</span></div><div class='line' id='LC185'><span class="cm"> *   - non-GET &quot;class&quot; actions: `Resource.action([parameters], postData, [success], [error])`</span></div><div class='line' id='LC186'><span class="cm"> *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`</span></div><div class='line' id='LC187'><span class="cm"> *</span></div><div class='line' id='LC188'><span class="cm"> *   Success callback is called with (value, responseHeaders) arguments. Error callback is called</span></div><div class='line' id='LC189'><span class="cm"> *   with (httpResponse) argument.</span></div><div class='line' id='LC190'><span class="cm"> *</span></div><div class='line' id='LC191'><span class="cm"> *   Class actions return empty instance (with additional properties below).</span></div><div class='line' id='LC192'><span class="cm"> *   Instance actions return promise of the action.</span></div><div class='line' id='LC193'><span class="cm"> *</span></div><div class='line' id='LC194'><span class="cm"> *   The Resource instances and collection have these additional properties:</span></div><div class='line' id='LC195'><span class="cm"> *</span></div><div class='line' id='LC196'><span class="cm"> *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this</span></div><div class='line' id='LC197'><span class="cm"> *     instance or collection.</span></div><div class='line' id='LC198'><span class="cm"> *</span></div><div class='line' id='LC199'><span class="cm"> *     On success, the promise is resolved with the same resource instance or collection object,</span></div><div class='line' id='LC200'><span class="cm"> *     updated with data from server. This makes it easy to use in</span></div><div class='line' id='LC201'><span class="cm"> *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view</span></div><div class='line' id='LC202'><span class="cm"> *     rendering until the resource(s) are loaded.</span></div><div class='line' id='LC203'><span class="cm"> *</span></div><div class='line' id='LC204'><span class="cm"> *     On failure, the promise is resolved with the {@link ng.$http http response} object, without</span></div><div class='line' id='LC205'><span class="cm"> *     the `resource` property.</span></div><div class='line' id='LC206'><span class="cm"> *</span></div><div class='line' id='LC207'><span class="cm"> *   - `$resolved`: `true` after first server interaction is completed (either with success or</span></div><div class='line' id='LC208'><span class="cm"> *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in</span></div><div class='line' id='LC209'><span class="cm"> *      data-binding.</span></div><div class='line' id='LC210'><span class="cm"> *</span></div><div class='line' id='LC211'><span class="cm"> * @example</span></div><div class='line' id='LC212'><span class="cm"> *</span></div><div class='line' id='LC213'><span class="cm"> * # Credit card resource</span></div><div class='line' id='LC214'><span class="cm"> *</span></div><div class='line' id='LC215'><span class="cm"> * ```js</span></div><div class='line' id='LC216'><span class="cm">     // Define CreditCard class</span></div><div class='line' id='LC217'><span class="cm">     var CreditCard = $resource(&#39;/user/:userId/card/:cardId&#39;,</span></div><div class='line' id='LC218'><span class="cm">      {userId:123, cardId:&#39;@id&#39;}, {</span></div><div class='line' id='LC219'><span class="cm">       charge: {method:&#39;POST&#39;, params:{charge:true}}</span></div><div class='line' id='LC220'><span class="cm">      });</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'><span class="cm">     // We can retrieve a collection from the server</span></div><div class='line' id='LC223'><span class="cm">     var cards = CreditCard.query(function() {</span></div><div class='line' id='LC224'><span class="cm">       // GET: /user/123/card</span></div><div class='line' id='LC225'><span class="cm">       // server returns: [ {id:456, number:&#39;1234&#39;, name:&#39;Smith&#39;} ];</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'><span class="cm">       var card = cards[0];</span></div><div class='line' id='LC228'><span class="cm">       // each item is an instance of CreditCard</span></div><div class='line' id='LC229'><span class="cm">       expect(card instanceof CreditCard).toEqual(true);</span></div><div class='line' id='LC230'><span class="cm">       card.name = &quot;J. Smith&quot;;</span></div><div class='line' id='LC231'><span class="cm">       // non GET methods are mapped onto the instances</span></div><div class='line' id='LC232'><span class="cm">       card.$save();</span></div><div class='line' id='LC233'><span class="cm">       // POST: /user/123/card/456 {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></div><div class='line' id='LC234'><span class="cm">       // server returns: {id:456, number:&#39;1234&#39;, name: &#39;J. Smith&#39;};</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'><span class="cm">       // our custom method is mapped as well.</span></div><div class='line' id='LC237'><span class="cm">       card.$charge({amount:9.99});</span></div><div class='line' id='LC238'><span class="cm">       // POST: /user/123/card/456?amount=9.99&amp;charge=true {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></div><div class='line' id='LC239'><span class="cm">     });</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'><span class="cm">     // we can create an instance as well</span></div><div class='line' id='LC242'><span class="cm">     var newCard = new CreditCard({number:&#39;0123&#39;});</span></div><div class='line' id='LC243'><span class="cm">     newCard.name = &quot;Mike Smith&quot;;</span></div><div class='line' id='LC244'><span class="cm">     newCard.$save();</span></div><div class='line' id='LC245'><span class="cm">     // POST: /user/123/card {number:&#39;0123&#39;, name:&#39;Mike Smith&#39;}</span></div><div class='line' id='LC246'><span class="cm">     // server returns: {id:789, number:&#39;0123&#39;, name: &#39;Mike Smith&#39;};</span></div><div class='line' id='LC247'><span class="cm">     expect(newCard.id).toEqual(789);</span></div><div class='line' id='LC248'><span class="cm"> * ```</span></div><div class='line' id='LC249'><span class="cm"> *</span></div><div class='line' id='LC250'><span class="cm"> * The object returned from this function execution is a resource &quot;class&quot; which has &quot;static&quot; method</span></div><div class='line' id='LC251'><span class="cm"> * for each action in the definition.</span></div><div class='line' id='LC252'><span class="cm"> *</span></div><div class='line' id='LC253'><span class="cm"> * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and</span></div><div class='line' id='LC254'><span class="cm"> * `headers`.</span></div><div class='line' id='LC255'><span class="cm"> * When the data is returned from the server then the object is an instance of the resource type and</span></div><div class='line' id='LC256'><span class="cm"> * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD</span></div><div class='line' id='LC257'><span class="cm"> * operations (create, read, update, delete) on server-side data.</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'><span class="cm">   ```js</span></div><div class='line' id='LC260'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC261'><span class="cm">     User.get({userId:123}, function(user) {</span></div><div class='line' id='LC262'><span class="cm">       user.abc = true;</span></div><div class='line' id='LC263'><span class="cm">       user.$save();</span></div><div class='line' id='LC264'><span class="cm">     });</span></div><div class='line' id='LC265'><span class="cm">   ```</span></div><div class='line' id='LC266'><span class="cm"> *</span></div><div class='line' id='LC267'><span class="cm"> * It&#39;s worth noting that the success callback for `get`, `query` and other methods gets passed</span></div><div class='line' id='LC268'><span class="cm"> * in the response that came from the server as well as $http header getter function, so one</span></div><div class='line' id='LC269'><span class="cm"> * could rewrite the above example and get access to http headers as:</span></div><div class='line' id='LC270'><span class="cm"> *</span></div><div class='line' id='LC271'><span class="cm">   ```js</span></div><div class='line' id='LC272'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC273'><span class="cm">     User.get({userId:123}, function(u, getResponseHeaders){</span></div><div class='line' id='LC274'><span class="cm">       u.abc = true;</span></div><div class='line' id='LC275'><span class="cm">       u.$save(function(u, putResponseHeaders) {</span></div><div class='line' id='LC276'><span class="cm">         //u =&gt; saved user object</span></div><div class='line' id='LC277'><span class="cm">         //putResponseHeaders =&gt; $http header getter</span></div><div class='line' id='LC278'><span class="cm">       });</span></div><div class='line' id='LC279'><span class="cm">     });</span></div><div class='line' id='LC280'><span class="cm">   ```</span></div><div class='line' id='LC281'><span class="cm"> *</span></div><div class='line' id='LC282'><span class="cm"> * You can also access the raw `$http` promise via the `$promise` property on the object returned</span></div><div class='line' id='LC283'><span class="cm"> *</span></div><div class='line' id='LC284'><span class="cm">   ```</span></div><div class='line' id='LC285'><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></div><div class='line' id='LC286'><span class="cm">     User.get({userId:123})</span></div><div class='line' id='LC287'><span class="cm">         .$promise.then(function(user) {</span></div><div class='line' id='LC288'><span class="cm">           $scope.user = user;</span></div><div class='line' id='LC289'><span class="cm">         });</span></div><div class='line' id='LC290'><span class="cm">   ```</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'><span class="cm"> * # Creating a custom &#39;PUT&#39; request</span></div><div class='line' id='LC293'><span class="cm"> * In this example we create a custom method on our resource to make a PUT request</span></div><div class='line' id='LC294'><span class="cm"> * ```js</span></div><div class='line' id='LC295'><span class="cm"> *		var app = angular.module(&#39;app&#39;, [&#39;ngResource&#39;, &#39;ngRoute&#39;]);</span></div><div class='line' id='LC296'><span class="cm"> *</span></div><div class='line' id='LC297'><span class="cm"> *		// Some APIs expect a PUT request in the format URL/object/ID</span></div><div class='line' id='LC298'><span class="cm"> *		// Here we are creating an &#39;update&#39; method</span></div><div class='line' id='LC299'><span class="cm"> *		app.factory(&#39;Notes&#39;, [&#39;$resource&#39;, function($resource) {</span></div><div class='line' id='LC300'><span class="cm"> *    return $resource(&#39;/notes/:id&#39;, null,</span></div><div class='line' id='LC301'><span class="cm"> *        {</span></div><div class='line' id='LC302'><span class="cm"> *            &#39;update&#39;: { method:&#39;PUT&#39; }</span></div><div class='line' id='LC303'><span class="cm"> *        });</span></div><div class='line' id='LC304'><span class="cm"> *		}]);</span></div><div class='line' id='LC305'><span class="cm"> *</span></div><div class='line' id='LC306'><span class="cm"> *		// In our controller we get the ID from the URL using ngRoute and $routeParams</span></div><div class='line' id='LC307'><span class="cm"> *		// We pass in $routeParams and our Notes factory along with $scope</span></div><div class='line' id='LC308'><span class="cm"> *		app.controller(&#39;NotesCtrl&#39;, [&#39;$scope&#39;, &#39;$routeParams&#39;, &#39;Notes&#39;,</span></div><div class='line' id='LC309'><span class="cm">                                      function($scope, $routeParams, Notes) {</span></div><div class='line' id='LC310'><span class="cm"> *    // First get a note object from the factory</span></div><div class='line' id='LC311'><span class="cm"> *    var note = Notes.get({ id:$routeParams.id });</span></div><div class='line' id='LC312'><span class="cm"> *    $id = note.id;</span></div><div class='line' id='LC313'><span class="cm"> *</span></div><div class='line' id='LC314'><span class="cm"> *    // Now call update passing in the ID first then the object you are updating</span></div><div class='line' id='LC315'><span class="cm"> *    Notes.update({ id:$id }, note);</span></div><div class='line' id='LC316'><span class="cm"> *</span></div><div class='line' id='LC317'><span class="cm"> *    // This will PUT /notes/ID with the note object in the request payload</span></div><div class='line' id='LC318'><span class="cm"> *		}]);</span></div><div class='line' id='LC319'><span class="cm"> * ```</span></div><div class='line' id='LC320'><span class="cm"> */</span></div><div class='line' id='LC321'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngResource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span></div><div class='line' id='LC322'>&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$http&#39;</span><span class="p">,</span> <span class="s1">&#39;$q&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$http</span><span class="p">,</span> <span class="nx">$q</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">DEFAULT_ACTIONS</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;get&#39;</span><span class="o">:</span>    <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;GET&#39;</span><span class="p">},</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;save&#39;</span><span class="o">:</span>   <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;POST&#39;</span><span class="p">},</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;query&#39;</span><span class="o">:</span>  <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">isArray</span><span class="o">:</span><span class="kc">true</span><span class="p">},</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;remove&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;DELETE&#39;</span><span class="p">},</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span><span class="s1">&#39;DELETE&#39;</span><span class="p">}</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">noop</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">,</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">extend</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">,</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">,</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isFunction</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">;</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC338'><span class="cm">     * We need our custom method because encodeURIComponent is too aggressive and doesn&#39;t follow</span></div><div class='line' id='LC339'><span class="cm">     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path</span></div><div class='line' id='LC340'><span class="cm">     * segments:</span></div><div class='line' id='LC341'><span class="cm">     *    segment       = *pchar</span></div><div class='line' id='LC342'><span class="cm">     *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></div><div class='line' id='LC343'><span class="cm">     *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></div><div class='line' id='LC344'><span class="cm">     *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></div><div class='line' id='LC345'><span class="cm">     *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></div><div class='line' id='LC346'><span class="cm">     *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></div><div class='line' id='LC347'><span class="cm">     */</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%26/gi</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">).</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%3D/gi</span><span class="p">,</span> <span class="s1">&#39;=&#39;</span><span class="p">).</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%2B/gi</span><span class="p">,</span> <span class="s1">&#39;+&#39;</span><span class="p">);</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC357'><span class="cm">     * This method is intended for encoding *key* or *value* parts of query component. We need a</span></div><div class='line' id='LC358'><span class="cm">     * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn&#39;t</span></div><div class='line' id='LC359'><span class="cm">     * have to be encoded per http://tools.ietf.org/html/rfc3986:</span></div><div class='line' id='LC360'><span class="cm">     *    query       = *( pchar / &quot;/&quot; / &quot;?&quot; )</span></div><div class='line' id='LC361'><span class="cm">     *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></div><div class='line' id='LC362'><span class="cm">     *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></div><div class='line' id='LC363'><span class="cm">     *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></div><div class='line' id='LC364'><span class="cm">     *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></div><div class='line' id='LC365'><span class="cm">     *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></div><div class='line' id='LC366'><span class="cm">     */</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">pctEncodeSpaces</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%40/gi</span><span class="p">,</span> <span class="s1">&#39;@&#39;</span><span class="p">).</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%3A/gi</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">).</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%24/g</span><span class="p">,</span> <span class="s1">&#39;$&#39;</span><span class="p">).</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%2C/gi</span><span class="p">,</span> <span class="s1">&#39;,&#39;</span><span class="p">).</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="p">(</span><span class="nx">pctEncodeSpaces</span> <span class="o">?</span> <span class="s1">&#39;%20&#39;</span> <span class="o">:</span> <span class="s1">&#39;+&#39;</span><span class="p">));</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="nx">defaults</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Route</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setUrlParams</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">actionUrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">actionUrl</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">template</span><span class="p">,</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span><span class="p">,</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodedVal</span><span class="p">;</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">urlParams</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\W/</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">param</span><span class="p">){</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">param</span> <span class="o">===</span> <span class="s1">&#39;hasOwnProperty&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badname&#39;</span><span class="p">,</span> <span class="s2">&quot;hasOwnProperty is not a valid parameter name.&quot;</span><span class="p">);</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^\\d+$&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">param</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">param</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|[^\\\\]):&quot;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">url</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">urlParams</span><span class="p">[</span><span class="nx">param</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\:/g</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">);</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">urlParam</span><span class="p">){</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">urlParam</span><span class="p">)</span> <span class="o">?</span> <span class="nx">params</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">]</span> <span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">defaults</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">];</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodedVal</span> <span class="o">=</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">p1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">encodedVal</span> <span class="o">+</span> <span class="nx">p1</span><span class="p">;</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(\/?):&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">leadingSlashes</span><span class="p">,</span> <span class="nx">tail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tail</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">leadingSlashes</span> <span class="o">+</span> <span class="nx">tail</span><span class="p">;</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// strip trailing slashes and set the url</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/+$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;/&#39;</span><span class="p">;</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// then replace collapse `/.` if found in the last URL path segment before the query</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\.(?=\w+($|\?))/</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// replace escaped `/\.` with `/.`</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\\\./</span><span class="p">,</span> <span class="s1">&#39;/.&#39;</span><span class="p">);</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'><br/></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set params - delegate param encoding to $http</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="p">.</span><span class="nx">params</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">resourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">route</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC443'><br/></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actions</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">DEFAULT_ACTIONS</span><span class="p">,</span> <span class="nx">actions</span><span class="p">);</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">){</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ids</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actionParams</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">);</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">actionParams</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ids</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;@&#39;</span> <span class="o">?</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lookupDottedPath</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ids</span><span class="p">;</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">defaultResponseInterceptor</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">response</span><span class="p">.</span><span class="nx">resource</span><span class="p">;</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC460'><br/></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">value</span> <span class="o">||</span> <span class="p">{},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">actions</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasBody</span> <span class="o">=</span> <span class="sr">/^(POST|PUT|PATCH)$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">,</span> <span class="nx">a3</span><span class="p">,</span> <span class="nx">a4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* jshint -W086 */</span> <span class="cm">/* (purposefully fall through case statements) */</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">4</span><span class="o">:</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a4</span><span class="p">;</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//fallthrough</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">3</span><span class="o">:</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">2</span><span class="o">:</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a2</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//fallthrough</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badargs&#39;</span><span class="p">,</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected up to 4 arguments [params, data, success, error], got {0} arguments&quot;</span><span class="p">,</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* jshint +W086 */</span> <span class="cm">/* (purposefully fall through case statements) */</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isInstanceCall</span> <span class="o">=</span> <span class="k">this</span> <span class="k">instanceof</span> <span class="nx">Resource</span><span class="p">;</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">isInstanceCall</span> <span class="o">?</span> <span class="nx">data</span> <span class="o">:</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">httpConfig</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">responseInterceptor</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span> <span class="o">&amp;&amp;</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span><span class="p">.</span><span class="nx">response</span> <span class="o">||</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultResponseInterceptor</span><span class="p">;</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">responseErrorInterceptor</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span> <span class="o">&amp;&amp;</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span><span class="p">.</span><span class="nx">responseError</span> <span class="o">||</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC515'><br/></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;params&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;isArray&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;interceptor&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">httpConfig</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">copy</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC521'><br/></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">httpConfig</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">route</span><span class="p">.</span><span class="nx">setUrlParams</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">,</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">extend</span><span class="p">({},</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">action</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{}),</span> <span class="nx">params</span><span class="p">),</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">action</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC526'><br/></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">promise</span> <span class="o">=</span> <span class="nx">$http</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">response</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span><span class="p">;</span></div><div class='line' id='LC530'><br/></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Need to convert action.isArray to boolean in case it is undefined</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// jshint -W018</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">!==</span> <span class="p">(</span><span class="o">!!</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badcfg&#39;</span><span class="p">,</span> <span class="s1">&#39;Error in resource configuration. Expected &#39;</span> <span class="o">+</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;response to contain an {0} but got an {1}&#39;</span><span class="p">,</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="o">?</span><span class="s1">&#39;array&#39;</span><span class="o">:</span><span class="s1">&#39;object&#39;</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="o">?</span><span class="s1">&#39;array&#39;</span><span class="o">:</span><span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// jshint +W018</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forEach</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC550'><br/></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC552'><br/></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">response</span><span class="p">.</span><span class="nx">resource</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">response</span><span class="p">;</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">error</span><span class="o">||</span><span class="nx">noop</span><span class="p">)(</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC560'><br/></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$q</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">responseInterceptor</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">success</span><span class="o">||</span><span class="nx">noop</span><span class="p">)(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">response</span><span class="p">.</span><span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responseErrorInterceptor</span><span class="p">);</span></div><div class='line' id='LC571'><br/></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isInstanceCall</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we are creating instance / collection</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// - set the initial promise</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// - return the instance / collection</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// instance call</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'><br/></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="s1">&#39;$&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">params</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span> <span class="o">=</span> <span class="nx">success</span><span class="p">;</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">params</span><span class="p">;</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">||</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC595'><br/></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Resource</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">additionalParamDefaults</span><span class="p">){</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">additionalParamDefaults</span><span class="p">),</span> <span class="nx">actions</span><span class="p">);</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Resource</span><span class="p">;</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC602'><br/></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">resourceFactory</span><span class="p">;</span></div><div class='line' id='LC604'>&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'><br/></div><div class='line' id='LC607'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">window</span><span class="p">.</span><span class="nx">angular</span><span class="p">);</span></div></pre></div></td>
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
      <li>&copy; 2014 <span title="0.03988s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

