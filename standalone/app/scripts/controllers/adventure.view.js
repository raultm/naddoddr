'use strict';

/**
 * @ngdoc function
 * @name naddoddrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naddoddrApp
 */

angular.module('naddoddrApp')
    .controller('AdventureViewCtrl', ['$scope', '$routeParams', 'naddoddrProvider', function ($scope, $routeParams, naddoddrProvider) {
        angular.extend($scope, {
            defaults: {
                scrollWheelZoom: false
            },
        });
        console.log($routeParams);
        $scope.adventure = naddoddrProvider.Adventure.findById($routeParams.adventureId);

        
        O.Template({
      init: function() {
        var baseurl = this.baseurl = 'http://{s}.api.cartocdn.com/base-light/{z}/{x}/{y}.png';
        var map = this.map = L.map('map',{
          center: [0, 0],
          zoom: 4
        });

        this.map.scrollWheelZoom.disable();

        var basemap = this.basemap = L.tileLayer(baseurl, {
          attribution: 'data OSM - map CartoDB'
        }).addTo(map);

        var story = O.Story()

        this.story = story;
        this.miniprogressbar = O.MiniProgressBar();

        // trigger when  map_pos go out of the screen
        this.edge = O.Edge(
          O.Triggers.Scroll().less('map_pos').offset(0),
          O.Triggers.Scroll().greater('map_pos').offset(0)
        )
      },

      update: function(actions) {
        var self = this;

        this.story.clear();

        if (this.baseurl && (this.baseurl !== actions.global.baseurl)) {
          this.baseurl = actions.global.baseurl || 'http://0.api.cartocdn.com/base-light/{z}/{x}/{y}.png';

          this.basemap.setUrl(this.baseurl);
        }

        this._resetActions(actions);
      },

      _resetActions: function(actions) {
        // update footer title and author
        var title_ = actions.global.title === undefined ? '' : actions.global.title,
            author_ = actions.global.author === undefined ? 'Using' : 'By '+actions.global.author+' using';

        document.getElementById('title').innerHTML = title_;
        document.getElementById('author').innerHTML = author_;
        document.title = title_ + " | " + author_ +' Odyssey.js';

        var TRIGGER_LINE = this.map.getSize().y + 50;
        this.story.addEvent(
          this.edge,
          O.Parallel(
            O.Actions.CSS($('#map_container')).toggleClass('attachTop'),
            O.Actions.CSS($('#content')).toggleClass('attachMap'),
            O.Actions.Debug().log('attach')
          )
        )

        // create content
        var content = '';

        var slide_ = actions[0];
        $('#header').html(slide_.html());

        this.story
          .addState(
            O.Scroll().within($('#header')),
            slide_(this)
          );

        for(var i = 1; i < actions.length; ++i) {
          var slide = actions[i];
          content += "<div id='s_" + i +"'>" + slide.html() + "</div>";
        }

        $('#content').html(content);

        // first slide is the header, skip it
        for(var i = 1; i < actions.length; ++i) {
          var slide = actions[i];
          this.story.addState(
            O.Triggers.Scroll().within('s_' + i).offset(TRIGGER_LINE),
            O.Parallel(
              slide(this),
              this.miniprogressbar.percent(100*i/(actions.length - 1))
            )
          )
        }

        if(window.scrollY === 0) {
          this.story.go(0);
        }
      }
    });
    }]);
