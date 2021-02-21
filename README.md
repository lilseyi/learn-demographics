# learn-demographics

After cloning the repo
download:
dex_chalearn_iccv2015.caffemodel
gender.caffemodel
20180402-114759-vggface2.pt 
from https://data.vision.ee.ethz.ch/cvl/rrothe/imdb-wiki/
and put it in the repo folder

Also make sure you have docker installed in order to build the images and stuff
run terminal in the repo folder and run command 
$ docker build . -t ageandgenderapi
this should take a while and if you run into errors... i cant help you chief
I still don't understand docker, but if you get that to run all the way to step 9 run
$ docker run --rm -it  -p 80:80/tcp ageandgenderapi:latest
and then you can visit your localhost on your browser to see the app in action

