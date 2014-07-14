Naddoddr
========

The idea behind this project is a webapp where the users can track their travels and share them with their friends/families

Database schema definition
--------------------------
```
trips
name, geoposition (array?), startdate, resourceId

stages
name, geoposition, resourceId, tripId

resources
name, url

tags
name
```

Example
-------
```
resource ("cerecera", "http://raulete.blogspot.com.es/2014/06/viajes-en-imagenes-cerecera-y-kayak.html")
trip ("Cerecera/Kayaks", "Valle del Jerte(40.2224710,-5.7519840)", 2014-06-21, #"cerecera")
stage ("cerecera", "Valle del Jerte(40.2224710,-5.7519840)", null, #"Cerecera/Kayaks")
stage ("kayaks", Embalse de Plasencia(40.0776830,-6.0136690)", null, #"Cerecera/Kayaks")
tag ("raul") ¿people table?
tag ("elvira")
tag ("duna")
tag ("mj")
tag ("pipe")
tag ("paola")
```

¿Otros tags aparte de personas? (#tour2014, #aventuraeuropea) uhmm


[Search geopostion](http://es.mygeoposition.com/)


Echar un vistazo a [Odyssey de Vizzuality](https://github.com/raultm/odyssey.js)
