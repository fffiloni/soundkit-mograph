# soundkit-mograph

A soundkit keyboard that fires sounds and motion graphics, using P5.sound and bodymovin.

## First discover

* Download or clone the repo
* Open terminal and type `cd '/path/to/soundkit-mograph'`
* Start a simple server using python `python -m SimpleHTTPServer 5000`
* Browse `localhost:5000`, yes it's black and fullscreen, don't panic.
* Hit the A key or the Z key on your keyboard to see how it works.
* Bonus: hit the 'Enter' key to go fullscreen

## How to make your own keyboard

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

## How to add a couple Sound/Motion
For the examples, i only put two couples, one for the 'A' and one for the 'Z'.
To fill the 24 remaining letters, open the `keyboard.json` file, and add a object like this:

```
{"file": "your_audio.mp3", "pkey": the_keyCode_number_you_want_to_use, "anim": "path/to/anim_data_from_bodymovin.json"}
```
Don't forget commas ... ;)
