# macOS Settings

### Show Tabs in Finder
- Open `Finder`
- In Menu Bar -> `View` -> `Show Tab Bar`

### Hide Tags in Finder
- Open `Finder`
- In Menu Bar -> `Finder` -> `Settings` -> `Sidebar`

### Add Trash to sidebar 
- Open `Trash` from dock
- Select `File` -> `Add to sidebar`

### Determine Apps Syncing to iCloud
- Open `System Settings`
- GoTo `Apple ID` -> `iCloud`

### Use F1/F2/FX by default
- `Spotlight Search` -> `Function Keys` -> Toggle F1, F2 keys

### Disable language toggling on fn key
	- `System Settings` -> `Keyboard` -> Set `Press Fn key to [..]` to `Do nothing`

### Fix Scrolling Direction for Mouse Wheel
- Connect mouse
- `System Settings` -> `Mouse` -> Disable `Natural Scrolling`

### Hide Dock instantly
- Run `defaults write com.apple.dock autohide-delay -float 0; defaults write com.apple.dock autohide-time-modifier -int 0;killall Dock`
- Reset by running `defaults write com.apple.dock autohide-delay -float 0.5; defaults write com.apple.dock autohide-time-modifier -int 0.5 ;killall Dock`
- Source: [tweaking4all article](https://www.tweaking4all.com/forum/macos-x-software/macos-instant-show-dock-when-dock-is-set-to-auto-hide/)

### Disable Tooltips in Finder
- Run `defaults write -g NSInitialToolTipDelay -int 10000` in terminal
- Source: [Macworld article](https://www.macworld.com/article/183408/termtooltips.html)

### External Keyboards
- Need to switch keys for external keyboards
- `System Settings` -> `Keyboard` -> `Keyboard Shortcuts` -> `Modifier Keys`
- Switch `Option` and `Command` Key
- Source: [Ducky on Mac](https://keebnews.com/does-ducky-work-with-mac/?utm_content=cmp-true)