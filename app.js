console.log('app.js is connected')

angular
  .module('movieApp', [])
  .controller('MovieController', MovieController);

  function MovieController() {
    var vm = this;
    vm.listLimit = 5;

    vm.moviesToWatch = [
      {
        name: 'Moana',
        releaseDate: 'November 23, 2016',
        minuteLength: '113'
      },
      {
        name: 'Rogue One',
        releaseDate: 'December 16, 2016',
        minuteLength: '133'
      },
      {
        name: 'Assassin\'s Creed',
        releaseDate: 'December 21, 2016',
        minuteLength: '140'
      },
      {
        name: 'Minions',
        releaseDate: 'July 10, 2015',
        minuteLength: '91'
      },
      {
        name: 'Big Hero 6',
        releaseDate: 'November 7, 2014',
        minuteLength: '108'
      },
      {
        name: 'Sing',
        releaseDate: 'December 21, 2016',
        minuteLength: '110'
      },
      {
        name: 'Guardians of the Galaxy 2',
        releaseDate: 'May 5, 2017',
        minuteLength: ''
      },
      {
        name: 'Deadpool',
        releaseDate: 'February 12, 2016',
        minuteLength: '108'
      }
    ];

    vm.newMovie = {};

    vm.addMovie = function() {
      vm.moviesToWatch.push(vm.newMovie);
      vm.newMovie = {};
    };

    vm.deleteMovie = function(movieName) {
      for (var idx = 0; idx < vm.moviesToWatch.length; idx++) {
        if (vm.moviesToWatch[idx].name === movieName) {
          console.log(vm.moviesToWatch[idx])
          vm.moviesToWatch.splice(idx, 1);
        }
      }
    };

    vm.showAll = function() {
      vm.listLimit = null;
    };

    console.log(vm)
  };




