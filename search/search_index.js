var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"macos-cfg-docs","text":"<p>Notes related to macos-cfg.</p>"},{"location":"essential_tools.html","title":"Essential Tools","text":""},{"location":"essential_tools.html#oh-my-zsh","title":"oh my zsh","text":"<ul> <li>configuration:<ul> <li>to make git paste output into the cmd line add following to <code>.zshrc</code>:  <code>export GIT_PAGER=\"\"</code></li> <li>source superuser post</li> </ul> </li> <li>github oh my zsh</li> <li>github powerlevel10k theme</li> </ul>"},{"location":"essential_tools.html#micromamba","title":"micromamba","text":"<ul> <li>micromamba install docs</li> <li>add alias to <code>~/.zshrc</code> : <code>alias mm=\"micromamba\"</code></li> <li>add alias to <code>~/.zshrc</code> : <code>alias mma=\"micromamba activate\"</code></li> </ul>"},{"location":"essential_tools.html#rancher-desktop","title":"Rancher Desktop","text":"<ul> <li>https://rancherdesktop.io/</li> </ul>"},{"location":"macos_settings.html","title":"macOS Settings","text":""},{"location":"macos_settings.html#show-tabs-in-finder","title":"Show Tabs in Finder","text":"<ul> <li>Open <code>Finder</code></li> <li>In Menu Bar -&gt; <code>View</code> -&gt; <code>Show Tab Bar</code></li> </ul>"},{"location":"macos_settings.html#hide-tags-in-finder","title":"Hide Tags in Finder","text":"<ul> <li>Open <code>Finder</code></li> <li>In Menu Bar -&gt; <code>Finder</code> -&gt; <code>Settings</code> -&gt; <code>Sidebar</code></li> </ul>"},{"location":"macos_settings.html#add-trash-to-sidebar","title":"Add Trash to sidebar","text":"<ul> <li>Open <code>Trash</code> from dock</li> <li>Select <code>File</code> -&gt; <code>Add to sidebar</code></li> </ul>"},{"location":"macos_settings.html#determine-apps-syncing-to-icloud","title":"Determine Apps Syncing to iCloud","text":"<ul> <li>Open <code>System Settings</code></li> <li>GoTo <code>Apple ID</code> -&gt; <code>iCloud</code></li> </ul>"},{"location":"macos_settings.html#use-f1f2fx-by-default","title":"Use F1/F2/FX by default","text":"<ul> <li><code>Spotlight Search</code> -&gt; <code>Function Keys</code> -&gt; Toggle F1, F2 keys</li> </ul>"},{"location":"macos_settings.html#disable-language-toggling-on-fn-key","title":"Disable language toggling on fn key","text":"<pre><code>- `System Settings` -&gt; `Keyboard` -&gt; Set `Press Fn key to [..]` to `Do nothing`\n</code></pre>"},{"location":"macos_settings.html#fix-scrolling-direction-for-mouse-wheel","title":"Fix Scrolling Direction for Mouse Wheel","text":"<ul> <li>Connect mouse</li> <li><code>System Settings</code> -&gt; <code>Mouse</code> -&gt; Disable <code>Natural Scrolling</code></li> </ul>"},{"location":"macos_settings.html#hide-dock-instantly","title":"Hide Dock instantly","text":"<ul> <li>Run <code>defaults write com.apple.dock autohide-delay -float 0; defaults write com.apple.dock autohide-time-modifier -int 0;killall Dock</code></li> <li>Reset by running <code>defaults write com.apple.dock autohide-delay -float 0.5; defaults write com.apple.dock autohide-time-modifier -int 0.5 ;killall Dock</code></li> <li>Source: tweaking4all article</li> </ul>"},{"location":"macos_settings.html#disable-tooltips-in-finder","title":"Disable Tooltips in Finder","text":"<ul> <li>Run <code>defaults write -g NSInitialToolTipDelay -int 10000</code> in terminal</li> <li>Source: Macworld article</li> </ul>"},{"location":"macos_settings.html#external-keyboards","title":"External Keyboards","text":"<ul> <li>Need to switch keys for external keyboards</li> <li><code>System Settings</code> -&gt; <code>Keyboard</code> -&gt; <code>Keyboard Shortcuts</code> -&gt; <code>Modifier Keys</code></li> <li>Switch <code>Option</code> and <code>Command</code> Key</li> <li>Source: Ducky on Mac</li> </ul>"},{"location":"potentially_nice.html","title":"Potentially Nice","text":"<ul> <li>BetterSnap Tool</li> <li>HotCorners</li> </ul>"}]}