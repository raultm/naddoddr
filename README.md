Naddoddr
========

The idea behind this project is a webapp where the users can track their travels and share them with their friends/families

Current Status
---------------
[Pre-alfa version](http://raultm.github.io/naddoddr/stage2/). 

Database schema definition
--------------------------
```
trips
name, geoposition (array?), startdate, resourceId

stages
order, name, geoposition, resourceId, tripId

resources
name, url

tags
name
```

Example
-------
CERECERA y KAYAKS
```
resource ("cerecera", "http://raulete.blogspot.com.es/2014/06/viajes-en-imagenes-cerecera-y-kayak.html")
trip ("Cerecera/Kayaks", "Valle del Jerte(40.2224710,-5.7519840)", 2014-06-21, #"cerecera")
stage (1, "cerecera", "Valle del Jerte(40.2224710,-5.7519840)", null, #"Cerecera/Kayaks")
stage (2, "kayaks", Embalse de Plasencia(40.0776830,-6.0136690)", null, #"Cerecera/Kayaks")
tag ("raul") ¿people table?
tag ("elvira")
tag ("duna")
tag ("mj")
tag ("pipe")
tag ("paola")
```


CRUCERO MEDITERRÁNEO
```
resource ("postcrucero2013", "http://raulete.blogspot.com.es/2013/04/viajes-en-imagenes-crucero-por-el.html")
trip("Crucero 2013", "Mediterranean Sea(34.5531280,18.0480110)", 2013-03-20, #"crucero")
stage(1, "Málaga", 36.7212610,-4.4212660, null, #(crucero))
stage(2, "Túnez", 33.8869170,9.5374990, null, #(crucero))
stage(3, "Malta", 35.9374960,14.3754160, null, #(crucero))
stage(4, "Messina", 38.1938140,15.5540150, null, #(crucero))
stage(5, "Olympia", 37.6446600,21.6254800, null, #(crucero))
stage(6, "Atenas", 37.9839170,23.7293600, null, #(crucero))
stage(7, "Madrid", 40.4167750,-3.7037900, null, #(crucero))
tag("raul")
tag("elvira")
tag("manoli")
```

¿Otros tags aparte de personas? (#tour2014, #aventuraeuropea) uhmm


[Search geopostion](http://es.mygeoposition.com/)


Echar un vistazo a [Odyssey de Vizzuality](https://github.com/raultm/odyssey.js)
