System.register(["@angular/core", "@angular/router", "./student.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, student_service_1, StudentListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }
        ],
        execute: function () {
            StudentListComponent = (function () {
                function StudentListComponent(
                    //private enrollmentHistoryService: EnrollmentHistoryService,
                    studentListService, activatedRoute) {
                    this.studentListService = studentListService;
                    this.activatedRoute = activatedRoute;
                    this.studentList = [];
                }
                StudentListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.activatedRoute.params.subscribe(function (params) {
                        _this.getStudentList();
                    });
                };
                StudentListComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                StudentListComponent.prototype.getStudentList = function () {
                    var _this = this;
                    this.studentListService.get()
                        .subscribe(function (response) {
                        _this.studentList = response;
                    });
                };
                return StudentListComponent;
            }());
            StudentListComponent = __decorate([
                core_1.Component({
                    selector: 'student-list',
                    templateUrl: 'app/student-list.component.html',
                    styleUrls: ['app/media-item-list.component.css']
                }),
                __metadata("design:paramtypes", [student_service_1.StudentListService,
                    router_1.ActivatedRoute])
            ], StudentListComponent);
            exports_1("StudentListComponent", StudentListComponent);
        }
    };
});
//# sourceMappingURL=student-list.component.js.map