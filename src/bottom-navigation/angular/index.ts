import { Directive, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { BottomNavigation, TabContentItem, TabStrip, TabStripItem } from '@nativescript-community/ui-material-bottom-navigation';

@Directive({ selector: 'MDBottomNavigation' })
export class MaterialBottomNavigationDirective {}

@NgModule({
    declarations: [MaterialBottomNavigationDirective],
    exports: [MaterialBottomNavigationDirective]
})
export class NativeScriptMaterialBottomNavigationModule {}

registerElement('MDBottomNavigation', () => BottomNavigation);
registerElement('MDTabStrip', () => TabStrip);
registerElement('MDTabStripItem', () => TabStripItem);
registerElement('MDTabContentItem', () => TabContentItem);
