"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_static_1 = require("nativescript-angular/platform-static");
// "./app.module.ngfactory" is a dynamically generated module when compiled with AoT.
var app_module_ngfactory_1 = require("./app.module.ngfactory");
platform_static_1.platformNativeScript().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmFvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBHQUEwRztBQUMxRyx3RUFBNEU7QUFDNUUscUZBQXFGO0FBQ3JGLCtEQUE0RDtBQUM1RCxzQ0FBb0IsRUFBRSxDQUFDLHNCQUFzQixDQUFDLHlDQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1zdGF0aWNcIjtcbi8vIFwiLi9hcHAubW9kdWxlLm5nZmFjdG9yeVwiIGlzIGEgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG1vZHVsZSB3aGVuIGNvbXBpbGVkIHdpdGggQW9ULlxuaW1wb3J0IHsgQXBwTW9kdWxlTmdGYWN0b3J5IH0gZnJvbSBcIi4vYXBwLm1vZHVsZS5uZ2ZhY3RvcnlcIjtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0KCkuYm9vdHN0cmFwTW9kdWxlRmFjdG9yeShBcHBNb2R1bGVOZ0ZhY3RvcnkpO1xuIl19