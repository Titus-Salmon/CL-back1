//* The angular.module is a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism. Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module. (Passing one argument acts as a getter. Passing two (or more) arguments acts as a setter. An example of passing one argument: angular.module('barebonesAngularApp');  ----  this would act as a 'getter'. An example of passing two arguments:  angular.module('barebonesAngularApp', []);  ----  this acts as a 'setter'. (-ts))  *//

angular.module('barebonesAngularApp', []);