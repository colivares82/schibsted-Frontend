angular.module('schibsted.frontendTest')
.controller('SolutionCtrl',
['$state', '_',
function ($state, _) {
  var Solution = this;

  Solution.payload = {'MockData': [
    {'id':1,
     'title': 'Example Title 1',
     'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
     'active': true},
    {'id':2,
     'title': 'Example Title 2',
     'content': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
     'active': false},
    {'id':3,
     'title': 'Example Title 3',
     'content': 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
     'active': false},
    {'id':4,
     'title': 'Example Title 4',
     'content': 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ',
     'active': false},
    {'id':5,
     'title': 'Example Title 5',
     'content': 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
     'active': false},
    {'id':6,
     'title': 'Example Title 6',
     'content': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
     'active': false},
    {'id':7,
     'title': 'Example Title 7',
     'content': 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
     'active': false},
    {'id':8,
     'title': 'Example Title 8',
     'content': 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
     'active': false}
  ]};

  // Private Funtions

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

  Solution.CreateNewArticle = function (formScope) {
    let newArticle = {
     'id': Solution.payload.MockData.length + 1,
     'title': formScope.title,
     'content': formScope.content,
     'active': false
    };

    Solution.payload.MockData.push(newArticle);
    _.set(Solution, 'new', {});
    Solution.newArticle.$setPristine();
    Solution.newArticle.$setUntouched();
  };

}]);
