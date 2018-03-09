# soundkit-mograph

A soundkit keyboard that fires sounds and motion graphics, using P5 and bodymovin.

## Usage

* Prepare your mp3 and drop them in the samples folder.
* Export your animations to json from After Effect with bodymovin in the anims folder.
* List each couple sound/anim with the right keyCode in the keyboard.json file.
* Enjoy, and be creative !

## Dependencies

* Bodymovin | Lottie | P5js | P5.sound
* You also need After Effect and a good audio editor software.
* To find the right keyCode, browse http://keycode.info/

## Add a couple Sound/Motion

Open the `keyboard.json`file, and add a line like this:
```
{"file": "your_audio.mp3", "pkey": the_keyCode_number_you_want_to_use, "anim": "path/to/anim_data_from_bodymovin.json"}

```
