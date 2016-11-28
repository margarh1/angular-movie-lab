console.log('app.js is connected')

angular
  .module('movieApp', [])
  .controller('MovieController', MovieController);

  function MovieController() {
    var vm = this;

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
      }
    ];

    vm.newMovie = {};

    vm.addMovie = function() {
      console.log('add new movie called');
      vm.moviesToWatch.push(vm.newMovie);
      vm.newMovie = {};
    };

    vm.deleteMovie = function() {
      console.log('delete movie called');
      console.log(this)
    };
  };




