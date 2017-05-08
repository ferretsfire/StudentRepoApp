System.register(["@angular/core", "@angular/router", "./enrollment-history.service"], function (exports_1, context_1) {
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
    var core_1, router_1, enrollment_history_service_1, EnrollmentHistoryComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (enrollment_history_service_1_1) {
                enrollment_history_service_1 = enrollment_history_service_1_1;
            }
        ],
        execute: function () {
            EnrollmentHistoryComponent = (function () {
                function EnrollmentHistoryComponent(enrollmentHistoryService, activatedRoute) {
                    this.enrollmentHistoryService = enrollmentHistoryService;
                    this.activatedRoute = activatedRoute;
                    this.enrollmentHistory = [];
                }
                EnrollmentHistoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.activatedRoute.params.subscribe(function (params) {
                        _this.getEnrollmentHistory(_this.studentId);
                    });
                };
                EnrollmentHistoryComponent.prototype.getEnrollmentHistory = function (studentId) {
                    var _this = this;
                    this.enrollmentHistoryService.get(studentId)
                        .subscribe(function (enrollmentHistory) {
                        _this.enrollmentHistory = enrollmentHistory;
                    });
                };
                return EnrollmentHistoryComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], EnrollmentHistoryComponent.prototype, "studentId", void 0);
            EnrollmentHistoryComponent = __decorate([
                core_1.Component({
                    selector: 'enrollment-history-list',
                    templateUrl: 'app/student-enrollment.component.html',
                    styleUrls: ['app/media-item-list.component.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css']
                }),
                __metadata("design:paramtypes", [enrollment_history_service_1.EnrollmentHistoryService,
                    router_1.ActivatedRoute])
            ], EnrollmentHistoryComponent);
            exports_1("EnrollmentHistoryComponent", EnrollmentHistoryComponent);
        }
    };
});
//# sourceMappingURL=student-enrollment.component.js.map