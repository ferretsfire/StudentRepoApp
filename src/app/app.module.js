System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./app.component", "./favorite.directive", "./category-list.pipe", "./media-item-form.component", "./providers", "./app.routing", "@ng-bootstrap/ng-bootstrap", "./student.service", "./student-list.component", "./student.component", "./student-enrollment.component", "./enrollment-history.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, app_component_1, favorite_directive_1, category_list_pipe_1, media_item_form_component_1, providers_1, app_routing_1, ng_bootstrap_1, student_service_1, student_list_component_1, student_component_1, student_enrollment_component_1, enrollment_history_service_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (favorite_directive_1_1) {
                favorite_directive_1 = favorite_directive_1_1;
            },
            function (category_list_pipe_1_1) {
                category_list_pipe_1 = category_list_pipe_1_1;
            },
            function (media_item_form_component_1_1) {
                media_item_form_component_1 = media_item_form_component_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (ng_bootstrap_1_1) {
                ng_bootstrap_1 = ng_bootstrap_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (student_list_component_1_1) {
                student_list_component_1 = student_list_component_1_1;
            },
            function (student_component_1_1) {
                student_component_1 = student_component_1_1;
            },
            function (student_enrollment_component_1_1) {
                student_enrollment_component_1 = student_enrollment_component_1_1;
            },
            function (enrollment_history_service_1_1) {
                enrollment_history_service_1 = enrollment_history_service_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.ReactiveFormsModule,
                        http_1.HttpModule,
                        app_routing_1.routing,
                        ng_bootstrap_1.NgbModule.forRoot()
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        favorite_directive_1.FavoriteDirective,
                        category_list_pipe_1.CategoryListPipe,
                        media_item_form_component_1.MediaItemFormComponent,
                        student_list_component_1.StudentListComponent,
                        student_component_1.StudentComponent,
                        student_enrollment_component_1.EnrollmentHistoryComponent
                    ],
                    providers: [
                        { provide: providers_1.lookupListToken, useValue: providers_1.lookupLists },
                        student_service_1.StudentListService,
                        enrollment_history_service_1.EnrollmentHistoryService
                    ],
                    bootstrap: [
                        app_component_1.AppComponent
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map