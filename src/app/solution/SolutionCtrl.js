angular.module('schibsted.frontendTest')
.controller('SolutionCtrl',
['$state', '_',
function ($state, _) {
  var Solution = this;

  Solution.payload = {'MockData': [
    {'id':1,
     'title': 'Example Title 1',
     'content': 'Content 1 ....',
     'active': false},
    {'id':2,
     'title': 'Example Title 2',
     'content': 'Content 2 ....',
     'active': false},
    {'id':3,
     'title': 'Example Title 3',
     'content': 'Content 3 ....',
     'active': false},
    {'id':4,
     'title': 'Example Title 4',
     'content': 'Content 4 ....',
     'active': false},
    {'id':5,
     'title': 'Example Title 5',
     'content': 'Content 5 ....',
     'active': false},
    {'id':6,
     'title': 'Example Title 6',
     'content': 'Content 6 ....',
     'active': true},
    {'id':7,
     'title': 'Example Title 7',
     'content': 'Content 7 ....',
     'active': false},
    {'id':8,
     'title': 'Example Title 8',
     'content': 'Content 8 ....',
     'active': false}
  ]};


  function setPayloadDataToInactive () {
    _.forEach(Solution.payload.MockData, function(payloadSection) {
      payloadSection.active = false;
    });
  }


  function setPayloadDataToActive(sectionId) {
    let payloadSection = _.find(Solution.payload.MockData , {'id': sectionId});
    payloadSection.active = true;
  }

  function getPayloadData(sectionId) {
    return _.find(Solution.payload.MockData , {'id': sectionId});
  }

  Solution.setActiveSection =  function (sectionId) {
     if (!getPayloadData(sectionId).active) {
      setPayloadDataToInactive();
      setPayloadDataToActive(sectionId);
    }
  };

  Solution.isActiveSection =  function (sectionId) {
    return getPayloadData(sectionId).active;
  };


}]);
