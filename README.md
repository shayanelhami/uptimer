uptimer
=======

Web server (in node.js) to store Linux uptime remotely.

Allows your machine to store its uptime out of the box (i.e. remotely and safe).

A post request to /save will store everything in 'uptime' paramter in a text file. Later a get request to / will return the stored content.

Example
-------

This line can go to a cron job and run every minute:

```bash
curl -F "uptime=`uptime`" http://192.168.0.4:8085/save
```


Motivation
----------

I wanted to test life time of a battery with my Raspberry Pi. I needed uptime to be stored remotely so that I can monitor it. That was all really :)


