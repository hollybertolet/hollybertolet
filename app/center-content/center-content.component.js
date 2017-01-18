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
var core_1 = require('@angular/core');
var CenterContentComponent = (function () {
    function CenterContentComponent() {
        this.name = "Holly Bertolet";
        this.subtext = "Some Really Neat Subtext about me";
    }
    CenterContentComponent.prototype.Constructor = function (router) { };
    CenterContentComponent.prototype.email = function () {
        window.location.href = "mailto:hbertolet@gmail.com";
    };
    CenterContentComponent = __decorate([
        core_1.Component({
            selector: 'center-content',
            templateUrl: 'app/center-content/center-content.component.html',
            styleUrls: ['app/center-content/center-content.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CenterContentComponent);
    return CenterContentComponent;
}());
exports.CenterContentComponent = CenterContentComponent;
//# sourceMappingURL=center-content.component.js.map