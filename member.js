function skillsMember(){
    return{
        restict: 'E',
        templateUrl: 'app/views/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl',
        bndToController: true,
        scope: {
            member: '='
        }
    };
}