# Change Log:
## 0.0.13 - 11/8/18:
- Complete UI Overhaul(about 2/3 complete)
- Esc button now should reset menu
- "C" button triggers Cinematic mode
- "M" button ends Cinematic mode and resets camera
- Import Species button
- Touched up Challenge mode but still not complete UI wise

## 0.0.12 - 10/29/18:
Fixing up Challenge mode
Changed a bunch of inaccurate float numbers to `decimal` numbers
Moved a bunch of enumeratied values to config files

## 0.0.11 - 10/26/18:
Added double check to see if a child is too similar to its parents.

Made mutation rates dynamic to avoid plattueing of species


## 0.0.10 - 10/22/18
Added brainMakerConfig var to control interspecies breeding vs same species breeding

Added an experimental backPropigation reward/penalty system

Added a bare bones challenge mode(No stats' end screen).

Decreased lava damage slightly(to give bots a chance to learn from the BackPropigation).

## 0.0.9 - 10/17/18
Fixed vision bug introduced during GC mania
Added stats screen
COnverted nNetPanel back to lines, made alpha lower and easier to debug
Made time slow to a full stop(mainly for debug)
Added more debug for time ticks on NNets

## 0.0.8 - 10/13/18
Fixed level save bug with toggling with the Play button

## 0.0.7 - 10/12/18
Overhauled the GC again with better results
Fixed some debug UI
Added a FireBall entity and input neurons for that
Added eye vision caching to speed up processing

## 0.0.6 - 10/11/18
Garbage Collector overhaul attempt #1
Fixed save loading
Moved speed to bot biology

## 0.0.5 - 10/9/18
Fixed breeding bug
Added object pooling for performance
Added .25 sec spawn throddle for performance

## 0.0.4 - 10/4/18

Fixed shadows on tiles
Added LevelBuilderSelectedTileScreen
Began working on trigger system for more complex puzzles



## 0.0.3 - 10/3/18
Fix https://github.com/schematical/chaostrainer-public/issues/8
Flipped score on Bot Detail for realtime score and gave info when maxLife is increased or maxSpawnCount
Added in `yMultiplier` to GUI
Add in DisplaySettingsConfig screen to optimize performance graphically

## 0.0.2 - 10/2/18
Fixed: 
- https://github.com/schematical/chaostrainer-public/issues/6
- https://github.com/schematical/chaostrainer-public/issues/7
- 


De-inverted the camera(much better)
fixed the load, reload, close out of a training room open a new one bug.
Added a display settings config screen(Tile Shadows dont work yet, and the debugLines only print every 1/2 second so they are not real yet

## 0.0.1 - 10/2/18
Released Alpha


