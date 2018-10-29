When a setting is changed the "update" button needs to be pressed to save.

# Fitnessmanager settings
### Force New Fitness Sorting Block Each Generation (Toggle)

### Max Spawn Count Per Generation (Number)
Amount of bots spawned in each generation.

### Max Top Fittest Storage Count Per Generation (Number)

### Species Max Generations Since Improvement (Number)
If a species doesn't become better at solving the problem for the amount of generations entered here, the species will die.

### Species Max Turns to Optimize Before Subject To Extinction (Number)

### Min Species Count (Number)
Minimum number of species.

### Max Top Fittest Species Storage Count Per Generation (Number)

### Randomize Spawn Position (Toggle)
If enabled and there are more than 1 spawn positions in the level, the bots will randomly choose one of those spawn positions to spawn. 

### Spawn Speicies Weight By Score (Toggle)

### Median Score Round To (Number)

### Global Species Sort Mode (Value Selection)
Whether the bot selection process will look at the max of each species, the minimum, the median or the mean.
- Max
- Min
- Median
- Mean

### Initial Max Life Expectancy (Number)
How long a bot will live without bonus from the fitnessmanager.


# Brain maker settings

## Input / Output Neurons
### Input Basic Movement (Toggle)

### Basic Movement (Toggle)
Whether they can move and turn.

### I/O Basic Noise (Toggle)
Whether they can create noise and hear noise.

### Input Basic Vision (Toggle)
Whether they can see or not.

### Input Basic Self (Toggle)

## Advanced Options
### LSTM Logic Enabled (Toggle)

### Use Binary Neuron Output (Toggle)

### Use Binary Neuron (Toggle)

### Bot Tile Memory (Toggle)
If enabled the bots will save the tiles they've been one and can see if a tile has been visited.

### Back Propigation Rate (Number)

### Accellerate Mutation As Species Gets  (Number)

### InterSpecies Breed Chance (Number)
How likely a bot is to breed to a bot from another species.

## NEAT Options
### Start Neuron Dep Count (Number)

### Mutations Per Generation Input Field (Number)

### Max Genome Diff Before New Species (Number)
How different a bot can be from other bots from its species before it's considered its own species.

## Mutate Probabilities
These probabilities get added to get the total. The chance is then calculated by dividing the chance by that total.

### Adjust Neuron Dep Weight Chance (Number)
How high the chance is that the weight of a connection will be changed slightly.

### Add New Neuron Dep Chance (Number)
How high the chance is that a new connection can be added

### Set New Neuron Dep Weight Chance (Number)
How high the chance is that the weight of a connection will be set to a random value

### Add New Neuron Chance (Number)
How high the chance is that a new neuron can be added

### Adjust Bias Neuron Chance (Number)
How high the chance is that the bias will be changed

### Toggle Neuron Dep Enabled Chance (Number)
How high the chance is that a weight will be disabled or enabled (Depending on if it was enabled or not).

## Evolve Action Probability
These probabilities get added to get the total. The chance is then calculated by dividing the chance by that total.

### Breed Chance (Number)
How likely the bot is to breed.

### Mutate Chance (Number)
How likely the bot is to mutate.

# Display settings

### Show Score Events (Value selection)
Show the amount of score change when a bot's score changes. Depending on the selected value this number will always be shown, only when the bot is selected or never.
Possible values:
- None
- All
- Selected

### Show Debug Events (Value selection)
Show lines to show the bot's vision. Depending on the selected value these lines will always be shown, only when the bot is selected or never.
Possible values:
- None
- All
- Selected

### Entity Shadows (Toggle)
When enabled entities will show a darkened circle beneath them. Disabling may result in a performance boost.

### Tile Shadows (Toggle)
When enabled tiles will show a darkened area when specific tiles are above them (Eg. a wall above a floor will result in shadow on the floor). Disabling may result in a performance boost.


