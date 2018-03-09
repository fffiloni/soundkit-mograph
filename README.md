# soundkit-mograph

A soundkit keyboard that fires sounds and motion graphics, using P5.sound and bodymovin.

## Usage

* Prepare your mp3 and drop them in the samples folder.
* Export your animations to json from After Effect with bodymovin in the anims folder.
* List each couple sound/anim with the right keyCode in the keyboard.json file.
* Enjoy, and be creative !

## Dependencies

* Bodymovin | Lottie | P5js | P5.sound
* You also need After Effect and a good audio editor software.
* To find the right keyCode, browse http://keycode.info/
* To learn how to export your motion graphics from AE: https://aescripts.com/bodymovin/
* To learn how to use lottie's props: https://github.com/airbnb/lottie-web

## Add a couple Sound/Motion
For the examples, i only put two couples, one for the 'A' and one for the 'Z'.
To fill the 24 remaining letters, open the `keyboard.json` file, and add a object like this:

```
{"file": "your_audio.mp3", "pkey": the_keyCode_number_you_want_to_use, "anim": "path/to/anim_data_from_bodymovin.json"}
```
Don't forget commas ... ;)
